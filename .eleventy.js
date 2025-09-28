module.exports = function(eleventyConfig) {

    // --- 1. Passthrough Copy for Static Assets ---
    // This tells Eleventy to copy the contents of these folders
    // (CSS, JS, Images, etc.) directly to the _site output folder, 
    // without processing them as templates.

    // Copy the entire 'css' folder and its contents
    eleventyConfig.addPassthroughCopy("admin/src/css"); 
    
    // Copy the entire 'js' folder and its contents (if you have JS)
    eleventyConfig.addPassthroughCopy("admin/src/js"); 
    
    // Copy the entire 'images' folder and its contents
    eleventyConfig.addPassthroughCopy("admin/src/images"); 

    // Copy other root-level assets you need
    eleventyConfig.addPassthroughCopy("college.jpg");
    eleventyConfig.addPassthroughCopy("librarian.svg");
    // ... any other files like logo.svg, etc.


    // --- 2. Configuration for Directories ---
    // This tells Eleventy that your template source files are inside 'admin/src'
    return {
        // Set the input directory to admin/src
        dir: {
            input: "admin/src",
            // Eleventy will look for _includes inside the input directory,
            // but we put _includes at the root to fix the previous bug, 
            // so we set the path explicitly:
            includes: "../_includes", 
            // You can keep the default _data folder location:
            data: "_data",
            // Keep the default output folder name:
            output: "_site"
        }
    };
};