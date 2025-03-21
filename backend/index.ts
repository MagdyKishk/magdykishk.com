import express, { Request, Response } from "express"
import dotenv from "dotenv"
import path from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Routers
import apiRouter from "./routers/api.router";
import { fileURLToPath } from "url";

// Load enviroment variables into process.env
dotenv.config()

// Initial express app
const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Set up static root
app.use(express.static(path.join(__dirname, "static")));

// Install Routers
app.get("/", (req: Request, res: Response) => {
    res.render("landing", { edition: "1.2" }); // Correct way to render a Pug template
});
app.use("/api", apiRouter)

// Start Listening
app.listen(5931, ()=>{
    console.log("server Ruuning on 5931")
})
