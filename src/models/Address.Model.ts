class Address {
    id: number
    address: string
    state: string
    city: string
    municipality: string
    postalCode: string
    isBilling: boolean

    constructor(id: number, address: string, state: string, city: string, munipality: string, postalCode: string, isBilling: boolean) {
        this.id = id
        this.address = address
        this.state = state
        this.city = city
        this.municipality = munipality
        this.postalCode = postalCode
        this.isBilling = isBilling
    }
}

export default Address