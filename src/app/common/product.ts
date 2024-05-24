// W tej części kodu definiujemy klasę Product, która reprezentuje produkt.
// Klasa Product posiada dziesięć właściwości: id, sku, name, description, unitPrice, imageUrl, active, unitsInStock, dateCreated, dateUpdated.
// Właściwość id to unikalny identyfikator produktu, który jest typu number.
// Właściwość sku to unikalny kod produktu, który jest typu string.
// Właściwość name to nazwa produktu, która jest typu string.
// Właściwość description to opis produktu, który jest typu string.
// Właściwość unitPrice to cena jednostkowa produktu, która jest typu number.
// Właściwość imageUrl to URL obrazu produktu, który jest typu string.
// Właściwość active to flaga wskazująca, czy produkt jest aktywny, która jest typu boolean.
// Właściwość unitsInStock to liczba jednostek produktu dostępnych na stanie, która jest typu number.
// Właściwość dateCreated to data utworzenia produktu, która jest typu Date.
// Właściwość dateUpdated to data ostatniej aktualizacji produktu, która jest typu Date.
// Wszystkie te właściwości są inicjalizowane w konstruktorze klasy.
export class Product {
  constructor(
    public id: number,
    public sku: string,
    public name: string,
    public description: string,
    public unitPrice: number,
    public imageUrl: string,
    public active: boolean,
    public unitsInStock: number,
    public dateCreated: Date,
    public dateUpdated: Date
  ) {}
}
