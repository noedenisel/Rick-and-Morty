const regexUserName = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[0-9]).{6,10}$/;

export const validation= (inputs) => {
    const errors = {}

    if (!inputs.username)  errors.username="No puede estar vacio"
        else if (!regexUserName.test(inputs.username)) errors.username = "Debe ser un correo electrónico";
            else if (inputs.username < 35) errors.username = "No puede tener mas de 35 caracteres"
    if (!inputs.password) errors.password = "Debe igresar una contraseña"
        else if (inputs.password.length < 6 || inputs.password.length > 10) errors.password = "Debe tener minimo 6 caracteres";
            else if (inputs.password.length > 10) errors.password = "Maximo 10 caracteres";
                else if (!regexPassword.test(inputs.password)) errors.password = "La contraseña debe tener al menos un numero"
                    
  
    
    return errors

}