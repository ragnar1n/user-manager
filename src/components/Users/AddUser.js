import React,{useState} from "react";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import Card from "../UI/Card";
import Error from "../UI/Error";

const AddUser=(props)=>{
    //         muutuja          funktsioon
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState(null)

    const addUserHandler=(event)=>{
        event.preventDefault()
        if (enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name or age (No empty values)'
            })
            return
        }
        if (enteredAge <1){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (higher than 0)'
            })
            return;
        }
        //andmed v'ljapoole
        props.onAddUser(enteredUsername,enteredAge)
        setEnteredAge('')
        setEnteredUsername('')


    }
    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }

    return(
        <div>
            {error &&(<Error title={error.title}
                             message={error.message}
                             onConfirm={errorHandler}/>)}
        <Card className={styles.addUser}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' >Username</label>
                <input value={enteredUsername} onChange={usernameChangeHandler} type='text' id='username'/>
                <label htmlFor='age'>Age (years)</label>
                <input value={enteredAge} onChange={ageChangeHandler} type='number' id='age'/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card></div>
    )
}
export default AddUser