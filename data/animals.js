const animals = [
  { reptiles: "lizard", fourLegs: true },
  { reptiles: "crocodiles", fourLegs: true },
  { reptiles: "snake", fourLegs: false },
];

module.exports = {
  getAll: function () {
    return animals;
  },
};
