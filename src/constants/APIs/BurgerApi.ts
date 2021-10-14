import API from "./API";

export const Ingredients = async () => {
  try {
    const token = sessionStorage.getItem("userToken");
    let data = await API.get(`/ingredients`, {
      headers: {
        Authorization: `${token}`
      }
    });
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
