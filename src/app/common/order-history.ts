// W tej części kodu definiujemy klasę OrderHistory, która reprezentuje historię zamówień.
// Klasa OrderHistory posiada pięć właściwości: id, orderTrackingNumber, totalPrice, totalQuantity i dateCreated.
// Właściwość id to unikalny identyfikator zamówienia, który jest typu string.
// Właściwość orderTrackingNumber to numer śledzenia zamówienia, który jest również typu string.
// Właściwość totalPrice to całkowita cena zamówienia, która jest typu number.
// Właściwość totalQuantity to całkowita ilość produktów w zamówieniu, która jest typu number.
// Właściwość dateCreated to data utworzenia zamówienia, która jest typu Date.
// Wszystkie te właściwości są inicjalizowane w konstruktorze klasy.
export class OrderHistory {
  constructor(
    public id: string,
    public orderTrackingNumber: string,
    public totalPrice: number,
    public totalQuantity: number,
    public dateCreated: Date
  ) {}
}
