export interface Rental {
    id: number,
    title: string,
    description: string,
    city: string,
    country: string,
    price: number,
    isFavorite: boolean,
    rating: number,
    numberOfGuests: number,
    numberOfBedrooms: number,
    host: string,
    imageUrl: string
}