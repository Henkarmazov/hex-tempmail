const { getMail } = require("../lib/tempmail");

module.exports = async (req, res) => {
  try {
    const {
      email,
      mail_id,
      epin
    } = req.query;

    if (!email || !mail_id) {
      return res.status(400).json({
        status: false,
        error: "Parameter email dan mail_id wajib diisi."
      });
    }

    const result = await getMail(
      email,
      mail_id,
      epin || ""
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message
    });
  }
};