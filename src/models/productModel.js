const mongoose = require('mongoose');
const MODEL_NAMES = require('../constants/modelNames');
const PRODUCT_STATUSES = require('../constants/productStatuses');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: [
        PRODUCT_STATUSES.AVAILABLE,
        PRODUCT_STATUSES.SOLD,
        PRODUCT_STATUSES.PENDING,
      ],
      default: PRODUCT_STATUSES.AVAILABLE,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MODEL_NAMES.USER,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model(MODEL_NAMES.PRODUCT, productSchema);
