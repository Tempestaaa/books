import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: {
      type: String,
      required: true,
      default: "https://picsum.photos/id/237/200/300",
    },
    isAdmin: { type: Boolean, default: false },
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Users = mongoose.model("user", userSchema);

export default Users;
