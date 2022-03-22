import { async } from "regenerator-runtime";
import { TIME_OUT_SECOND } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIME_OUT_SECOND)]);
    const recipeInfo = await res.json();
    if (!res.ok) throw new Error(`${recipeInfo.message} (${res.status})`);
    return recipeInfo;
  } catch (err) {
    throw err;
  }
};
