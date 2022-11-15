export interface Product {
    productId: string;
    categoryId: string;
    name: string;
    price: number;
    totallWeight: number;
    image: string;
    description: string;
    ingredients: string;
    isVegan: boolean;
    isVegitarian: boolean;
    isHouseSpeciality: boolean;
    isPublished: boolean;
    savedCount: number;
    creationDate: string;
}
