export enum ProductCategory {
    Shirts = "shirts",
    Pants = "pants",
    Shoes = "shoes",
  }
  
  export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    description: string;
    cover: string;
    coverCredits: string;
    category: ProductCategory;
  }
  
  export const products: Product[] = [
    {
      id: 32,
      name: "SempreGZ",
      slug: "shirt-sempre-gz",
      price: 19.01,
      description:
        "Manifesta teu orgullo cultural con esta camiseta de estilo clásico e un eslogan sentido: Sempre Galiza!.",
      cover: "https://ih1.redbubble.net/image.844340600.5685/ssrco,classic_tee,womens,5a1f32:a6197194c6,front_alt,square_product,600x600.jpg",
      coverCredits:
        "La Chataigne Galicienne",
      category: ProductCategory.Shirts,
    },
    {
      id: 18,
      name: "Sotaque Galego",
      slug: "shirt-sotaque-galego",
      price: 19.01,
      description:
        "Un idioma, a nosa fala, é o máis grande tesouro para un pobo. Eu gosto (moito) teu sotaque galego. Ilustración vintage.",
      cover: "https://ih1.redbubble.net/image.844331806.9005/ssrco,chiffon_top,womens,black,front,square_product,x600-bg,f8f8f8.1u2.jpg",
      coverCredits:
      "La Chataigne Galicienne",
      category: ProductCategory.Shirts,
    },
    {
      id: 21,
      name: "MiR",
      slug: "shirt-m-i-r-panal",
      price: 30.35,
      description:
        "A palabra rusa MIR quere dicir paz. E de aí non nos van mover. Non á guerra!",
      cover: "https://ih1.redbubble.net/image.1077740962.6443/gptr,1265x,front,black-c,330,402,600,600-bg,f8f8f8.jpg",
      coverCredits:
      "La Chataigne Galicienne",
      category: ProductCategory.Shirts,
    },
  
    {
      id: 49,
      name: "T Shirt 32",
      slug: "t-shirt-32",
      price: 99,
      description:
        "Stay Cool and Dry with the T Shirt 32 from Ryan Hoffman Collection. Relax, run, dream.",
      cover: "/products/ryan-hoffman-6Nub980bI3I-unsplash.webp",
      coverCredits:
      "La Chataigne Galicienne",
      category: ProductCategory.Shirts,
    },
  ];