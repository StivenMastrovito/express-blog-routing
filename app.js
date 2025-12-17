import express from "express";
import calciatoriRouter from "./routers/calciatoriRouter.js";




const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Ciao, questa è la mia API sui calciatori");
})

app.listen(port, () => {
    console.log("Porta aperta su ", port);
})



app.use("/calciatori", calciatoriRouter);
