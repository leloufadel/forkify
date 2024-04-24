import { API_URL } from "./config";
import { TIMEOUT_SEC } from "./config";
 const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

// export const getJSON = async function (url) {
//     try{
//         const fetchPro = fetch(url);
// const res = await Promise.race(([`${fetchPro}`, timeout(TIMEOUT_SEC)]));
// // const res = await (fetch(url));

//   const data = await res.json();
//   if (!res.ok) {
//       // If response is not ok (HTTP error status), throw a new Error
//       throw new Error(`Failed to fetch recipe (${res.status} ${res.status})`);
//   }
//   return data;

// } catch (err) {
//     throw(err);
// }};

export const getJSON = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};