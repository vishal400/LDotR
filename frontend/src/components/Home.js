import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const Home = () => {
    // states for loading and data
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");

    // fetches the data from the base url on which the server is running
    const fetchData = async () => {
        setLoading(true);
        const response = await fetch("http://localhost:3000/");
        response.json().then((data) => {setData(data.message)});
        setLoading(false);
    };

    // use effect will be called on the first render
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <h1>Home</h1>
            {loading && <CircularProgress />}
            {data && <h2>{data}</h2>}
        </>
    );
};

export default Home;
