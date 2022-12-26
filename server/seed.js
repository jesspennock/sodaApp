let bases = [
    {
      name: "Coke",
      diet: false
    },
    {
      name: "Diet Coke",
      diet: true
    },
    {
      name: "Mtn. Dew",
      diet: false
    },
    {
      name: "Diet Mtn. Dew",
      diet: true
    },
    {
      name: "Dr. Pepper",
      diet: false
    },
    {
      name: "Diet Dr. Pepper",
      diet: true
    },
    {
      name: "Sprite",
      diet: false
    },
    {
      name: "Sprite Zero",
      diet: true
    },
    {
      name: "Barqs Rootbeer",
      diet: false
    },
    {
      name: "Diet Barqs Rootbeer",
      diet: true
    },
]
  
let extras = [
    {
      name: "Vanilla Shot"
    },
    {
      name: "Cherry Shot"
    },
    {
      name: "Coconut Shot"
    },
    {
      name: "Raspberry Shot"
    },
    {
      name: "Strawberry Shot"
    },
    {
      name: "Peach Shot"
    },
    {
      name: "Blueberry Shot"
    },
    {
      name: "Passionfruit Shot"
    },
    {
      name: "Watermelon Shot"
    },
    {
      name: "Pomegranite Shot"
    },
    {
      name: "Pineapple Shot"
    },
    {
      name: "Lemon Wedge"
    },
    {
      name: "Lime Wedge"
    },
    {
      name: "Coconut Cream"
    }
]
  
let favorites = [
    {
      name: "Reactive Rootbeer",
      baseId: 9,
      extraId: 1
    },
    {
      name: "Reactive Rootbeer",
      baseId: 9,
      extraId: 14
    },
    {
      name: "ConsoleLog Cola",
      baseId: 1,
      extraId: 2
    },
    {
      name: "ConsoleLog Cola",
      baseId: 1,
      extraId: 13
    },
    {
      name: "Dr. Postman",
      baseId: 6,
      extraId: 7
    },
    {
      name: "Dr. Postman",
      baseId: 6,
      extraId: 14
    },
    {
      name: "getElementByI-Dew",
      baseId: 3,
      extraId: 8
    },
    {
      name: "getElementByI-Dew",
      baseId: 3,
      extraId: 11
    },
    {
      name: "getElementByI-Dew",
      baseId: 3,
      extraId: 12
    },
]

const seed = async() => {
    const {Base, Favorite, Extra} = require("./util/model")
    await Base.bulkCreate(bases)
    await Extra.bulkCreate(extras)
    await Favorite.bulkCreate(favorites)
    return
}

  module.exports = {seed}