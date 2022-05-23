import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")


    useEffect(()=> {
        if(userSelected !== null){
            setFirst(userSelected.first_name)
            setLast(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        } else {
            setFirst('')
            setLast('')
            setEmail('')
            setPassword('')
            setBirthday('')
        }
    },[userSelected])

    const submit = (e) => {
        e.preventDefault()
         const user = {
            first_name: first,
            last_name: last,
            email: email,
            password: password,
            birthday: birthday
        }
        if(userSelected !==null){
            alert('Editing')
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(()=> {
                    getUsers()
                    deselectUser()   
                })
        } else {
            axios
                .post('https://users-crud1.herokuapp.com/users/', user)
                .then(()=> getUsers())
                .catch(error => console.log(error.response))
        }
    }

    return (
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="first" className="form-label">First name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="first" 
                    onChange={e=> setFirst(e.target.value)}
                    value={first}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="last" className="form-label">Last name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="last" 
                    onChange={e=> setLast(e.target.value)}
                    value={last}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    onChange={e=> setEmail(e.target.value)}
                    value={email} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control"
                    id='password'
                    onChange={e=> setPassword(e.target.value)}
                    value={password} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="birthday" className="form-label">Birthday</label>
                <input 
                    type="date" 
                    className="form-control"
                    id='birthday'
                    onChange={e=> setBirthday(e.target.value)}
                    value={birthday} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default UsersForm;