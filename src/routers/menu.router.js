const express = require("express");
const aws = require('aws-sdk');
const Menu = require("../usescases/menu.usecase");

const router = express.Router();
// config bucket AWS image
aws.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey
});
const S3_BUCKET = process.env.bucket;

router.get("/", async (req, res) => {
  try {
    const allMenu = await Menu.getMenus();

    res.json(allMenu);
  } catch (err) {
    console.error(err);

    res.statusCode = 500;
    res.json({ err });
  }
});

router.get("/submenu", async (req, res) => {
  const category = req.query.category;

  const filtro = {};

  const categoryExiste = category !== undefined;
  if (categoryExiste) {
    filtro.category = category;
  }

  const categorys = await Menu.getMenus(filtro);

  res.json(categorys);
});

router.get("/edit", async (req, res) => {
  const id = req.query._id;

  const filtro = {};

  const idExiste = id !== undefined;
  if (idExiste) {
    filtro._id = id;
  }

  const ids = await Menu.getMenus(filtro);

  res.json(ids);
});

router.post("/", async (req, res) => {
  // image AWS
  const s3 = new aws.S3();
  const folder = req.body.folder;
  const fileName = req.body.fileName;


  const s3Params = {
    Bucket: S3_BUCKET + '/' + folder,
    Key: fileName,
    Expires: 500,
    ACL: 'public-read'
};
s3.getSignedUrl('putObject', s3Params,(err, data) => {
  if (err) {
    console.log(err);
    res.json({ success: false, error: err })
}
const returnData = {
  signedRequest: data,
  url: `https://${S3_BUCKET}.s3.amazonaws.com/${folder}/${fileName}`
};
res.json({ success: true, data: { returnData } });
})

  const newMenu = await Menu.createMenu(req.body);

  res.statusCode = 201;
  res.json(newMenu);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const MenuInfo = req.body;

  const updatedMenu = await Menu.updateMenu(id, MenuInfo);

  res.json(updatedMenu);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const menuInfo = req.body;

  const deleteMenu = await Menu.deleteMenu(id, menuInfo);

  res.json(deleteMenu);
});

module.exports = router;
