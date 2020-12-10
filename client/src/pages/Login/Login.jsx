import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Container} from '../../containers/Login'
import axios from 'axios';


const Login = () => {
    //Loading data
    //Control input value
    const [user,setUser] = useState('');
    const onChangeUser = (e) => {setUser(e.target.value)}
    const [password,setPassword] = useState('');
    const onChangePassword = (e) => {setPassword(e.target.value)}
    // LoginButton onClick
    const onClickLogin = () => {
        axios.post('http://localhost:3001/login', {
            user: user,
            password: password
        }).then(function (response) {
            console.log(response.data);
            (response.data.status) 
            ? window.location.replace('http://localhost:3000/admin123456/employees')
            : window.alert("User or Password incorrect");
        })
        .catch(function (error) {
            console.log(error);
        }).then(function (){
        })
    }

    //Render
    return (
        <>
            <Container>
                <h1>Login</h1>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="User Name"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        value={user}
                        onChange={onChangeUser}
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <Button 
                        onClick={onClickLogin}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Log in 
                    </Button>
                </form>
            </Container>
        </>
    )
}
export default Login