let username;
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("mytext").value;
    // document.getElementById("mylabel").innerHTML(`<h1> My name is  ${username} </h1>`)
    document.getElementById("mylabel").innerHTML=`<h1> My Name is ${username} </h1>`
}
