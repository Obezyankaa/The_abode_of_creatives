import express from "express";
import ReactDOM from "react-dom/server";
import { indexHtmlTemplate } from "./indexHtmlTemplate";
import { App } from '../App.tsx'
import axios from "axios";
const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexHtmlTemplate(ReactDOM.renderToString(App())));
});

app.get("/auth", (req, res) => {
    console.log('TYT==>>', req.query.code);
    axios.post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {
      auth: { username: process.env.CLIENT_ID, password: 'RuBdMtxDZwperCHSvttIqD-Dyf_aZw' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }).then(({data}) => {
          res.send(indexHtmlTemplate(ReactDOM.renderToString(App()),data['access_token']));
     })
    .catch(console.log)
});


app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
