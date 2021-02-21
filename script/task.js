var elements = document.querySelectorAll('.menu-item  .menu');
for(i=0;i<elements.length;i++){
    elements[i].addEventListener('mousedown', funcItem);
    elements[i].addEventListener('mouseleave', funcHide);

}

function funcItem(){
    this.children[1].classList='sub-show';
}
function funcHide(){
    this.children[1].classList='sub-menu';
}