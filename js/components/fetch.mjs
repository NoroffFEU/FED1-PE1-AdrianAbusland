import { showLoader } from "./loader.mjs";
import { hideLoader } from "./loader.mjs";

export const doFetch = async (method, noroffapi, body) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let accessToken = "";
  if (userInfo) {
    accessToken = userInfo.accessToken;
  }
  showLoader();
  try {
    const response = await fetch(noroffapi, {
      method: method,
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data.data;
  } catch (err) {
    alert("something went wrong");
  } finally {
    hideLoader();
  }
};
