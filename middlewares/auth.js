import jwt from "jsonwebtoken";
const secretKey = "yourSecretKey";

export const verifyToken = (req,res,next) => {
  const token = req.headers.authorization
  const validToken=token.split(' ')[1]
  if (!validToken) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }
  
  jwt.verify(validToken, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token'});
    }
    req.user =user;
    next();
  });
}




