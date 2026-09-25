const { AVAILABLE_DOMAINS } = require("../lib/tempmail");

module.exports = (req, res) => {
  res.status(200).json({
    status: true,
    domains: AVAILABLE_DOMAINS
  });
};