document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form-container")
    const clearButton = document.getElementById("clear-btn");

    const name = document.getElementById("name")
    const firstSurname = document.getElementById("first-surname")
    const secondSurname = document.getElementById("second-surname")
    const birthDate = document.getElementById("birth-date")
    const id = document.getElementById("id")


/**
 * Cuando se produce el evento submit al pulsar el boton de guardar 
 * se realizan las acciones de comprobacion 
 */
    form.addEventListener("submit", handleFormSubmit)
    function handleFormSubmit(e){
        e.preventDefault()
        const inputName = name.value
        const inputFirstSurname = firstSurname.value
        const inputSecondSurname = secondSurname.value;
        const inputBirthDate = birthDate.value
        const inputID = id.value

        const inputData = {
            "name": inputName,
            "surname1": inputFirstSurname,
            "surname2": inputSecondSurname,
            "birthDate": inputBirthDate,
            "id": inputID
        }

        const validatedFields = validateFormFields(inputData);
       
        if(validatedFields.isValid){
            const persona=inputData
            console.log(persona)
        }else{
            alert(validatedFields.errors.join("\n"))
        }
    }

   
    function checkName(name){
        return name.length < 3 || name.length > 30;
    }

    function checkSurname(surname){
        return surname.length <2 || surname.length>30
    }

    function checkID(id){
        var isValid=false

        if(id.length !=9){
            isValid=false
        }

        const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        const number = id.slice(0,8)
        const idLetter = id.charAt(8) 

        const reminder = number % 23

        const correctLetter= letters.charAt(reminder)

        if(idLetter==correctLetter){
            isValid=true
        }else{
            isValid=false
        }

        return isValid
    
    }

    function validateFormFields(formData) {
        const errors = [];

        if (checkName(formData.name)) {
            errors.push("El nombre debe tener entre 3 y 30 caracteres");
        }

        if(checkSurname(formData.surname1)){
            errors.push("El primer apellido debe tener entre 2 y 30 caracteres");
        }

        if(checkName(formData.surname2)){
            errors.push("El segundo apellido debe tener entre 2 y 30 caracteres");
        }

        if(!checkID(formData.id)){
            errors.push("DNI no valido")
        }

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

    function clearForm(){
        form.reset()
    }

    /**
     * Cuando se pulsa el boton de limpiar se borran los datos del campo
     */
    clearButton.addEventListener("click", clearForm);

})
