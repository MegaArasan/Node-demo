import { client } from "./index.js";
import { ObjectId } from "mongodb";

async function CreateMovie(data) {
  return await client.db("demo").collection("movies").insertMany(data);
}
async function FilteringMovies(filter) {
  return await client.db("demo").collection("movies").find(filter).toArray();
}
async function FindMovie(_id) {
  return await client
    .db("demo")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
async function DeleteMovie(_id) {
  return await client
    .db("demo")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
async function UpdateMovie(_id, data) {
  return await client
    .db("demo")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
export { FilteringMovies, CreateMovie, FindMovie, DeleteMovie, UpdateMovie };
