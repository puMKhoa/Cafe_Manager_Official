import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Container} from '../../containers/Login'
import axios from 'axios';


const Login = () => {
    //Loading data
    // const [userReq, setUserReq] = useState([]);
    //Control input value
    
    const [user,setUser] = useState('');
    const onChangeUser = (e) => {setUser(e.target.value)}
    const [password,setPassword] = useState('');
    const onChangePassword = (e) => {setPassword(e.target.value)}
    // LoginButton onClick
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

    //Render
    return (
        <>
            <Container>
                <h1>Login</h1>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="User Name"
                        name="user"
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