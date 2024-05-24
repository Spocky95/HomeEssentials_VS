// W tej części kodu definiujemy klasę Order, która reprezentuje zamówienie.
// Klasa Order posiada dwie właściwości: totalQuantity i totalPrice.
// Właściwość totalQuantity to całkowita ilość produktów w zamówieniu, domyślnie ustawiona na 0.
// Właściwość totalPrice to całkowita cena zamówienia, również domyślnie ustawiona na 0.
// Klasa nie posiada konstruktora, więc wszystkie właściwości są inicjalizowane domyślnymi wartościami.
export class Order {
    public totalQuantity: number = 0;
    public totalPrice: number = 0;
}
