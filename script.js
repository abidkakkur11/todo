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
    const checkboxelement=document.createElement('input');

    listelement.innerHTML=info.value;
    listelement.append(checkboxelement);
    con.append(listelement);
    listelement.append(checkboxelement);
    listelement.append(inputelement);
    info.value="";

    inputelement.setAttribute("type","button");
    inputelement.setAttribute("value","Delete");

    listelement.classList="list-styling";
    inputelement.classList="delete-button";
    checkboxelement.classList="checkbox-styling";

    checkboxelement.setAttribute("type","checkbox");

    checkboxelement.addEventListener("change",function(){
        if(this.checked){
        listelement.style.textDecoration="line-through";
        listelement.style.listStyle="circle"
        }
        else{
        listelement.style.textDecoration='';
        listelement.style.listStyle="square";
       }
    })
    inputelement.addEventListener("click",function(){
        con.removeChild(listelement);
        con.removeChild(inputelement);
    })    
}
}