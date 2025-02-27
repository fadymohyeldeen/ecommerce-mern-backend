import { productModel } from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title:
        "Dell Latitude 5420 Core i5 11TH 16 GB RAM DDR4 256 GB SSD Display 14 Inch",
      image:
        "https://store.rebuytech.com/cdn/shop/files/delllatitude5420.jpg?v=1713287281&width=493",
      price: 18700,
      stock: 2,
    },
  ];
  const checkProducts = await getAllProducts();
  if (checkProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
