import axios from "axios";
import { URL } from "../../../app/config";

const getListUser = () => {
  return function (dispatch) {
    const config = {
      method: "get",
      url: `${URL}user`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(({ data }) => {
        console.log(data,"cek data");
        dispatch({ type: "USER_LIST", payload: data.data });
      })
      .catch((err) => {
        if (err.response.status === 403) {
          return null;
        }
      });
  };
};

export default getListUser;
