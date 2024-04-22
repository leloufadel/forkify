const getJSON = async function (url) {
    try{
const res = await fetch(`${url}/${id}`);
  const data = await res.json();

  if (!res.ok) {
      // If response is not ok (HTTP error status), throw a new Error
      throw new Error(`Failed to fetch recipe (${res.status} ${res.status})`);
  }
} catch (err) {
    throw(err);
}};