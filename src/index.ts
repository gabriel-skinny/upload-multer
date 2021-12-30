import express from "express"
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(routes);
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});