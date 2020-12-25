import { Button, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'
import axios from 'axios';
import './style.css'
const Revenue = () => {
    const [dataSalary, setDataSalary] = useState([]);
    const [dataOrder, setDataOrder] = useState('$0000.0');
    const [dataProfit, setDataProfit] = useState([]);
    const [time, setTime] = useState('');
    const onChangeTime = (e) => {
        setTime(e.target.value);
        axios.post('http://localhost:3001/Order_month/Total_salary_value/', {      
        })
        .then((response) => {
            setDataOrder(response.data[0].Total_Price_order);
        })
        .catch((error) => {
            console.log(error)
        });
        axios.post('http://localhost:3001/Order_month/Total_Price_Order/', {
            month: e.target.value        
        })
        .then((response) => {
            setDataOrder(response.data[0].Total_Price_order);
        })
        .catch((error) => {
            console.log(error)
        });
        axios.post('http://localhost:3001/Order_month/Total_Profit/', {
            month: e.target.value        
        })
        .then((response) => {
            setDataOrder(response.data[0].Total_Price_order);
        })
        .catch((error) => {
            console.log(error)
        });
        };
    return (
        <>
            <Typography  align="center" variant="h4" paragraph>
                Revenue
            </Typography>
            <div className="revenue">
                <Paper className="paper">
                    <Typography  align="left" variant="h6" paragraph>
                        Total Employees Salary
                    </Typography>
                    <Typography  align="center" variant="h4" paragraph>
                        $5000
                    </Typography>
                    <Typography align="left">
                        <Select 
                            value={time}
                            onChange={onChangeTime}>
                            <MenuItem value={'2020-01-01'}>January - 2020</MenuItem>
                            <MenuItem value={'2020-02-01'}>February - 2020</MenuItem>
                            <MenuItem value={'2020-03-01'}>March - 2020</MenuItem>
                            <MenuItem value={'2020-04-01'}>April - 2020</MenuItem>
                            <MenuItem value={'2020-05-01'}>May - 2020</MenuItem>
                            <MenuItem value={'2020-06-01'}>June - 2020</MenuItem>
                            <MenuItem value={'2020-07-01'}>July - 2020</MenuItem>
                            <MenuItem value={'2020-08-01'}>August - 2020</MenuItem>
                            <MenuItem value={'2020-09-01'}>September - 2020</MenuItem>
                            <MenuItem value={'2020-10-01'}>October - 2020</MenuItem>
                            <MenuItem value={'2020-11-01'}>November - 2020</MenuItem>
                            <MenuItem value={'2020-12-01'}>December - 2020</MenuItem>
                        </Select>
                    </Typography>
                    <Typography align="right">
                        <Button color="primary" variant="contained">
                            Show Table
                        </Button>
                    </Typography>
                </Paper> 
                <Paper  className="paper">
                    <Typography  align="left" variant="h6" paragraph>
                        Total Price Order
                    </Typography>
                    <Typography  align="center" variant="h4" paragraph>
                        {dataOrder}
                    </Typography>
                    <Typography align="left">
                        <Select 
                            value={time}
                            onChange={onChangeTime}
                        >
                            <MenuItem value={'2020-01-01'}>January - 2020</MenuItem>
                            <MenuItem value={'2020-02-01'}>February - 2020</MenuItem>
                            <MenuItem value={'2020-03-01'}>March - 2020</MenuItem>
                            <MenuItem value={'2020-04-01'}>April - 2020</MenuItem>
                            <MenuItem value={'2020-05-01'}>May - 2020</MenuItem>
                            <MenuItem value={'2020-06-01'}>June - 2020</MenuItem>
                            <MenuItem value={'2020-07-01'}>July - 2020</MenuItem>
                            <MenuItem value={'2020-08-01'}>August - 2020</MenuItem>
                            <MenuItem value={'2020-09-01'}>September - 2020</MenuItem>
                            <MenuItem value={'2020-10-01'}>October - 2020</MenuItem>
                            <MenuItem value={'2020-11-01'}>November - 2020</MenuItem>
                            <MenuItem value={'2020-12-01'}>December - 2020</MenuItem> 
                        </Select>
                    </Typography>
                    <Typography align="right">
                        <Button color="primary" variant="contained">
                            Show Table
                        </Button>
                    </Typography>
                </Paper> 
                <Paper  className="paper">
                    <Typography  align="left" variant="h6" paragraph>
                        Total Profit
                    </Typography>
                    <Typography  align="center" variant="h4" paragraph>
                        $45000
                    </Typography>
                    <Typography align="left">
                        <Select 
                            value={time}
                            onChange={onChangeTime}
                        >
                            <MenuItem value={'2020-01-01'}>January - 2020</MenuItem>
                            <MenuItem value={'2020-02-01'}>February - 2020</MenuItem>
                            <MenuItem value={'2020-03-01'}>March - 2020</MenuItem>
                            <MenuItem value={'2020-04-01'}>April - 2020</MenuItem>
                            <MenuItem value={'2020-05-01'}>May - 2020</MenuItem>
                            <MenuItem value={'2020-06-01'}>June - 2020</MenuItem>
                            <MenuItem value={'2020-07-01'}>July - 2020</MenuItem>
                            <MenuItem value={'2020-08-01'}>August - 2020</MenuItem>
                            <MenuItem value={'2020-09-01'}>September - 2020</MenuItem>
                            <MenuItem value={'2020-10-01'}>October - 2020</MenuItem>
                            <MenuItem value={'2020-11-01'}>November - 2020</MenuItem>
                            <MenuItem value={'2020-12-01'}>December - 2020</MenuItem> 
                        </Select>
                    </Typography>
                    <Typography align="right">
                        <Button color="primary" variant="contained">
                            Show Table
                        </Button>
                    </Typography>
                </Paper> 
            </div>
        </>
    )
}

export default Revenue;
