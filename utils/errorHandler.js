exports.handleError = (error, res) => {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
};

