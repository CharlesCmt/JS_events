// Feature 1

document.getElementsByClassName("text-muted")[7].addEventListener('click', function () {
    console.log("clique");
});

// Feature 1-bis

counted()

function counted() {
    var x = 1
    document.getElementsByClassName("text-muted")[7].addEventListener('click', function () {
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

// Feature 6

const btnView = document.getElementsByClassName('btn-success');
const imageCard = document.getElementsByClassName('card-img-top');
const cardTexting = document.getElementsByClassName('card-text');

for (let i = 0; i <= (btnView.length - 1); i++) {
    btnView[i].addEventListener("mouseover", function () {
        if (cardTexting[i].disabled === false) {
            cardTexting[i].disabled = true;
            cardTexting[i].style.display = "none";
            imageCard[i].style.width = '20%';
        } else {
            cardTexting[i].disabled = false;
            cardTexting[i].style.display = "";
            imageCard[i].style.width = '100%';
        }
    });
}
