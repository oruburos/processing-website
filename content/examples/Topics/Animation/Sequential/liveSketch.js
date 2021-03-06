/**
 * Sequential
 * by James Paterson.
 *
 * Displaying a sequence of images creates the illusion of motion.
 * Twelve images are loaded and each is displayed individually in a loop.
 */

// pjs preload must be used to preload media if the program is
// running with Processing.js
/* @pjs preload="PT_anim0000.png, PT_anim0001.png, PT_anim0002.png, PT_anim0003.png,
PT_anim0004.png, PT_anim0005.png, PT_anim0006.png, PT_anim0007.png, PT_anim0008.png,
PT_anim0009.png, PT_anim0010.png, PT_anim0011.png"; */

function runLiveSketch(s) {
  var numFrames = 12; // The number of frames in the animation
  var currentFrame = 0;
  var images = [];

  s.preload = () => {
    images[0] = s.loadImage('/livesketch-manual/sequence/PT_anim0000.png');
    images[1] = s.loadImage('/livesketch-manual/sequence/PT_anim0001.png');
    images[2] = s.loadImage('/livesketch-manual/sequence/PT_anim0002.png');
    images[3] = s.loadImage('/livesketch-manual/sequence/PT_anim0003.png');
    images[4] = s.loadImage('/livesketch-manual/sequence/PT_anim0004.png');
    images[5] = s.loadImage('/livesketch-manual/sequence/PT_anim0005.png');
    images[6] = s.loadImage('/livesketch-manual/sequence/PT_anim0006.png');
    images[7] = s.loadImage('/livesketch-manual/sequence/PT_anim0007.png');
    images[8] = s.loadImage('/livesketch-manual/sequence/PT_anim0008.png');
    images[9] = s.loadImage('/livesketch-manual/sequence/PT_anim0009.png');
    images[10] = s.loadImage('/livesketch-manual/sequence/PT_anim0010.png');
    images[11] = s.loadImage('/livesketch-manual/sequence/PT_anim0011.png');

    // If you don't want to load each image separately
    // and you know how many frames you have, you
    // can create the filenames as the program runs.
    // The nf() command does number formatting, which will
    // ensure that the number is (in this case) 4 digits.
    //for (var i = 0; i < numFrames; i++) {
    //  String imageName = "PT_anim" + nf(i, 4) + ".gif";
    //  images[i] = loadImage(imageName);
    //}
  };
  s.setup = () => {
    s.createCanvas(640, 360);
    s.frameRate(24);
  };

  s.draw = () => {
    s.background(0);
    currentFrame = (currentFrame + 1) % numFrames; // Use % to cycle through frames
    var offset = 0;
    for (var x = -100; x < s.width; x += images[0].width) {
      s.image(images[(currentFrame + offset) % numFrames], x, -20);
      offset += 2;
      s.image(images[(currentFrame + offset) % numFrames], x, s.height / 2);
      offset += 2;
    }
  };
}
