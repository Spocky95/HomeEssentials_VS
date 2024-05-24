// W tym fragmencie kodu mamy klasę CustomValidators, która zawiera statyczną metodę notOnlyWhitespace().
// Metoda ta jest walidatorem niestandardowym, który sprawdza, czy kontrolka formularza zawiera tylko białe znaki.

// Metoda notOnlyWhitespace() przyjmuje kontrolkę formularza jako argument i zwraca obiekt błędów walidacji.

// Wewnątrz metody sprawdzamy, czy wartość kontrolki nie jest pusta i czy po usunięciu białych znaków długość wartości wynosi 0.
// Jeśli tak, zwracamy obiekt błędu z właściwością notOnlyWhitespace ustawioną na true.
// Jeśli nie, zwracamy pusty obiekt, co oznacza, że kontrolka jest ważna.
import { FormControl, ValidationErrors } from '@angular/forms';

// custom validator class nazwa Vaildators jest zajeta przez angulara dlatego zostala zmieniona na CustomValidators
export class CustomValidators {
  static notOnlyWhitespace(control: FormControl): ValidationErrors {
    // check if string only contains whitespace
    if (control.value != null && control.value.trim().length === 0) {
      // invalid, return error object
      return { notOnlyWhitespace: true };
    } else {
      // valid, return empty object
      return {};
    }
  }
}
