function clearCanvas(){
background("white")    
}
function setup(){
 Canvas=createCanvas(300,300);
 Canvas.center();
 background("white");
 Canvas.mouseReleased(classifyCanvas)
 synth=window.speechSynthesis  
}
function preload(){
 classifier=ml5.imageClassifier("DoodleNet")   
}
function draw(){
  strokeWeight(13) 
  stroke(0)
  if(mouseIsPressed){
  line(pmouseX,pmouseY,mouseX,mouseY) 
  }
}
function classifyCanvas(){
 classifier.classify(Canvas,gotResults) 
}
function gotResults(error,results){
if(error){
 console.error(error)   
}
console.log(results)
document.getElementById("label").innerHTML="Label"+results[0].label
document.getElementById("confidence").innerHTML="confidence"+Math.round(results[0].confidence*100 )+"%"
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis)
}