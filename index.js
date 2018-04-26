const {execFile} = require('child_process');
const guetzli = require('guetzli');

module.exports = (img) => {
  return execFile(guetzli, [img, 'output.jpg'], err => {
    console.log('Image minified!');
  });
};
