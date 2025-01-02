let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById('slidervalue');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('number');
let symbol = document.getElementById('symbol');
let genbtn = document.getElementById('genbtn');
let passbox = document.getElementById('passbox');
let copyicon =document.getElementById('copyicon');

//showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;  

} );

genbtn.addEventListener('click',()=>{
    passbox.value =  generatePassword();
})
let lowerchars = "abcdefghijklmnoprstuvwxyz";
let upperchars = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let symbols = "!@#$%^&*_+~|?<>?=.,/";


//function to generate pass
 function generatePassword(){
    let genpassword= "";
    let allchars = "";
    allchars += lowercase.checked ? lowerchars:"";
    allchars += uppercase.checked ? upperchars:"";
    allchars += numbers.checked ? number :"";
    allchars += symbol.checked ? symbols:"";
    if(allchars =="" || allchars.length == 0){
        return genpassword;
    }
 
    let i=1;
    while(i<=inputslider.value){
    genpassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
              i++;      
     }
          return genpassword;
 } 


 copyicon.addEventListener('click',()=>{
    if(passbox.value !="" || passbox.value.length >= 1){
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText = "check";
    copyicon.title = "password copied";

    setTimeout(()=>{
      copyicon.innerHTML="content_copy";
               copyicon.title = "";
    },3000);
}
 });