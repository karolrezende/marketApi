interface iCleaning {
    id: number,
    name:string,
    price: number,
    weight: number,
    section: "cleaning"
}
interface iFood{
    id: number,
    name:string,
    price: number,
    weight: number,
    calories: number,
    section: "food"
}
export {iCleaning, iFood}