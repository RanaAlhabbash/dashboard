import React from 'react';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
import { Header } from "../../components/Header"
const data = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manager',
        label: 'Manager',
    },
    {
        value: 'User',
        label: 'User',
    },
];
const regEmail =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };
    const onSubmit = () => {
        console.log("done")
        handleClick()
    }
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Header title={"CREATE USER"} subtitle={"Create a New User Profile"} />
            <Stack direction={"row"} sx={{gap: 2}}>
                <TextField
                    id="filled-basic"
                    label="First Name"
                    variant="filled"
                    // eslint-disable-next-line no-extra-boolean-cast
                    helperText={
                        errors.firstName
                            ? "This field is required & min 3 character"
                            : null
                    }
                    error={Boolean(errors.firstName)}
                    sx={{flex: 1}}
                    {...register("firstName", { required: true, minLength: 3 })}
                />
                <TextField
                    id="filled-basic"
                    label="Last Name"
                    variant="filled"
                    sx={{flex: 1}}
                    // eslint-disable-next-line no-extra-boolean-cast
                    helperText={
                        errors.lastName
                            ? "This field is required & min 3 character"
                            : null
                    }
                    error={Boolean(errors.lastName)}
                    {...register("lastName", { required: true, minLength: 3 })}
                />
            </Stack>
            <TextField
                label="Email"
                variant="filled"
                helperText={
                    errors.email
                        ? "valid email"
                        : null
                }
                error={Boolean(errors.email)}
                {...register("email", { required: true, pattern: regEmail })}
            />
            <TextField
                label="Contact Number"
                variant="filled"
                helperText={
                    errors.contact
                        ? "valid email"
                        : null
                }
                error={Boolean(errors.contact)}
                {...register("contact", { required: true, pattern: phoneRegExp })}
            />
            <TextField
                label="Address 1"
                variant="filled"
            />
            <TextField
                label="Address 2"
                variant="filled"
            />
            <TextField
                id="outlined-select-currency"
                select
                label="Role"
                defaultValue="User"
                variant="filled"
                >
                {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Box sx={{textAlign: "right"}}>
                <Button type='submit' sx={{textTransform: "capitalize"}} variant='contained' onClick={handleClick}>
                    Create New User
                </Button>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    Account created successfully
                </Alert>
            </Snackbar>
            </Box>
        </Box>
    )
}

export default Form
