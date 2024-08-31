function buttonclick(val){
    document.getElementById("screen").innerText+=val;
}
function ClearScreen(){
    document.getElementById("screen").innerText=null
}
function EqualTo(){
    var text=document.getElementById("screen").innerText
    var result=eval(text);
    document.getElementById("screen").innerText="="+result;
}