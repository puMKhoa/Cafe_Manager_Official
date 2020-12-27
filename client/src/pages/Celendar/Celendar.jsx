import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { green } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import EditIcon from '@material-ui/icons/Edit';
import SpeedDial from '@material-ui/lab/SpeedDial';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '25px'
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));


const Celendar = () => {
    const classes = useStyles();
    // loading data
    const [rowsFilter, setRowsFilter] = useState([]);
     // function onclicksearch()
    const onClickSearch = () => {
        if(id){
            try {
             Axios.post('http://localhost:3001/User_calendar/take_value/', {
                id: id
              })
              .then(function (response) {
                // setDataToUpdate(response.data);
                setRowsFilter(response.data);
                // console.log(dataToUpdate[0].birth_date);
              })
              .catch(function (error) {
                window.alert("Error: " + error.message)
              });
            } catch (error) {
              console.error(error);
            }
          }else{
            window.alert('invalid id')
        }
    }
        
    // onchange Search
    const [id, setId] = useState('');
    const onChangeIDSearch = (e) => {
        setId(e.target.value);
    }
    // speedDial
    const handleSpeedDial = () => {openDialog();}
    // dialog 
    const [dialog, setDialog] = useState(false);
    const openDialog = () => {setDialog(true)};
    const closeDialog = () => {setDialog(false)};
    // dialog submit
    const handleDialogActionUpdate = () => {
        if(id){
            try {
             Axios.post('http://localhost:3001/User_calendar/update_value/', {
                id:id,
                mon:mon, tue:tue,wed:wed, thu:thu, fri:fri , sat:sat, sun:sun
                
              })
              .then(function (response) {
                // setDataToUpdate(response.data);
                closeDialog();
                setId(id);
                onClickSearch();
                // console.log(dataToUpdate[0].birth_date);
              })
              .catch(function (error) {
                window.alert("Error: " + error.message)
              });
            } catch (error) {
              console.error(error);
            }
          }else{
            window.alert('invalid employee')
        }
    }
    // update by select
        //monday
    const [mon, setMon] = useState(0);
    const handleChangeMon = (e) => {setMon(e.target.value);};
        //tuesday
    const [tue, setTue] = useState(0);
    const handleChangeTue = (e) => {setTue(e.target.value);};
        //wed
    const [wed, setWed] = useState(0);
    const handleChangeWed = (e) => {setWed(e.target.value);};
        //Thursday
    const [thu, setThu] = useState(0);
    const handleChangeThu = (e) => {setThu(e.target.value);};
        // Friday
    const [fri, setFri] = useState(0);
    const handleChangeFri = (e) => {setFri(e.target.value);};
        //saturday
    const [sat, setSat] = useState(0);
    const handleChangeSat = (e) => {setSat(e.target.value);};
        //sunday
    const [sun, setSun] = useState(0);
    const handleChangeSun = (e) => {setSun(e.target.value);};
   
    // render
    return (
        <>
            {/* Title Employees */}
            <Typography  align="center" variant="h4" paragraph>
                Celendar
            </Typography>
            {/* Searching */}
            <div className={classes.container}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search employee by id"
                        inputProps={{ 'aria-label': 'search employee' }}
                        onChange={onChangeIDSearch}
                    />
                    <IconButton aria-label="search" className={classes.iconButton} onClick={onClickSearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {/* Table show employees */}
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name's Employees</TableCell>
                                <TableCell align="center">Monday</TableCell>
                                <TableCell align="center">Tuesday</TableCell>
                                <TableCell align="center">Wednesday</TableCell>
                                <TableCell align="center">Thursday</TableCell>
                                <TableCell align="center">Friday</TableCell>
                                <TableCell align="center">Saturday</TableCell>
                                <TableCell align="center">Sunday</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Render element to table from Employees Table (mysql)*/}
                        <TableBody>
                            {rowsFilter.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.first_name +" " + row.last_name}</TableCell>
                                    {row.mon === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                    {row.tue === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                    {row.wed === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                    {row.thu === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                    {row.fri === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                    {row.sat === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                    {row.sun === 1 
                                        ?
                                            <TableCell align="center"><DoneIcon style={{ color: green[500] }}/></TableCell>
                                        :
                                            <TableCell align="center"><ClearIcon /></TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            
            <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    icon={<EditIcon />}
                    onClick={handleSpeedDial}
                    className={classes.speedDial}
            > 
            </SpeedDial>
            <Dialog open={dialog} onClose={closeDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update celendar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To update new calendar employee, please informations here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="mon-lable">Monday</InputLabel>
                        <Select
                            labelId="mon-label"
                            id="mon"
                            value={mon}
                            onChange={handleChangeMon}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="tue-lable">Tuesday</InputLabel>
                        <Select
                            labelId="tue-label"
                            id="tue"
                            value={tue}
                            onChange={handleChangeTue}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="wed-lable">Wednesday</InputLabel>
                        <Select
                            labelId="wed-label"
                            id="wed"
                            value={wed}
                            onChange={handleChangeWed}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="thu-lable">Thursday</InputLabel>
                        <Select
                            labelId="thu-label"
                            id="thu"
                            value={thu}
                            onChange={handleChangeThu}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="fri-lable">Friday</InputLabel>
                        <Select
                            labelId="fri-label"
                            id="fri"
                            value={fri}
                            onChange={handleChangeFri}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="sat-lable">Saturday</InputLabel>
                        <Select
                            labelId="sat-label"
                            id="sat"
                            value={sat}
                            onChange={handleChangeSat}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="sun-lable">Sunday</InputLabel>
                        <Select
                            labelId="sun-label"
                            id="sun"
                            value={sun}
                            onChange={handleChangeSun}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary" >
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleDialogActionUpdate}> 
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Celendar
