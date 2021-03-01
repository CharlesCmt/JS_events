// Feature 1

document.getElementsByClassName("text-muted")[7].addEventListener('click', function(){
    console.log("clique");
});

// Feature 1-bis

counted()

function  counted(){
    var x = 1
    document.getElementsByClassName("text-muted")[7].addEventListener('click', function() {
        console.log("clique numero " + x)
        x++;
    });
}

// Feature 2

const toggler = () => {
    navbarHeader.classList.toggle('collapse');
}
const menu = document.querySelector('button').addEventListener('click', toggler);

// Feature 3

document.getElementsByClassName("btn-outline-secondary")[0].addEventListener('click', () => {
    document.getElementsByClassName("card-text")[0].style.color = 'red'
});


// Feature 4

const textCard = document.getElementsByClassName("card-text")[1];
let btnBool = false;
const editButton = document.getElementsByClassName("btn-outline-secondary")[1];

editButton.addEventListener('click', () => {
    if (btnBool) {
        btnBool = false;
        textCard.style.color = '';
    } else {
        btnBool = true;
        textCard.style.color = 'green';
    }
});

// Feature 5

const targetLink = document.getElementsByTagName('link')[0]; 
const nav = document.querySelector('header');

nav.addEventListener('dblclick', () => {
    targetLink.disabled === false ? targetLink.disabled = true : targetLink.disabled = false;
});