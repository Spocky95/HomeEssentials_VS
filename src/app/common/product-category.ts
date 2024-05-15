// W tej części kodu definiujemy klasę ProductCategory, która reprezentuje kategorię produktu.
// Klasa ProductCategory posiada dwa pola: id i categoryName.
// Właściwość id to unikalny identyfikator kategorii, który jest typu number.
// Właściwość categoryName to nazwa kategorii, która jest typu string.
// Klasa posiada konstruktor, który przyjmuje dwa argumenty: id i categoryName.
// Argumenty te są używane do inicjalizacji pól klasy za pomocą składni skróconego inicjalizowania pól w konstruktorze (public w konstruktorze).
export class ProductCategory {
  constructor(public id: number, public categoryName: string) {}
}
