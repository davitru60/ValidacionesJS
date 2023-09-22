document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const form = document.getElementById("form-container")

    form.addEventListener("submit", handleFormSubmit)

    function handleFormSubmit(e){
        e.preventDefault();
        const inputEmail = email.value
        const inputPasswd = password.value
        const validatedCredentials = validateFormFields(inputEmail, inputPasswd)
        

        if (validatedCredentials.isValid) {
            formRedirection()
        } else {
            alert(validatedCredentials.errors.join("\n"))
        }
    }
       

    function emailFormat(email) {
        var isValid=true

        // Comprobar que el email contenga al menos un "@".
        if (email.indexOf('@') === -1) {
            isValid=false;
        }
    
        // Comprobar que "@" no esté en el primer carácter ni en los últimos tres caracteres.
        if (email.indexOf('@') === 0 || email.indexOf('@') >= email.length - 3) {
            isValid=false;
        }

        console.log(email)
    
        return isValid;
    }

    function isEmptyEmail(email){
        return email.length==0
    }

    function checkUser(email,passwd){
        var correctEmail="dtc138@gmail.com"
        var correctPasswd="admin123"
        var isValid=false

        if(email==correctEmail && passwd==correctPasswd){
            isValid=true
        }else{
            isValid=false
        }

        return isValid
    }

    function isEmptyPasswd(passwd){
        return passwd.length==0
    }

    function passwdChar(passwd){
        return passwd.length<8
    }


    function validateFormFields(email, passwd) {
        const errors = []
        
        if (isEmptyEmail(email)) {
            errors.push("Email vacío")
        }

        if (isEmptyPasswd(passwd)) {
            errors.push("Contraseña vacía")
        }

        if (passwdChar(passwd)) {
            errors.push("La contraseña debe tener al menos ocho caracteres")
        }

        if(!emailFormat(email)){
            errors.push("El formato del correo electrónico es incorrecto")
        }

        if(!checkUser(email,passwd)){
            errors.push("Usuario incorrecto")
        }

        console.log(errors)

        return errorCollector(errors)
        
    }

    function errorCollector(errors){
        var errorObject={isValid:false,errors:[]}

        if(errors.length==0){
            errorObject={isValid:true, errors:[]}
        }else{
            errorObject={isValid: false, errors: errors};
        }

        return errorObject
    }


    function formRedirection() {
        window.location.href = "formulario2.html"
    }
})
