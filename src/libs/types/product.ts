import {
  ProductFuel,
  ProductMarka,
  ProductStatus,
  ProductTransmission,
  ProductType,
} from "./../enums/product.enum";
import { ObjectId } from "mongoose";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productType: ProductType;
  productName: string;
  productPrice: number;
  productDesc?: string;
  productImages: string[];
  productYear: Number;
  productFuel: ProductFuel;
  productTransmission: ProductTransmission;
  productView: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productType?: ProductType;
  search?: string;
}
export interface ProductInquiryAdmin {
  page: number;
  limit: number;
  productType?: ProductType;
  search?: string;
  productStatus?: ProductStatus;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productType: ProductType;
  productName: string;
  productPrice: number;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
  productYear: Number;
  productFuel: ProductFuel;
  productTransmission: ProductTransmission;
  productMarka: ProductMarka;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productType?: ProductType;
  productName?: string;
  productPrice?: number;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}
