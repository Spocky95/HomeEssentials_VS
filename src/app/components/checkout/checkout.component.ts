import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ChechoutFormService } from '../../services/chechout-form.service';
import { Country } from '../../common/country';
import { State } from '../../common/state';
import { CustomValidators } from '../../validators/validators';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{

  totalPrice: number = 0;
  totalQuantity: number = 0;


  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];



  checkoutFormGroup: FormGroup = new FormGroup({});
  
  countries: Country[] = [];
  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];

  constructor(private formBuilder: FormBuilder,
              private cartService: CartService,
              private checkoutFormService: ChechoutFormService
  ) { }
  
  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [Validators.required,
                                        Validators.minLength(2), 
                                        CustomValidators.notOnlyWhitespace]),
        lastName: new FormControl('', [Validators.required, 
                                       Validators.minLength(2), 
                                       CustomValidators.notOnlyWhitespace]),
        //TODO: check regex tutorial for email validation
        email: new FormControl('', [Validators.required, 
                                    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), 
                                    CustomValidators.notOnlyWhitespace])
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required,
                                     Validators.minLength(2), 
                                     CustomValidators.notOnlyWhitespace]),
        city: new FormControl('', [Validators.required,
                                   Validators.minLength(2), 
                                   CustomValidators.notOnlyWhitespace]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required,
                                      Validators.minLength(2), 
                                      CustomValidators.notOnlyWhitespace])
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: [''],
        creditCardType: ['']
      })
    });
    // populate credit card months
    const startMonth: number = new Date().getMonth() + 1;
    console.log("startMonth: " + startMonth);

    this.checkoutFormService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );

    this.checkoutFormService.getCreditCardYears().subscribe(
      data => {
        console.log("Retrieved credit card years: " + JSON.stringify(data));
        this.creditCardYears = data;
      }
    );

    this.checkoutFormService.getCountries().subscribe(
      data => {
        console.log("Retrieved countries: " + JSON.stringify(data));
        this.countries = data;
        // this.checkoutFormGroup.get('shippingAddress')?.get('country')?.setValue(data[0]);
      }
    );
    
  }

  get firstName() { return this.checkoutFormGroup.get('customer')!.get('firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer')!.get('lastName'); }
  get email() { return this.checkoutFormGroup.get('customer')!.get('email'); }
  
  get shippingAddressStreet() { return this.checkoutFormGroup.get('shippingAddress.street'); }
  get shippingAddressCity() { return this.checkoutFormGroup.get('shippingAddress.city'); }
  get shippingAddressState() { return this.checkoutFormGroup.get('shippingAddress.state'); }
  get shippingAddressCountry() { return this.checkoutFormGroup.get('shippingAddress.country'); }
  get shippingAddressZipCode() { return this.checkoutFormGroup.get('shippingAddress.zipCode'); }


  copyShippingAddressToBillingAddress(event: any) {
    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress']
        .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
      // bug fix for states
      this.billingAddressStates = this.shippingAddressStates;
    } else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
      this.billingAddressStates = [];
    }

  }

  onSubmit() {
    console.log('Handling the submit button');
    console.log(this.checkoutFormGroup.get('customer')!.value);
    console.log('Shipping Address: ' + this.checkoutFormGroup.get('shippingAddress')!.value);

    console.log("The shipping address country is " + this.checkoutFormGroup.get('shippingAddress')!.value.country.name);
    console.log("The shipping address state is " + this.checkoutFormGroup.get('shippingAddress')!.value.state.name);

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
    }
  }

  handleMonthsAndYears() {
    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear);

    let startMonth: number;
    if (currentYear === selectedYear) {
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }

    this.checkoutFormService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );
  }

  getStates(formGroupName: string) {

    const formGroup = this.checkoutFormGroup.get(formGroupName);
    const countryCode = formGroup?.value.country.code;
    const countryName = formGroup?.value.country.name;
    console.log(`${formGroupName} country code: ${countryCode}`);
    console.log(`${formGroupName} country name: ${countryName}`);

    this.checkoutFormService.getStates(countryCode).subscribe(
      data => {
        if (formGroupName === 'shippingAddress') {
          this.shippingAddressStates = data;
        } else {
          this.billingAddressStates = data;
        }
        // select first item by default
        formGroup?.get('state')?.setValue(data[0]);
      }
    );
  }
}
