import axios from "axios";
import { URL } from "../../../app/config";
import getListUser from "./getListUser";

export const updateUser = (nama, email, username, id) => {
  return function (dispatch) {
    var data = JSON.stringify({
      nama: nama,
      email: email,
      username: username,
    });
    const config = {
      method: "put",
      url: `${URL}user/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        alert("sukses");
        dispatch(getListUser());
      })
      .catch((err) => {
        if (err.response.status === 403) {
          return null;
        }
        alert(err.response.data.message);
      });
  };
};
