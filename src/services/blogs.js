import { httpAxios } from "../helper/httpAxios";

export async function blogs() {
  const result = await httpAxios
    .get("/api/get-blogs")
    .then((response) => response.data);
  return result;
}
