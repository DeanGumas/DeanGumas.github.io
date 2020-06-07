/*
  GravLab
  Authors: Matthew Conway, Dean Gumas
  Date: October 29th, 2019
  Purpose: Video Game Design Final Project

  About:

  Welcome to GravLabs! Professor Newt has flipped the space time continuum
  and unleased the power of variable gravity on the universe. You are a young
  scientist who has learned the ability to control your own gravity. Using
  w, a, s, and d, your character can change gravity within the platform game.
  With i, j, k, and l, you can move your character along a platform (These keys
  are relative to your gravity, so their actual movements change but it is
  intuitive). The scientist also has the ability to throw gravityballs, which
  travel in projectile fashion according to his gravity. Througout the game,
  the scientist will learn all of his abilities, and the instructions are
  displayed to the player.

  This game is based off the mechanics of a platform game, with the added twist
  of controlling the gravity of the main character. The scientist dies by falling
  off the map or running into an adversary on the map. When the scientist dies,
  the level restarts. To finish a level, travel through the portal at the end
  of the level to advance to the next. In the final level, the scientist will
  face Professor Newt, where he must shoot him down to win the game. When the
  user wins the game, a winning animation is displayed and the game returns to
  the main menu.

  There are many obsticles and elements that the scientist will encounter on his way
  to finding Professor Newt on planet Zeltron. Each obsticle/element will be listed
  below with explainations on their function within the game:

    1. Platform blocks - These are the standard blocks for the scientist to
                         land on throughout the game, with a green color.
                         They do not change at any point. To land on a platform
                         block, set the scientists gravity such that he falls on
                         the block.

    2. Portal blocks   - These are black blocks with small objects inside them,
                         usually at the very end of the level. By coming in contact
                         with this block, the scientist travels to the next level.

    3. Chest blocks    - These are tan blocks scattered throughout the levels in
                         the game. Collecting the chests increases the scientist's
                         overall score. This score is saved at the end as a high score
                         and determines overall quality of play outside of finishing.

    4. Ammo boxes      - Ammo boxes contain 10 balls for the scientist to carry and
                         shoot. If you get close enough, 10 balls will be added to
                         the ball count in the top right.

    3. Brick blocks    - These are the red brick blocks scattered throughout after
                         level 4 (This is when the user gets the ability to throw balls).
                         Throwing a ball at the brick will break it, unlocking new
                         paths through the map.

    4. Fly             - There are two types of flies, vertical and horizontal. For each,
                         they travel in their relative direction back and forth in the map.
                         If the scientist runs into one of the flies, he dies and the level
                         restarts. There is no way to kill flies.

    5. Slime           - Slime blocks are light blue in color and bounce up and down on the map.
                         If the scientist comes close to or in contact with a slime, it will
                         push him in the direction relative to which they made contact, and will
                         likely send him off the map to die. There is no way to remove slime.

    6. Professor Newt  - Professor Newt is at the end of the last level. He moves laterally, then
                         flips his gravity. Once he lands on aother surface, he begins moving again.
                         If a ball is close to him, he will prematurely reverse his gravity to
                         avoid the balls. Take this into consideration when trying to kill him.


    For grading:
      There is a way to skip through each level. By pressing the '+' character in a level,
      the game will advance to the next level. If you reach the last level and press the '+'
      character, the game will end and the winning animation will show. You can also do this
      by advancing to the end and killing Professor Newt. To simulate the loss, simply fall
      off the map.

      Certain elements are introduced at certain points. Below are the list of what and when:

      Level 1:
        - Moving using i, j, k, and l
        - Flipping gravity using w and s
        - Chests
        - Portals

      Level 2:
        - Flipping gravity using a and d

      Level 4:
        - Breakable blocks
        - Ammo boxes

      Level 5:
        - Fly adversary

      Level 7:
        - Slime adversary

      Final Level:
        - Professor Newt

*/

