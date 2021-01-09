import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SignOutButton from './SignOutButton'

import { auth } from '../../api/firebase'

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
        <div className={classes.root}>
            <header>
                <Toolbar>
                    <Typography color='textPrimary' variant='h6' className={classes.title}>
                        Notes
                    </Typography>
                    {
                        auth.currentUser
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
        </div>
    )
}

export default Header
