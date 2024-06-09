import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    desc: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true, lowercase: true },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre",
        required: true,
      },
    ],
    coverImage: {
      type: String,
      required: true,
      default: "https://picsum.photos/id/237/200/300",
    },
    pages: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    reviews: [reviewSchema],
    numberOfReviews: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("book", bookSchema);

export default Books;
