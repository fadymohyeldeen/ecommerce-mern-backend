import { productModel } from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Product 1",
      image: "https://placehold.co/400x400?text=Product+1",
      price: 18700,
      stock: 2,
    },
    {
      title: "Product 2",
      image: "https://placehold.co/400x400?text=Product+2",
      price: 15200,
      stock: 5,
    },
    {
      title: "Product 3",
      image: "https://placehold.co/400x400?text=Product+3",
      price: 9900,
      stock: 10,
    },
    {
      title: "Product 4",
      image: "https://placehold.co/400x400?text=Product+4",
      price: 20400,
      stock: 1,
    },
    {
      title: "Product 5",
      image: "https://placehold.co/400x400?text=Product+5",
      price: 12000,
      stock: 8,
    },
    {
      title: "Product 6",
      image: "https://placehold.co/400x400?text=Product+6",
      price: 8700,
      stock: 4,
    },
    {
      title: "Product 7",
      image: "https://placehold.co/400x400?text=Product+7",
      price: 17500,
      stock: 6,
    },
    {
      title: "Product 8",
      image: "https://placehold.co/400x400?text=Product+8",
      price: 22300,
      stock: 3,
    },
    {
      title: "Product 9",
      image: "https://placehold.co/400x400?text=Product+9",
      price: 16000,
      stock: 7,
    },
    {
      title: "Product 10",
      image: "https://placehold.co/400x400?text=Product+10",
      price: 14500,
      stock: 9,
    },
  ];

  const checkProducts = await getAllProducts();
  if (checkProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
