#!/usr/bin/env node
const program = require('commander');
const imagemin = require('imagemin');
const imageminGuetzli = require('imagemin-guetzli');

program
  .version('0.0.5')
  .option('-f, --file <path>', 'Path to image file')
  .parse(process.argv);

imagemin(['*.{png,jpg}'], 'build/images', {
  use: [
      imageminGuetzli({quality: 95})
  ]
}).then(() => {
    console.log('Images optimized');
});
