const jwt = require("../lib/jwt");

const authAdmin = (request, response, next) => {
  try {
    // Verificar el token
    console.log("request headers", request.headers);
    const authorization = request.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const verifiedToken = jwt.verify(token);
    console.log("verifiedToken", verifiedToken);
    next(); // Pasale
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }

  // next()
};

module.exports = authAdmin;
