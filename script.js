var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById('text1');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// collapsible 2
var coll2 = document.getElementsByClassName("collapsible2");
var j;

for (j = 0; j < coll2.length; j++) {
  coll2[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = document.getElementById('text2');
    if (content2.style.maxHeight){
      content2.style.maxHeight = null;
    } else {
      content2.style.maxHeight = content2.scrollHeight + "px";
    } 
  });
}

// collapsible 3
var coll3 = document.getElementsByClassName("collapsible3");
var l;

for (l = 0; l < coll3.length; l++) {
  coll3[l].addEventListener("click", function() {
    this.classList.toggle("active");
    var content3 = document.getElementById('text3');
    if (content3.style.maxHeight){
      content3.style.maxHeight = null;
    } else {
      content3.style.maxHeight = content3.scrollHeight + "px";
    } 
  });
}


// collapsible 4
var coll4 = document.getElementsByClassName("collapsible4");
var m;

for (m = 0; m < coll4.length; m++) {
  coll4[m].addEventListener("click", function() {
    this.classList.toggle("active");
    var content4 = document.getElementById('text4');
    if (content4.style.maxHeight){
      content4.style.maxHeight = null;
    } else {
      content4.style.maxHeight = content4.scrollHeight + "px";
    } 
  });
}

// collapsible 5
var coll5 = document.getElementsByClassName("collapsible5");
var n;

for (n = 0; n < coll5.length; n++) {
  coll5[n].addEventListener("click", function() {
    this.classList.toggle("active");
    var content5 = document.getElementById('text5');
    if (content5.style.maxHeight){
      content5.style.maxHeight = null;
    } else {
      content5.style.maxHeight = content5.scrollHeight + "px";
    } 
  });
}


// collapsible 6
var coll6 = document.getElementsByClassName("collapsible6");
var o;

for (o = 0; o < coll6.length; o++) {
  coll6[o].addEventListener("click", function() {
    this.classList.toggle("active");
    var content6 = document.getElementById('text6');
    if (content6.style.maxHeight){
      content6.style.maxHeight = null;
    } else {
      content6.style.maxHeight = content6.scrollHeight + "px";
    } 
  });
}
