const form = document.querySelector(".login-form")

form.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault()
    if(event.currentTarget.email.value === '' || event.currentTarget.password.value === ''){
        alert('All form fields must be filled in')
        return 
    }

    const formElements = event.currentTarget.elements
    const credentials = {
        password: formElements.password.value.trim(),
        email: formElements.email.value.trim()
    }
    event.target.reset();
    console.log(credentials);
}

