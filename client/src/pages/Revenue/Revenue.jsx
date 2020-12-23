import { Button, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'
import './style.css'
const Revenue = () => {
    const [dataSalary, setDataSalary] = useState([]);
    const [dataOrder, setDataOrder] = useState([]);
    const [dataProfit, setDataProfit] = useState([]);
    const [time, setTime] = useState('');
    const onChangeTime = (e) => {setTime(e.target.value)};
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
                            <MenuItem value={'06/2020'}>January - 2020</MenuItem>
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
                        $51000
                    </Typography>
                    <Typography align="left">
                        <Select 
                            value={time}
                            onChange={onChangeTime}
                        >
                            <MenuItem value={'06/2020'}>June - 2020</MenuItem> 
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
                            <MenuItem value={'06/2020'}>June - 2020</MenuItem> 
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
