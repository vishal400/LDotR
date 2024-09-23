import React from "react";
import { useLocation } from "react-router-dom";

const UserDetail = () => {
    const location = useLocation();
    const user = location.state;

    console.log(user);

    return (
        <>
            {user && (
                <>
                    <h3>User Created</h3>
                    <b>Name: </b>
                    <span>{user.name}</span>
                    <br />
                    <b>Email: </b>
                    <span>{user.email}</span>
                    <br />
                    <b>Age: </b>
                    <span>{user.age}</span>
                </>
            )}
        </>
    );
};

export default UserDetail;
