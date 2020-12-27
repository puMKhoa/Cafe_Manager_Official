import React, { useEffect, useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Employees from '../Employees/Employees';
import Celendar from '../Celendar/Celendar';
import Menu from '../Menu/Menu';
import Revenue from '../Revenue/Revenue';
import { useHistory } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import './styles.css';
import Order from '../Order/Order';
import Axios from 'axios';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: theme.color,
  },
  drawerButton: {
    color: 'black',
    textDecoration: 'none',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: theme.spacing(10),
  },
  logout: {
      textDecoration: 'none',
      color: 'white',
  },
}));


export default function Workplace() {
  const classes = useStyles();
  const history = useHistory();
  const logout = () => {
      history.push('/');
      sessionStorage.setItem('auth', 'false');
  }
  const [dialogSettingAcount, setDialogSettingAcount] = useState(false);
  const handleClickCloseDialogSettingAcount = () => {
    setDialogSettingAcount(false);
  }
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    async function getAccount() {
      await Axios.get('http://localhost:3001/account')
      .then((response) => {
        setUserName(response.data[0].username);
        setPassword(response.data[0].password);
      })
    }
    getAccount();
  }, []);
  const settingAcount = () => {
  setDialogSettingAcount(true);
  setDisable(true);
  }
  

  // eslint-disable-next-line no-unused-vars
  const [username, setUserName] = useState('');
  const onChangeUserName = (e) => {setUserName(e.target.value);};
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('');
  const onChangePassword = (e) => {setPassword(e.target.value);};

  const submitUpdateAccount = () => {
    setDisable(false);
    if(disable === false) {
      try {
        Axios.post('http://localhost:3001/change_password', {
            username: username,
            password: password
         })
         .then(function (response) {
            if(response.data.status){
              window.alert("Update your account success!");
              handleClickCloseDialogSettingAcount();
              logout();
            }
         })
         .catch(function (error) {
           window.alert("Error: " + error.message)
         });
       } catch (error) {
         window.location.alert(error);
       }
    }
  }
  var auth = sessionStorage.getItem('auth');
  if(auth==='true')
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Cafe Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Employees', 'Celendar', 'Revenue', 'Menu', 'Order'].map((text, index) => (
                <Link to={`/admin/${text}`} className={classes.drawerButton}>
                    <ListItem  button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
            ))}
                <ListItem button key={`Account`} onClick={settingAcount}>
                        <ListItemText primary={`Account`} />
                </ListItem>
                <ListItem button key={`Log out`} onClick={logout}>
                        <ListItemText primary={`Log out`} />
                </ListItem>
                
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        
            <Switch>
                <Route path="/admin/Employees">
                    <Employees />
                </Route>
                <Route path="/admin/Celendar">
                    <Celendar />
                </Route>
                <Route path="/admin/Revenue">
                    <Revenue />
                </Route>
                <Route path="/admin/Menu">
                    <Menu />
                </Route>
                <Route path="/admin/Order">
                    <Order />
                </Route>
            </Switch>
      </main>
      </Router>

      {dialogSettingAcount ?     
        <Dialog open={dialogSettingAcount} onClose={handleClickCloseDialogSettingAcount} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title-acount">Account</DialogTitle>
            <DialogContent>
              { disable ?
                <>
                <TextField 
                  onChange={onChangeUserName}
                  disabled
                  margin="dense"
                  id="username"
                  label="Username"
                  fullWidth
                  defaultValue={username}
                />
                  <TextField 
                  onChange={onChangePassword}
                  disabled
                  margin="dense"
                  id="password"
                  label="Password"
                  fullWidth
                  defaultValue={password}
                   />
                  </>
                :
                 <>
                  <TextField 
                    onChange={onChangeUserName}
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    fullWidth
                    defaultValue={username}
                  />
                    <TextField 
                    onChange={onChangePassword}                    
                    margin="dense"
                    id="password"
                    label="Password"
                    fullWidth
                    defaultValue={password}
                    />
                 </>
              }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClickCloseDialogSettingAcount} color="primary">
                    Cancel
                </Button>
                <Button color="primary" onClick={submitUpdateAccount}>
                    {disable ? 'Update Account' : 'Submit'}
                </Button>
            </DialogActions>
        </Dialog>
        : null
      }
    </div>);
  else return <h1>HTTP/1.1 401 Unauthorized</h1>
}
