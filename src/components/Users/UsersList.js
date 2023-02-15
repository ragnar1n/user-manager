import React from "react";
import Card from "../UI/Card";
import styles from './UsersList.module.css'

const UsersList=(props)=>{
    console.log(props)

    return(
        <Card className={styles.users}>
            {props.users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age} years old</li>
            ))}
        </Card>
    )
}
export default UsersList