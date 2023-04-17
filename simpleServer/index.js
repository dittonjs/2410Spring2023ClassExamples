import express from "express";
import path from "path";
import url from "url";

const users = [
  {id: 1, name: "<script type='text/javascript'>console.log('stealing your data')</script>", age: 30},
  {id: 2, name: "Joseph Ditton 2", age: 31},
  {id: 3, name: "Joseph Ditton 3", age: 32},
  {id: 4, name: "Joseph Ditton 4", age: 33},
  {id: 5, name: "Joseph Ditton 5", age: 34},
]

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use((req, res, next) => {
  console.log(`Request made ${req.method} to ${req.path}`);
  next();
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/profile", (req, res) => {
  console.log("Profile Endpoint");
  res.sendFile(path.join(__dirname, "/profile.html"))
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});


app.listen(3000,  () => {
  console.log("server running on port 3000 yo!");
});
