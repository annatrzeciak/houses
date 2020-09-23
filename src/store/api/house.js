import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};
export async function getHouses() {
  return await axios.get("/api/houses", { headers });
}

export async function getHouse(houseId) {
  return await axios.get("/api/houses/" + houseId, { headers });
}
