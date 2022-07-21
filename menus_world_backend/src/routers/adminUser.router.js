const { response } = require("express");
const express = require("express");
const Admin = require("../usescases/admin.usecase");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const allAdmins = await User.getAll();

    res.json(allAdmins);
  } catch (error) {
    console.error(error);

    res.statusCode = 500;
    res.json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const newAdmin = req.body;
    console.log(newAdmin);
    const createdAdmin = await Admin.createAdminUser(newAdmin);

    res.statusCode = 201;
    res.json(createdAdmin);
  } catch (error) {
    console.error(error);

    res.statusCode = 500;
    res.json({ error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const loginInfo = req.body;

    const token = await User.login(loginInfo);

    res.json({
      success: true,
      data: {
        token,
      },
    });
  } catch (error) {
    console.error(error);

    if (
      error.message === "Admin not found" ||
      error.message === "Wrong password"
    ) {
      res.statusCode = 400;
    } else {
      res.statusCode = 500;
    }

    res.json({ error });
  }
});

module.exports = router;
