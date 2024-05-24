// W tej części kodu definiujemy klasę Customer, która reprezentuje klienta.
// Klasa Customer posiada trzy właściwości: firstName, lastName i email.
// Właściwość firstName to imię klienta, domyślnie ustawione na pusty string.
// Właściwość lastName to nazwisko klienta, również domyślnie ustawione na pusty string.
// Właściwość email to adres email klienta, domyślnie ustawiony na pusty string.
// Klasa nie posiada konstruktora, więc wszystkie właściwości są inicjalizowane domyślnymi wartościami.
export class Customer {
    public firstName: string = '';
    public lastName: string = '';
    public email: string = '';
}
