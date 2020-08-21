import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import firebase from '../api/firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

const ButtonAppBar = ({ history }) => {
    const classes = useStyles()

    const logout = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            history.push('/')
        }).catch(function (error) {
            // An error happened.
            console.log(error)
        })
    }

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Notes
                    </Typography>
                    {
                        firebase.auth().currentUser
                            ? <Button color='inherit' onClick={logout}>
                                Logout
                            </Button>
                            : <div>
                                <Button color='inherit' onClick={() => history.push('/signup')}>Sign Up
                                </Button>
                                <Button color='inherit' onClick={() => history.push('/login')}>
                                    Login
                                </Button>
                            </div>
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ButtonAppBar
