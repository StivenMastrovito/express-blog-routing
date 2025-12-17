import express from "express"
import {calciatori} from "../data.js"

const router = express.Router();

// INDEX
router.get("/", (req, res) => {
    res.json({
        info: {
            count: calciatori.length,
        },
        resp: calciatori,
    })
})

// SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);    
    const calciatore = calciatori.find(elem => elem.id === id);
    res.json(calciatore); 
})

// STORE
router.post("/", (req, res) => {
    res.send("Aggiunta di un calciatore")
})

// UPDATE

router.put("/:id", (req, res) => {
    res.send("Modifica un calciatore")
})

// MODIFY
router.patch("/:id", (req, res) => {
    res.send("Modifica alcune caratteristiche del calciatore")
})

// DESTROY
router.delete("/:id", (req, res) => {
    res.send("Elimina un calciatore")
})

export default router;