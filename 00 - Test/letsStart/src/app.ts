import * as express from "express";

const app: express.Express = express();

const port: number = 8000;

app.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: "yoon sang seok", age: 99, friends: ["ss", "ys", "1"] });
});

app.post("/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ person: "yoon" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
