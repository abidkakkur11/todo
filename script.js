let btn=document.getElementById('add');
let con=document.getElementById('div1');
let info=document.getElementById('txt1');
let clearall=document.getElementById('clear');

//btn.addEventListener("click",function(){
    info.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
});
function removeall() {
    con.innerHTML= '';
}
    info.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 16) {
        clearall.click();
    }
})
function buttoncode(){
    if(info.value=="")
    {
        alert("Field should not be empty..!");
        return false;
    }
    else
    {    
    const listelement=document.createElement('li');
    const inputelement=document.createElement('input');
    listelement.innerHTML=info.value;
    con.append(listelement);
    listelement.append(inputelement);
    info.value="";
    inputelement.setAttribute("type","button");
    inputelement.setAttribute("value","Delete");

    listelement.style.fontFamily="Open Sans', sans-serif";
    listelement.style.fontWeight="normal";
    listelement.style.background="white";
    listelement.style.color="black";
    listelement.style.height="40px";
    listelement.style.lineHeight="40px";
    listelement.style.padding="0 5px";
    listelement.style.position="relative";
    listelement.style.borderRadius="5px";
    listelement.style.margin="5px 0";
    listelement.style.fontSize="18px";
    listelement.style.width="auto"
    listelement.style.boxShadow="3px 3px gray"
    listelement.style.listStyle="Circle";

    listelement.style.cursor="pointer"
    inputelement.style.cursor="pointer"
    inputelement.style.backgroundColor="red";
    inputelement.style.color="white";
    inputelement.style.borderRadius="5px";

    listelement.addEventListener("click",function(){
        listelement.style.textDecoration="line-through";
    })
    listelement.addEventListener("dblclick",function(){
        listelement.style.textDecoration='';
    })
    inputelement.addEventListener("click",function(){
        con.removeChild(listelement);
        con.removeChild(inputelement);
    })    
}
}