const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./Images");
  },
  filename(req, file, callback) {
    callback(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

const port = 8080;
app.use(cors());

let images = [];
let data = {
  data: [
    {
      id: 1,
      product_name: "Jeans",
      price: 300,
      product_image: [
        "https://i.factcool.com/catalog/products/13/12/56/13-12-56149d4118102_1.jpg?quality=mediumHigh",
        "https://www.plein.com/on/demandware.static/-/Sites-plein-master-catalog/default/dw1ce9d108/images/large/SABC-MDT2706-PDE004N_08HS_mf.jpg",
        "https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw3cfbf48a/images/B0/B00149-/2000x/B00149-863_A.jpg?sw=1120&sh=1680",
      ],
      favorite: false,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 2,
      product_name: "Blouse",
      price: 300,
      product_image: [
        "https://cdn.shopify.com/s/files/1/0516/1179/5648/products/Luca-Faloni_Portofino-Linen-Shirt_Made-In-Italy_Capri-Blue_3056_R_1024x1024@2x.jpg?v=1625041185",
        "https://www.sarto.ro/image/cachewebp/catalog/2020/Pulovere/2%20Pulover%20Fawn/pulover-barbati-fawn-casual-office-uni-bej-lana-casmir-matase-sarto-bespoke-d-2000x2857.webp",
        "https://cdn.contentspeed.ro/dispotrading.websales.ro/cs-content/cs-photos/products/original/bluze-de-iarna-flausate-rosii-winter-l_20749_1_16672170309401.jpg",
      ],
      favorite: false,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 3,
      product_name: "Sweatpants",
      price: 300,
      product_image: [
        "https://www.bolf.ro/rum_pl_Pantaloni-joggers-gri-Bolf-XW01-69359_16.jpg",
        "https://gate.bwcdn.net/media/2021/12/5/3/zakladne-basic-teplaky-s-vreckami-damske-6201371-89-5363610-size-large-c-v-1-compressed.jpg",
        "https://cdn.shopify.com/s/files/1/0516/1179/5648/products/Cashmere-Camel-Beige-Joggers-Made-in-Italy-_0844-_1_70847715-3478-4fd7-91c2-0ab741366810_1024x1024@2x.jpg?v=1624627258",
      ],
      favorite: false,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 4,
      product_name: "Zephyr",
      price: 300,
      product_image: [
        "https://d010203.bibloo.cz/_galerie/varianty/205/2053245-z.jpg",
        "https://d1nv4a8ag88q2j.cloudfront.net/images/detailed/106/9884a5495f0b441a28b22822474e6d28.jpg?t=1599296773",
        "https://media.remix.eu/files/28-2022/Majki-potnik---116248120a.jpg",
      ],
      favorite: false,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 5,
      product_name: "Sneakers",
      price: 300,
      product_image: [
        "https://img01.ztat.net/article/spp-media-p1/1cd422f893f44b7a857c38a587b0ccb4/b30fe60c77484664be9b537cabff3561.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/1cd422f893f44b7a857c38a587b0ccb4/b30fe60c77484664be9b537cabff3561.jpg?imwidth=1800&filter=packshot",
        "https://sdeals.machteamsoft.ro/teamdeals/pictures/deals/181/2439181/deal-v15747760781.JPG",
      ],
      favorite: false,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 6,
      product_name: "T-shirt",
      price: 300,
      product_image: [
        "https://assets.tqtypmfe.on-eva.io/image/1000/1000/f17d4279-972b-4a8a-bb7b-7c077e5a45bb.jpg",
        "https://www.topsportcraiova.ro/files/images/products/Nike-M-JORDAN-AIR-PERF-DF-SS-HOODIE-TEE-DA9871010-2_498.jpg",
        "https://gomagcdn.ro/domains/escapesport.ro/files/product/original/tricou-nike-ar5004-010-2033-2593.jpg",
      ],
      favorite: false,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 7,
      product_name: "Dress",
      price: 300,
      product_image: [
        "https://img.ltwebstatic.com/images3_pi/2022/11/16/1668575750034a836c10679f2fbe25cb82e9e10d09_thumbnail_600x.webp",
        "https://images.hugoboss.com/is/image/boss/hbeu50472469_684_350?$large$=&fit=crop,1&align=1,1&wid=1024&qlt=80&fmt=webp",
        "https://litb-cgis.rightinthebox.com/images/x/202108/bps/product/inc/ebqheg1628499783861.jpg",
      ],
      favorite: true,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
    {
      id: 8,
      product_name: "Slippers",
      price: 300,
      product_image: [
        "https://fdcdn.akamaized.net/m/780x1132/products/39357/39356462/images/res_112fb59e74364a9830716740c6cd153e.jpg?s=cslBzVNsCdgX",
        "https://www.fashiondays.ro/p/papuci-flip-flop-de-panza-cu-logo-discret-femei-tommy-hilfiger-p5634431-1/?gtm_data=2||GlobalProductListing||gpl+%7C+Women+%7C+Footwear+%7C+SLIPPERS||N%2FA||N%2FA#",
        "https://fdcdn.akamaized.net/m/780x1132/products/47973/47972873/images/res_4b2b99b372325939f1530eb5bc246245.jpg?s=FAkICOmE8_It",
      ],
      favorite: true,
      message: `Hi I'm here for you`,
      data: "23 november 2020",
      rate: 2,
    },
  ],
};
app.use("/Images", express.static("./Images"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/get", (req, res) => {
  res.send(data);
});
app.get("/search", (req, res) => {
  try {
    const userQuery = req.query;

    const filterProducts = data.data.filter((info) => {
      const prodLow = info.product_name.toLowerCase();
      if (prodLow.includes(Object.values(userQuery))) {
        return info;
      }
    });
    res.send({ data: filterProducts });
  } catch (err) {
    res.send(err.message);
  }
});
app.post("/api/upload", upload.array("photo", 3), (req, res) => {
  images.unshift(req.files.map((item) => item.path).toString());
  console.log();
  res.status(200).json({
    message: "success!",
  });
});

app.get("/get/favorite", (req, res) => {
  const data1 = data.data.filter((item) => {
    if (item.favorite === true) {
      return item;
    }
  });
  res.send({ data1 });
});
app.post("/post", (request, response) => {
  let id = data.data.length + 1;
  data.data.push({ id, favorite: false, rate: 2, ...request.body });
  console.log(request.body);
  response.send(data);
});

app.put("/put", (req, res) => {
  const { id } = req.body;

  const index = data.data.findIndex((p) => p.id === id);
  if (index !== -1) {
    data.data[index].favorite = !data.data[index].favorite;
  }
  return res.send(data);
});
app.put("/put/star", (req, res) => {
  const { id } = req.body;
  const { rate } = req.body;
  const index = data.data.findIndex((p) => p.id === id);
  if (index !== -1) {
    data.data[index].rate = rate;
  }
  return res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
