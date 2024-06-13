const baseURL = "http://localhost:3001";

const styles = [
  {
    id : 1,
    imageURL : "https://prettyaspearlz.com/cdn/shop/files/IMG-3170.jpg?v=1695345697",
    name : "1920 School Girl Sweater",
    price: 45.00,
    stars : 5,
    description : "Thin sweater material with 1920 on the chest and ΖΦΒ on the left sleeve wrist"
  },
  {
    id : 2,
    imageURL : "https://prettyaspearlz.com/cdn/shop/products/image_5f5e1cf1-ffa0-4793-b945-b2c1a03f0b42.jpg?v=1655764111",
    name : "The Zeta Chloe",
    price : 89.00,
    stars : 5,
    description : "This is a faux wrap dress with belt and pockets…this dress fits true to size. Perfect for conferences. Zeta collection"
  },
  {
    id: 3,
    imageURL : "https://prettyaspearlz.com/cdn/shop/products/image_993ff25e-ce21-40ed-9f01-75c323344296.jpg?v=1654948013",
    name : "She Got Flare",
    price : 99.00,
    stars : 4,
    description : "One piece flare dress with pockets and a belt see size chart!\n Will feature sorority shield"
  },
  {
    id: 4,
    imageURL : "https://prettyaspearlz.com/cdn/shop/files/IMG-3408.heic?v=1697114156",
    name : "Zeta Phi Beta Clutch",
    price : 65.00,
    stars : 5,
    description : "Black ZΦΒ clutch .. several compartments inside, including a shoulder strap. Vegan leather",
  },
  {
    id: 5,
    imageURL : "https://prettyaspearlz.com/cdn/shop/products/image_58ccdc62-b539-453e-ba42-d4c0bf833bce.jpg?v=1653259891",
    name : "Mz Educated",
    price : 50.00,
    stars : 3,
    description : "IMPORTANT NOTICE : the dress features white trim on the sleeves. This MIDI MAXI length dress is the perfect fit to all your beautiful  curves. It hugs in just the right places. These dresses run to scale. Please see size chart with coordinating numbers."
  },
  {
    id : 6,
    imageURL : "https://prettyaspearlz.com/cdn/shop/files/image_309eb015-3c22-4070-b5b2-b81907ba5fa0.heic?v=1688142969",
    name : "Denim Clutch Zeta Style",
    price: 65.00,
    stars : 4,
    description : "Zeta inspired denim clutch bag with zipper pockets and crossbody straps!! "
  }
];

export default class StyleService {
  constructor(baseurl) {
    this.baseurl = baseurl || baseURL;
  } 

  async allStyles(){
    return styles;
  }
}