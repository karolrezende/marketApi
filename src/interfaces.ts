interface iProduct {
    id: number,
    name:string,
    price: number,
    weight: number,
    section: 'cleaning' |'food'
    expirationDate: number,
}
interface iCleaning extends iProduct{
    //section: "cleaning"
}
interface iFood extends iProduct{
    calories: number
    //section: "food"
}
export {iProduct, iCleaning, iFood}