/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  filenameGenerator: ({ name, extension }) => {
    // This causes an error because the same image is used on 2 different pages.
    // If I could get the slug of the page the image in on, then I could generate
    // a unique but still SEO friendly filename.
    return `demo-site/${name}.${extension}`;
  },
};

module.exports = config;
