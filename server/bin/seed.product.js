require("../config/dbConnection");
const ProductModel = require("../models/Product");
const IngredientModel = require("../models/Ingredient");

const products = [
  {
    name: "Super Green",
    productImg: "./../public/images/products_img/product_supergreen.jpg",
    description:
      "If you are struggling with eating enough green veggies every day, know you are not alone! Simply add one spoon of the Super Green Mix to your water, smoothie or breakfast. This mix makes it easy to get your greens every day !",
    price: 27.9,
    quantity: 10396,
    reference: "PROD01",
    ingredients: [],
    saleByPercentage: 0,
    saleByValue: 5,
  },
  {
    name: "Moon Balance",
    productImg: "./../public/images/products_img/product_moonbalance.jpg",
    description:
      "Hormones influence your mood, quality of sleep, ability to focus, skin & hair health, weight, and cognitive function. This blend combines 6 powerful superfood ingredients that have been traditionally used in Ayurvedic medicine.",
    price: 27.9,
    quantity: 8569,
    reference: "PROD02",
    ingredients: [],
    saleByPercentage: 0,
    saleByValue: 0,
  },
  {
    name: "Skinny Protein",
    productImg: "./../public/images/products_img/product_skinnyprotein.jpg",
    description:
      "Add extra greens to your post-workout protein shakes or snacks.  62% high quality vegan protein combined with 3 green superfoods for that extra boost of micronutrients.",
    price: 32.9,
    quantity: 4689,
    reference: "PROD03",
    ingredients: [],
    saleByPercentage: 10,
    saleByValue: 0,
  },
  {
    name: "Plant Collagen Support",
    productImg: "./../public/images/products_img/product_plantcollagen.png",
    description:
      "This unique beauty mix combines 6 organic superfoods (including tremella mushroom and aloe vera) to nourish your body with powerful vitamins and plant compounds.",
    price: 27.9,
    quantity: 7986,
    reference: "PROD04",
    ingredients: [],
    saleByPercentage: 0,
    saleByValue: 0,
  },
  {
    name: "Chocolate Lover",
    productImg: "./../public/images/products_img/product_chocolatelover.jpg",
    description:
      "Ditch the unhealthy treats and curb your cravings with antioxidant-rich chocolatey goodness. This mix of raw cacao, carob, coconut, chia seeds and lucuma naturally contains magnesium and essential fatty acids!",
    price: 27.9,
    quantity: 3553,
    reference: "PROD05",
    ingredients: [],
    saleByPercentage: 0,
    saleByValue: 0,
  },
  {
    name: "Plant Protein",
    productImg: "./../public/images/products_img/product_plantprotein.jpg",
    description:
      "Innovative mix of plant-based protein and nutrient-rich superfoods. Thanks to its neutral flavour Plant Protein can be added to any recipe.",
    price: 32.9,
    quantity: 12798,
    reference: "PROD06",
    ingredients: [],
    saleByPercentage: 0,
    saleByValue: 3,
  },
];



IngredientModel.find()
  .then((ingredientDocuments) => {
    for (let i = 0; i < 4; i++) {
      products.forEach((product) => {
        const randomIndex = Math.floor(
          Math.random() * (ingredientDocuments.length - 1 - 0 + 1) + 0
        );
        product.ingredients.push(ingredientDocuments[randomIndex]._id);
      });
    }
    ProductModel.deleteMany()
      .then(() => ProductModel.create(products))
      .then((documents) => {
        console.log("THE PRODUCT SEEDS HAVE BEEN PLANTED 🌱");
        console.log(documents);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
