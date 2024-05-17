export default class User{
    constructor(
        public username:string,
        public role?:string,
        public password?:string,
        public id?:number
    ){}
}