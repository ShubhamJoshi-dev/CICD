import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const port = 8000;
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
  return res.status(200).json(payload);
});

app.get("/random", (req: Request, res: Response) => {
  const messages = [
    "Working",
    "Service is healthy",
    "Random response generated",
    "Everything looks good",
    "Mock API response",
  ];

  const statuses = ["SUCCESS", "OK", "ACTIVE"];
  const randomItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

  const payload = {
    message: randomItem(messages),
    status: randomItem(statuses),
    requestId: Math.random().toString(36).substring(2, 10),
    time: new Date().toISOString(),
  };

  return res.status(201).json(payload);
});

app.listen(port, () => {
  console.log(`Server is Running on the Port : ${port}`);
});
