import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props)=> {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()


    const addUserHandler = (event) => {
         event.preventDefault();
         if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
         {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name'
            });

             return;
         }

         if(+enteredAge<1)
         {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age'
            });

             return;
         }

         props.onAddUser(enteredUsername, enteredAge)

         setEnteredUsername('');
         setEnteredAge('');
       }

    const nameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
       }

   const ageChangeHandler = (event) => {
         setEnteredAge(event.target.value)
       }
    
   const errorHandler = () => {
          setError(null);      
   }    

    return (
        <div>
  
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>} 
        <Card className={classes.input}> 
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value = {enteredUsername} onChange={nameChangeHandler}></input>
            <label htmlFor='age'>Age(years) </label>
            <input id='age' type='number' value = {enteredAge}  onChange={ageChangeHandler}></input>
            <Button type='submit'>Add User</Button>
        </form>   
        </Card>     
        </div>  
    )
}

export default AddUser;