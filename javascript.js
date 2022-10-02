var qCount = 0;

var visScore = 0; 
var audScore = 0;
var kinScore = 0;

const visStr = "Visual learners learn by reading or seeing pictures. Learn more <a href=\"learning%20types/visual.html\">here</a>.<br />";
const audStr = "Auditory learners learn by hearing and listening. Learn more <a href=\"learning%20types/auditory.html\">here</a>.<br />";
const kinStr = "Kinesthetic learners are hands on; they learn by doing. Learn more <a href=\"learning%20types/kinesthetic.html\">here</a>.<br />";

//0=vis 1=aud 2=kin 3=vis/aud 4=vis/kin 5=aud/kin 6=vis/aud/kin
var max = 0;

//Get results from quiz
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

//vars for results
var result = document.getElementById("result");
var desc = document.getElementById("desc");
var learn = document.getElementById("learn");
var photo = document.getElementById("photo");

//Option to retake quiz
var retake = document.getElementById("retakeButton");

//add points to proper type of learner based on answers
q1a1.addEventListener("click", function() {addPoints(3,1,1);}); //v, a 
q1a2.addEventListener("click", function() {addPoints(0,1,2);}); //2v
q1a3.addEventListener("click", function() {addPoints(4,1,1);}); //v, k

q2a1.addEventListener("click", function() {addPoints(1,2,2);}); //2a
q2a2.addEventListener("click", function() {addPoints(1,2,1);}); //a
q2a3.addEventListener("click", function() {addPoints(2,2,1);}); //k
q2a4.addEventListener("click", function() {addPoints(0,2,1);}); //v

q3a1.addEventListener("click", function() {addPoints(5,3,2);}); //2a, 2k
q3a2.addEventListener("click", function() {addPoints(5,3,1);}); //a, k
q3a3.addEventListener("click", function() {addPoints(6,3,1);}); //v,a,k
q3a4.addEventListener("click", function() {addPoints(0,3,1);}); //v
q3a5.addEventListener("click", function() {addPoints(0,3,2);}); //2v

q4a1.addEventListener("click", function() {addPoints(0,4,1);}); //v
q4a2.addEventListener("click", function() {addPoints(1,4,1);}); //a

q5a1.addEventListener("click", function() {addPoints(4,5,2);}); //2v, 2k
q5a2.addEventListener("click", function() {addPoints(4,5,1);}); //v, k
q5a3.addEventListener("click", function() {addPoints(6,5,1);}); //v, a, k
q5a4.addEventListener("click", function() {addPoints(2,5,1);}); //k
q5a5.addEventListener("click", function() {addPoints(2,5,2);}); //2k

q6a1.addEventListener("click", function() {addPoints(1,6,2);}); //2a
q6a2.addEventListener("click", function() {addPoints(4,6,1);}); //v, k
q6a3.addEventListener("click", function() {addPoints(0,6,2);}); //2v

q7a1.addEventListener("click", function() {addPoints(2,7,2);}); //2k
q7a2.addEventListener("click", function() {addPoints(3,7,2);}); //2v, 2a
q7a3.addEventListener("click", function() {addPoints(2,7,1);}); //k

//allow retakes
retake.addEventListener("click", reset);

//determine which type of learner had the highest score
function findMax(){
  if ((audScore > visScore)&&(audScore > kinScore)){
      max = 1;
  }
  else if ((visScore > audScore)&&(visScore>kinScore)){
    max = 0;
  }
  else if ((kinScore > visScore)&&(kinScore > audScore)){
    max = 2;
  }

  checkDuplicates();
}

//check for ties in learning types
function checkDuplicates(){
  if (max == 0){
    if ((visScore - audScore <= 2) && (visScore - kinScore <= 2)){
      max = 6;
    }
    else if (visScore - kinScore <= 2){
      max = 4;
    }
    else if (visScore - audScore <= 2){
      max = 3;
    }
  }
  else if (max == 1){
    if ((audScore - visScore <= 2) && (audScore - kinScore <=2)){
      max = 6;
    }
    else if (audScore - kinScore <= 2){
      max = 5;
    }
    else if (audScore - visScore <= 2){
      max = 3;
    }
  }
  else {
    if ((kinScore - visScore <= 2) && (kinScore - audScore <=2)){
      max = 6;
    }
    else if (kinScore - audScore <= 2){
      max = 5;
    }
    else if (kinScore - visScore <= 2){
      max = 4;
    }
  }
}

//display result
function updateResult() {
  if (max == 0){
    result.innerHTML = "Your result is... visual learner"; 
  }
  else if (max == 1){
    result.innerHTML = "Your result is... auditory learner";
  }
  else if (max == 2){
    result.innerHTML = "Your result is... kinesthetic learner";
  }
  else if (max == 3){
    result.innerHTML = "Your results are ... visual and auditory learner";
  }
  else if (max == 4){
    result.innerHTML = "Your results are... visual and kinesthetic learner"
  }
  else if (max == 5){
    result.innerHTML = "Your results are... auditory and kinesthetic learner";
  }
  else if (max == 6){
    result.innerHTML = "Your results are... visual, auditory, and kinesthetic learner"
  }
  else {
    result.innerHTML = "error :("
  }
}

