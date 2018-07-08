
function hasClass(e,str){
  
  if (e.classList.contains(str)) return true;
  else return false;
}
function process(str) {
  var div = document.createElement('div');
  div.innerHTML = str.trim();

  return format(div, 0).innerHTML;
}

function format(node, level) {
  var indentBefore = new Array(level++ + 1).join('  '),
    indentAfter = new Array(level - 1).join('  '),
    textNode;

  for (var i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode('\r\n   ' + indentBefore);
    node.insertBefore(textNode, node.children[i]);

    format(node.children[i], level);

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode('\r\n   ' + indentAfter);
      node.appendChild(textNode);
    }
  }

  return node;
}
function gen(e) {
    
    var spans = e.getElementsByTagName("span");
    var classes = ['innerlab', 'innerdat','innerfile','innerrad','innersel','innertex','innerchk','innermultisel','innertexarea','innerbut'];
    
    var inn;
    for (i = 0; i < spans.length; i++) {
      for(var j = 0; j < classes.length; j++) {
        if(hasClass(spans[i], classes[j])){
            inn =spans[i];
            break;
        }
      }
    }
    
    var lab = document.createElement("div");
    lab.style.position = "absolute";
    lab.innerHTML = inn.innerHTML;
    lab.style.top =( e.offsetTop+50).toString() + "px";
    lab.style.left = (e.offsetLeft).toString() + "px";


    a=a+lab.outerHTML.toString();
    
}
function html(){
  a="";

  var div = document.getElementById('workarea');
  var divChildren = div.childNodes;
  var classes = ['lab', 'dat','fil','rad','sel','tex','chk','multisel','texarea','but'];
  for (var i=0; i<divChildren.length; i++) {
    
    for(var j = 0; j < classes.length; j++) {
     
      
      if(hasClass(divChildren[i], classes[j]) ) {
          gen(divChildren[i]);
        
          
      }
    }
  }
  var c = document.createElement("div");
  var c1 = document.createElement("div");
  var c2 = document.createElement("div");
  var f = document.createElement("form");
  f.innerHTML=a.trim();
  c2.classList.add("card-body");
  c2.appendChild(f);
  c1.classList.add("card-header","h1","text-center");
  c1.innerHTML=document.getElementById("heading").value;
  c.classList.add("card");


  c.appendChild(c1);
  c.appendChild(c2);
  c.style.height=div.style.height;
  c.style.width="975px";
  c.style.top=(div.offsetTop+5).toString()+"px";
  c.style.left=(div.offsetLeft+250).toString()+"px";
  a=process(c.outerHTML);
 
 
  a="<!DOCTYPE html>\r\n<html lang='en'>\r\n"+'   '+
  "<head>\r\n       <meta charset='utf-8'>\r\n"+
  "       <meta name='viewport' content='width=device-width, initial-scale=1'>\r\n"+
  "       <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css' > \r\n   </head>\r\n   <body>\r\n   <br>"+
  a+"<br>\r\n   </body>\r\n</html>";
  return a;

}


function genhtml(){
 

  document.getElementById("myInput").value=html();

   
  } 
 

  function copyclip() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    
  }
  function clr(){
    var myNode = document.getElementById("workarea");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

  }
  
  function download() {
    

    
    var blob = new Blob([html()], {type: "text/plain;charset=utf-8"});
    saveAs(blob,document.getElementById("savename").value);
    
  }