import config from "../configs/firebase.js";
import multer from "multer";
import express from "express";
import path from "path";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import expressAsyncHandler from "express-async-handler";
import { authenticate, authorized } from "../middlewares/auth.js";

const router = express.Router();

const app = initializeApp(config.firebaseConfig);

const storage = getStorage(app);

const fileFilter = (req, file, cb) => {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png||image\/webp/;

  const extname = path.extname(file.originalname);
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Images only"), false);
  }
};

const upload = multer({ storage: multer.memoryStorage(), fileFilter });

router.post(
  "/cover",
  authenticate,
  authorized,
  upload.single("cover"),
  expressAsyncHandler(async (req, res) => {
    const storageRef = ref(
      storage,
      `cover/${
        req.file.fieldname +
        " - " +
        Date.now() +
        path.extname(req.file.originalname)
      }`
    );

    const metaData = { contentType: req.file.mimetype };

    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metaData
    );

    const downloadUrl = await getDownloadURL(snapshot.ref);
    res.json(downloadUrl);
  })
);

router.post(
  "/avatar",
  authenticate,
  authorized,
  upload.single("image"),
  expressAsyncHandler(async (req, res) => {
    const storageRef = ref(
      storage,
      `avatar/${
        req.file.fieldname +
        " - " +
        Date.now() +
        path.extname(req.file.originalname)
      }`
    );

    const metaData = { contentType: req.file.mimetype };

    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metaData
    );

    const downloadUrl = await getDownloadURL(snapshot.ref);
    res.json(downloadUrl);
  })
);

export default router;
