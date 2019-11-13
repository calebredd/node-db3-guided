const express = require("express");

const db = require("../data/db-config.js");

function find() {
  return db("animals");
}

function findById(id) {
  return db("animals").where({ id });
}
function findZoos(id) {
  return db("animals")
    .join("zoos", "zoos.id", "animals.zoo_id")
    .select("zoos.id", "zoos.name", "zoos.address")
    .where("zoos.id", id);
}

function insert(animal) {
  return db("animals").insert(animal);
}

function update(id, changes) {
  return db("animals")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("animals")
    .where({ id })
    .del();
}

module.exports = { find, findById, findZoos, remove, insert, update };
