import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import {Container} from '../../containers/Login'
import Login from '../../pages/Login/Login'

    
const Home = () => {
    const [render, setRender] = useState(false);
    return (
        <>
            {!render ?
            <Container>
                <h1>Cafe Management</h1>
                <Button variant="outlined" color="primary" onClick={() => setRender(true)}>
                    Login
                </Button>
            </Container>
            : 
            <Login />   
        }
        </>
    )
}

export default Home;