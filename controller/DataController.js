const uploadFile = async (req, res) => {
  try {
    const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
    const storage = require("../db.js");
    // Grab the file
    const file = req.file;
    console.log(file);
    if (file) {
      // Format the filename
      const timestamp = Date.now();
      const orgName = file.originalname.split(".")[0];
      const type =
        file.originalname.split(".")[file.originalname.split(".").length - 1];
      const fileName = `${orgName}_${timestamp}.${type}`;
      const storageRef = ref(storage, fileName);
      uploadBytes(storageRef, file.buffer)
        .then(() => {
          getDownloadURL(storageRef)
            .then((url) => {
              res.status(200).send({
                url,
                fileName,
                size: file.buffer.readUInt16LE(0) * 0.000001,
              });
            })
            .catch((e) =>
              res.status(300).send({ message: "Unable to get url" })
            );
        })
        .catch((e) => res.status(300).send({ message: "Unable to upload" }));
    } else {
      res.status(300).send({ message: "You did not choose a file" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  uploadFile,
};
