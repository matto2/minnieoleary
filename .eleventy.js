module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("assets")

    eleventyConfig.addPassthroughCopy("android-chrome-192x192.png")
    eleventyConfig.addPassthroughCopy("apple-touch-icon.png")
    eleventyConfig.addPassthroughCopy("favicon-16x16.png")
    eleventyConfig.addPassthroughCopy("favicon-32x32.png")
    eleventyConfig.addPassthroughCopy("favicon.ico")

    
    return {
      passthroughFileCopy: true,  
      dir: {
        input: "src",
        output: "_site",
        include: "includes",
    }
    }

  }

// newFunction();
//
// function newFunction() {
 //   let today = new Date().toISOString().substr(0, 10);
  //  document.querySelector("#today").value = today;
   // document.querySelector("#today2").valueAsDate = new Date();
// }
