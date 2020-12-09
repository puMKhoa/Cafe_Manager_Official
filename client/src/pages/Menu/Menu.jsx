import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SpeedDial from '@material-ui/lab/SpeedDial';
import './style.css'
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      textAlign: 'center',
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
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Coffe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Ca Phe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        $4.85
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Update
                    </Button>
                    <Button size="small" color="primary">
                        Remove
                    </Button>
                </CardActions>
            </Card>
            <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    // icon={<EditIcon />}
                    // onClick={handleSpeedDial}
                    className={classes.speedDial}
            > 
            </SpeedDial>
        </>
    )
}

export default Menu
