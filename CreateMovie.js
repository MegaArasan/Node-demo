import { ObjectId } from "mongodb";
import { client } from "./index.js";

async function CreateMovie(data) {
  return await client.db("demo").collection("movies").insertMany(data);
}
async function FilteringMovies(filter) {
  return await client.db("demo").collection("movies").find(filter).toArray();
}
async function FindMovie(id) {
  console.log(id);
  return await client
    .db("demo")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
async function DeleteMovie(id) {
  return await client
    .db("demo")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
async function UpdateMovie(id, data) {
  return await client
    .db("demo")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
export { FilteringMovies, CreateMovie, FindMovie, DeleteMovie, UpdateMovie };
