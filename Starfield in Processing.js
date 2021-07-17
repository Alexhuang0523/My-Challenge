# Processing.js Javascript

Class Star {
  //3D, thus put three dimension 
  float x;
  float y;
  float z; 
  
  float pz;   //For line, pz is the factor causes the changes 
  
  Star () {
    //from negative to positive, stars move like "Spreading Out" 
    x = random(-width, width);     //Code like this  x = random(0, width);    stars not move
    y = random(-height, height);   //Code like this  y = random(0, height);   stars not move 
    z = random(width);
    pz = z;
  }
  
  void update() {
   z = z - 10;   //Control the speed of stars moving
   
   //Code this those stars not moving backwards 
   if (z < 1) {
      z = width;
      x = random(-width, width); 
      y = random(-height, height);   
      pz = z;
   }
  }
  
  void show() {
    fill(255);
    noStroke();  //Without Outline
    //Making those stars moving faster and faster 
    float sx = map(x / z, 0, 1, 0, width);   //Concept of moving faster and faster
    float sy = map(y / z, 0, 1, 0, height);  //Divide the ratio of the center location until the end with some value
    
    float r = map(z, 0, width, 16, 0);   //far away smaller those stars come closer and closer, they become bigger
    ellipse(sx, sy, r, r);  //Control the size of stars(Circle shape)  
    
    //Stars with lines as they moving 
    float px = map(x / pz, 0, 1, 0, width);
    float py = map(y / pz, 0, 1, 0, height);
    
    stroke(255);
    line(px, py, sx, sy);
  }
}
  
  
   
Star[] stars = new Star[800];   //Control the amount of stars
  
float speed;    //Speed controlled by the moving of mouse
void setup() {
  size(800, 800);    //Control the size of the screen 
  for (int i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}
    
void draw() {
  speed = map(mouseX, 0, width, 0, 20);    //Speed controlled by the moving of mouse
  background(0);
  translate(width/2, height/2);   //Making those stars move from center 
  for (int i = 0; i < stars.length; i++) {
  stars[i].update();
  stars.[i].show();
  }
}
  


 
    
  
