const { generateEmail } = require("../lib/tempmail");

module.exports = (req, res) => {
  try {
    const { username, domain } = req.query;

    const result = generateEmail(username, domain);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message
    });
  }
};