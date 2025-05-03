
// interface User{
//     name: string,
//     role: "admin" | "user"
// }

// function isAdmin(obj: User){

//     return console.log(obj.name, obj.role);   

// }

// isAdmin({name: "Farasat", role: "admin"})


// function sum(...args: number[]){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7,8,9)




// * QUESTION # 1

// interface Product {
//     id: number
//     name: string
//     price: number
// }

// function calculateTheTotal(obj: Product[]) {

//     let total = 0

//     for (let product of obj) {
//         total += product.price
//     }

//     console.log(total);

//     return total
// }

// const arrayOfProducts:Product[] = [

//     {id: 1, name: "Kabab", price: 1600},

//     {id: 2, name: "Tikka", price: 2200},

//     {id: 3, name: "Burger", price: 1400}

// ]


// calculateTheTotal(arrayOfProducts)

// * QUESTION # 2

// interface UserProfile{
//     name: string
//     readonly email: string
//     age?: number
// }

// function showDetails(details:UserProfile):void{
//     console.log("Hello Mr.", details.name);
// }

// showDetails({name: "farasat", email: "farasatkhan687@gmail.com"})


// * QUESTION # 3

// type Status = "success" | "Error" | "Loading"

// function checkStatus(status: Status) {

//     switch (status) {

//         case "success":
//             console.log("Request completed successfully!");
//         break;

//         case "Error":
//             console.log("Something went wrong. Please try again");
//         break;

//         case "Loading":
//             console.log("Loading... please wait.");
//         break;

//         default:
//             break;
//     }

// }

// checkStatus("Error")


// * QUESTION # 4

// type arr = number | string;

// function checking (val:arr){

//     if(typeof val === 'number'){
//         let square = val*val
//         console.log(square);
//     }else{
//         let upperCase = val.toUpperCase()
//         console.log(upperCase);
//     }
// }
// checking("farasat")


// * QUESTION # 5


// interface Blog{
//     title:string
//     content: string
//     tags: string[]
// }

// function getBlogs(blogs:Blog){

//     if (blogs.tags.includes("og")) {

//         console.log("This is the OG Blog.");

//     }else{

//         console.log("This is not the OG blog.");

//     }

// }

// getBlogs({title: "Stay Healthy", content: "Blah Blah Blah Blah Blah Blah", tags: ["body", "fitness", "health"]})



// * QUESTION # 6

// type input = string | number

// function wrapInArray(convert:input){

//     let toArray: input[] = []

//     toArray.push(convert)

//     console.log(toArray);


// }

// wrapInArray("Hello I'm farasat")
// wrapInArray(256)



// * QUESTION # 7

// enum Roles {
//     Admin,
//     Seller,
//     Customer
// }

// function checkAccessiility(roles: Roles) {

//     switch (roles) {

//         case Roles.Admin:
//             console.log("He has full access..!");
//             break;

//         case Roles.Customer:
//             console.log("He can manage customer...!");
//             break;


//         case Roles.Seller:
//             console.log("No access..!");
//             break;

//         default:
//             break;
//     }


// }

// checkAccessiility(Roles.Seller)



// * QUESTION # 8

// type direction = 'left' | 'right' | 'up' | 'down'

// function showDirection(dir:direction):void{
//     console.log("Moving towards", dir);
// }

// showDirection("left")


// * QUESTION # 9

// type User = {
//     name: string
// }

// type Admin = {
//     name: string
//     isAdmin: Boolean
// }

// function CheckingRole(person: User | Admin):void{
    
//     if("isAdmin" in person){
//         console.log(person.name, "is Admin.");
//     }else{
//         console.log(person.name, "is User.");
//     }
    
// }

// CheckingRole({name: "Farasat"})


// * QUESTION # 10


type tuples = string[] | number[]

function convertTupleToString(tup:tuples):void{

    let converted:string = tup.join()

    console.log(converted);    

}

convertTupleToString([10, 22, 56])