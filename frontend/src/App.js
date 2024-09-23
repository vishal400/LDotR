import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import "./App.css";

function App() {
    return (
        <div className="App">
          <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <Button variant="outlined">Home</Button>
            </NavLink>
            <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <Button variant="outlined">Show Users</Button>
            </NavLink>
            <NavLink
                to="/users/add"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <Button variant="outlined">Add User</Button>
            </NavLink>
            <Outlet />
        </div>
    );
}

export default App;
