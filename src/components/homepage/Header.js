import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SignOutButton from './SignOutButton'

import firebase from 'firebase/app'
import 'firebase/auth'

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

const Header = ({ history }) => {
    const classes = useStyles()

    return (
        <header className={classes.root}>
            <Toolbar>
                <Typography color='textPrimary' variant='h6' className={classes.title}>
                        Notes
                </Typography>
                {
                    firebase.auth().currentUser
                        ? <SignOutButton history={history}/>
                        : <div>
                            <Button onClick={() => history.push('/signup')}>
                                    Sign Up
                            </Button>
                            <Button onClick={() => history.push('/login')}>
                                    Login
                            </Button>
                        </div>
                }
            </Toolbar>
        </header>
    )
}

export default Header
