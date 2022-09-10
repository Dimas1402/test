import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemButton,
  TextField,
} from "@mui/material";
import getListUser from "../redux/actions/user/getListUser";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { removeUser } from "../redux/actions/user/removeUser";
import { updateUser } from "../redux/actions/user/updateUser";

export const ListUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.userReducer.listUser);

  const [open, setOpen] = React.useState(false);
  const [detailUser, setDetailUser] = React.useState({});

  //   get list user
  React.useEffect(() => {
    dispatch(getListUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //close modal
  const handleClose = () => {
    setOpen(false);
  };

  // open modal & get detail user
  const handleClickDetailUser = (res) => {
    setOpen(true);
    setDetailUser(res);
  };

  // remove user
  const handleRemove = () => {
    dispatch(removeUser(detailUser.id));
    setOpen(false)
  };

  //update data user
  const handleupdate = () => {
    dispatch(
      updateUser(
        detailUser.nama,
        detailUser.email,
        detailUser.username,
        detailUser.id
      )
    );
    setOpen(false)
  };

  return (
    <>
      <Box>
        <div style={{ overflow: "auto", maxHeight: 250 }}>
          <List
            sx={{
              width: "100%",
              maxWidth: 560,
              bgcolor: "background.paper",
            }}
          >
            {listUsers?.map((res, i) => (
              <>
                <ListItemButton
                  onClick={() => handleClickDetailUser(res)}
                  key={i}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt={res.nama} src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={res?.nama}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Username : {res?.username}
                        </Typography>
                        <br />
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Email : {res?.email}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </div>
      </Box>

      {/* Modal */}
      <Dialog maxWidth={"md"} open={open} onClose={handleClose}>
        <DialogTitle>Update Data</DialogTitle>
        <DialogContent>
          <div style={{ paddingTop: "10px" }} className="pb-2">
            <TextField
              value={detailUser.nama}
              onChange={(e) =>
                setDetailUser({ ...detailUser, nama: e.target.value })
              }
              fullWidth
              label="Nama"
              variant="outlined"
              required
            />
          </div>
          <div className="pb-2">
            <TextField
              value={detailUser.username}
              onChange={(e) =>
                setDetailUser({ ...detailUser, username: e.target.value })
              }
              fullWidth
              label="Username"
              variant="outlined"
              required
            />
          </div>
          <div className="pb-2">
            <TextField
              value={detailUser.email}
              onChange={(e) =>
                setDetailUser({ ...detailUser, email: e.target.value })
              }
              fullWidth
              label="Email"
              variant="outlined"
              required
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleRemove}>
            Delete
          </Button>
          <Button onClick={handleupdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
