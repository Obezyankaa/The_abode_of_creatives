import express from "express";
import ReactDOM from "react-dom/server";
import { indexHtmlTemplate } from "./indexHtmlTemplate";
import { App } from '../App.tsx'
const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexHtmlTemplate(ReactDOM.renderToString(App())));
});

app.get("/auth", (req, res) => {
  // console.log(req);
  req.query.code
  res.send(indexHtmlTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
