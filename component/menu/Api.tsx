import React from "react";
import { json } from "stream/consumers";
// export async function Apidata() {
//   let apiData = await fetch("https://appreddonerandpizzas.powerobjects.site");
//   apiData = await apiData.json();
//   console.log(apiData);
//   return apiData;
// }
const TAKEAWAY_MENU =
  "https://appreddonerandpizzas.powerobjects.site/api/menu/takeaway";
export const redDonarApi = async () => {
  try {
    const response = await fetch(TAKEAWAY_MENU, {
      method: "GET",
      headers: {
        // "Content-Type": "application/json",
        ApiKey: "jhONba3MifheqhIleC4rtsilj5jr",
        // Add any other headers as needed
      },
    });
    const data = await response.json();
    console.log("this is Red doner & Kebabs Restaurant", data);
    // result = await result.json();

    // return result;
    return data;
  } catch (error: any) {
    console.log("this is new error", error);
  }
};
