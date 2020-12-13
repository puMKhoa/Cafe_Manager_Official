import { MenuItem, Paper, Select, Typography } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'
import './style.css'
const Revenue = () => {
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
                            onChange={onChangeTime}
                        >
                            <MenuItem value={'06/2020'}>June - 2020</MenuItem> 
                        </Select>
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
                </Paper> 
            </div>
            <Paper component="form" className="container-search">
                <IconButton aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    className="input-search"
                    placeholder="Input here..."
                    inputProps={{ 'aria-label': 'input here' }}
                />
                <IconButton className="" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            
        </>
    )
}

export default Revenue;
