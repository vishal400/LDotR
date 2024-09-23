import React, { useState } from "react";
import { Box, Button, TextField, Alert } from "@mui/material";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const [userData, setUserData] = useState({});
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [status, setStatus] = useState({});
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        const name = e.target.value;

        if (name === "") {
            setNameError("Name cannot be empty!");
        } else if (name.length < 3) {
            setNameError("Name must be atleast 3 characters long!");
        } else if (name.length > 15) {
            setNameError("Name cannot be more than 15 characters long!");
        } else {
            setUserData((prev) => ({ ...prev, name: name }));
            setNameError(false);
        }
    };

    const handleAgeChange = (e) => {
        const age = e.target.value;

        // validate age
        if (age.length === 0) {
            setAgeError("Age cannot be empty!");
        } else if (parseInt(age) < 10 || parseInt(age) > 100) {
            setAgeError("Age must be between 10 and 100!");
        } else {
            setUserData((prev) => ({ ...prev, age: age }));
            setAgeError(false);
        }
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        // validate email
        if (email.length === 0) {
            setEmailError("Email cannot be empty!");
        } else if (!validator.isEmail(email)) {
            setEmailError("Invalid email address!");
        } else {
            setUserData((prev) => ({ ...prev, email: email }));
            setEmailError(false);
        }
    };

    const addUserData = async () => {
        // add user, passing the user data
        const response = await fetch("http://localhost:3000/users/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        console.log(response.status);
        const data = await response.json();

        if (response.status === 201) {
            // navigate to users path and show details
            navigate("/users/user-detail", { state: data });
        } else {
            setStatus({ severity: "error", message: data.message });
        }

        // set time out to set the status to empty object after 3 second
        // to make the status message disappear
        setTimeout(() => {
            setStatus({});
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if there are no errors then make api call to create user data
        if (!nameError && !ageError && !emailError) {
            console.log("data is valid, creating user...");
            console.log(userData, nameError, emailError, ageError);

            // add user data in database
            addUserData();
        }
    };
    return (
        <>
            <h2>Add User Data</h2>
            {status.severity && (
                <Alert
                    severity={status.severity}
                    sx={{
                        maxWidth: 600,
                        margin: "auto",
                        mt: 4,
                        padding: 2,
                        zIndex: "modal",
                    }}
                >
                    {status.message}
                </Alert>
            )}
            <Box
                component="form"
                sx={{ maxWidth: 600, margin: "auto", mt: 4, padding: 2 }}
                noValidate
                autoComplete="off"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Name"
                    type="text"
                    onChange={handleNameChange}
                    error={nameError ? true : false}
                    helperText={nameError}
                    fullWidth={true}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Email"
                    type="email"
                    onChange={handleEmailChange}
                    error={emailError ? true : false}
                    helperText={emailError}
                    fullWidth={true}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Age"
                    type="number"
                    onChange={handleAgeChange}
                    error={ageError ? true : false}
                    helperText={ageError}
                    fullWidth={true}
                    sx={{ mt: 2, mb: 2 }}
                />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default UserForm;
