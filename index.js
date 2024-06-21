var create = document.getElementsByTagName("button")[0],
    space = document.getElementById("space"),
    //span = document.getElementsByTagName("span")[0],
    count = 0;
create.addEventListener("click",function(){
count++;

var div = document.createElement("div");
div.setAttribute("class","div");

var span = document.createElement("span");
span.setAttribute("class","heading");
var text = document.createTextNode("► Notepad " + count +" ");
span.appendChild(text);

var button = document.createElement("button");
button.addEventListener("mouseup",function(){
//div.style.display = "none";
if(window.confirm("Are you sure you want to delete this Note?")){
	div.style.display = "none";
}
else{
	return false;
}
})
var close = document.createTextNode("x");
button.setAttribute("class","close");
button.appendChild(close);
span.appendChild(button);

  var c = document.createElement("textarea");
  c.setAttribute("autofoucs","autofoucs");
  c.setAttribute("class", "demo");
  c.setAttribute("cols", "30");
  c.setAttribute("rows", "10");
  
  div.appendChild(c);div.appendChild(span);
  space.appendChild(div);
});