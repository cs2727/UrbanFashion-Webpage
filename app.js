
const hamburgerMenu = document.getElementById('hamburgerMenu');
const listElement = document.querySelector('.listContainer');
let i = 0;

function burgerMenuHandler(){
    const oddOrEven = i % 2;

    if (oddOrEven === 0){
        listElement.style.display = 'block';
    }
    else {
        listElement.style.display = 'none';
    }


    i++;
}







hamburgerMenu.addEventListener('click', burgerMenuHandler)