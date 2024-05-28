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
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error(`Fetch failed with status: ${response.status}`);
      const errorText = await response.text();
      console.error(`Error details: ${errorText}`);
      throw new Error("Server error");
    }

    const data = await response.json();

    // Adjust based on what the API actually returns
    return data.data || data;
  } catch (err) {
    console.error("An error occurred:", err);
    alert("Something went wrong while communicating with the server.");
    return null;
  } finally {
    hideLoader();
  }
};

