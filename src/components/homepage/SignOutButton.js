import React from 'react'

import Button from '@material-ui/core/Button'

import { signOutUser } from '../../api/firebase'

const SignOutButton = ({ history }) => {
    const signOut = () => {
        signOutUser()
            .then(function () {
                history.push('/')
            }).catch(function (error) {
                console.log(error)
            })
    }

    return (
        <Button color='inherit' onClick={signOut}>
            Logout
        </Button>
    )
}

export default SignOutButton