function updatePhoto() {
  if (max == 0){
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://media.istockphoto.com/photos/man-with-magnifying-glass-picture-id465483025\" width=\"50%\">" + "<br>"
    learn.innerHTML = visStr;
  }
  else if (max == 1) {
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://www.thoughtco.com/thmb/4ucVoiNF3bM_eIAQh6NB-1yI8Lk=/1937x1453/smart/filters:no_upscale()/172606202_HighRes-56a537103df78cf77286f9e3.jpg\" width=\"50%\">" + "<br>"
    learn.innerHTML = audStr;
  }
  else if (max == 2) {
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://www.thoughtco.com/thmb/4PbZABiTQD3V9UfpRUymIWPb87Y=/2122x1415/filters:no_upscale():max_bytes(150000):strip_icc()/Science-Echo-Cultura-Getty-Images-137548114-58958abe3df78caebc8ce47d.jpg\" width=\"50%\">" + "<br>"
    learn.innerHTML = kinStr;
  }
  else if (max == 3) {
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://www.headphonesty.com/wp-content/uploads/2020/07/photo-1513258496099-48168024aec0.jpg\" width=\"50%\">" + "<br>"
    learn.innerHTML = visStr + audStr;
  }
  else if (max == 4) {
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://assets.ltkcontent.com/images/12859/man-creative-writing_16a270c446.jpg\" width=\"50%\">" + "<br>"
    learn.innerHTML = visStr + kinStr;
  }
  else if (max == 5) {
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://polarisproject.org/wp-content/uploads/2019/10/Polaris_Visa_Photos_p11-800x800.jpg\" width=\"50%\">" + "<br>"
    learn.innerHTML = audStr + kinStr;
  }
  else if (max == 6) {
    photo.innerHTML = "<img class=\"z-depth-3\" src=\"https://d39l2hkdp2esp1.cloudfront.net/img/photo/125548/125548_00_2x.jpg\" width=\"50%\">" + "<br>"
    learn.innerHTML = visStr + audStr + kinStr;
  }
  else {
    photo.innerHTML = "   ";
  }
}
  function displayPercent() {
    var total = visScore + audScore + kinScore;
    var visPercent = visScore*100/total;
    var audPercent = audScore*100/total;
    var kinPercent = kinScore*100/total;

    const visPerStr = "<br /> Visual Learning: " + parseInt(visPercent, 10) + "%";
    const audPerStr = "<br /> Auditory Learning: " + parseInt(audPercent, 10) + "%";
    const kinPerStr = "<br /> Kinestetic Learning: " + parseInt(kinPercent, 10) + "%";
    var percentStr = "";

    if ((visPercent >= audPercent) && (visPercent >= kinPercent)){
      percentStr = visPerStr;
      if (audPercent >= kinPercent){
        percentStr += audPerStr;
        percentStr += kinPerStr;
      }
      else {
        percentStr += kinPerStr;
        percentStr += audPerStr;
      }
    }
    else if ((audPercent >= visPercent) && (audPercent >= kinPercent)){
      percentStr = audPerStr;
      if (visPercent >= kinPercent){
        percentStr += visPerStr;
        percentStr += kinPerStr;
      }
      else {
        percentStr += kinPerStr;
        percentStr += visPerStr;
      }
    }
    else{
      percentStr = kinPerStr;
      if (visPercent >= audPercent){
        percentStr += visPerStr;
        percentStr += audPerStr;
      }
      else {
        percentStr += audPerStr;
        percentStr += visPerStr;
      }
    }
  
  
    
    desc.innerHTML = percentStr;
  }

function vis(){
  visScore += 1 ;
}

function aud(){
  audScore += 1 ;
}

function kin(){
  kinScore += 1 ;
}

function checkQuestionCount(){
  if (qCount >= 7){
    findMax();
    updateResult();
    updatePhoto();
    displayPercent();
  }
}

//type: vis=0, aud=1, kin=2, vis/aud=3, vis/kin=4, aud/kin=5, vis/aud/kin=6
function addPoints(type, dis, scalar){
  //adds points based on type selected
  if (type == 0){
    for (let i = 0; i < scalar; i++){
      vis();
    }
  }
  else if (type == 1){
    for (let i = 0; i < scalar; i++){
      aud();
    }
  }
  else if (type == 2){
    for (let i = 0; i < scalar; i++){
      kin();
    }
  }
  else if (type == 3){
    for (let i = 0; i < scalar; i++){
      vis();
      aud();
    }
  }
  else if (type == 4){
    for (let i = 0; i < scalar; i++){
      vis();
      kin();
    }
  }
  else if (type == 5){
    for (let i = 0; i < scalar; i++){
      aud();
      kin();
    }
  }
  else if (type == 6){
    for (let i = 0; i < scalar; i++){
      vis();
      aud();
      kin();
    }
  }

  //disables remaining answer choices
  if (dis == 1){
    disable1();
  }
  else if (dis == 2){
    disable2();
  }
  else if (dis == 3){
    disable3();
  }
  else if (dis == 4){
    disable4();
  }
  else if (dis == 5){
    disable5();
  }
  else if (dis == 6){
    disable6();
  }
  else if (dis == 7){
    disable7();
  }
  qCount += 1;
  checkQuestionCount();
}

//Functions to disable other question options
function disable1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
}

function disable2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disable3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a5.disabled = true;
}

function disable4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disable5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
  q5a5.disabled = true;
}

function disable6() {
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
}

function disable7() {
  q7a1.disabled = true;
  q7a2.disabled = true;
  q7a3.disabled = true;
}

//Enable all function options
function enableAll() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a5.disabled = false;
  
  q4a1.disabled = false;
  q4a2.disabled = false;

  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q5a5.disabled = false;

  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  
  q7a1.disabled = false;
  q7a2.disabled = false;
  q7a3.disabled = false;
}

function reset() {
  qCount = 0; 
  visScore = 0;
  audScore = 0;
  kinScore = 0; 
  desc.innerHTML = "     ";
  learn.innerHTML = "     ";
  photo.innerHTML = "     ";
  result.innerHTML = "Your result is... ";
  enableAll();
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});