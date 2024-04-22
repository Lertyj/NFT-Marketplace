module.exports = {
  module: {
    rules: [
      {
        test: /\.module.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
