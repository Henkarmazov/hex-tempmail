const { waitForMail } = require("../lib/tempmail");

module.exports = async (req, res) => {
  try {
    const {
      email,
      timeout,
      interval,
      autoRead,
      epin
    } = req.query;

    if (!email) {
      return res.status(400).json({
        status: false,
        error: "Parameter email wajib diisi."
      });
    }

    const timeoutMs = timeout
      ? Number(timeout) * 1000
      : 60000;

    const intervalMs = interval
      ? Number(interval)
      : 3000;

    const result = await waitForMail(email, {
      timeoutMs,
      intervalMs,
      autoRead: autoRead !== "false",
      epin: epin || ""
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message
    });
  }
};