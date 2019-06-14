require("babel-register")({
  presets: ["es2015", "react"]
});

require.extensions['.png', '.jpeg', '.jpg'] = function () {
  return null;
};

const router = require("./sitemap-routes").default;
const Sitemap = require("../node_modules/react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.karlchvojka.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();
