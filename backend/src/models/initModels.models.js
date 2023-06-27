const Users = require("./users");
const Pets = require("./pets");
const PetsVaccinated = require("./petsVaccinated");
const Vaccines = require("./vaccines");

const initModels = () => {
  Pets.belongsTo(Users);
  Users.hasMany(Pets);

  Pets.belongsToMany(Vaccines, {through: PetsVaccinated})
  Vaccines.belongsToMany(Pets, {through: PetsVaccinated})
  
};

module.exports = initModels;
