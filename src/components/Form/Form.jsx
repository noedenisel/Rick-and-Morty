import React from 'react'
import styles from './Form.module.css'
import { validation } from './validations';


export default function Form(props) {
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = React.useState({ 
        username: '', 
        password: '' 
    });

    
    function handleInputChange(event){

        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        
        setErrors(validation({
                ...userData,
                [event.target.name]: event.target.value,
            })
            );
    }

    function handleSubmint(event){
        event.preventDefault()
        props.login(userData)
    }

    
    return(
        <div className={styles.form}>
            <br />
            <form onSubmit={handleSubmint}>
                <hr></hr>
                <h1 className={styles.h1}>Login</h1>

                <br></br>
                <br></br>
           
                <input placeholder='username'
                    id= "username"
                    name = 'username'
                    type = "text" 
                    value = {userData.username}
                    onChange = {handleInputChange}
                />
                    <p className={styles.error}>{errors.username}</p>
            
                <br />
                <br />
    
                <input placeholder='password'
                    id = "password" 
                    name = 'password'
                    type = "password" 
                    userData = {userData.password} 
                    onChange = {handleInputChange} 
                />
                    <p className={styles.error}>{errors.password}</p>
            
                <br />
                <br />
        
                <button type='submit' className={styles.ingresar} >Ingresar</button>
                <br></br>
                <br></br>
                <hr></hr>
            </form>
 
        </div> 

    )   
}