const express = require("express");

const investmentGraph = require("../graph/investmentGraph");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const { company } = req.body;

        const result = await investmentGraph.invoke({ //runs the entire graph

            company

        });

        res.json(result);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message || "Something went wrong"

        });

    }

});

module.exports = router;