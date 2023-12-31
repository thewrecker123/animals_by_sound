function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vkvtROwEc/model.json', modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}
var wolf = 0;
var cat = 0;
var duck = 0;


function gotResults(error, results) {
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1; 

        document.getElementById("result_label").innerHTML = 'Detected voice of- '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Wolf - '+wolf+' Detected Cat -'+cat+' Detected Duck - '+duck; 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      
        img=document.getElementById('cat.jpg');
        img1=document.getElementById('duck.jpg');
        img2=document.getElementById('wolf.jpg');
        img3=document.getElementById('background.jpg');

        if (reslults[0].label == "meow") {
            img.src = 'cat.gif';
            img1.src = 'duck.jpg';
            img2.src = 'wolf.jpg';
            img3.src = 'background.jpg';
        } else if (results[0].label == "quack") {
            img.src = 'cat.jpg';
            img1.src = 'duck.gif';
            img2.src = 'wolf.jpg';
            img3.src = 'background.jpg';
        } else if  (results[0].label == "woof") {
            img.src = 'cat.jpg';
            img1.src = 'duck.jpg';
            img2.src = 'wolf.gif';
            img3.src = 'background.jpg';
        } else{
            img.src = 'cat.jpg';
            img1.src = 'duck.jpg';
            img2.src = 'wolf.jpg';
            img3.src = 'background.webp';
        }
}}