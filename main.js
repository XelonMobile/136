function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value_from_input_box = document.getElementById("input_box").value;

}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
function draw()
{
    image(video,0,0,300,300);

    if(status != "")
    {

  
        objectDetector.detect(video,gotResult);

    for( i = 0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Objects Detected";

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" ,  objects[i].x+15, objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            

            if(objects[i].label == value_from_input_box)
            {
               document.getElementById("object_status").innerHTML = value_from_input_box + " Found"; 
               objectDetector.detect(gotResult);
               synth = window.speechSynthesis;
               utterThis = new SpeechSynthesisUtterance(value_from_input_box + "Found");
               

            }
            else
            {
              
            }
        }
    }

}
