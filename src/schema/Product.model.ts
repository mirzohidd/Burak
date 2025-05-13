import {
  ProductType,
  ProductStatus,
  ProductMarka,
  ProductTransmission,
} from "../libs/enums/product.enum";
import mongoose, { Schema } from "mongoose";

// Schema first vs code First

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productType: {
      type: String,
      enum: ProductType,
     
    },
    productMarka: {
      type: String,
      required: true,
    },
    productDesc: {
      type: String,
    },
    productYear: {
      type: Number,
    },
    productFuel: {
      type: String,
    },
    productTransmission: {
      type: String,
    },
    productImages: {
      type: [String],
      default: [],
    },
    productView: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
productSchema.index({ productName: 1, productType: 1 }, { unique: true });
export default mongoose.model("Product", productSchema);
