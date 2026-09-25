const { getInbox } = require("../lib/tempmail");

module.exports = async (req, res) => {
  try {
    const {
      email,
      limit,
      first_id,
      epin
    } = req.query;

    if (!email) {
      return res.status(400).json({
        status: false,
        error: "Parameter email wajib diisi."
      });
    }

    const result = await getInbox(email, {
      limit: limit ? Number(limit) : 20,
      first_id,
      epin
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message
    });
  }
};