import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.get("/health", (req: Request, res: Response) => {
  const payload = {
    message: "Working",
    time: new Date().toDateString(),
  };
  return res.status(201).json(payload);
});

app.listen(port, () => {
  console.log(`Server is Running on the Port : ${port}`);
});
