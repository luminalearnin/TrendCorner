export type ProductCategory = "Tees" | "Denim" | "Shirts" | "Accessories";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  badge: string;
  postDate: string;
  details: string;
  images: string[];
  imageAlts: string[];
  sourcePost: string;
}

export const instagramImage = (filename: string) =>
  `${import.meta.env.BASE_URL}images/instagram/${filename}`;

export const products: Product[] = [
  {
    id: "heavy-washed-boxy-tee-oct-14",
    name: "Heavy washed boxy tee",
    category: "Tees",
    badge: "Limited drop",
    postDate: "Oct 14, 2026",
    details:
      "Limited drop noted in the post · ask the store for current details.",
    images: [
      "2026-10-14-heavy-washed-boxy-tee.webp",
      "2026-10-14-boxy-tee-detail.webp",
    ],
    imageAlts: [
      "Trend Corner's heavy washed black graphic boxy tee from the October 14 Instagram post",
      "A second graphic tee image from the same Trend Corner October 14 post",
    ],
    sourcePost: "https://www.instagram.com/trendcorner_mes/p/Def6ozpgRxE/",
  },
  {
    id: "sunfade-wash-tee-oct-13",
    name: "Boxy fit Premium sunfade wash tee",
    category: "Tees",
    badge: "New from Instagram",
    postDate: "Oct 13, 2026",
    details: "Sizes listed in the post: S · M · L · XL.",
    images: ["2026-10-13-sunfade-wash-tee.jpg"],
    imageAlts: [
      "Four graphic sunfade-wash boxy tees from Trend Corner's October 13 post",
    ],
    sourcePost: "https://www.instagram.com/trendcorner_mes/p/DecQdM7gWrI/",
  },
  {
    id: "imp-barrel-denims-oct-12",
    name: "Imp Barrel denims",
    category: "Denim",
    badge: "Limited drop",
    postDate: "Oct 12, 2026",
    details:
      "Limited drop noted in the post · ask the store for sizes and price.",
    images: ["2026-10-12-imp-barrel-denims.jpg"],
    imageAlts: [
      "Dark star-detail barrel-leg denim jeans from Trend Corner's October 12 post",
    ],
    sourcePost: "https://www.instagram.com/trendcorner_mes/p/DeZWr5KgYhe/",
  },
  {
    id: "ultra-boxy-denim-shirt-oct-11",
    name: "Heavy washed Ultra-Boxy denim shirt",
    category: "Shirts",
    badge: "Sizes in post",
    postDate: "Oct 11, 2026",
    details: "Sizes listed in the post: M · L · XL.",
    images: ["2026-10-11-ultra-boxy-denim-shirt.jpg"],
    imageAlts: [
      "Heavy washed blue denim shirt and graphic top from Trend Corner's October 11 post",
    ],
    sourcePost: "https://www.instagram.com/trendcorner_mes/p/DeW_fO_gfoC/",
  },
  {
    id: "heavy-washed-boxy-tee-oct-10",
    name: "Heavy washed boxy tee",
    category: "Tees",
    badge: "Sizes in post",
    postDate: "Oct 10, 2026",
    details: "Sizes listed in the post: M · L · XL.",
    images: ["2026-10-10-heavy-washed-boxy-tee.jpg"],
    imageAlts: [
      "Two dark graphic heavy washed boxy tees from Trend Corner's October 10 post",
    ],
    sourcePost: "https://www.instagram.com/trendcorner_mes/p/DeVqmifASFM/",
  },
  {
    id: "chain-accessory-oct-07",
    name: "Chain accessory",
    category: "Accessories",
    badge: "From Instagram",
    postDate: "Oct 7, 2026",
    details:
      "Ask the store to confirm the item, current price and availability.",
    images: ["2026-10-07-trend-corner-collection.jpg"],
    imageAlts: [
      "Dark metal chain accessory shown in Trend Corner's October 7 Instagram post",
    ],
    sourcePost: "https://www.instagram.com/trendcorner_mes/p/DeMpjTBki_4/",
  },
];
