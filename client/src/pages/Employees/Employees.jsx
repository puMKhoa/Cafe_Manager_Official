
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
// import Alert from '@material-ui/core/Alert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import './style.css'
import axios from 'axios';
import React, {useEffect, useState} from 'react'

// Set style for icon action
const useStyles = makeStyles((theme) => ({
    root: {
      height: 380,
      position: 'fixed',
      bottom: '15px',
      right: '15px',
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

// Main function employees.jsx
const Employees = () => {
    // Get style
    const classes = useStyles();

    // Hook set data for employee
    const [rows, setRows] = useState([
    ]);
    useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get('http://localhost:3001/data/User_employee');
            setRows(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        getData();
      }, []);
  
    // Hook and function set show and hide Icon Action
    const [openSpeedDial, setOpenSpeedDial] = useState(false);
    const handleOpenSpeedDial = () => {
        setOpenSpeedDial(true);
      };
    
      const handleCloseSpeedDial = () => {
        setOpenSpeedDial(false);
      };

    // Set action for Icon Action
      //action Add an employee
    const actionAdd = () => {
        handleClickOpenDialogAdd();
    };
     //action delete employee
     const actionDelete = () => {
        handleClickOpenDialogDelete();
    };
     //action update employee
     const actionUpdate = () => {
        handleClickOpenDialogUpdate();
    };

    // Dialog of Action add
    const [openDialogAdd, setOpenDialogAdd] = useState(false);
    const handleClickOpenDialogAdd = () => {
        setOpenDialogAdd(true);
      };
    
    const handleCloseDialogAdd = () => {
        setOpenDialogAdd(false);
      };

    // Dialog of Action delete
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const handleClickOpenDialogDelete = () => {
        setOpenDialogDelete(true);
      };
    
    const handleCloseDialogDelete = () => {
        setOpenDialogDelete(false);
      };

    // Dialog of Action update
    const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
    const handleClickOpenDialogUpdate = () => {
        setOpenDialogUpdate(true);
      };
    
    const handleCloseDialogUpdate = () => {
        setOpenDialogUpdate(false);
      };

    // control input value DialogAdd
      // First name
    const [firstName, setFirstName] = useState('');
    const onChangeFirstName = (e) => {setFirstName(e.target.value);};
      //role
    const [role, setRole] = useState('');
    const onChangeRole = (e) => {setRole(e.target.value);};
      // Last name
    const [lastName, setLastName] = useState('');
    const onChangeLastName = (e) => {setLastName(e.target.value);};
      // Birth date
    const [birthDate, setBirthDate] = useState('');
    const onChangeBirthDate = (e) => {setBirthDate(e.target.value);};
      // Adress
    const [address, setAddress] = useState('');
    const onChangeAddress = (e) => {setAddress(e.target.value);};
      // Salary
    const [salaryDaily, setSalaryDaily] = useState('');
    const onChangeSalaryDaily = (e) => {setSalaryDaily(e.target.value);};
      // ID
    const [id, setId] = useState('');
    const onChangeId = (e) => {setId(e.target.value);};
  
  // Alert
   // Onclick submit action 
      // Add event
    const handleActionAdd = () => {
      if(firstName && role && lastName && birthDate && address && salaryDaily)
      {
        async function getData() {
            try {
              await axios.post('http://localhost:3001/data/User_employee/insert', {
                first_name: firstName ,
                last_name: lastName ,
                birth_date: birthDate,
                address: address,
                role: role,
                salary_day : salaryDaily
              })
              .then(function (response) {
                setRows(response.data.message[0]);
              })
              .catch(function (error) {
                window.alert("Error: " + error.message)
              });
            } catch (error) {
              console.error(error);
            }
          }
          getData();
          handleCloseDialogAdd();
        } else {
          window.alert("Invalid parameters");
        }
    }
      // Delete event
    const handleActionDelete = () => {
        async function getData() {
            try {
              await axios.post('http://localhost:3001/data/User_employee/Delete', {
                id: id
              })
              .then(function (response) {
                setRows(response.data.message[0]);
              })
              .catch(function (error) {
                window.alert("Error: " + error.message)
              });
            } catch (error) {
              console.error(error);
            }
          }
          getData();
          handleCloseDialogDelete();
    }
      // Update event
    const [openDialogFormUpdate, setOpenDialogFormUpdate] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState([
      {
        id: '',
        first_name: "",
        last_name: '',
        address: "",
        birth_date: "",
        role: "",
        salary_day: ''
    }
  ]);
    const handleCloseDialogFormUpdate = () => {
      setOpenDialogFormUpdate(false);
    }
    const handleActionUpdateFindById = () => {
        function getData() {
            try {
              if(birthDate === "")
                setBirthDate('1980-01-01');
              if(salaryDaily === "")
                setSalaryDaily(0);
             axios.post('http://localhost:3001/data/User_employee/Render_Employee', {
                id: id
              })
              .then(function (response) {
                // setDataToUpdate(response.data);
                setDataToUpdate([...response.data]);
                setOpenDialogFormUpdate(true);
                // console.log(dataToUpdate[0].birth_date);
              })
              .catch(function (error) {
                window.alert("Error: Nobody have this ID, please check agian")
              });
            } catch (error) {
              console.error(error);
            }
          }
          getData();
          
      }
    const handleActionUpdate = () => {
        axios.post('http://localhost:3001/data/User_employee/Update', {
          id: id,
          first_name: firstName ,
          last_name: lastName ,
          birth_date: birthDate,
          address: address,
          role: role,
          salary_day : salaryDaily
        })
        .then(function (response) {
          
          setRows(response.data.message[0]);
          handleCloseDialogUpdate();
          handleCloseDialogFormUpdate();
        })
        .catch(function (error) {
          window.alert("Error: " + error.message)
        });
      }
    // render
    return (
        <>
            {/* Title Employees */}
            <Typography  align="center" variant="h4" paragraph>
                Employees
            </Typography>
            {/* Table show employees */}
            <form>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Index</TableCell>
                                <TableCell align="center">First Name</TableCell>
                                <TableCell align="center">Last Name</TableCell>
                                <TableCell align="center">Birth Date</TableCell>
                                <TableCell align="center">Adress</TableCell>
                                <TableCell align="center">Role</TableCell>
                                <TableCell align="center">Salary Daily ($)</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Render element to table from Employees Table (mysql)*/}
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell align="center">{row.first_name}</TableCell>
                                    <TableCell align="center">{row.last_name}</TableCell>
                                    <TableCell align="center">{row.birth_date.split('T')[0]}</TableCell>
                                    <TableCell align="center">{row.address}</TableCell>
                                    <TableCell align="center">{row.role}</TableCell>
                                    <TableCell align="center">{row.salary_day}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>

            {/* Action icon */}
            <div className={classes.root}>
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    icon={<SpeedDialIcon />}
                    onClose={handleCloseSpeedDial}
                    onOpen={handleOpenSpeedDial}
                    open={openSpeedDial}
                    className={classes.speedDial}
                >
            {/* Action add */}
                <SpeedDialAction
                    key={`Add new employee`}
                    icon={<PlusOneIcon />}
                    tooltipTitle={`Add new employee`}
                    tooltipOpen
                    onClick={() => {
                        actionAdd();
                        handleCloseSpeedDial();
                    }}
                />
                {/* Action delete */}
                <SpeedDialAction
                    key={`Delete an employee`}
                    icon={<DeleteForeverIcon />}
                    tooltipTitle={`Delete an employee`}
                    tooltipOpen
                    onClick={() => {
                        actionDelete();
                        handleCloseSpeedDial();
                    }}
                />
                {/* Action update */}
                <SpeedDialAction
                    key={`Update an employee`}
                    icon={<UpdateIcon />}
                    tooltipTitle={`Update an employee`}
                    tooltipOpen
                    onClick={() => {
                        actionUpdate();
                        handleCloseSpeedDial();
                    }}
                />
                </SpeedDial>
            </div>
            {/* Dialog add an employee */}
            <Dialog open={openDialogAdd} onClose={handleCloseDialogAdd} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add an employee</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To add new employee to this website, please informations here. We will send updates
                    occasionally.
                </DialogContentText>
                        <TextField
                            onChange={onChangeFirstName}
                            required
                            margin="dense"
                            id="firstName"
                            label="First Name"
                            fullWidth
                        />
                        <TextField
                            onChange={onChangeLastName}
                            margin="dense"
                            id="lastName"
                            label="Last Name"
                            fullWidth
                        />
                        <TextField
                            onChange={onChangeBirthDate}
                            required
                            id="birthDate"
                            margin="dense"
                            label="Birth date"
                            type="date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            fullWidth
                        />
                        <TextField
                            onChange={onChangeAddress}
                            required
                            margin="dense"
                            id="address"
                            label="Address"
                            fullWidth
                        />
                        <TextField
                            onChange={onChangeRole}
                            required
                            margin="dense"
                            id="role"
                            label="Role"
                            fullWidth
                        />
                        <TextField
                            onChange={onChangeSalaryDaily}
                            required
                            margin="dense"
                            id="salaryDaily"
                            label="Salary Daily"
                            fullWidth
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogAdd} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleActionAdd}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Alert check form is empty? */}

            {/* Dialog delete an employee */}
            <Dialog open={openDialogDelete} onClose={handleCloseDialogDelete} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Delete an employee</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To delete an employee, please informations here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        onChange={onChangeId}
                        required
                        autoFocus
                        margin="dense"
                        id="id"
                        label="ID"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogDelete} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleActionDelete}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Alert check form is empty? */}

            {/* Dialog update an employee */}
            <Dialog open={openDialogUpdate} onClose={handleCloseDialogUpdate} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update an employee</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To update new employee, please informations here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                            onChange={onChangeId}
                            required
                            autoFocus
                            margin="dense"
                            id="id"
                            label="ID"
                            fullWidth
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogUpdate} color="primary" >
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleActionUpdateFindById}> 
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDialogFormUpdate} onClose={handleCloseDialogFormUpdate} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update</DialogTitle>
                <DialogContent>
                        <TextField
                            onChange={onChangeFirstName}
                            required
                            margin="dense"
                            id="firstName"
                            label="First Name"
                            fullWidth
                            defaultValue={dataToUpdate[0].first_name}
                        />
                        <TextField
                            onChange={onChangeLastName}
                            margin="dense"
                            id="lastName"
                            label="Last Name"
                            fullWidth
                            defaultValue={dataToUpdate[0].last_name}
                        />
                        <TextField
                            onChange={onChangeBirthDate}
                            required
                            id="birthDate"
                            margin="dense"
                            label="Birth date"
                            type="date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            fullWidth
                            defaultValue={dataToUpdate[0].birth_date.split('T')[0]}
                            
                        />
                        <TextField
                            onChange={onChangeAddress}
                            required
                            margin="dense"
                            id="address"
                            label="Address"
                            fullWidth
                            defaultValue={dataToUpdate[0].address}

                        />
                        <TextField
                            onChange={onChangeRole}
                            required
                            margin="dense"
                            id="role"
                            label="Role"
                            fullWidth
                            // default={dataToUpdate.role}
                            defaultValue={dataToUpdate[0].role}
                            
                        />
                        <TextField
                            onChange={onChangeSalaryDaily}
                            required
                            margin="dense"
                            id="salaryDaily"
                            label="Salary Daily"
                            fullWidth
                            // default={dataToUpdate.salary_day}
                            defaultValue={dataToUpdate[0].salary_day}

                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogFormUpdate} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleActionUpdate}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Employees
