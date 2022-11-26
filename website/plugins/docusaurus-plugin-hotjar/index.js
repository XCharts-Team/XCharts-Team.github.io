// reference: https://github.com/symblai/docusaurus-plugin-hotjar
// You may visit [Hotjar compliance page](https://help.hotjar.com/hc/en-us/categories/360003405813) 
// to learn more about how they operate.
const path = require("path");

module.exports = function (context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { hotjar } = themeConfig || {};

  if (!hotjar) {
    throw new Error(
      `Create a 'hotjar' object containing a 'siteId' property in 'themeConfig'.`
    );
  }

  const { siteId } = hotjar;

  if (!siteId) {
    throw new Error(
      "Error in `themeConfig`. `hotjar` object found but `siteId` prop is missing."
    );
  }

  return {
    name: "docusaurus-plugin-hotjar",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: ``
          }
        ]
      }
    }
  }
}

