import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { CreateUser } from "./components/createUser";
import { ListUser } from "./components/listUser";

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box className="box-list">
        <CreateUser />
        <Divider style={{paddingTop:'20px'}}  />
        <ListUser />
      </Box>
    </Grid>
  );
}

export default App;
