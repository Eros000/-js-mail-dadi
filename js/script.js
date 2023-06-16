const emailList = [
    
    'pippo@gmail.com', 
    'pluto@gmail.com', 
    'paperino@gmail.com', 
    'minni@gmail.com', 
    'topolino@gmail.com', 
    'tony@gmail.com', 
    'bruce@gmail.com', 
]

const form = document.getElementById('my-form');


form.addEventListener ('submit',

    function (event){
        event.preventDefault();
        
        const myEmail = document.getElementById('my-email').value;

        console.log('myEmail', myEmail, typeof myEmail);

        let access = false;

        for (let i = 0; i < emailList.length; i++) {
            console.log(i, emailList)

            if (myEmail === emailList[i]) {
                access = true
            }
        }

        const messageh2 = document.getElementById('message');

        if (access){
            messageh2.innerHTML = 'Accesso consentito!'
        }
        else {
            messageh2.innerHTML = 'Accesso negato!'
        }

    }


)























