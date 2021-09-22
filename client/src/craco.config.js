
const CracoLessPlugin = require("craco-less");
// import * as CracoLessPlugin from "craco-less";

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#eee",
              "@link-color": "#eee", // link color
              "@text-color": "rgba(0, 0, 0, 0)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
