import express from 'express';

const app = express()
const PORT = 3450;

app.get("/", (req, res)=>{
  res.send("hello world")
})

app.get("/save", (req, res)=>{
  res.send("getting saved data...")
  console.info("getting saved data...")
})

app.post("/", (req, res)=>{
  res.send("hello world")
  console.info("getting saved data...")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT} \n http://localhost:${PORT}`);
})
