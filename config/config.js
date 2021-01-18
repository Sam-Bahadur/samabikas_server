const config = {
  production: {
    SECRET: process.env.SECRET,
    // DATABASE: process.env.MONGODB_URI,
    DATABASE:
      "mongodb+srv://pradeep:pradeep@cluster0.b7pme.mongodb.net/blog?retryWrites=true&w=majority",
  },
  default: {
    SECRET: "SUPERSECRETPASSWORD123",
    // DATABASE: 'mongodb://localhost:27017/blogs',
    DATABASE:
      "mongodb+srv://pradeep:pradeep@cluster0.b7pme.mongodb.net/blog?retryWrites=true&w=majority",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
