var todo = document.querySelector("#todo");
var add = document.querySelector("#add");
var inp = document.getElementById("inp");
add.onclick = items;

function items() {
    if (inp.value.length > 0) {
        var a = document.createElement('li');
        a.classList.add("li_items");
        todo.appendChild(a);
        a.innerHTML = '<span class="sp">' + inp.value + '</span>' +
            '<button class="td" id="tick"><i class="fa fa-check"></i></button>' +
            '<button class="td" id="dlt"><i class="fa fa-trash-o"></i></button>';
        inp.value = '';
    }
    else {
        alert("sorry! input field can not be empty.")
    }
}

document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'tick'){
        // console.log(e.target.parentNode.querySelector(".sp"));
        e.target.parentNode.querySelector(".sp").classList.toggle('line');
     }
     if(e.target && e.target.id == 'dlt'){
         e.target.parentNode.remove();
     }
     
 });