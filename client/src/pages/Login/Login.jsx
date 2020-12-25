import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Container} from '../../containers/Login'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { AlertTitle } from '@material-ui/core';

const Login = () => {
    //Loading data
    //control alert
    const [showAlert, setShowAlert] = useState(false);
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
            if(response.data.status) 
                window.location.replace('http://localhost:3000/admin/employees')
            else {
                setShowAlert(true);
                setTimeout(function() {setShowAlert(false);}, 3000);
            }
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
                {!showAlert ? null : 
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Your username and password is incorrect — <strong>check it out!</strong>
                </Alert>
                }
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
    
            </Container>
        </>
    )
}
export default Login