const loginMiddleware = (req, res, next) => {
  const role = req.body.role || req.user.role;

  if (role === "admin") {
    next();
  } else if (role === "user") {
    next();
  } else {
    res.status(401).json({
      message: "Invalid role",
    });
  }
};

export default loginMiddleware;
