interface iCleaning {
    name:string,
    price: number,
    weight: number,
    section: 'cleaning'
}
interface iFood{
    name:string,
    price: number,
    weight: number,
    calories: number,
    section: 'food'
}
export {iCleaning, iFood}