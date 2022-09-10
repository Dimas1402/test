import axios from "axios";
import { URL } from "../../../app/config";
import getListUser from "./getListUser";

export const removeUser = (id) => {
  return function (dispatch) {
   
    const config = {
      method: "delete",
      url: `${URL}user/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        console.log(response)
        alert(response.data.message);
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
