import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "./../enums/product.enum";
import { ObjectId } from "mongoose";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productColletion: ProductCollection;
  productName: string;
  productPrice: number;
  productLetCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productView: number;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productColletion: ProductCollection;
  productName: string;
  productPrice: number;
  productLetCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productColletion?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLetCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}
