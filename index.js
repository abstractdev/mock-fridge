const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const fridges = [
  {
    fridge_state: "ny",
    name: "cooperparkfridge",
    display_name: "Cooper Park Fridge",
    address: "76 Kingland Ave, Brooklyn, NY 11221",
    instagram: "https://www.instagram.com/cooperparkfridge/",
    last_edited: 12922,
    profile_image: "https://i.imgur.com/8r9kCox.png",
  },
  {
    fridge_state: "ny",
    name: "eastwilliamsburgcommunityfridge",
    display_name: "East Williamsburg Community Fridge",
    address: "45 Highland Ave, Brooklyn, NY 11211",
    instagram: "https://www.instagram.com/eastwburgfridge/",
    last_edited: 13022,
    profile_image: "https://i.imgur.com/om8EUwW.png",
  },
];

app.use(cors());
app.get("/", (req, res) => {
  res.json(fridges);
});
app.listen(process.env.PORT || 3000);
