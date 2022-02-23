const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    msg: err?.message,
    stack: process.env.NODE_ENV !== 'production' ? err?.stack : null,
  });
};

// route not found
const _404 = (req, res, next) => {
  //   res.status(404);
  //   throw new Error('Page not found');
  const error = new Error(`${req?.originalUrl} path not found`);
  res.status(404);
  next(error); //
};

module.exports = { errorHandler, _404 };
