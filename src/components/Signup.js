import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useAuth } from "../context/AuthContext"


const useStyles = makeStyles(() => ({

    signUp: {
        textAlign: "center",
        marginBottom: 4,
    },
    button: {
        width: 215
    },
}));


export default function Signup() {

    const classes = useStyles();

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} >
                    <Card >
                        <CardContent >
                            <Typography variant="h2" className={classes.signUp}>Sign Up</Typography>
                            <form>
                                <div><TextField id="email" label="Email" variant="outlined" ref={emailRef} required /></div>
                                <div><TextField id="password" type="password" label="Password" variant="outlined" ref={passwordRef} required /></div>
                                <div> <TextField id="password-confirm" type="password" label="Password Confirmation" variant="outlined" ref={passwordConfirmRef} required /></div>

                                <Button variant="contained" className={classes.button} color="primary" type="submit" >Sign Up</Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div >Already have an account? Log In</div>
                </Grid>
            </Grid>
        </>
    )
}
