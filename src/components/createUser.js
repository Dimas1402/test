import * as React from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { createUser } from "../redux/actions/user/createUser";

export const CreateUser = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const [state, setState] = React.useState({
    nama: "",
    username: "",
    email: "",
    password: "",
  });

  //submit data
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createUser(state.nama, state.email, state.username, state.password)
    );

    setInterval(() => {
      setState({
        nama: "",
        username: "",
        email: "",
        password: "",
      });
    }, 2000);
  };

  return (
    <>
      <Box noValidate autoComplete="off">
        <h2> Create User </h2>
        <form onSubmit={handleSubmit}>
          <div className="pb-2">
            <TextField
              value={state.nama}
              onChange={(e) => setState({ ...state, nama: e.target.value })}
              fullWidth
              label="Nama"
              variant="outlined"
              required
            />
          </div>
          <div className="pb-2">
            <TextField
              value={state.username}
              onChange={(e) => setState({ ...state, username: e.target.value })}
              fullWidth
              label="Username"
              variant="outlined"
              required
            />
          </div>
          <div className="pb-2">
            <TextField
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              fullWidth
              label="Email"
              variant="outlined"
              required
            />
          </div>
          <div className="pb-2">
            <TextField
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              fullWidth
              label="Password"
              variant="outlined"
              required
            />
          </div>

          <Button type="submit" variant="contained">
            {isLoading ? "Loading..." : "Simpan"}
          </Button>
        </form>
      </Box>
    </>
  );
};
