import { FormControl, ValidationErrors } from "@angular/forms";


// custom validator class nazwa Vaildators jest zajeta przez angulara dlatego zostala zmieniona na CustomValidators
export class CustomValidators {

    static notOnlyWhitespace(control: FormControl): ValidationErrors {
        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {
            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        } else {
            // valid, return empty object
            return {};
        }
    }
}

