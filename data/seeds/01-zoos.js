exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("zoos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("zoos").insert([
        { name: "San Diego Zoo", address: "123 Surfer Ln San Diego, CA 12345" },
        {
          name: "Phoenix Zoo",
          address: "456 Papago Park Ln Scottsdale, AZ 85282"
        },
        {
          name: "New York Zoo",
          address: "789 N Broadway Ave New York City, NY 10223"
        }
      ]);
    });
};
