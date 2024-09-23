import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("http://localhost:3000/users");

        response
            .json()
            .then((data) => {
                console.log(response.status);
                console.log(data);
                if (response.status !== 200) {
                    return;
                }
                const modifiedData = data.map((value, index) => {
                    return { ...value, id: index };
                });
                setUsers(modifiedData);
            })
            .catch((err) => {
                console.log("Something went wrong");
            });
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <h1>Users</h1>
            {users && 
            <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Age</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </>
    );
};

export default Users;
