var cube = document.querySelector('.main-box-area');
var radioButtons = document.querySelector('.navbar');
var currentClass ='';

function changeSide(){
    var checked = radioButtons.querySelector(':checked');
    var showClass = 'show-'+ checked.value;
    if(currentClass){
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}
changeSide();
radioButtons.addEventListener('change', changeSide);