const nadaElements = document.querySelectorAll('.nada');
const not = {
    8: new Audio('sound/not1.mp3'),
    7: new Audio('sound/not2.mp3'),
    9: new Audio('sound/not3.mp3'),
    6: new Audio('sound/not4.mp3'),
    10: new Audio('sound/not5.mp3'),
    5: new Audio('sound/not6.mp3'),
    11: new Audio('sound/not7.mp3'),
    4: new Audio('sound/not1t.mp3'),
    12: new Audio('sound/not2t.mp3'),
    3: new Audio('sound/not3t.mp3'),
    13: new Audio('sound/not4t.mp3'),
    2: new Audio('sound/not5t.mp3'),
    14: new Audio('sound/not6t.mp3'),
    1: new Audio('sound/not7t.mp3'),
    15: new Audio('sound/not1tt.mp3'),
    0: new Audio('sound/not2tt.mp3'),
    16: new Audio('sound/not3tt.mp3'),
}



document.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toUpperCase();

    switch (keyPressed) {
        case '1':
            toggleNadaStyle(8);
            break;
        case '2':
            toggleNadaStyle(7);
            break;
        case '3':
            toggleNadaStyle(9);
            break;
        case '4':
            toggleNadaStyle(6);
            break;
        case '5':
            toggleNadaStyle(10);
            break;
        case '6':
            toggleNadaStyle(5);
            break;
        case '7':
            toggleNadaStyle(11);
            break;
        case '8':
            toggleNadaStyle(4);
            break;
        case '9':
            toggleNadaStyle(12);
            break;
        case '0':
            toggleNadaStyle(3);
            break;
        case 'Q':
            toggleNadaStyle(13);
            break;
        case 'W':
            toggleNadaStyle(2);
            break;
        case 'E':
            toggleNadaStyle(14);
            break;
        case 'R':
            toggleNadaStyle(1);
            break;
        case 'T':
            toggleNadaStyle(15);
            break;
        case 'Y':
            toggleNadaStyle(0);
            break;
        case 'U':
            toggleNadaStyle(16);
            break;
    }
});


function toggleNadaStyle(index) {

    if (not[index]) {
        not[index].currentTime = 0;
        not[index].play();
    }

    nadaElements[index].style.backgroundColor = 'rgb(210, 184, 152)';
    nadaElements[index].classList.toggle('shaking');

    setTimeout(() => {
        nadaElements[index].style.backgroundColor = '#5a5e77';
        nadaElements[index].classList.remove('shaking');
    }, 200);
}
