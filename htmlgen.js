
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
    textNode = document.createTextNode('\n   ' + indentBefore);
    node.insertBefore(textNode, node.children[i]);

    format(node.children[i], level);

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode('\n   ' + indentAfter);
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
    
    var lab = document.createElement("span");
    lab.style.position = "absolute";
    lab.innerHTML = inn.innerHTML;
    lab.style.top =( e.offsetTop).toString() + "px";
    lab.style.left = (e.offsetLeft).toString() + "px";


    a=a+lab.outerHTML.toString();
    
}


function genhtml(){
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
    

    var h=div.style.height;
   
    a="<!DOCTYPE html>\n<html>\n"+'   '+"<head></head>\n"+'  '+"<body>\n<div style='height:"+h+";width:975px;border-style: solid;'></div>\n"+process(a)+"</body>\n</html>";
    document.getElementById("myInput").value=a;
  } 
  function a(){
    var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
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
  