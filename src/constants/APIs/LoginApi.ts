import API from "./API";

export const loginUser = async (credintials) => {
  //console.log(credintials);

  try {
    let data = await API.post(`/login`, credintials);
    if (data) {
      console.log(data);
      return data;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};
