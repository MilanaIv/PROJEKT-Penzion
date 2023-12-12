module.exports = function(eleventyConfig) {
  
    //Potom uvidíš po spuštění i tu adresu v lokální síti
    eleventyConfig.setServerOptions({
      showAllHosts: true,
    });
  
      // Výchozí výstupní složka: _site
  
      // Zkopírovat images/ do _site/images
      eleventyConfig.addPassthroughCopy("images");
  
      // Zkopírovat css/ to _site/css/
      eleventyConfig.addPassthroughCopy("css");
  
    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md", "liquid"],
  
      // jako šablonovací jazyk zvolíme Nunjucks
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  
  };