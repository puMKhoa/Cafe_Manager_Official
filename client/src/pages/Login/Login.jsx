import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Container} from '../../containers/Login'
import axios from 'axios';


const Login = () => {
    //Loading data
    const [data, setData] = useState([]);
    useEffect(() => {
        checkUser() // Fetch games when component is mounted
      }, [])
    //Control input value
    
    const [user,setUser] = useState('');
    const onChangeUser = (e) => {setUser(e.target.value)}
    const [password,setPassword] = useState('');
    const onChangePassword = (e) => {setPassword(e.target.value)}
    // LoginButton onClick
    const checkUser = () => {
            fetch('http://localhost:9000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user,
                password // Use your own property name / key
              }),
            })
              .then((res) => res.json())
              .then((result) => setData(result))
            //   .then((info) => console.log(info))
              .catch((err) => console.log('error'))
          
            // let userLogin = data.filter(item => item.username === user && item.password === password);
            // if(userLogin.length > 0) {
            //     window.location.replace(`http://localhost:3000/${user}${password}/`);
            // }
            // else
            //     window.alert("user/password wrong!");
    };
    const handleChange = (event) => {
        checkUser();
        console.log(data);
        // console.log("da nhan nut");
        try{
            if(data.status === true)
                // console.log("dang nhap thanh cong");
                window.location.replace(`http://localhost:3000/${user}${password}/employees`);
        }catch(e){
                window.alert("user/password wrong!");
        }
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
                        onClick={handleChange}
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