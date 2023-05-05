type Email0 = string[]

declare namespace Person0 {
    export interface Default{
        name:string
        age:number
    }
    export interface WithContacts extends Default {
        contacts: Email[]
    }
}