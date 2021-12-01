import { client } from "./index.js";


async function CreateMovie(data) {
  return await client.db("demo").collection("movies").insertMany(data);
}
async function FilteringMovies(filter) {
  return await client.db("demo").collection("movies").find(filter).toArray();
}
async function FindMovie(id) {
  return await client.db("demo").collection("movies").findOne({ id: id });
}
async function DeleteMovie(id) {
  return await client.db("demo").collection("movies").deleteOne({ id: id });
}
async function UpdateMovie(id, data) {
  return await client
    .db("demo")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export { FilteringMovies, CreateMovie, FindMovie, DeleteMovie, UpdateMovie };
