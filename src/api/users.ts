import axios from "axios";

export function getUsers(){
  return axios
    // eslint-disable-next-line no-restricted-globals
    .get("https://randomuser.me/api?results=19")
    .then(res => res.data)
}