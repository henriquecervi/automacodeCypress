class testeElementos {

    firstName = () => { return '[placeholder="First Name"]'}


    lastName = () => { return '[placeholder="Last Name"]'}

    adress = () => { return '.col-md-8 > .form-control' }

    email = () => { return '#eid > .form-control' }

    phone = () => { return 'input[type="tel"]' }

    radioMale = () => { return 'input[type="radio"]' }

    hobbies = () => { return '#checkbox2' }

    languages = () => { return '#msdd' }

    skills = () => { return '#Skills' }

    pais = () => { return '#countries' }

    country = () => { return '.select2-selection' }

    year = () => { return '#yearbox' }

    month = () => { return '[placeholder="Month"]' }

    date = () => { return '#daybox' }

    password = () => { return '#firstpassword' }

    confirmPassword = () => { return '#secondpassword' } 

    submitButton = () => { return '#submitbtn' }

}
export default testeElementos;