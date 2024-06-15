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
      required: [true, "Title is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
      lowercase: true,
    },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre",
        required: [true, "Genres is required"],
      },
    ],
    coverImage: {
      type: String,
      required: [true, "Cover is required"],
      // default: "https://picsum.photos/id/237/200/300",
    },
    pages: { type: Number, required: [true, "Pages is required"], default: 0 },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
    },
    format: {
      type: String,
      required: [true, "Format is required"],
      trim: true,
    },
    language: {
      type: String,
      required: [true, "Language is required"],
      trim: true,
    },
    reviews: [reviewSchema],
    numberOfReviews: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("book", bookSchema);

export default Books;
