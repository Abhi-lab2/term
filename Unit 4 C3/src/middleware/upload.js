const path = require("path");

const multer = require("multer");
// file filter .
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null, //error as null
      path.join(__dirname, "./uploads")
    );
  },
  filename: function (req, file, cb) {
    console.log({ file });
    const uniquePrefix = Date.now();
    cb(null, uniquePrefix + "." + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("incorrrect type of file"));
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

module.exports = upload;
