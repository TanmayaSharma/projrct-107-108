function buttonclick()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/kN2hY4aXv/model.json',modelstorage);

}

function modelstorage()
{
    classifier.classify(prolonged);
    
}

function prolonged( error,results)
{
if(error){
    console.log(error);


}

else{
    console.log(results);
    document.getElementById("go").innerHTML=' I can hear -'+results[0].label;
    document.getElementById("bo").innerHTML='Accuracy -'+(results[0].confidence*100).toFixed(2)+"%";

    image1= document.getElementById('alien1');
    image2=document.getElementById('alien2');
    image3=document.getElementById('alien3');
    image4=document.getElementById('alien4');
     if(results[0].label =="snore"){
        image1.src="aliens-01.gif";
        image2.src="aliens-02.png";
        image3.src="aliens-03.png";
        image4.src="aliens-04.png";

     }
     else if(results[0].label =="Snap"){
        image1.src="aliens-01.png";
        image2.src="aliens-02.gif";
        image3.src="aliens-03.png";
        image4.src="aliens-04.png";
     }
     else if(results[0].label =="clap"){
        image1.src="aliens-01.png";
        image2.src="aliens-02.png";
        image3.src="aliens-03.gif";
        image4.src="aliens-04.png";
     }
     else{
        image1.src="alien-01.png";
        image2.src="alien-02.png";
        image3.src="alien-03.png";
        image4.src="alien-04.gif";

     }
}
}