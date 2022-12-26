import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import listing1 from "../Assets/listing1.png";
import listing2 from "../Assets/listing2.png";
import listing3 from "../Assets/listing3.png";
import listing4 from "../Assets/listing4.png";
import listing5 from "../Assets/listing5.png";
import listing6 from "../Assets/listing6.png";
import Feature1 from "../Assets/Feature1.svg";
import Feature2 from "../Assets/Feature2.svg";
import Feature3 from "../Assets/Feature3.svg";
import Feature4 from "../Assets/Feature4.svg";
import bed from "../Assets/Bed.png";
import sofa from "../Assets/couch.png";
import dining from "../Assets/dining.png";
import diningChair from "../Assets/diningChair.png";
import sidetable from "../Assets/bed-side-table.png";
import centertable from "../Assets/center-table.png";
import wardrobe from "../Assets/wardrobe.png";
import tv from "../Assets/tv-unit.png";
import shoerack from "../Assets/shoe-racks.png";
import poojaMandapam from "../Assets/pooja-mandapam.png";
const blogsData = [
  {
    topic: "INTERIOR DESIGN",
    title: "INTERIOR DESIGN TRENDS THAT WILL BE MASSIVE IN 2022",
    date: "16 DEC 2022",
    image: blog1,
  },
  {
    topic: "INTERIOR DESIGN",
    title: "HOW TO DECORATE YOUR HOME & HALLWAY for the Summer Season",
    date: "16 DEC 2022",
    image: blog2,
  },
  {
    topic: "LIVING ROOM",
    title: "MODERN WALL TV CABINETS & UNITS FOR YOUR LIVING ROOM",
    date: "16 DEC 2022",
    image: blog3,
  },
];
const listingProducts = [
  {
    image: listing1,
    desc: "Natural Finish Orchid Queen Bed - With Side Storage  ",
  },
  { image: listing2, desc: "Rosewood Finish Garden  Bed- With Side Storage  " },
  {
    image: listing3,
    desc: "Dark Walnut Finish Magnolia  Bed- With Hydraulic Storage  ",
  },
  {
    image: listing4,
    desc: "Natural Finish Hibiscus Queen Bed - With Side Storage  ",
  },
  { image: listing5, desc: "Rosewood Finish Lily  Bed- With Side Storage  " },
  {
    image: listing6,
    desc: "Dark Walnut Finish Laven Bed- With Hydraulic Storage  ",
  },
];

const filterData = {
  "Bed Size": ["Single", "Queen", "King", "Super King"],
  "Storage Type": ["No Storage", "Side Storage", "Hydraulic Storage"],
  Finishes: ["Natural", "Dark Walnut", "Light Walnut", "Rosewood"],
};

const feature = [
  { name: "feature1", image: Feature1, description: "3,00,000 sq ft factory" },
  { name: "feature4", image: Feature4, description: "ISO & FSC Certified" },
  { name: "feature2", image: Feature2, description: "500 + Range of Products" },
  { name: "feature3", image: Feature3, description: "300 + Skilled employees" },
];

const products = [
  { name: "Beds", image: bed },
  { name: "Sofas & Armchairs", image: sofa },
  { name: "Dining Tables", image: dining },
  { name: "Dining Chairs", image: diningChair },
  { name: "Side Table", image: sidetable },
  { name: "Center Table", image: centertable },
  { name: "Cupboards", image: wardrobe },
  { name: "TV Units", image: tv },
  { name: "Shoe Racks", image: shoerack },
  { name: "Pooja Mandapam", image: poojaMandapam },
];
export { blogsData, listingProducts, filterData, products, feature };
