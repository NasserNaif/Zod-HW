import express from "express";
import { parkRouter } from "./Router/Park";

const app = express();

app.use(express.json());

app.use(`/park`, parkRouter);

app.listen(5300);
