import axios from "axios";

const client = axios.create({
  baseURL: "https://dog.ceo/api",
});

export async function getAllBreeds(): Promise<string[]> {
  const response = await client.get("/breeds/list/all");
  return Object.keys(response.data?.message);
}
export async function getRandomBreedImage(breed: string): Promise<string> {
  const response = await client.get(`/breed/${breed}/images/random`);
  return response.data?.message;
}
