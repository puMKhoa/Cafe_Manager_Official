import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SpeedDial from '@material-ui/lab/SpeedDial';
import './style.css'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import Axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SpeedDialAction, TextField } from '@material-ui/core';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      minWidth: 300,
      textAlign: 'center',
      margin: 20,
    },
    media: {
      height: 140,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    }));
const Menu = () => {
    const classes = useStyles();
    // loading data
    const [data, setData] = useState([
      
    ]);
    useEffect(() => {
        async function getData() {
          try {
            const response = await Axios.get('http://localhost:3001/Menu_Item/');
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        getData();
      }, []);
    // onclick 
        //updates
    const [showDialogUpdate, setShowDialogUpdate] = useState(false);
    const closeDialogUpdate = () => {setShowDialogUpdate(false);}
    const [dataToUpdate, setDataToUpdate] = useState([
        {
            item_name: '', 
            item_price: '', 
            urlImg: ''
        }
    ]);
    const handleClickOpenDialogUpdate = () => {
        setShowDialogUpdate(true);
    }
    const handleClickCloseDialogUpdate = () => {
        setShowDialogUpdate(false);
    }

    const handleClickOpenFormUpdate =() => {
       
        async function checkItem(){
            if(price === ''){
                setPrice(0);
            }
            await Axios.post('http://localhost:3001/Menu_item/check_Item/', {
                id: id
             })
             .then(function (response) {
                setDataToUpdate([...response.data]); 
                setOpenFormUpdate(true);

             })
             .catch(function (error) {
               window.alert("Error: " + error.message)
             });
        }
        checkItem();
        handleClickCloseDialogUpdate();
    }
    const [openFormUpdate, setOpenFormUpdate] = useState(false);
    const handleClickCloseFormUpdate = () => {setOpenFormUpdate(false);}
        //remove
    const [showDialogDelete, setShowDialogDelete] = useState(false);
    const closeDialogDelete = () => {setShowDialogUpdate(false);}
    const handleClickOpenDialogDelete = () => {
        setShowDialogDelete(true);
    }
    const handleClickCloseDialogDelete = () => {
        setShowDialogDelete(false);
    }
        //add
    const [showDialogAdd, setShowDialogAdd] = useState(false);
    const closeDialogAdd = () => {setShowDialogUpdate(false);}
    const handleClickOpenDialogAdd = () => {
        setShowDialogAdd(true);
    }
    const handleClickCloseDialogAdd = () => {
        setShowDialogAdd(false);
    }
        // submit
    const submitAdd = () => {
        try {
            Axios.post('http://localhost:3001/Menu_item/Insert_Menu/', {
               name: name,
               price: price,
               urlImg: urlImg
             })
             .then(function (response) {
                setData(response.data[0]);
                handleClickCloseDialogAdd();
             })
             .catch(function (error) {
               window.alert("Error: " + error.message)
             });
           } catch (error) {
             window.location.alert(error);
           }
    }

    const submitUpdate = () => {
        try {
            Axios.post('http://localhost:3001/Menu_item/Update_Menu/', {
                id: id,
               name: name,
               price: price,
               urlImg: urlImg
             })
             .then(function (response) {
                setData(response.data[0]);
                handleClickCloseFormUpdate();
             })
             .catch(function (error) {
               window.alert("Error: " + error.message)
             });
           } catch (error) {
             window.location.alert(error);
           }
    }
    const submitDelete = () => {
        try {
            Axios.post('http://localhost:3001/Menu_item/Delete_Menu/', {
                id: id
             })
             .then(function (response) {
                console.log(response);
                window.location.reload();      
             })
             .catch(function (error) {
               window.alert("Error: " + error.message)
             });
           } catch (error) {
             window.location.alert(error);
           }
    }


    // Icon Action
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
    // control value change
    const [id, setId] = useState('');
    const onChangeId = (e) => {setId(e.target.value);};
    const [name, setName] = useState('');
    const onChangeName = (e) => {setName(e.target.value);};
    const [price, setPrice] = useState('');
    const onChangePrice = (e) => {setPrice(e.target.value);};
    // eslint-disable-next-line no-unused-vars
    const [urlImg, seturlImg] = useState('');
    const onChangeUrlImg = (e) => {seturlImg(e.target.value);};
    return (
        <>
        <Typography  align="center" variant="h4" paragraph>
                Menu
        </Typography>
        <div className='menu'>
            
        {data.map((item) => (
            <Card className={classes.root+" "+ 'card-menu'}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={item.urlImg}
                title={item.item_name}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                {item.id}. {item.item_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Price: ${item.item_price}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        ))}
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
                    key={`Add new item`}
                    icon={<PlusOneIcon />}
                    tooltipTitle={`Add new item`}
                    tooltipOpen
                    onClick={() => {
                        actionAdd();
                        handleCloseSpeedDial();
                    }}
                />
                {/* Action delete */}
                <SpeedDialAction
                    key={`Delete an item`}
                    icon={<DeleteForeverIcon />}
                    tooltipTitle={`Delete an item`}
                    tooltipOpen
                    onClick={() => {
                        actionDelete();
                        handleCloseSpeedDial();
                    }}
                />
                {/* Action update */}
                <SpeedDialAction
                    key={`Update an item`}
                    icon={<UpdateIcon />}
                    tooltipTitle={`Update an item`}
                    tooltipOpen
                    onClick={() => {
                        actionUpdate();
                        handleCloseSpeedDial();
                    }}
                />
                </SpeedDial>
            </div>

        <Dialog open={showDialogAdd} onClose={closeDialogAdd} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                <DialogContentText>
                        To add new item on menu, please informations here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField 
                        onChange={onChangeName}
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                    />
                    <TextField 
                        onChange={onChangePrice}
                        required
                        margin="dense"
                        id="price"
                        label="Price"
                        fullWidth
                    />
                    <TextField 
                        onChange={onChangeUrlImg}
                        required
                        margin="dense"
                        id="urlImg"
                        label="Background"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCloseDialogAdd} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={submitAdd}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={showDialogDelete} onClose={closeDialogDelete} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Delete</DialogTitle>
                <DialogContent>
                <DialogContentText>
                        To Delete an item on menu, please informations here. We will send updates
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
                    <Button onClick={handleClickCloseDialogDelete} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={submitDelete}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={showDialogUpdate} onClose={closeDialogUpdate} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update</DialogTitle>
                <DialogContent>
                <DialogContentText>
                        To update new item on menu, please informations here. We will send updates
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
                    <Button onClick={handleClickCloseDialogUpdate} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleClickOpenFormUpdate}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        
        {openFormUpdate ?     
        <Dialog open={openFormUpdate} onClose={handleClickCloseFormUpdate} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update</DialogTitle>
            <DialogContent>
                <TextField 
                    onChange={onChangeName}
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    defaultValue={dataToUpdate[0].item_name}
                />
                <TextField 
                    onChange={onChangePrice}
                    required
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Price"
                    fullWidth
                    defaultValue={dataToUpdate[0].item_price}
                />
                <TextField 
                    onChange={onChangeUrlImg}
                    required
                    margin="dense"
                    id="urlImg"
                    label="Background"
                    fullWidth
                    defaultValue={dataToUpdate[0].urlImg}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClickCloseFormUpdate} color="primary">
                    Cancel
                </Button>
                <Button color="primary" onClick={submitUpdate}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
        : null
        }
        </div>
        </>
    )
}

export default Menu
