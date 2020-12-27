import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Axios from 'axios';
import { IconButton, InputBase, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
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
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '25px'
    },
    iconButton: {
        padding: 10,
    },
  }));



export default function Order() {
    const classes = useStyles();
// eslint-disable-next-line no-unused-vars
const [data, setData] = React.useState([]);
React.useEffect(() => {
    async function getData() {
      try {
        await Axios.get('http://localhost:3001/get_order_data')
        .then((response) => {
        setData(response.data);
        })
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
const onChangeSearch = (e) => {
    setDataSearch(e.target.value);
}
const [dataSearch, setDataSearch] = React.useState('');
const onClickSearch = () => {
    try {
        Axios.post('http://localhost:3001/render_order_month/', {
            month:dataSearch
        }).then((response) =>{
            window.alert(response.data[0].length+ " result");
            setData(response.data[0]);

        })
        .catch((error) => {
            window.alert("Wrong input, please input: yyyy-mm-dd");
        })
    } catch (error) {
        console.log(error);
    }
}
  return (
      <>
        <Typography  align="center" variant="h4" paragraph>
            Order History
        </Typography>
        <div className={classes.container}>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search employee by id"
                    inputProps={{ 'aria-label': 'search employee' }}
                    onChange={onChangeSearch}
                />
                <IconButton aria-label="search" className={classes.iconButton} onClick={onClickSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Item</TableCell>
                        <TableCell align="center">Quanlity</TableCell>
                        <TableCell align="center">Create At</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.item_id}</TableCell>
                            <TableCell align="center">{row.quanlity}</TableCell>
                            <TableCell align="center">{row.create_at.split('T')[0]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  );
}