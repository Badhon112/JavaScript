//Get and Set Method
// let currdate=new Date()
// console.log(new Date().toLocaleTimeString());

// Date and Time

// Dates Method
// const currdate = new Date()

// //Get indivisual Date 
// console.log(currdate.toLocaleDateString());
// console.log(currdate.getFullYear());
// console.log(currdate.getMonth());
// console.log(currdate.getDate());
// console.log(currdate.getDay());
//Time Methods
// const currdate=new Date();
// console.log(currdate.getTime());
// const houre=currdate.getHours();
// if(houre>12){
//     console.log(houre-12+" PM");
// }
// else{
//     console.log(houre);
// }
// change time

(function () {
    setInterval(() => {
        let date = new Date();
        if(date>12){
            console.log(date.toLocaleTimeString());
        }
    }, 1000)
})();