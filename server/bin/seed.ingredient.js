const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const IngredientModel = require("../models/Ingredient");

const ingredient = [
  {
    name: "Wheatgrass",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079755/YourSuper/ingredients_img/ingredient-wheatgrass_jjfdel.png",
    description:
      "wheatgrass contains chlorophyll, amino acids, minerals, vitamins and enzymes !",
  },
  {
    name: "Barley Grass",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079754/YourSuper/ingredients_img/ingredient-barley-grass_lyixpm.png",
    description:
      "Barley grass contains vitamins, particularly B vitamins, as well minerals such as potassium , calcium, iron, phosphorus , and magnesium !",
  },
  {
    name: "Moringa",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079753/YourSuper/ingredients_img/ingredient-moringa_is1sy2.png",
    description:
      "Moringa may lead to modest reductions in blood sugar and cholesterol !",
  },
  {
    name: "Baobab",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079755/YourSuper/ingredients_img/ingredient-baobab_b6wik2.png",
    description:
      "Baobab is high in fiber and has been shown to reduce feelings of hunger which could promote weight loss !",
  },
  {
    name: "Spirulina",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079755/YourSuper/ingredients_img/ingredient-spirulina_v692ri.png",
    description:
      "Spirulina is a potent source of nutrients. It contains a powerful plant-based protein called phycocyanin !",
  },
  {
    name: "Chlorella",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079757/YourSuper/ingredients_img/ingredient-chlorella_g0ma1o.png",
    description:
      "Chlorella is a type of algae that packs a big nutrient punch, as it's a good source of several vitamins, minerals and antioxidants !",
  },
  {
    name: "Maca",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079754/YourSuper/ingredients_img/ingredient-maca_ecejz3.png",
    description:
      "Maca enhance your mood !",
  },
  {
    name: "Hibiscus",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079755/YourSuper/ingredients_img/ingredient-hibiscus_teqjcy.png",
    description:
      "hibiscus are uncommon but might include temporary stomach upset or pain, gas, constipation, nausea, painful urination, headache, ringing in the ears, or shakiness !",
  },
  {
    name: "Amla",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079755/YourSuper/ingredients_img/ingredient-amla_y3ywxm.png",
    description:
      "Amla berries are rich in antioxidants, which reduce the risk of chronic health conditions like heart disease, diabetes, and cancer !",
  },
  {
    name: "Beetroot",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079756/YourSuper/ingredients_img/ingredient-beetroot_mvlyes.png",
    description:
      "Beetroot improve athletic performance, reduce blood pressure, and increase blood flow !",
  },
  {
    name: "Shatavari",
    ingredientImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079757/YourSuper/ingredients_img/ingredient-shatavari_iyccr0.png",
    description:
      "Shatavari is thought to have a diuretic effect that inhibits the body's ability to absorb sodium !",
  },
];

IngredientModel.deleteMany()
  .then(() => IngredientModel.create(ingredient))
  .then((documents) => {
    console.log("THE INGREDIENT SEEDS HAVE BEEN PLANTED 🌱");
    console.log(documents);
  })
  .catch((error) => {
    console.log(error);
  });
