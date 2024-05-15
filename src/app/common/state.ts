// W tej części kodu definiujemy klasę State, która reprezentuje stan/województwo.
// Klasa State posiada dwie właściwości: id i name.
// Właściwość id to unikalny identyfikator stanu, który jest typu number i domyślnie ustawiony na 0.
// Właściwość name to nazwa stanu, która jest typu string i domyślnie ustawiona na pusty string.
// Klasa posiada konstruktor bezparametrowy, który nie wykonuje żadnych operacji.
export class State {
    public id: number = 0;
    public name: string = '';

  constructor() {}
}
