const express = require("express");

const Animals = require("./animals-model");
const router = express.Router();

router.get("/", (req, res) => {
  Animals.find()
    .then(animals => {
      res.json(animals);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get animals" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Animals.findById(id)

    .then(animals => {
      const animal = animals[0];

      if (animal) {
        res.json(animal);
      } else {
        res
          .status(404)
          .json({ message: "Could not find animal with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get animal" });
    });
});
router.get("/:id/zoos", (req, res) => {
  const { id } = req.params;

  Animals.findZoos(id)

    .then(zoos => {
      // const animal = animals[0];

      // if (animal) {
      res.json(zoos);
      // } else {
      //   res
      //     .status(404)
      //     .json({ message: "Could not find animal with given id." });
      // }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get animal" });
    });
});

router.post("/", (req, res) => {
  const animalData = req.body;

  Animals.insert(animalData)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new animal" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Animals.update(id, changes)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Animals.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res
          .status(404)
          .json({ message: "Could not find animal with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete animal" });
    });
});

module.exports = router;
