console.log("TASK 1\n");

class log{
    constructor() {
        this.date= new Date();
        // this.level= level;
    }
    getDate(){
        return this.date.getDate();
    }
    getMonth(){
        return this.date.getMonth();
    }
    getYear(){
        return this.date.getFullYear();
    }
    #info(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] INFO : This is an information about something.`)
    }
    #error(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] ERROR : We can't divide any numbers by zero.`)
    }
    #notice(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] NOTICE : Someone loves your status.`)
    }
    #warning(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] WARNING : Insufficient funds.`)
    }
    #debug(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] DEBUG : This is debug message.`)
    }
    #alert(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] ALERT : Achtung! Achtung!`)
    }
    #critical(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] CRITICAL : Medic!! We've got critical damages.`)
    }
    #emergency(){
       return console.log(`[${this.getYear()}-${this.getMonth()}-${this.getDate()}] EMERGENCY : System hung. Contact system administrator immediately!`)
    }
    securityLvl(){
        this.#info();
        this.#error();
        this.#notice();
        this.#warning();
        this.#debug();
        this.#alert();
        this.#critical();
        this.#emergency();

    }

}
const dataLog=new log()
dataLog.securityLvl()
console.log("\nTASK 2");
class Chiper{
    constructor() {
        this.CryptoJS=require('crypto-js')
    }
    encrypt(text, password){
        const encrypted= this.CryptoJS.AES.encrypt(text,password)
        console.log("Anyone cant read this messages without password")
        return encrypted.toString();
    }
    decrypt(text, password){
        const decrypted=this.CryptoJS.AES.decrypt(text, password);
        return decrypted.toString(this.CryptoJS.enc.Utf8);
    }
}

const chiper= new Chiper();
const messages=chiper.encrypt("Hallo","password");
console.log(`encrypted : ${messages}`);
const decrypt=chiper.decrypt(messages,"password");
console.log(`decrypted : ${decrypt}`);

console.log("\nTASK 3");

class Cart{
    constructor() {
        this.item=[];
        this.discount=0;
    }
    addItem({id,price, quantity}){
        if(quantity==undefined){
            this.item.push({id,price, quantity:1});
        }else{
            this.item.push({id,price, quantity});
        }
        return this;
    }
    removeItem({id}){
        for(let i=0; i<this.item.length;i++){
            if(this.item[i]['id']==id){
                this.item.splice(i,1);
            }
        }
        return this;
    }
    addDiscount(discount){
        this.discount=parseInt(discount);
        return this;
    }
    totalItem(){
        let totalItem=0;
        for(let i=0; i<this.item.length;i++){
            totalItem+=1;
        }
        return console.log(`Total item : ${totalItem}`);
    }
    totalQuantity(){
        let quantity=0;
        for(let i=0; i<this.item.length;i++){
            quantity+=this.item[i]['quantity'];
        }
        return console.log(`Quantity : ${quantity}`);
    }
    totalPrice(){
        let price=0;
        for(let i=0; i<this.item.length;i++){
            price+=this.item[i]['price']*this.item[i]['quantity'];
        }
        this.discount==0?price=price:price-=(price*this.discount/100);
        return console.log(`Price : ${price}`);
    }
    showAll(){
        return console.log(this.item)
    }
}
const cart= new Cart();
console.log(cart.addItem({id:1, price:20000, quantity:3})
.addItem({id:2, price:1000, quantity:5})
.addItem({id:4, price:1000, quantity:5})
.removeItem({id:1})
.addDiscount("40%")
)
cart.totalItem();
cart.totalQuantity();
cart.totalPrice();
cart.showAll();



