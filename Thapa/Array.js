// Traversal of an Array📌
// Array And Loop
// var friends=["Badhon","Biswas","Rohim","Karim"];
//For In Loop show index number
// for(let friend in friends){
//     console.log(friend);
// }

// For of Loop show data in the Array

// for(let friend of friends){
//     console.log(friend);
// }

//For Each 
// friends.forEach((element,index,Array)=>{
//     console.log("Element is "+element+" Index in: " + index+"Array is: "+Array);
// })

// 2️⃣ Searching and Filter in An Array✔🐱‍🚀📌

//Array.prototype.indexof()

// var friends=["Badhon","Biswas","Rohim","Karim"];
// console.log(friends.indexOf("Biswas",2));

//Array.prototype.includes()
//Determines the Array contains a value
// console.log(friends.includes("Badhon"));

//Array.prototype.find()
// const prices = [200, 100, 300, 400, 500, 600];
// const element=prices.find((current)=>{
//     return current>200;
// })
// console.log(element);

// console.log(prices.find((element) => element > 400));


// Array.prototype.filter()✅✅✅

// Return a new array containing all element  of the calling
//array for which the provider filtering functino return true
// const prices = [200, 100, 300, 400, 500, 600];
// const filterarray=prices.filter((element)=>{
//     return element>300;
// })
// console.log(filterarray);


// 3️⃣ sort and Compair an array

//Array.sort();

// 4️⃣ Crud Application

//Array push methood

var Name = ["Badhon", "Biswas", "Rohim", "Karim"];
// const length=friends.push("None")
// console.log(friends);
// console.log(length);

//Unshift

// friends.unshift("None")
// console.log(friends);

//Splice method

// const newName=Name.slice(Name.length,0,"None")
// console.log(newName);
// console.log(Name);

// const indexofname=Name.indexOf("Badhon");
// if(indexofname!==-1){
//     const newName=Name.splice(indexofname,1,"badhon") 
// }else{
//     console.log("No data found");
// }

// console.log(Name);

//Map & Reduce

let array = [2, 4, 6, 8, 9];
const newValue = array.map((element) => element * 2).filter((element) => element > 10).reduce((acu, eur) => acu += eur)
console.log(newValue);