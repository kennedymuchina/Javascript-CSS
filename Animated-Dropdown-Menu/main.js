let icon = document.getElementById('icon');
let dropMenu = document.getElementById('dropMenu');
let icon1 = document.getElementById('icon1');
let dropMenu1 = document.getElementById('dropMenu1');

icon.addEventListener('click',
function showDropdown (){
  if(dropMenu.style.transform === 'translateY(-250px)') {
    icon.innerHTML = 'x';
    dropMenu.style.transform = 'translateY(0px)';

  }else{
    dropMenu.style.transform = 'translateY(-250px)';
    icon.innerHTML = '&#9776;'
  }
})


icon1.addEventListener('click',
function showDropdown1 (){
  if(dropMenu1.style.transform === 'translateX(-2000px)') {
    icon1.innerHTML = 'x';
    dropMenu1.style.transform = 'translateX(0px)';

  }else{
    dropMenu1.style.transform = 'translateX(-2000px)';
    icon1.innerHTML = '&#9776;'
  }
})
