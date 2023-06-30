import jwt from "jsonwebtoken";

const tokenMiddleware = (req, res, next) => {
  const toke = req.headers.authorization;

  const prefixLength = "Bearer ".length;
  const tokenArray = toke.split("");
  tokenArray.splice(0, prefixLength);
  const token = tokenArray.join("")

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  let decryptedToken = null;
  try {
    decryptedToken = jwt.verify(token, "yourSecretKey");
    req.decryptedToken = decryptedToken;

    if (!decryptedToken.email) {
      return res.status(403).json({ message: 'Email not found in token',decryptedToken });
    }

    const email = decryptedToken.email;
    req.email = email;
    const role= decryptedToken.role
    console.log("relo:", role)

    if (role !== 'Admin') {
      return res.status(403).json({ message: 'You are not authorized to access this resource'});
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenMiddleware;