var sketchProc=function(processingInstance){ with (processingInstance){
/* @pjs preload="Doctor/Doctor-1.png.png";
preload="Doctor/Doctor-2.png.png";
preload="Doctor/Doctor-3.png.png";
preload="Doctor/Doctor-4.png.png";
preload="Doctor/Doctor-5.png.png";
preload="Doctor/Doctor-6.png.png";
preload="Doctor/Doctor-7.png.png";
preload="Doctor/Doctor-8.png.png";
preload="Scientist_Walk/scientist_walk-1.png.png";
preload="Scientist_Walk/scientist_walk-2.png.png";
preload="Scientist_Walk/scientist_walk-3.png.png";
preload="Scientist_Walk/scientist_walk-4.png.png";
preload="Scientist_Walk/scientist_walk-5.png.png";
preload="Scientist_Walk/scientist_walk-6.png.png";
preload="Scientist_Walk/scientist_walk-7.png.png";
preload="Scientist_Walk/scientist_walk-8.png.png";
preload="Scientist_Walk/scientist_walk-9.png.png";
preload="Scientist_Walk/scientist_walk-10.png.png";
preload="Scientist_Walk/scientist_walk-11.png.png";
preload="Scientist_Walk/scientist_walk-12.png.png";
preload="Scientist_Jump/scientist_jump-1.png.png";
preload="Scientist_Jump/scientist_jump-2.png.png";
preload="Scientist_Jump/scientist_jump-3.png.png";
preload="Scientist_Jump/scientist_jump-4.png.png";
preload="Scientist_Jump/scientist_jump-5.png.png";
preload="Scientist_Jump/scientist_jump-6.png.png";
preload="Scientist_Jump/scientist_jump-7.png.png";
preload="Scientist_Jump/scientist_jump-8.png.png";
preload="Scientist_Jump/scientist_jump-9.png.png";
preload="Scientist_Jump/scientist_jump-10.png.png";
preload="Scientist_Jump/scientist_jump-11.png.png";
preload="Scientist_Jump/scientist_jump-12.png.png";
preload="Scientist_Jump/scientist_jump-13.png.png";
preload="Scientist_Jump/scientist_jump-14.png.png";
preload="Scientist_Jump/scientist_jump-15.png.png";
preload="Portal/Portal-1.png.png";
preload="Portal/Portal-2.png.png";
preload="Blob/Blob-1.png.png";
preload="Blob/Blob-2.png.png";
preload="Blob/Blob-3.png.png";
preload="Blob/Blob-4.png.png";
preload="Blob/Blob-5.png.png";
preload="Blob/Blob-6.png.png";
preload="Blob/Blob-7.png.png";
preload="Blob/Blob-8.png.png";
preload="Chest/Chest-1.png.png";
preload="GravLab_Logo/gravlab_logo-1.png.png";
preload="GravLab_Logo/gravlab_logo-2.png.png";
preload="GravLab_Logo/gravlab_logo-3.png.png";
preload="GravLab_Logo/gravlab_logo-4.png.png";
preload="GravLab_Logo/gravlab_logo-5.png.png";
preload="GravLab_Logo/gravlab_logo-6.png.png";
preload="GravLab_Logo/gravlab_logo-7.png.png";
preload="GravLab_Logo/gravlab_logo-8.png.png";
preload="Blocks/block_external-1.png.png";
preload="Blocks/block_internal-1.png.png";
preload="Blocks/block_vert-1.png.png";
preload="Blocks/block_brick-1.png.png";
preload="Ball/ball_object-1.png.png";
preload="Ammo/ammo_box-1.png.png";
preload="Fly/Fly-1.png.png";
preload="Fly/Fly-2-png.png";
*/

/* @pjs font="Westminster.ttf"; */

/* @pjs font="data:font/truetype,base64, {base 64 encoded data block}"; */



/*
 * Below are the tilemap arrays for the different levels, which are appended to one levels array

 KEYS for blocks:
   b - external block facing up
   r - external block facing right
   u - external block facing down
   l - external block facing left
   i - internal block
   v - vertical column block
   h - horizontal column block
   z - breakable brick block
   p - portal
   c - chest
   a - ammo box
   s - scientist
   e - vertical Fly
   f - horizontal fly
   t - blob

Steps to make a level:
  Make the tilemap
  Add to tilemaps array
  Create level object
  Add to levels array
 */
tilemap1 = ["iuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuup",
            "v                                                                                                                                                cv                  c               p",
            "v                                                                                         c                                                       v                                  p",
            "v                                                                       bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     v                                  p",
            "v                                                                       luuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu                     v                                  p",
            "v                                                                       v                                                                         v                                  p",
            "v                                                                       v                                                                c        v                                  p",
            "v                                                                       v                                   bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr                                  p",
            "v                                                                       v                                   uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu                                  p",
            "v                                                                       v                                                                                                            p",
            "v                                                                       v        c                                                                  c                                p",
            "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbp"];

tilemap2 = ["iuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu              uuuuuuuuuuuuuuuuuuuuuuuuuuuuiiiiiiiiiiiiiiiiiiiiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu                                uuuuuuuuuuuuuuuuuuuup",
            "v                                                                        uiiiiiiiiiiiiiiiiiiu                                                                                        p",
            "v                                                                         uiiiiiiiiiiiiiiiiu                                                                                         p",
            "v                                                                         cuiiiiiiiiiiiiiiuc                                                   c                                     p",
            "v                                                                           uuuuuuuuuuuuuu                              hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh             p",
            "v                                                                                                                                                                                    p",
            "v                                                                                                                                                                                    p",
            "v                                   c                                                                                   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh             p",
            "v                               bbbbbbbbbbbbb                                                                                                                                        p",
            "v                               liiiiiiiiiiir                                                                                                                                        p",
            "v                               liiiiiiiiiiir                                                                                                                    c                   p",
            "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbbbbbbb                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                                bbbbbbbbbbbbbbbbbbbbp"];

tilemap3 = ["iuuuuuuuuuuuuuuuuuuu                         uuuuuuuuuuuuuuuiuuuuuuuuuuuu                    uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuup",
            "v                                                           vc                                    c                                                                   c              p",
            "v                                                           v                                                                                                                        p",
            "v                       hhhhhhhhhhhhhhhh                    v                                                                                                                        p",
            "v                       v              v                                                                 hhhhhhhhhhhhhhhhhhhhhhhhh                                                   p",
            "v                       v   c                                                                                               c                                                        p",
            "v                       v   c                               v          hhhhhhhhhhhhhhhhhhhhhhh                                                                                       p",
            "v                       v              v                    v                                                                            hhhhhhhhhhhhhhh                             p",
            "v                       hhhhhhhhhhhhhhhh                 bbbb                                                        v                                                               p",
            "v                                                        vc                                                          v                                                               p",
            "v                                                        v                                                           vc                                                              p",
            "ibbbbbbbbbbbbbbbbbbb                         bbbbbbbbbbbbi                                                           ibbbbbbbbbbbb                                  bbbbbbbbbbbbbbbbbp"];

tilemap4 = ["iuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu                                                               uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuup",
            "v                                           z                                                                                                                                        p",
            "v                                           z                                                                                                                                        p",
            "v                                           z                                                      v                  bbbbbbbbbbbbbbbbbbbbbbb                                        p",
            "v                                           z                   c          a                       v                  v     c    cc     c   v                                        p",
            "v                                           bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb              v                  v                     v                                        p",
            "v                                           uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu              v                  v                     v                                        p",
            "v                    a  a                   z                   c          a                       v                  v                     v                                        p",
            "v                   hhhhhhh                 z                                                      v                  vzzzzzzzzzzzzzzzzzzzzzv                                        p",
            "v                                           z                                                                                                                                        p",
            "v             a                             z                                                                   a                                               a                    p",
            "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                                                               bbbbbbbbbbbbbbb                     bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbp"];

tilemap5 = ["iuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu              uuuuu                                            uuuuuuuuuuuuuuuuuuuuu      e     uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuup",
            "v                                       f                a                                                 c                       e                     c                           p",
            "v                                       f                                           v                                                                                                p",
            "v                                       f                                           v               e                  e                                                             p",
            "v                                       f                       c                   v               e                  e                    v                                        p",
            "v                                           bbbbbbbzzbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                                         c             v                                        p",
            "v                                           uuuuuuuzzuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu                                        uuuuu          vc                                       p",
            "v                ee  a  a  ee                                     c      e   a                                                              v                                        p",
            "v                   hhhhhhh                                                                                                                                                          p",
            "v                                                                                                                                                                                    p",
            "v                                                                                                                                                                                    p",
            "ibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                                                     bbbbbbbbbbbbbbbbbbbbbbbbb                     bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbp"];



tilemap6 =  ["iuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu                                                                                                              uuuuuuuuuuuuuuuuu                          v",
             "v                                                                                                                                                                                                 v",
             "v                                    e           c                                     e                                                                    e                                     v",
             "v                                    e         hhhhh                                       hhhhhh             hhhhhhhhhhh                                                                         v",
             "v                                                                                                             z         v                                          f                  p           v",
             "v                              v                         f                                                    z       a v                    e                                        p           v",
             "v                              v                                                                              bbbbbbbbbbb                                                             p           v",
             "v                              v                                 hhhhzzzzhhhh                  f              uuuuuuuuuuu                    e                                        p           v",
             "v                                     e                          va        cv                                 z         v                                          f                              v",
             "v                                     e                          v          v                                 z       c v                                                                         v",
             "v                                                                vc        av                                 hhhhhhhhhhh      bbbbbbbbbbbbb                                                      v",
             "ibbbbbbbbbbbbbbbbbbb                                             v   hhhh   v                                                  iiiiiiiiiiiii                                                      v"];

tilemap7 = ["                                                                                                z                     uuuuuuuuuuuuuuu            f                                             v",
            "                                                                                                z                                                  f                  f                        v",
            "                                                                                                z                                                       v               f                      v",
            "                                                                                                v                                                       v                ppp                   v",
            "                                                                                                v                        c     c                        v                ppp                   v",
            "                                                                                                v                     hhhhhhhhhhhhh                     v                ppp                   v",
            "                                                  a     c                                       v    a   a                                              v                     f                v",
            "                                                hhhhhhhhhhhh                                    vzzzzzzzzzzzzz                                          v              f                       v",
            "                                                                                   v                         v                                                                                 v",
            "                                                                                   v                         v                                                                                 v",
            "                           t          t                                            v      t           t      v                                                                                 v",
            "ibbbbbbbbbbbbbbbb          b          b                                            v      b           b      v                                                   bbbbbbbbbbbbbbbbbb            v",];

//final level, put all others above and adjust the number below
tilemap8 =  ["iuuuuuuuuuuuuuuuuuuuuuuuuuuuu                                                                                uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuui",
             "v                                                                                v                                                                   a                      a        v",
             "v                                                                                vc                                                                                                  v",
             "v                                                                                v                                                                                                   v",
             "v                                                    v                                         a          a                                                                          v",
             "v                             zzz                    v    c                                hhhhhhhhhhhhhhhhhhhh    c                                                                 v",
             "v                             zcz                    hhhhhhhhhhhhhhhhhh                                                                                                              v",
             "v                             zzz                    v    c                                                                                                                          v",
             "v                                                    v                           v                                                                                                   v",
             "v                                                                               cv                                                                                                   v",
             "v                                                                                v                             a                                      a          s          a        v",
             "ibbbbbbbbbbbbbbbbbbbbbbbbbbb                                                                            bbbbbbbbbbbbbbb                     bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbi"];


tilemaps = [tilemap1, tilemap2, tilemap3, tilemap4, tilemap5, tilemap6, tilemap7, tilemap8];
//tilemaps = [tilemap1];

size(1024, 768);
frameRate(60);
angleMode = "radians";
var gravity = new PVector(0, 0.1);
var game_mode = 0;  //0 = start, 1 = how to play, 2 = options,  3 = play, 4 = win, 5 = loss
var screen_width = 1024;
var screen_height = 768;
var level_start_frame = 0;
var scoresave = 0;
var ballsave = 0;
var add_ball = false;
var highscore = 0;

/*
  Color Chart:
  green (from scientist hair) = rgb(31,167,16)
  navy (from scientist pants) = rgb(24,40,79)
  blue (from doctor shirt) = rgb(0,165,255)

*/

var setup = function() {
  textFont(createFont("monospace"), 32);
};

// Fill array for all key codes to detect user key press
var keys = [];

// Load animation from file
var load_animation = function(length, filename)  {
  var arr = [];
  for(var i = 0; i < length; i++)
  {
    arr.push(loadImage(filename+"-"+str(i+1)+".png.png"));
  }
  return arr;
};

// Static chest object
var chest = function(x, y) {
  this.position = new PVector(x, y);
  this.animation = load_animation(1, "Chest/Chest");
  this.gotten = 0;
};

// Draw chest object
chest.prototype.draw = function() {
  if(this.gotten === 0)
  {
    pushMatrix();
    translate(this.position.x, this.position.y);
    imageMode(CENTER);
    image(this.animation[0], 0, 0);
    popMatrix();
  }
};

// Blob object with animation and variable drag/bounce constants
var blob = function(x, y, bounce, drag) {
  this.position = new PVector(x, y);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(gravity.x, gravity.y/drag);
  this.bounce = bounce;
  this.state = 0;
  this.start_position = new PVector(x, y);
  this.animation = load_animation(8, "Blob/Blob");
};

// Blob draw function with update based on constants
blob.prototype.draw = function() {

  if(this.position.y >= (this.start_position.y + 32))
  {
    this.velocity.y = -this.bounce;
  }
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
  this.velocity.x += this.acceleration.x;
  this.velocity.y += this.acceleration.y;
  pushMatrix();
  translate(this.position.x, this.position.y);
  imageMode(CENTER);
  image(this.animation[this.state], 0, 0);
  popMatrix();
  if(frameCount % (this.bounce * 2) === 0)
  {
    this.state += 1;
  }
  if(this.state === 8)
  {
    this.state = 0;
  }
}

// Portal object with animation
var portal = function(x, y) {
  this.position = new PVector(x, y);
  this.state = 0;
  this.animation = load_animation(2, "Portal/Portal");
};

// Portal object drawing at 10 frames per state switch
portal.prototype.draw = function() {
  switch(this.state)
  {
    case 0:
      pushMatrix();
      translate(this.position.x, this.position.y);
      imageMode(CENTER);
      image(this.animation[0], 0, 0);
      popMatrix();
      if(frameCount % 10 === 0)
      {
        this.state = 1;
      }
    break;
    case 1:
      pushMatrix();
      translate(this.position.x, this.position.y);
      imageMode(CENTER);
      image(this.animation[1], 0, 0);
      popMatrix();
      if(frameCount % 10 === 0)
      {
        this.state = 0;
      }
    break;
  }
}

// Block object for internal wall blocks
var internalBlock = function(x, y) {
  this.position = new PVector(x, y);
  this.animation = load_animation(1, "Blocks/block_internal");
  this.breakable = false;
};

internalBlock.prototype.draw = function() {
  pushMatrix();
  translate(this.position.x, this.position.y);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

// Block object for external wall blocks
// s is orientation. s = 0 is up facing, s = 1 is right facing, 2 is down facing, 3 is left facing
var externalBlock = function(x, y, s) {
  this.position = new PVector(x, y);
  this.state = s;
  this.animation = load_animation(1, "Blocks/block_external");
  this.breakable = false;
};

externalBlock.prototype.draw = function() {
  pushMatrix();
  translate(this.position.x, this.position.y);
  rotate(PI*this.state/2);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

// Block object for column wall block (grass both sides)
// s is orientation. s = 0 is vertical, s = 1 is horizontal
var columnBlock = function(x, y, s) {
  this.position = new PVector(x, y);
  this.state = s;
  this.animation = load_animation(1, "Blocks/block_vert");
  this.breakable = false;
};

columnBlock.prototype.draw = function() {
  pushMatrix();
  translate(this.position.x, this.position.y);
  rotate(PI*this.state/2);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

// Block object for external wall blocks
// s is orientation. s = 0 is up facing, s = 1 is right facing, 2 is down facing, 3 is left facing
var brickBlock = function(x, y) {
  this.position = new PVector(x, y);
  this.animation = load_animation(1, "Blocks/block_brick");
  this.breakable = true;
};

brickBlock.prototype.draw = function() {
  pushMatrix();
  translate(this.position.x, this.position.y);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

// Block object for external wall blocks
// s is orientation. s = 0 is up facing, s = 1 is right facing, 2 is down facing, 3 is left facing
var ammoBox = function(x, y) {
  this.position = new PVector(x, y);
  this.animation = load_animation(1, "Ammo/ammo_box");
  this.gotten = 0;
};

ammoBox.prototype.draw = function() {
  if(this.gotten === 0) {
    pushMatrix();
    translate(this.position.x, this.position.y);
    imageMode(CENTER);
    image(this.animation[0], 0, 0);
    popMatrix();
  }
};

// Instruction is a method of wrapping instructions on screen nicely
var drawInstruction = function(x, y, instr, textsize) {

  textSize(textsize);
  rectLength = textWidth(instr) + 20;

  fill(0,165,255);
  rect(x - rectLength/2, y - 40, rectLength, 2*textsize);
  ellipse(x - rectLength/2, y - 10, 2*textsize - 10, 2*textsize);
  ellipse(x + rectLength/2, y - 10, 2*textsize - 10, 2*textsize);
  fill(0, 0, 0);
  rect(x - rectLength/2 + 10, y - 35, rectLength - 20, 2*textsize - 10);
  ellipse(x - rectLength/2 + 10, y - 10, 2*textsize - 10, 2*textsize - 10);
  ellipse(x  + rectLength/2 - 10, y - 10, 2*textsize - 10, 2*textsize - 10);
  fill(0, 165, 255);
  textAlign(CENTER);
  text(instr, x, y);
};

// Instruction is a method of wrapping instructions on screen nicely
var drawWin = function(x, y, instr, textsize) {

  textSize(textsize);
  rectLength = textWidth(instr) + 20;

  fill(0,165,255);
  rect(x - rectLength/2, y - 40, rectLength, 2*textsize);
  ellipse(x - rectLength/2, y + 60, 2*textsize - 10, 2*textsize);
  ellipse(x + rectLength/2, y + 60, 2*textsize - 10, 2*textsize);
  fill(0, 0, 0);
  rect(x - rectLength/2 + 10, y - 35, rectLength - 20, 2*textsize - 10);
  ellipse(x - rectLength/2 + 10, y + 60, 2*textsize - 10, 2*textsize - 10);
  ellipse(x  + rectLength/2 - 10, y + 60, 2*textsize - 10, 2*textsize - 10);
  fill(0, 165, 255);
  textAlign(CENTER);
  text(instr, x, y+85);
};

// Level object declaration, contains all objects within the level
var level = function(num) {
  this.portals = [];
  this.ammo = [];
  this.chests = [];
  this.blobs = [];
  this.blocks = [];
  this.flies = [];
  this.blobs = [];
  this.levelnumber = num;
  this.levellen = 0;
  this.has_scientist = false;
};

// Level 1 Declaration
var level1 = new level(1);
var level2 = new level(2);
var level3 = new level(3);
var level4 = new level(4);
var level5 = new level(5);
var level6 = new level(6);
var level7 = new level(7);
var level8 = new level(8);

var levels = [level1, level2, level3, level4, level5, level6, level7, level8];
//var levels = [level1];

var fly = function(start_x, start_y, end_x, end_y, speed) {
  this.position = new PVector(start_x, start_y);
  var dist = abs(end_x - start_x)+ abs(end_y - start_y);
  this.velocity = new PVector((end_x - start_x)*speed/dist, (end_y - start_y)*speed/dist);
  this.neg_velocity = new PVector((start_x - end_x)*speed, (start_y - end_y)*speed);
  this.start_position = new PVector(start_x, start_y);
  this.end_position = new PVector(end_x, end_y);
  this.state = 0;
  this.anim_state = 0;
  this.animation = load_animation(2, "Fly/Fly");
};

fly.prototype.draw = function() {
  if(this.state === 0)
  {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    var dist = abs(this.position.x - this.end_position.x) + abs(this.position.y - this.end_position.y);
    if(dist < 20)
    {
      this.state = 1;
    }
  }
  else if(this.state === 1)
  {
    this.position.x -= this.velocity.x;
    this.position.y -= this.velocity.y;
    var dist = abs(this.position.x - this.start_position.x) + abs(this.position.y - this.start_position.y);
    if(dist < 20)
    {
      this.state = 0;
    }
  }
  switch(this.anim_state)
  {
    case 0:
      pushMatrix();
      translate(this.position.x, this.position.y);
      imageMode(CENTER);
      image(this.animation[0], 0, 0);
      popMatrix();
      if(frameCount % 10 === 0)
      {
        this.anim_state = 1;
      }
      break;
    case 1:
      pushMatrix();
      translate(this.position.x, this.position.y);
      imageMode(CENTER);
      image(this.animation[1], 0, 0);
      popMatrix();
      if(frameCount % 10 === 0)
      {
        this.anim_state = 0;
      }
      break;
  }
};

// Doctor object, create with x and y coordinates
// By default it begins by doing the demo screen animation
var doctor = function(x, y, score, bc) {
  this.position = new PVector(x, y);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(0, 0);
  this.acceleration.x = gravity.y;
  this.acceleration.y = gravity.y;
  this.state = 2;   // 0 = resting state, 1 = begin jumping state, 2 = airborn not finished,
  this.animation = load_animation(10, "Doctor/Doctor");
  this.frame = 0;
  this.angle = 0;
  this.walking_frame = 0;
  this.gravity_x_direction = 0;
  this.gravity_y_direction = 1;
  this.start_page = 1;
  this.level = level1;
  this.score = score;
  this.ball_count = bc;
};

// Function to draw and update doctor position based on user input and game state
doctor.prototype.draw = function() {
  var jump_height = 3;
  var rotation_constant = 0.03;
  var drift_constant = 0.25;
  var friction_constant = 0.05;
  var max_speed = 6;
  var max_fall_speed = 10;

  if(frameCount % 60 === 0 && this.ball_count < 10 && this.level.levelnumber >= 4)
  {
    this.ball_count += 1;
  }

  var min_blob_dist = 9999;
  var min_blob_index = 0;
  for(var i = 0; i < this.level.blobs.length; i++)
  {
    var dist = abs(this.level.blobs[i].position.x - this.position.x) + abs(this.level.blobs[i].position.y - this.position.y);
    if(dist < min_blob_dist)
    {
      min_blob_dist = dist;
      min_blob_index = i;
    }
  }

  if(min_blob_dist < 36 && this.state === 2)
  {
    this.velocity.x += this.level.blobs[min_blob_index].velocity.x;
    this.velocity.y += this.level.blobs[min_blob_index].velocity.y;
  }

  if(this.level.check_over() === 1)
  {
    this.state = 0;
    this.score = 0;
    game_mode = 5;
  }

  if(game_mode === 3 && this.level.check_win() === 1) {
    this.state = 0;
    game_mode = 4;
  }

  // If we are on the start page
  if(this.start_page === 1)
  {
      // Resting state
    if(this.state === 0)
    {
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.animation[0], 0, 0);
      popMatrix();
      if(frameCount % 100 === 0)
      {
        this.state = 1;
        this.velocity.y = -10*this.gravity_y_direction;
      }
    }
    // Beginning jumping state
    else if(this.state === 1)
    {
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.animation[this.frame % 8], 0, 0);
      popMatrix();
      if(frameCount % 3 === 0)
      {
        this.frame += 1;
      }
      if(this.frame == 8)
      {
        this.state = 2;
      }
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x += this.acceleration.x * this.gravity_x_direction;
      this.velocity.y += this.acceleration.y * this.gravity_y_direction;
    }
    // Airborne but animation is finished state
    else if(this.state === 2)
    {
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.animation[7], 0, 0);
      popMatrix();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x += this.acceleration.x * this.gravity_x_direction;
      this.velocity.y += this.acceleration.y * this.gravity_y_direction;

      if(this.gravity_y_direction === 1 && this.position.y < 500 && this.velocity.y < 0)
      {
        this.gravity_y_direction = -1;
      }
      else if(this.gravity_y_direction === -1 && this.position.y > 300 && this.velocity.y > 0)
      {
        this.gravity_y_direction = 1;
      }

      if(this.gravity_y_direction === 1 && this.angle > 0)
      {
        this.angle -= 0.07;
        if(this.angle < 0)
        {
          this.angle = 0;
        }
      }

      if(this.gravity_y_direction === -1 && this.angle < PI)
      {
        this.angle += 0.07;
        if(this.angle > PI)
        {
          this.angle = PI;
        }
      }

      if(this.position.y >= (screen_height - 72))
      {
        this.state = 0;
        this.frame = 0;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.position.y = screen_height - 72;
        if(this.gravity_y_direction === 1)
        {
          this.angle = 0;
        }
        else
        {
          this.angle = PI;
        }
      }
      else if(this.position.y <= 72)
      {
        this.position.y = 72;
        this.frame = 0;
        this.state = 0;
        this.velocity.x = 0;
        this.velocity.y = 0;
        if(this.gravity_y_direction === 1)
        {
          this.angle = 0;
        }
        else
        {
          this.angle = PI;
        }
      }
    }
  }
  else
  {
    var min_dist = 9999;
    var min_xf_dist = -9999;
    var min_xb_dist = 9999;
    var min_yf_dist = -9999;
    var min_yb_dist = 9999;
    var min_y_below_dist = -9999;
    var min_y_below_neg_dist = 9999;
    var min_x_below_dist = -9999;
    var min_x_below_neg_dist = 9999;
    var min_y_above_dist = 9999;
    var min_y_above_neg_dist = -9999;
    var min_x_above_dist = 9999;
    var min_x_above_neg_dist = -9999;

    if(keys[108] === 0 && this.velocity.x > 0)
    {
      this.velocity.x -= friction_constant
      if(this.velocity.x <= 0)
      {
        this.velocity.x = 0;
      }
    }
    if(keys[106] === 0 && this.velocity.x < 0)
    {
      this.velocity.x += friction_constant
      if(this.velocity.x >= 0)
      {
        this.velocity.x = 0;
      }
    }

    for(var i = 0; i < this.level.chests.length; i++)
    {
      if(this.level.chests[i].gotten === 0 && abs(this.position.x - this.level.chests[i].position.x) < 28 && abs(this.position.y - this.level.chests[i].position.y) < 28)
      {
        this.score += 1;
        this.level.chests[i].gotten = 1;
      }
    }

    for(var i = 0; i < this.level.ammo.length; i++)
    {
      if(this.level.ammo[i].gotten === 0 && abs(this.position.x - this.level.ammo[i].position.x) < 20 && abs(this.position.y - this.level.ammo[i].position.y) < 20)
      {
        this.ball_count += 10;
        this.level.ammo[i].gotten = 1;
      }
    }

    for(var i = 0; i < this.level.blocks.length; i++)
    {
      var dist = abs(this.position.x - this.level.blocks[i].position.x) + abs(this.position.y - this.level.blocks[i].position.y);
      var x_dist = this.position.x - this.level.blocks[i].position.x;
      var y_dist = this.position.y - this.level.blocks[i].position.y;
      if(dist < min_dist)
      {
        min_dist = dist;
      }
      if(this.gravity_y_direction === 1 && y_dist < 64 && y_dist > -8)
      {
        if(min_xb_dist > x_dist && x_dist > 0)
        {
          min_xb_dist = x_dist;
        }
        if(min_xf_dist < x_dist && x_dist < 0)
        {
          min_xf_dist = x_dist;
        }
      }
      else if(this.gravity_y_direction === 1 && y_dist >= -72 && y_dist <= 0 && abs(x_dist) <= 32)
      {
        if(y_dist >= min_y_below_dist)
        {
          min_y_below_dist = y_dist;
        }
      }
      else if(this.gravity_y_direction === -1 && -y_dist < 64 && -y_dist > -8)
      {
        if(min_xb_dist > x_dist && x_dist > 0)
        {
          min_xb_dist = x_dist;
        }
        if(min_xf_dist < x_dist && x_dist < 0)
        {
          min_xf_dist = x_dist;
        }
      }
      else if(this.gravity_y_direction === -1 && y_dist <= 72 && y_dist >= 0 && abs(x_dist) <= 32)
      {
        if(y_dist < min_y_below_neg_dist)
        {
          min_y_below_neg_dist = y_dist;
        }
      }
      else if(this.gravity_x_direction === -1 && x_dist <= 72 && x_dist >= 0 && abs(y_dist) <= 32)
      {
        if(x_dist < min_x_below_neg_dist)4
        {
          min_x_below_neg_dist = x_dist;
        }
      }
      else if(this.gravity_x_direction === 1 && x_dist >= -72 && x_dist <= 0 && abs(y_dist) <= 32)
      {
        if(x_dist > min_x_below_dist)
        {
          min_x_below_dist = x_dist;
        }
      }
      if(this.gravity_x_direction === 1 && x_dist < 64 && x_dist > -8)
      {
        if(min_yb_dist > y_dist && y_dist > 0)
        {
          min_yb_dist = y_dist;
        }
        if(min_yf_dist < y_dist && y_dist < 0)
        {
          min_yf_dist = y_dist;
        }
      }
      if(this.gravity_x_direction == -1 && -x_dist < 64 && -x_dist > -8)
      {
        if(min_yb_dist > y_dist && y_dist > 0)
        {
          min_yb_dist = y_dist;
        }
        if(min_yf_dist < y_dist && y_dist < 0)
        {
          min_yf_dist = y_dist;
        }
      }

      if(this.gravity_y_direction === 1 && this.velocity.y > 0)
      {
        if(abs(this.position.x - this.level.blocks[i].position.x) < 40 && 64 > this.level.blocks[i].position.y - this.position.y  && this.level.blocks[i].position.y - this.position.y > 0)
        {
          this.state = 0;
          this.velocity.y = 0;
          this.position.y = this.level.blocks[i].position.y - 64;
        }
      }
      else if(this.gravity_y_direction === -1 && this.velocity.y < 0)
      {
        if(abs(this.position.x - this.level.blocks[i].position.x) < 40 && 64 > this.position.y - this.level.blocks[i].position.y && this.position.y - this.level.blocks[i].position.y > 0)
        {
          this.state = 0;
          this.angle = PI;
          this.velocity.y = 0;
          this.position.y = this.level.blocks[i].position.y + 64;
        }
      }
      else if(this.gravity_x_direction === -1 && this.velocity.x < 0)
      {
        if(abs(this.position.y - this.level.blocks[i].position.y) < 40 && 64 > this.position.x - this.level.blocks[i].position.x && this.position.x - this.level.blocks[i].position.x > 0)
        {
          this.state = 0;
          this.angle = PI/2;
          this.velocity.x = 0;
          this.position.x = this.level.blocks[i].position.x + 64;
        }
      }
      else if(this.gravity_x_direction === 1 && this.velocity.x > 0)
      {
        if(abs(this.position.y - this.level.blocks[i].position.y) < 40 && 64 > this.level.blocks[i].position.x - this.position.x && this.level.blocks[i].position.x - this.position.x > 0)
        {
          this.state = 0;
          this.angle = 3*PI/2;
          this.velocity.x = 0;
          this.position.x = this.level.blocks[i].position.x - 64;
        }
      }

      // Vertical collision detection
      if(this.gravity_y_direction === 1 && y_dist < 72 && y_dist >= 0 && abs(x_dist) <= 32)
      {
          if(y_dist <= min_y_above_dist)
          {
            min_y_above_dist = y_dist;
          }
      }
      else if(this.gravity_y_direction === -1 && y_dist >= -72 && y_dist <= 0 && abs(x_dist) <= 32)
      {
        if(y_dist >= min_y_above_neg_dist)
        {
          min_y_above_neg_dist = y_dist;
        }
      }
      else if(this.gravity_x_direction === 1 && x_dist < 72 && x_dist >= 0 && abs(y_dist) <= 38)
      {
        if(x_dist <= min_x_above_dist)
        {
          min_x_above_dist = x_dist;
        }
      }
      else if(this.gravity_x_direction === -1 && x_dist >= -72 && x_dist <= 0 && abs(y_dist) <= 38)
      {
        if(x_dist >= min_x_above_neg_dist)
        {
          min_x_above_neg_dist = x_dist;
        }
      }
    }

    if(min_y_below_dist === -9999 && this.gravity_y_direction === 1)
    {
      this.state = 2;
    }

    if(min_y_below_neg_dist === 9999 && this.gravity_y_direction === -1)
    {
      this.state = 2;
    }

    if(min_x_below_neg_dist === 9999 && this.gravity_x_direction === -1)
    {
      this.state = 2;
    }
    if(min_x_below_dist === -9999 && this.gravity_x_direction === 1)
    {
      this.state = 2;
    }

    if(this.gravity_y_direction === 1)
    {
      if(keys[106] === 1 && this.velocity.x > -5 && min_xb_dist > 50)
      {
        this.velocity.x -= 0.1;
      }
      else if(keys[108] === 1 && this.velocity.x < 5 && min_xf_dist < -50)
      {
        this.velocity.x += 0.1;
      }

      if(this.velocity.x > 0)
      {
        if(min_xf_dist >= -50)
        {
          this.velocity.x = 0;
          this.position.x -= (50 + min_xf_dist)
        }
      }
      else if(this.velocity.x < 0)
      {
        if(min_xb_dist <= 50)
        {
          this.velocity.x = 0;
          this.position.x += (50 - min_xb_dist);
        }
      }

      if(this.velocity.y < 0)
      {
        if(min_y_above_dist <= 50)
        {
          this.velocity.y = 0;
          this.position.y += (50 - min_y_above_dist);
        }
      }
    }
    else if(this.gravity_y_direction === -1)
    {
      if(keys[106] === 1 && this.velocity.x > -max_speed && min_xb_dist > 50)
      {
        this.velocity.x -= 0.1;
      }
      else if(keys[108] === 1 && this.velocity.x < max_speed && min_xf_dist < -50)
      {
        this.velocity.x += 0.1;
      }

      if(this.velocity.x > 0)
      {
        if(min_xf_dist >= -50)
        {
          this.velocity.x = 0;
          this.position.x -= (50 + min_xf_dist);
        }
      }
      else if(this.velocity.x < 0)
      {
        if(min_xb_dist <= 50)
        {
          this.velocity.x = 0;
          this.position.x += (50 - min_xb_dist);
        }
      }
      if(this.velocity.y > 0)
      {
        if(min_y_above_neg_dist >= -50)
        {
          this.velocity.y = 0;
          this.position.y -= (50 + min_y_above_neg_dist);
        }
      }
    }
    else if(this.gravity_x_direction === 1 || this.gravity_x_direction === -1)
    {
      if(keys[105] === 1 && this.velocity.y > -max_speed && min_yb_dist > 50)
      {
        this.velocity.y -= 0.1;
      }
      else if(keys[107] === 1 && this.velocity.y < max_speed && min_yf_dist < -50)
      {
        this.velocity.y += 0.1;
      }

      if(this.velocity.y > 0)
      {
        if(min_yf_dist >= -50)
        {
          this.velocity.y = 0;
          this.position.y -= (50 + min_yf_dist);
        }
      }
      else if(this.velocity.y < 0)
      {
        if(min_yb_dist <= 50)
        {
          this.velocity.y = 0;
          this.position.y += (50 - min_yb_dist);
        }
      }

      if(this.velocity.x < 0 && this.gravity_x_direction === 1)
      {
        if(min_x_above_dist <= 50)
        {
          this.velocity.x = 0;
          this.position.x += (50 - min_x_above_dist);
        }
      }
      if(this.velocity.x > 0 && this.gravity_x_direction === -1)
      {
        if(min_x_above_neg_dist >= -50)
        {
          this.velocity.x = 0;
          this.position.x -= (50 + min_x_above_neg_dist);
        }
      }
    }

    if(this.state === 0)
    {
      if(this.gravity_y_direction === 1)
      {
        this.angle = 0;
      }
      else if(this.gravity_y_direction === -1)
      {
        this.angle = PI;
      }
      else if(this.gravity_x_direction === 1)
      {
        this.angle = 3*PI/2;
      }
      else if(this.gravity_x_direction === -1)
      {
        this.angle = PI/2;
      }

      if(this.velocity.x !== 0 || this.velocity.y !== 0)
      {
        switch(this.walking_frame)
        {
          case 0:
            pushMatrix();
            translate(300, this.position.y);
            rotate(this.angle);
            imageMode(CENTER);
            image(this.animation[0], 0, 0);
            popMatrix();
            if(frameCount % 10 === 0)
            {
              this.walking_frame = 1;
            }
            break;
          case 1:
            pushMatrix();
            translate(300, this.position.y);
            rotate(this.angle);
            imageMode(CENTER);
            image(this.animation[8], 0, 0);
            popMatrix();
            if(frameCount % 10 === 0)
            {
              this.walking_frame = 2;
            }
            break;
          case 2:
            pushMatrix();
            translate(300, this.position.y);
            rotate(this.angle);
            imageMode(CENTER);
            image(this.animation[0], 0, 0);
            popMatrix();
            if(frameCount % 10 === 0)
            {
              this.walking_frame = 3;
            }
            break;
          case 3:
            pushMatrix();
            translate(300, this.position.y);
            rotate(this.angle);
            imageMode(CENTER);
            image(this.animation[9], 0, 0);
            popMatrix();
            if(frameCount % 10 === 0)
            {
              this.walking_frame = 0;
            }
            break;
          break;
        }
      }
      else
      {
        pushMatrix();
        translate(300, this.position.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.animation[0], 0, 0);
        popMatrix();
      }

      if(keys[105] === 1 && this.gravity_y_direction === 1)
      {
        this.state = 1;
        this.velocity.y += -jump_height*this.gravity_y_direction;
        this.velocity.x += -jump_height*this.gravity_x_direction;
      }
      else if(keys[107] === 1 && this.gravity_y_direction === -1)
      {
        this.state = 1;
        this.velocity.y += -jump_height*this.gravity_y_direction;
        this.velocity.x += -jump_height*this.gravity_x_direction;
      }
      else if(keys[106] === 1 && this.gravity_x_direction === 1)
      {
        this.state = 1;
        this.velocity.y += -jump_height*this.gravity_y_direction;
        this.velocity.x += -jump_height*this.gravity_x_direction;
      }
      else if(keys[108] === 1 && this.gravity_x_direction === -1)
      {
        this.state = 1;
        this.velocity.y += -jump_height*this.gravity_y_direction;
        this.velocity.x += -jump_height*this.gravity_x_direction;
      }

      if(keys[119] === 1 && this.gravity_y_direction !== -1)
      {
        this.state = 2;
        this.gravity_y_direction = -1;
        this.gravity_x_direction = 0;
      }
      else if(this.gravity_y_direction !== 1 && keys[115] === 1)
      {
        this.state = 2;
        this.gravity_y_direction = 1;
        this.gravity_x_direction = 0;
      }
      else if(this.gravity_x_direction !== -1 && keys[97] === 1 && this.level.levelnumber >= 2)
      {
        this.state = 2;
        this.gravity_x_direction = -1;
        this.gravity_y_direction = 0;
      }
      else if(this.gravity_x_direction !== 1 && keys[100] === 1 && this.level.levelnumber >= 2)
      {
        this.state = 2;
        this.gravity_x_direction = 1;
        this.gravity_y_direction = 0;
      }

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
    else if(this.state === 1)
    {
      pushMatrix();
      translate(300, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.animation[this.frame % 8], 0, 0);
      popMatrix();
      if(frameCount % 3 === 0)
      {
        this.frame += 1;
      }
      if(this.frame === 8)
      {
        this.state = 2;
        this.frame = 0;
      }
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x += this.acceleration.x * this.gravity_x_direction;
      this.velocity.y += this.acceleration.y * this.gravity_y_direction;
    }
    else if(this.state === 2)
    {
      pushMatrix();
      translate(300, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.animation[7], 0, 0);
      popMatrix();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if(abs(this.velocity.x) < max_fall_speed)
      {
        this.velocity.x += this.acceleration.x * this.gravity_x_direction;
      }
      if(abs(this.velocity.y) < max_fall_speed)
      {
        this.velocity.y += this.acceleration.y * this.gravity_y_direction;
      }


      if(this.gravity_y_direction === 1 && this.angle > 0)
      {
        if(this.angle > 0)
        {
          this.angle -= rotation_constant * abs(this.velocity.y);
        }
        else
        {
          this.angle += rotation_constant * abs(this.velocity.y);
        }

        if(this.angle < 0 || this.angle > 2*PI)
        {
          this.angle = 0;
        }
      }

      if(this.gravity_y_direction === -1 && this.angle < PI)
      {
        this.angle += rotation_constant * abs(this.velocity.y);
        if(this.angle > PI || this.angle < -PI)
        {
          this.angle = PI;
        }
      }

      if(this.gravity_y_direction === -1 && this.angle > PI)
      {
        this.angle -= rotation_constant * abs(this.velocity.y);
        if(this.angle < PI)
        {
          this.angle = PI;
        }
      }

      if(this.gravity_x_direction === -1 && this.angle < PI/2)
      {
        this.angle += rotation_constant * abs(this.velocity.x);
        if(this.angle > PI/2)
        {
          this.angle = PI/2;
        }
      }

      if(this.gravity_x_direction === -1 && this.angle > PI/2)
      {
        this.angle -= rotation_constant * abs(this.velocity.x);
        if(this.angle < PI/2)
        {
          this.angle = PI/2;
        }
      }

      if(this.gravity_x_direction === 1 && this.angle < (3*PI/2))
      {
        this.angle += rotation_constant * abs(this.velocity.x);
        if(this.angle > (3*PI/2))
        {
          this.angle = 3*PI/2;
        }
      }

      if(this.gravity_x_direction === 1 && this.angle > (3*PI/2))
      {
        this.angle -= rotation_constant * abs(this.velocity.x);
        if(this.angle < (3*PI/2))
        {
          this.angle = 3*PI/2;
        }
      }

      if(min_dist > 64)
      {
        if(this.gravity_y_direction !== 0)// && abs(this.velocity.y) < max_speed)
        {
          if(keys[119] === 1)
          {
            this.gravity_y_direction = -1;
            this.gravity_x_direction = 0;
          }
          else if(keys[115] === 1)
          {
            this.gravity_y_direction = 1;
            this.gravity_x_direction = 0;
          }
        }
        if(this.gravity_y_direction !== 0 && this.level.levelnumber >= 2)
        {
          if(keys[97] === 1)
          {
            this.gravity_x_direction = -1;
            this.gravity_y_direction = 0;
          }
          else if(keys[100] === 1)
          {
            this.gravity_x_direction = 1;
            this.gravity_y_direction = 0;
          }
        }
        if(this.gravity_x_direction !== 0)
        {
          if(keys[97] === 1)
          {
            this.gravity_x_direction = -1;
            this.gravity_y_direction = 0;
          }
          else if(keys[100] === 1)
          {
            this.gravity_x_direction = 1;
            this.gravity_y_direction = 0;
          }
          else if(keys[119] === 1)
          {
            this.gravity_y_direction = -1;
            this.gravity_x_direction = 0;
          }
          else if(keys[115] === 1)
          {
            this.gravity_y_direction = 1;
            this.gravity_x_direction = 0;
          }
        }
      }
    }
  }
};

var scientistObj = function(x, y) {
  this.start_position = new PVector(x, y); //jump tracker for start screen
  this.position = new PVector(x, y);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(0, 0);
  this.mass = 1;
  this.health = 100;

  /*
    State     Meaning
      0        Walk
      1        Jump
  */
  this.state = 0;
  this.animation_frame = 0;
  this.start_dir = 1;
  this.dir_y = 1;
  this.dir_x = 1;
  this.angle = 0;

  //animations
  this.walk_animmation_length = 12;
  this.jump_animmation_length = 15;
  this.walk_animation = load_animation(12, "Scientist_Walk/scientist_walk");
  this.jump_animation = load_animation(15, "Scientist_Jump/scientist_jump");

};

//function to apply a scientist force
scientistObj.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};

scientistObj.prototype.draw_walk = function() {

  //update the frame if necessary
  if(frameCount % 4 === 0) {
      this.animation_frame += 1;
  }

  pushMatrix();
  translate(this.position.x, this.position.y);
  //rotate(this.angle);
  imageMode(CENTER);
  image(this.walk_animation[this.animation_frame % this.walk_animmation_length], 0, 0);
  popMatrix();

  //start animation
  switch(game_mode)
  {
    case 0:
      this.position.x += this.start_dir;

      if(this.position.x > 742 || this.position.x < 282) {
        this.start_dir *= -1;
        this.state = 1;
        this.animation_frame = 0;
      }
      break;
  }
};

scientistObj.prototype.draw_jump = function() {

  pushMatrix();
  translate(this.position.x, this.position.y);
  //rotate(this.angle);
  imageMode(CENTER);
  image(this.jump_animation[this.animation_frame % this.jump_animmation_length], 0, 0);
  popMatrix();


  //update the frame if necessary
  if(frameCount % 3 === 0) {
      if(this.animation_frame === 6) {
        this.animation_frame += 1;
        this.acceleration.set(0, 0);
        this.applyForce(gravity);
        this.velocity = new PVector(0, -4);
      }
      else if(this.animation_frame > 7 || this.animation_frame < 6) {
        this.animation_frame += 1;
      }

      if(this.animation_frame >= this.jump_animmation_length) {
        this.state = 0;
        this.animation_frame = 0;
      }
  }

  if(this.animation_frame === 7) {
    switch(game_mode) {
      case 0:
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        if(this.position.y > this.start_position.y) {
          this.animation_frame += 1;
          this.position.y= this.start_position.y;
        }
        break;
      case 3:

        break;
    }
  }
};

scientistObj.prototype.update = function() {

  switch(this.state) {
    case 0:
      this.draw_walk();
      break;
    case 1:
      this.draw_jump();
      break;
  }
};

scientistObj.prototype.draw = function() {

  if(this.health > 0) {
    //walk
    if(this.state === 0) {
      //update the frame if necessary
      if(frameCount % 4 === 0) {
          this.animation_frame += 1;
      }

      pushMatrix();
      translate(this.position.x, this.position.y);

      if(this.dir_y === -1) {
        rotate(PI);
      }
      imageMode(CENTER);
      image(this.walk_animation[this.animation_frame % this.walk_animmation_length], 0, 0);

      fill(255, 0, 0);
      rect(-52, -51, 104, 12);
      fill(33, 172, 5);
      rect(-50, -50, this.health, 10);

      popMatrix();

      this.position.x += this.dir_x;

      if(abs(this.position.x - this.start_position.x) > 200) {
        this.dir_x *= -1;
        this.state = 1;
      }
    }

    //going up state
    else if(this.state === 1) {

      //update the frame if necessary
      if(frameCount % 3 === 0) {
          if(this.animation_frame === 6) {
            this.animation_frame += 1;
            this.velocity.y = this.dir_y * -5;
          }
          else if(this.animation_frame < 6) {
            this.animation_frame += 1;
          }
      }

      this.velocity.y += gravity.y * -this.dir_y;
      this.position.y += this.velocity.y

      if(this.dir_y > 0 && this.position.y < 768/2) {
        this.state = 2;
        this.dir_y *= -1;
        this.velocity.y = 0;
      }

      if(this.dir_y < 0 && this.position.y > 768/2) {
        this.state = 2;
        this.dir_y *= -1;
        this.velocity.y = 0;
      }

      pushMatrix();
      translate(this.position.x, this.position.y);

      if(this.dir_y === -1) {
        rotate(PI);
      }

      imageMode(CENTER);
      image(this.jump_animation[this.animation_frame % this.jump_animmation_length], 0, 0);
      fill(255, 0, 0);
      rect(-52, -51, 104, 12);
      fill(33, 172, 5);
      rect(-50, -50, this.health, 10);
      popMatrix();
    }

    //flip state
    else if(this.state === 2) {

      //update angle
      if(this.dir_y === -1) {
        if(this.angle < PI) {
          this.angle += PI/20;
        } else {
          this.angle = PI;
        }
      } else {
        if(this.angle < 2*PI && this.angle >= PI) {
          this.angle += PI/20;
        } else {
          this.angle = 0;
        }
      }

      if(this.position.y < 92) {
        this.position.y = 92;
        this.velocity.y = 0;
        this.state = 3;
      }

      if(this.position.y > 676) {
        this.position.y = 676;
        this.velocity.y = 0;
        this.state = 3;
      }

      this.velocity.y += gravity.y * this.dir_y;
      this.position.y += this.velocity.y;

      //draw
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.jump_animation[this.animation_frame % this.jump_animmation_length], 0, 0);
      fill(255, 0, 0);
      rect(-52, -51, 104, 12);
      fill(33, 172, 5);
      rect(-50, -50, this.health, 10);
      popMatrix();
    }

    //going top state
    else if(this.state === 3) {

      //draw
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.jump_animation[this.animation_frame % this.jump_animmation_length], 0, 0);
      fill(255, 0, 0);
      rect(-52, -51, 104, 12);
      fill(33, 172, 5);
      rect(-50, -50, this.health, 10);
      popMatrix();

      //update the frame if necessary
      if(frameCount % 3 === 0) {
          this.animation_frame += 1;

          if(this.animation_frame >= this.jump_animmation_length) {
            this.animation_frame = 0;
            this.state = 0;
          }
        }
    }
  }


};

var logoObj = function(x, y) {
  this.x = x;
  this.y = y;
  this.animation_frame = 0;

  this.animation_length = 8;
  this.animation = load_animation(8, "GravLab_Logo/gravlab_logo");
};

logoObj.prototype.draw = function() {

  if(frameCount % 10 === 0) {
    if(this.animation_frame < 7) {
      this.animation_frame += 1;
    } else if(frameCount % 200 === 0) {
      this.animation_frame = 0;
    }
  }

  pushMatrix();
  textAlign(CENTER);
  textSize(100);
  text("Gravity Labs", this.x, this.y + 30);
  //image(this.animation[this.animation_frame % this.animation_length], 0, 0);
  popMatrix();
};

var backgroundObj = function() {
  this.x = 512;
  this.y = 384;
  this.animation = load_animation(1, "Background/bg");
};

backgroundObj.prototype.drawMoving = function(player) {
  //draw the background with respect to the character position
  var newx = player.position.x / (64 * player.level.levellen) - 0.017; //starting offset
  this.x = 1024 - newx*1024;

  if(this.x < 0) {
    this.x = 0;
  } else if(this.x > 1024) {
    this.x = 1024;
  }

  pushMatrix();
  translate(Math.floor(this.x), this.y);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

backgroundObj.prototype.drawStart = function() {
  pushMatrix();
  translate(Math.floor(this.x), this.y);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

var levelLogo = function(levelnum) {
  this.levelnumber = levelnum;
  this.x = 1024;
  this.y = 100;
}

levelLogo.prototype.draw = function() {
  fill(0,165,255);
  rect(this.x, this.y, 300, 100);
  ellipse(this.x, this.y + 50, 100, 100);
  ellipse(this.x + 300, this.y + 50, 100, 100);
  fill(0, 0, 0);
  rect(this.x + 10, this.y + 10, 280, 80);
  ellipse(this.x + 10, this.y + 50, 80, 80);
  ellipse(this.x + 290, this.y + 50, 80, 80);
  fill(0, 165, 255);
  textAlign(CENTER);
  textSize(50);
  text("Level " + this.levelnumber, this.x + 150, this.y + 70);
};

levelLogo.prototype.update = function() {
  this.x -= 10;
};

// Declare starting screen objects
var scientist = new scientistObj(512, 160);
var doc = new doctor(150, screen_height-64, 0, 0);
var blobs = [];
var logo = new logoObj(505, 280);
var bg = new backgroundObj();
var balls = [];
var level_logo = new levelLogo(1);
blobs.push(new blob(800, screen_height-96, 8, 2));
blobs.push(new blob(900, screen_height-96, 5, 1));
blobs.push(new blob(850, screen_height-96, 4, 4));
var chests = [];
chests.push(new chest(screen_width-64, screen_height-64));
chests.push(new chest(64, screen_height-64));
var portals = [];
var fireworks = [];
var wincounter = 0;
for(var i = 0; i < 32; i++)
{
  portals.push(new portal(i*32, 16));
  portals.push(new portal(i*32, screen_height-16));
  portals.push(new portal(16, i*25));
  portals.push(new portal(screen_width-16, i*25));
}

var init_game = function() {
  doc = new doctor(200, screen_height-200, 0, 0);
  bg = new backgroundObj();
  doc.start_page = 0;
  doc.state = 0;
  doc.level = levels[0];
  doc.level.init();
  var fireworks = [];
};

var init_level = function(level) {
  doc = new doctor(200, screen_height-200, doc.score, doc.ball_count);
  bg = new backgroundObj();
  doc.start_page = 0;
  doc.state = 0;
  doc.level = levels[level-1];
  doc.level.init();

  scoresave = doc.score;
  ballsave = doc.ball_count;
};

//initialize to score at the start of the level
var init_level_loss = function(level) {
  doc = new doctor(200, screen_height-200, scoresave, ballsave);
  bg = new backgroundObj();
  doc.start_page = 0;
  doc.state = 0;
  doc.level = levels[level-1];
  doc.level.init();
};

level.prototype.draw = function() {
  pushMatrix();
  translate(-doc.position.x+300, 0);
  for(var i = 0; i < this.blocks.length; i++)
  {
    this.blocks[i].draw();
  }
  for(var i = 0; i < this.portals.length; i++)
  {
    this.portals[i].draw();
  }
  for(var i = 0; i < this.chests.length; i++)
  {
    this.chests[i].draw();
  }
  for(var i = 0; i < this.ammo.length; i++)
  {
    this.ammo[i].draw();
  }
  for(var i = 0; i < this.blobs.length; i++)
  {
    this.blobs[i].draw();
  }
  for(var i = 0; i < this.flies.length; i++)
  {
    this.flies[i].draw();
  }
  for(var i = 0; i < this.blobs.length; i++)
  {
    this.blobs[i].draw();
  }
  if(doc.level === level1)
  {
    drawInstruction(500, 400, "Use i, j, k, and l to jump and move around", 30);
    drawInstruction(3000, 400, "Use w and s to flip the gravity", 30);
    drawInstruction(5000, 400, "Collect chests to increase your score", 30);
    drawInstruction(10000, 400, "Jump through the portal to advance", 30);
  }
  else if(doc.level === level4) {
    drawInstruction(1000, 250, "Throw balls with the space bar", 30);
    drawInstruction(1000, 400, "Collect ammo boxes for balls", 30);

    drawInstruction(2000, 400, "Brick blocks can be broken", 30);
  }
  else if(doc.level === level2) { //TODO change this to whenever we want to enable side to x gravity control
    drawInstruction(1000, 400, "Use a and d to change gravity horizontally", 30);
  }
  else if(doc.level === level5) {
    drawInstruction(1000, 300, "Watch out for flies!", 30);
  }
  else if(doc.level === level7) {
    drawInstruction(1000, 300, "Slimes will bounce you in both directions!", 30);
  }
  else if(doc.level.levelnumber === levels.length) {
    drawInstruction(1000, 300, "Eliminate the doctor to win!", 30);
  }

  if(this.has_scientist) {
    scientist.draw();
  }

  print(this.has_scientist);

  popMatrix();

  pushMatrix();
  translate(10, -30);
  fill(0,165,255);
  rect(20, 40, 200, 80);
  ellipse(20, 80, 40, 80);
  ellipse(220, 80, 40, 80);

  rect(20, 750, 100, 40);
  ellipse(20, 770, 40, 40);
  ellipse(120, 770, 40, 40);

  fill(0, 0, 0);
  rect(25, 45, 190, 70);
  ellipse(25, 80, 40, 70);
  ellipse(215, 80, 40, 70);

  rect(25, 755, 90, 30);
  ellipse(25, 770, 40, 30);
  ellipse(115, 770, 40, 30);

  fill(0,165,255);
  textSize(25);
  textAlign(CENTER);
  text("SCORE", 65, 75);
  text("BALLS", 65, 100);
  text("BACK", 65, 778);

  textAlign(RIGHT);
  text(doc.score, 200, 75);
  text(doc.ball_count, 200, 100);
  textAlign(CENTER);
  popMatrix();
};

level.prototype.init = function() {
  this.portals = [];
  tilemap = tilemaps[this.levelnumber - 1];
  this.levellen = tilemap[0].length;
  this.portals = [];
  this.flies = [];
  this.chests = [];
  this.blocks = [];
  this.ammo = [];
  this.blobs = [];
  for(var i = 0; i < tilemap.length; i++)
  {
    for(var j = 0; j < tilemap[i].length; j++) {
      /*
      b - external block facing up
      r - external block facing right
      u - external block facing down
      l - external block facing left
      i - internal block
      v - vertical column block
      h - horizontal column block
      p - portal
      c - chest
      a - ammo box
      */
      switch(tilemap[i][j]) {
        case 't':
          this.blobs.push(new blob(j*64, i*64+32, 6, 2));
          break;
        case 'p':
          this.portals.push(new portal(j*64, i*64 + 32));
          break;
        case 'f':
          this.flies.push(new fly(j*64, i*64 + 32, (j*64)+200, i*64 + 32, 1));
          break;
        case 'e':
          this.flies.push(new fly(j*64, i*64 + 32, (j*64), i*64 + 232, 1));
          break;
        case 'c':
          this.chests.push(new chest(j*64, i*64 + 48));
          break;
        case 'b':
          this.blocks.push(new externalBlock(j*64, i*64 + 32, 0));
          break;
        case 'r':
          this.blocks.push(new externalBlock(j*64, i*64 + 32, 1));
          break;
        case 'u':
          this.blocks.push(new externalBlock(j*64, i*64 + 32, 2));
          break;
        case 'l':
          this.blocks.push(new externalBlock(j*64, i*64 + 32, 3));
          break;
        case 'i':
          this.blocks.push(new internalBlock(j*64, i*64 + 32));
          break;
        case 'v':
          this.blocks.push(new columnBlock(j*64, i*64 + 32, 0));
          break;
        case 'h':
          this.blocks.push(new columnBlock(j*64, i*64 + 32, 1));
          break;
        case 'z':
          this.blocks.push(new brickBlock(j*64, i*64 + 32));
          break;
        case 'a':
          this.ammo.push(new ammoBox(j*64, i*64 + 48));
          break;
        case 's':
          this.has_scientist = true;
          scientist = new scientistObj(j*64, i*64 + 32);
          break;
      }
    }
  }
};

level.prototype.check_over = function() {
  if(doc.position.y > screen_height || doc.position.y < 0)
  {
    return 1;
  }
  for(var i = 0; i < this.flies.length; i++)
  {
    var dist = abs(doc.position.x - this.flies[i].position.x) + abs(doc.position.y - this.flies[i].position.y);
    if(dist < 36)
    {
      return 1;
    }
  }

  if(this.has_scientist && game_mode === 3) {
    var distx = abs(doc.position.x - (scientist.position.x))
    var disty = abs(doc.position.y - scientist.position.y);

    if(distx < 20) {
      if(disty < 32) {
        return 1;
      }
    }
  }

  return 0;
};

level.prototype.check_win = function() {
  /*
  if(doc.position.x > 64*this.levellen && doc.position.y > 0 && doc.position.y < screen_height) {
    return 1;
  } */

  if(this.has_scientist && scientist.health > 0) {
    return 0;
  }

  else if(this.has_scientist && scientist.health <= 0) {
    return 1;
  }

  for(var i = 0; i < this.portals.length; i++)
  {
    var dist = abs(doc.position.x - this.portals[i].position.x) + abs(doc.position.y - this.portals[i].position.y);
    var x_dist = doc.position.x - this.portals[i].position.x;
    var y_dist = doc.position.y - this.portals[i].position.y;

    if(dist < 45) {
      return 1;
    }

  }
  return 0;
};

var ballObj = function(x, y, v) {
  this.position = new PVector(x, y);
  this.velocity = new PVector(v, 0);
  this.acceleration = new PVector(0, 0);

  this.animation = load_animation(1, "Ball/ball_object");
  this.rotateCount = 0;
};

ballObj.prototype.draw = function() {

  /*
  this.velocity.y += gravity * this.gravity_y_direction;
  this.position += 0.05*this.velocity;
  this.rotateCount += 1; */

  this.velocity.y += gravity.y * doc.gravity_y_direction;
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;

  pushMatrix();
  translate(this.position.x, this.position.y);
  imageMode(CENTER);
  image(this.animation[0], 0, 0);
  popMatrix();
};

var fireworkPointObj = function(x, y, v, c) {
  this.position = new PVector(x, y);
  this.velocity = v;
  this.color = c;
};

fireworkPointObj.prototype.draw = function() {

  fill(this.color);
  ellipse(this.position.x, this.position.y, 3, 3);

  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
  this.velocity.y += gravity.y;
};

var fireworkObj = function(x) {
  this.position = new PVector(x, -10);
  this.velocity = new PVector(0, 0);

  this.points = [];
};

fireworkObj.prototype.init = function() {

  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255)
  for(var i = 0; i < 100; i++) {

    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);

    var x = random(-10, 10)/15;
    var y = random(-10, 10)/15;
    var c = color(r, g, b);
    this.points.push(new fireworkPointObj(this.position.x, this.position.y, new PVector(x, y), c));
  }
};

fireworkObj.prototype.draw = function() {

  if(this.position.y < 250) {
    this.velocity.y += gravity;
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    fill(this.r, this.g, this.b);
    ellipse(this.position.x, this.position.y, 15, 15);

    fill(0, 0, 0);
    ellipse(this.position.x, this.position.y, 5, 5);
  }
  else {
    for(var i = 0; i < this.points.length; i++) {
      this.points[i].draw();
    }
  }
};

var handle_balls = function() {

    var evadeCalled = false;

    //add a new ball
    if(add_ball) {
      add_ball = false;

      if(doc.ball_count > 0) {
        doc.ball_count -= 1;
        var vx = 0;
        if(doc.velocity.x >= 0) {
          vx = 7;
        } else {
          vx = -7;
        }
        balls.push(new ballObj(300 + 2*vx, doc.position.y, vx));
      }
    }

    //handle balls on screen
    for(var i = 0; i < balls.length; i++) {
      balls[i].draw();

      if(balls[i].position.y < -10 || balls[i].position.y > 780) {
        balls.splice(i, 1);
      }

      if(balls.length > i) {
        //check ball collision
        for(var j = 0; j < doc.level.blocks.length; j++) {

          var dist =  abs(balls[i].position.x - (doc.level.blocks[j].position.x - doc.position.x + 300)) + abs(balls[i].position.y - doc.level.blocks[j].position.y);

          if(dist < 60) {
            if(doc.level.blocks[j].breakable === true) {
              doc.level.blocks.splice(j, 1);
            }

            balls.splice(i, 1);
            break;
          }
        }
      }
    }

    //handle ball hitting scientist
    if(doc.level.has_scientist) {
      for(var i = 0; i < balls.length; i++) {
        var distx =  abs(balls[i].position.x - (scientist.position.x - doc.position.x + 300))
        var disty = abs(balls[i].position.y - (scientist.position.y));

        if(distx < 10) {
          if(disty < 30) {
            balls.splice(i, 1);
            scientist.health -= 20;
            break;
          }
        }

        if(!evadeCalled && (distx + disty) < 200 && scientist.state === 0) {
          scientist.state = 1;
          evadeCalled = true;
        }
      }
    }
};

var handle_start = function() {
  background(0, 0, 0);
  bg.drawStart();

  noStroke();
  fill(0,165,255);
  rect(220, 190, 560, 180);
  ellipse(220, 280, 180, 180);
  ellipse(780, 280, 180, 180);
  fill(0, 0, 0);
  rect(230, 200, 540, 160);
  ellipse(220, 280, 160, 160);
  ellipse(780, 280, 160, 160);
  var c1;

  doc.draw();
  for(var i = 0; i < portals.length; i++)
  {
    portals[i].draw();
  }
  for(var i = 0; i < blobs.length; i++)
  {
    blobs[i].draw();
  }
  for(var i = 0; i < chests.length; i++)
  {
    chests[i].draw();
  }
  scientist.update();


  textAlign(CENTER);
  textSize(32);

  if(mouseX >= 437 && mouseX <= 587 && mouseY >= 450 && mouseY <= 500)
  {
    c1 = color(31, 167, 16);
  }
  else
  {
    c1 = color(0, 165, 255);
  }
  fill(c1);
  rect(437, 440, 150, 50);
  ellipse(437, 465, 50, 50);
  ellipse(587, 465, 50, 50);
  fill(0, 0, 0);
  rect(442, 445, 140, 40);
  ellipse(587, 465, 40, 40);
  ellipse(437, 465, 40, 40);
  fill(c1);
  text("start!", screen_width/2, 475);

  if(mouseX >= 417 && mouseX <= 607 && mouseY >= 550 && mouseY <= 600)
  {
    c1 = color(31, 167, 16);
  }
  else
  {
    c1 = color(0, 165, 255);
  }
  fill(c1);
  rect(417, 540, 190, 50);
  ellipse(417, 565, 50, 50);
  ellipse(607, 565, 50, 50);
  fill(0, 0, 0);
  rect(422, 545, 180, 40);
  ellipse(607, 565, 40, 40);
  ellipse(417, 565, 40, 40);
  fill(c1);
  text("how to play", screen_width/2, 575);

  if(mouseX >= 437 && mouseX <= 587 && mouseY >= 650 && mouseY <= 700)
  {
    c1 = color(31, 167, 16);
  }
  else
  {
    c1 = color(0, 165, 255);
  }
  fill(c1);
  rect(437, 640, 150, 50);
  ellipse(437, 665, 50, 50);
  ellipse(587, 665, 50, 50);
  fill(0, 0, 0);
  rect(442, 645, 140, 40);
  ellipse(587, 665, 40, 40);
  ellipse(437, 665, 40, 40);
  fill(c1);
  text("about", screen_width/2, 675);

  logo.draw();
};

var handle_how_to = function() {
  background(0, 0, 0);

  noStroke();
  fill(0,165,255);
  rect(320, 100, 360, 120);
  ellipse(320, 160, 120, 120);
  ellipse(680, 160, 120, 120);
  fill(0, 0, 0);
  rect(320, 110, 360, 100);
  ellipse(320, 160, 100, 100);
  ellipse(680, 160, 100, 100);

  textSize(56);
  textAlign(CENTER);

  fill(0, 165, 255);
  text("How to Play", screen_width/2, 175);

  for(var i = 0; i < portals.length; i++)
  {
    portals[i].draw();
  }

  if(mouseX >= 96 && mouseX <= 246 && mouseY >= 700 && mouseY <= 750)
  {
    c1 = color(31, 167, 16);
  }
  else
  {
    c1 = color(0, 165, 255);
  }
  fill(c1);
  rect(96, 690, 150, 50);
  ellipse(96, 715, 50, 50);
  ellipse(246, 715, 50, 50);
  fill(0, 0, 0);
  rect(101, 695, 140, 40);
  ellipse(246, 715, 40, 40);
  ellipse(96, 715, 40, 40);
  fill(c1);
  textSize(32);
  text("back", 171, 725);

  fill(0, 165, 255);
  triangle(110, 290, 110, 300, 120, 295);
  triangle(110, 390, 110, 400, 120, 395);
  triangle(110, 490, 110, 500, 120, 495);
  triangle(110, 590, 110, 600, 120, 595);

  textSize(20);
  textAlign(LEFT);
  fill(31, 167, 16);
  text("Use the i, j, k, and l keys to move on a platform relative", (screen_width/2)-360, 300);
  text("to your gravity", (screen_width/2)-360, 335);
  text("Use the w, a, s, and d keys to change the relative gravity", (screen_width/2)-360, 400);
  text("of the scientist", (screen_width/2)-360, 435);
  text("Press the space bar to throw a ball in scientist's direction", (screen_width/2)-360, 500);
  text("Use the + key to automatically advance levels for grading", (screen_width/2)-360, 535);
  text("Good luck! Pay attention to the hints as you work to defeat", (screen_width/2)-360, 600);
  text("Professor Newt who started this mess", (screen_width/2)-360, 635);
};

var handle_options = function() {
  background(0, 0, 0);

  noStroke();
  fill(0,165,255);
  rect(320, 100, 360, 120);
  ellipse(320, 160, 120, 120);

  ellipse(680, 160, 120, 120);
  fill(0, 0, 0);
  rect(320, 110, 360, 100);
  ellipse(320, 160, 100, 100);
  ellipse(680, 160, 100, 100);

  textSize(56);
  textAlign(CENTER);
  fill(0, 165, 255);
  text("About", screen_width/2, 175);

  for(var i = 0; i < portals.length; i++)
  {
    portals[i].draw();
  }

  if(mouseX >= 96 && mouseX <= 246 && mouseY >= 700 && mouseY <= 750)
  {
    c1 = color(31, 167, 16);
  }
  else
  {
    c1 = color(0, 165, 255);
  }
  fill(c1);
  rect(96, 690, 150, 50);
  ellipse(96, 715, 50, 50);
  ellipse(246, 715, 50, 50);
  fill(0, 0, 0);
  rect(101, 695, 140, 40);
  ellipse(246, 715, 40, 40);
  ellipse(96, 715, 40, 40);
  fill(c1);
  textSize(32);
  text("back", 171, 725);

  textAlign(LEFT);
  textSize(20);
  fill(31, 167, 16);
  text("Welcome to GravLabs! Professor Newt has flipped the space time continuum", (screen_width)/2-400, 300);
  text("and unleased the power of variable gravity on the universe. You are a young", (screen_width)/2-400, 340);
  text("scientist who has learned the ability to control your own gravity.", (screen_width)/2-400, 380);
  text("Througout the game,the scientist will learn all of his abilities, ", (screen_width)/2-400, 420);
  text("which includes the ability to control gravity in all four directions.", (screen_width)/2-400, 460);
  text("The scientist will also learn the ability to throw a gravity ball ", (screen_width)/2-400, 500);
  text("that can unlock new paths and eventually be used in combat against", (screen_width)/2-400, 540);
  text("Professor Newt. There are many obsticles and elements that the scientist", (screen_width)/2-400, 580);
  text("will encounter on his way to finding Professor Newt on planet Zeltron.", (screen_width)/2-400, 620);
  text("Good luck!", (screen_width)/2-400, 660);
};

var handle_game = function() {
  background(0, 0, 0);

  bg.drawMoving(doc);

  if(frameCount - level_start_frame < 140) {
    level_logo.draw();
    level_logo.update();
  }

  doc.draw();
  doc.level.draw();
  handle_balls();

};

var draw_fireworks = function() {
  if(fireworks.length === 0) {
    for(var i = 0; i < 8; i++) {
      var a = new fireworkObj(i*128 + 64);
      a.init();
      fireworks.push(a);
    }
  }

  for(var i = 0; i < fireworks.length; i++) {
    fireworks[i].draw();
  }

};

var handle_win = function() {

  //winning animations

  //if another level
  if(doc.level.levelnumber < levels.length) {
    init_level(doc.level.levelnumber + 1);
    level_start_frame = frameCount;
    game_mode = 3;
    level_logo = new levelLogo(doc.level.levelnumber);
  } else {

    bg.drawMoving(doc);
    draw_fireworks();
    doc.draw();
    doc.level.draw();

    if(wincounter === 0) {
      wincounter = frameCount;
    }

    //can change this condition, but this is game over reset
    if(fireworks[0].points[0].position.y > 1000) {
      fireworks = [];
    }

    if(frameCount - wincounter > 120) {
      drawWin(1024/2, 250, "YOU WIN", 100);

      if(doc.score > highscore) {
        highscore = doc.score;
      }

      drawInstruction(512, 525, "Your score: " + doc.score, 30);
      drawInstruction(512, 650, "High score: " + highscore, 30);
    }

    if(frameCount - wincounter > 360) {
      game_mode = 0;
      doc = new doctor(150, screen_height-64, 0);
      scientist = new scientistObj(512, 160);
      wincounter = 0;
      balls = [];
    }

  }
};

var handle_loss = function() {
  //if another level
  init_level_loss(doc.level.levelnumber);
  level_start_frame = frameCount;
  game_mode = 3;
  level_logo = new levelLogo(doc.level.levelnumber);
};

var init = function() {

};

var keyPressed = function(){
    keys[key.code] = 1;
};

var keyReleased = function(){
    keys[key.code] = 0;

    if(game_mode === 3) {
      if(key.code === 32) {
        if(doc.level.levelnumber >= 4) {
          add_ball = true;
        }
      }

      if(key.code === 43) {
        game_mode = 4;
      }
    }
};

mouseClicked = function() {
  switch(game_mode) {
    case 0:
      //start

      // start game
      if(mouseY > 450 && mouseY <= 490 && mouseX >= 417 && mouseX <= 607) {
        init_game()
        level_start_frame = frameCount;
        game_mode = 3;
        level_logo = new levelLogo(1);
      }

      //how to play
      if(mouseY > 550 && mouseY <= 590 && mouseX >= 417 && mouseX <= 607) {
        game_mode = 1;
      }

      //options
      if(mouseY >= 650 && mouseY <=690 && mouseX >= 437 && mouseX <= 587)
      {
        game_mode = 2;
      }

      break;
    case 1:
      //how to play
      if(mouseY > 700 && mouseX < 250) {
        game_mode = 0;
      }

      break;
    case 2:
      //game options
      if(mouseY > 700 && mouseX < 250) {
        game_mode = 0;
      }

      break;
    case 3:
      //game
      if(mouseY > 700 && mouseX < 250) {
        game_mode = 0;
        doc = new doctor(150, screen_height-64, 0, 0);
        scientist = new scientistObj(512, 160);
      }

      break;
  }
};

init();

var draw = function () {

  switch(game_mode) {
    case 0:
      handle_start();
      break;
    case 1:
      handle_how_to();
      break;
    case 2:
      handle_options();
      break;
    case 3:
      handle_game();
      break;
    case 4:
      handle_win();
      break;
    case 5:
      handle_loss();
      break;
  }

};

}};
