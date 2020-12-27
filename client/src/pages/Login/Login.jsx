import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Container} from '../../containers/Login'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { Collapse } from '@material-ui/core';
import { useHistory } from "react-router-dom";




const Login = () => {
    //control alert
    const [showAlert, setShowAlert] = useState(false);
    //Control input value
    const [user,setUser] = useState('');
    const onChangeUser = (e) => {setUser(e.target.value)}
    const [password,setPassword] = useState('');
    const onChangePassword = (e) => {setPassword(e.target.value)}
    // LoginButton onClick
    const history = useHistory();
    sessionStorage.setItem('auth','false');
    const onClickLogin = () => {
        axios.post('http://localhost:3001/login', {
            user: user,
            password: password
        }).then(function (response) {
            if(response.data.status){
                sessionStorage.setItem('auth', 'true');
                history.push("/admin/employees");
            }
            else {
                setShowAlert(true);
                setTimeout(()=> {
                    setShowAlert(false);
                },3000);
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
                    <Collapse in={showAlert} timeout={400}>
                        <Alert variant="filled" severity="error">
                            Your username and password is incorrect — <strong>check it out!</strong>
                        </Alert>
                    </Collapse>
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