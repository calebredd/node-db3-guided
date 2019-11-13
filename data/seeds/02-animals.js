exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("animals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("animals").insert([
        { zoo_id: 1, name: "Jaguar", species: "cat" },
        { zoo_id: 2, name: "Cheetah", species: "cat" },
        { zoo_id: 3, name: "Lion", species: "cat" },
        { zoo_id: 1, name: "Panther", species: "cat" },
        { zoo_id: 2, name: "Grizzly", species: "bear" },
        { zoo_id: 3, name: "Anaconda", species: "snake" },
        { zoo_id: 1, name: "Polar Bear", species: "bear" },
        { zoo_id: 2, name: "Wolf", species: "canine" },
        { zoo_id: 3, name: "Owl", species: "bird" }
      ]);
    });
};
