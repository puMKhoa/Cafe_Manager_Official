import React from 'react';
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
  const logout = () => {
      window.location.replace(`http://localhost:3000/`);
  }

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
            {['Employees', 'Celendar', 'Revenue', 'Menu'].map((text, index) => (
                <Link to={`/admin123456/${text}`} className={classes.drawerButton}>
                    <ListItem  button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
            ))}
                <ListItem button key={`Log out`} onClick={logout}>
                        <ListItemText primary={`Log out`} />
                </ListItem>
                
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        
            <Switch>
                <Route path="/admin123456/Employees">
                    <Employees />
                </Route>
                <Route path="/admin123456/Celendar">
                    <Celendar />
                </Route>
                <Route path="/admin123456/Revenue">
                    
                </Route>
                <Route path="/admin123456/Menu">
                    <Menu />
                </Route>
            </Switch>
        
      </main>
      </Router>
    </div>
  );
}
