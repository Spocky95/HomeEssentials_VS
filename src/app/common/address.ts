// W tej części kodu definiujemy klasę Address, która reprezentuje adres w naszym systemie.
// Klasa Address ma konstruktor, który przyjmuje pięć argumentów: street, city, state, country i zipCode.
// Każdy z tych argumentów reprezentuje różne części adresu i wszystkie mają domyślne wartości puste.
// Właściwość street reprezentuje ulicę adresu.
// Właściwość city reprezentuje miasto adresu.
// Właściwość state reprezentuje stan/województwo adresu.
// Właściwość country reprezentuje kraj adresu.
// Właściwość zipCode reprezentuje kod pocztowy adresu.
// Wszystkie te właściwości są publiczne, co oznacza, że mogą być dostępne i modyfikowane z zewnątrz klasy.
// Domyślne wartości zapewniają, że nawet jeśli nie podamy wszystkich informacji o adresie podczas tworzenia obiektu Address,
// obiekt ten nadal będzie miał sensowną strukturę.
export class Address {
  constructor(
    public street: string = '',
    public city: string = '',
    public state: string = '',
    public country: string = '',
    public zipCode: string = ''
  ) {}
}
