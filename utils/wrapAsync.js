module.exports = (fn) => {
  return (req, res, next) => {
    fun(req, res, next).catch(next);
  };
};
