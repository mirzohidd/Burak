import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "./../libs/enums/member.enum";

// Schema first vs code First

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },
    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    membeNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
    },
    memberPassword: {
      type: String,
      select: false,
      required: true,
    },
    memberAdress: {
      type: String,
    },
    memberDesc: {
      type: String,
    },
    memberImage: {
      type: String,
    },
    memberPoints: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
