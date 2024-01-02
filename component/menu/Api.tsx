import React from "react";
import { json } from "stream/consumers";
export async function Apidata() {
  let apiData = await fetch("https://app.navankebabs.com/api/Menu/takeaway");
  apiData = await apiData.json();
  console.log(apiData);
  return apiData;
}
async function Api() {
  return <h2>this is api</h2>;
}

export default Api;
