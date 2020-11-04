var inputField = document.getElementById('inp');
var addBtn = document.getElementById('add');
var ul_items = document.getElementById('todo');
ul_items.style.listStyle = 'none';

addBtn.onclick = create;

function create(){
    var oo = String(inputField.value);
    if(oo.length == 0){
        alert("sorry! input field can not be empty.")
        return;
    }
    var newDiv = document.createElement('div');
    newDiv.classList.add("newdiv");

    var li_item = document.createElement('li');
    li_item.classList.add('new-li');
    li_item.innerText = inputField.value;
    newDiv.appendChild(li_item);

    var check_btn = document.createElement('button');
    check_btn.setAttribute("id","check_btn");
    check_btn.innerHTML = '<i class="fa fa-check"></i>'
    newDiv.appendChild(check_btn);

    var trash_btn = document.createElement('button');
    trash_btn.classList.add('trash_btn');
    trash_btn.innerHTML = '<i class="fa fa-trash"></i>'
    newDiv.appendChild(trash_btn);


    inputField.value = '';

    
    ul_items.appendChild(newDiv);

    
}

document.addEventListener('click',function(e){
    console.log(e.target);
    // if(e.target && e.target.id == 'check_btn'){
    //       alert("check");
    //  }
 });
