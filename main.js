var classifier;
function start_listening() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/N7HLs4Dsy/model.json", modelready);
};

function modelready() {
    classifier.classify(gotResults);
    console.log("ml5 Version: " + ml5.version + ", model has been initialized successfully!")
};

function gotResults(){
};