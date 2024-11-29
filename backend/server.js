import express from "express";
import cors from "cors";
import "dotenv/config";

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get("/", (req, res) => {
    res.send("Api working");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
