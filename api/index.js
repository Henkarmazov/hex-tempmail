module.exports = (req, res) => {
  res.status(200).json({
    status: true,
    author: "Henkarmazov",
    name: "Tempmail Plus API",
    description: "Temporary email generator and inbox API",
    routes: {
      generate: "/api/generate",
      inbox: "/api/inbox",
      read: "/api/read",
      delete: "/api/delete",
      destroy: "/api/destroy",
      poll: "/api/poll",
      domains: "/api/domains"
    }
  });
};