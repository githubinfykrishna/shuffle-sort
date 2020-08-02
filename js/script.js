var arrayOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function() {

  getOnLoadView();

})();

 

window.onresize = getOnLoadView;


function desktopView(){

var htmltest = '';

for(var i of arrayOrder){

htmltest += '<div class="w33"><div class="bg'+i+'">'+ i + '</div></div>';

}

document.getElementById('desktopView').innerHTML = htmltest;

}

 

function mobileView(){

var htmltest = '';

for(var i of arrayOrder){

htmltest += '<div class="w1 hght50 marb10 floatL bgmob'+i+'"></div><div class="w99 floatL hght50 marb10 bgmobright">'+ i + '</div>';

}

document.getElementById('mobileView').innerHTML = htmltest;

}

 

function ApplyShuffle() {

    var i = arrayOrder.length,

    j = 0,

    temp;

    while (i--) {

     j = Math.floor(Math.random() * (i+1));

     temp = arrayOrder[i];

     arrayOrder[i] = arrayOrder[j];

     arrayOrder[j] = temp;

    }

    return arrayOrder;

               

}

 

function Shuffle(){

ApplyShuffle();

var htmltest = '';

for(var i of arrayOrder){

htmltest += '<div class="w33"><div class="bg'+i+'">'+ i + '</div></div>';

}

document.getElementById('desktopView').innerHTML = htmltest;

}

 

function ApplySort() {

  var htmltest = '';

  arrayOrder.sort();

  for(var i of arrayOrder){

  htmltest += '<div class="w33"><div class="bg'+i+'">'+ i + '</div></div>';

}

  document.getElementById("desktopView").innerHTML = htmltest;

}

function MobileShuffle(){

ApplyShuffle();

var htmltest = '';

for(var i of arrayOrder){

  htmltest += '<div class="w1 hght50 marb10 floatL bgmob'+i+'"></div><div class="w99 floatL hght50 marb10 bgmobright">'+ i + '</div>';

}

document.getElementById('mobileView').innerHTML = htmltest;

}

 

function MobileSort() {

  var htmltest = '';

  arrayOrder.sort();

  for(var i of arrayOrder){

  htmltest += '<div class="w1 hght50 marb10 floatL bgmob'+i+'"></div><div class="w99 floatL hght50 marb10 bgmobright">'+ i + '</div>';

}

  document.getElementById("mobileView").innerHTML = htmltest;

}

 

function getOnLoadView(){

  if(window.innerWidth > 960){

                  document.getElementById('desktop').style.display = "block";

                  document.getElementById('mobile').style.display = "none";

      desktopView();    

  } else {

      document.getElementById('desktop').style.display = "none";

                  document.getElementById('mobile').style.display = "block";

      mobileView();

  }

}