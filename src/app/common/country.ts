// W tej części kodu definiujemy klasę Country, która reprezentuje kraj.
// Klasa Country posiada trzy właściwości: id, code i name.
// Właściwość id jest numerem identyfikacyjnym kraju, domyślnie ustawionym na 0.
// Właściwość code to kod kraju, domyślnie ustawiony na pusty string.
// Właściwość name to nazwa kraju, również domyślnie ustawiona na pusty string.
// Klasa posiada konstruktor bezparametrowy, który nie wykonuje żadnych operacji.
export class Country {
    public id: number = 0;
    public code: string = '';
    public name: string = '';

  constructor() {}
}
