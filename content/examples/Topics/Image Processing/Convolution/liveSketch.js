/**
 * Convolution
 * by Daniel Shiffman.
 *
 * Applies a convolution matrix to a portion of an image. Move mouse to
 * apply filter to different parts of the image. This example is currently
 * not accurate in JavaScript mode.
 */

// The next line is needed if running in JavaScript Mode with Processing.js
/* @pjs preload="moon-wide.jpg"; */

function runLiveSketch(s) {
  var img;
  var w = 80;
  // The convolution matrix for a "sharpen" effect stored as a 3 x 3 two-dimensional array.
  var matrix = [
    [-1, -1, -1],
    [-1, 9, -1],
    [-1, -1, -1]
  ];

  s.preload = () => {
    img = s.loadImage('/livesketch/convolution/moon-wide.jpg');
  };

  s.setup = () => {
    s.createCanvas(640, 360);
    s.pixelDensity(1);
  };

  s.draw = () => {
    // We're only going to process a portion of the image
    // so let's set the whole image as the background first
    s.image(img, 0, 0);

    // In this example we are only processing a section of the image-an 80 x 80 rectangle around the mouse location.
    var xstart = s.constrain(s.mouseX - w / 2, 0, img.width);
    var ystart = s.constrain(s.mouseY - w / 2, 0, img.height);
    var xend = s.constrain(s.mouseX + w / 2, 0, img.width);
    var yend = s.constrain(s.mouseY + w / 2, 0, img.height);
    var matrixsize = 3;

    s.loadPixels();
    img.loadPixels();
    // Begin our loop for every pixel
    for (var x = xstart; x < xend; x++) {
      for (var y = ystart; y < yend; y++) {
        // Each pixel location (x,y) gets passed into a function called convolution()
        // The convolution() function returns a new color to be displayed.
        var result = convolution(x, y, matrix, matrixsize, img);
        var loc = (x + y * img.width) * 4;
        s.pixels[loc] = result[0];
        s.pixels[loc + 1] = result[1];
        s.pixels[loc + 2] = result[2];
        s.pixels[loc + 3] = 255;
      }
    }
    s.updatePixels();
  };

  function convolution(x, y, matrix, matrixsize, img) {
    var rtotal = 0.0;
    var gtotal = 0.0;
    var btotal = 0.0;
    var offset = s.floor(matrixsize / 2);

    // Loop through convolution matrix
    for (var i = 0; i < matrixsize; i++) {
      for (var j = 0; j < matrixsize; j++) {
        // What pixel are we testing
        var xloc = x + i - offset;
        var yloc = y + j - offset;
        var loc = (xloc + img.width * yloc) * 4;

        // Make sure we haven't walked off the edge of the pixel array
        // It is often good when looking at neighboring pixels to make sure we have not gone off the edge of the pixel array by accident.
        loc = s.constrain(loc, 0, img.pixels.length - 3);
        // Calculate the convolution
        // We sum all the neighboring pixels multiplied by the values in the convolution matrix.
        rtotal += img.pixels[loc] * matrix[i][j];
        gtotal += img.pixels[loc + 1] * matrix[i][j];
        btotal += img.pixels[loc + 2] * matrix[i][j];
      }
    }

    // Make sure RGB is within range
    rtotal = s.constrain(rtotal, 0, 255);
    gtotal = s.constrain(gtotal, 0, 255);
    btotal = s.constrain(btotal, 0, 255);

    // Return an array with the three color values
    return [rtotal, gtotal, btotal];
  }
}
