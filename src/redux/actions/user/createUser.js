import axios from "axios";
import { URL } from "../../../app/config";
import getListUser from "./getListUser";

export const createUser = (nama, email, username, password) => {
  return function (dispatch) {
    var data = JSON.stringify({
      nama: nama,
      email: email,
      username: username,
      password: password,
    });
    dispatch({ type: "IS_LOADING", payload: true });
    const config = {
      method: "post",
      url: `${URL}user`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        alert("sukses");
        dispatch(getListUser());
        dispatch({ type: "IS_LOADING", payload: false });
      })
      .catch((err) => {
        dispatch({ type: "IS_LOADING", payload: false });
        alert(err.response.data.message);
      });
  };
};
