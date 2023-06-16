const form = document.querySelector('form');


form.addEventListener ('click',

    function (event){
        event.preventDefault();
        console.log('form sottomesso')
    }

)

const emailList = [
    
    'pippo@gmail.com', 
    'pluto@gmail.com', 
    'paperino@gmail.com', 
    'minni@gmail.com', 
    'topolino@gmail.com', 
    'tony@gmail.com', 
    'bruce@gmail.com', 
]


const myEmail = document.getElementById('my-email').value;

console.log(myEmail)



if (myEmail === emailList){

    const text = document.createElement('p')
    text.innerHTML = ('email cooretta')
    text.append (['my-password'])
}
else {
    console.log('NO submit')
}






