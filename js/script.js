const squareBlock = document.querySelector('.square');
const spanText = squareBlock.querySelector('span');
const bodyElement = document.querySelector('body');
const bodyClientWidth = bodyElement.clientWidth;
const bodyClientHight = bodyElement.clientHeight;
const squareWidth = 150;
const squareHight = 150;
let squarePositionX = 0;
let squarePositionY = 0;


window.addEventListener('keydown', moveSquare);


function moveSquare () {
    if (event.code === 'ArrowRight') {
        squarePositionX += 10;
        squareBlock.style.marginLeft = squarePositionX + 'px';
        if (squareWidth + squarePositionX === bodyClientWidth) {
            squarePositionX -= 20;
            textBams();
        }
    } else if (event.code === 'ArrowLeft') {
        squarePositionX -= 10;
        squareBlock.style.marginLeft = squarePositionX + 'px'; 
        if (squareWidth - squarePositionX === bodyClientWidth) {
            squarePositionX += 20;
            textBams();
        }
    } else if (event.code === 'ArrowUp') {
        squarePositionY -= 10;
        squareBlock.style.marginTop = squarePositionY + 'px';
        if (squarePositionY < 0) {
            squarePositionY += 20;
            textBams();
        } 
    } else if (event.code === 'ArrowDown') {
        squarePositionY += 10;
        squareBlock.style.marginTop = squarePositionY + 'px';
        if (squareHight + squarePositionY > bodyClientHight) {
            squarePositionY -= 20;
            textBams();
        } 
    }
    transformSquare();
}

function transformSquare () {
    jumpSquare();
    
}

function jumpSquare () {
    if (event.code === 'Space') {
        squarePositionY -= 10;
        squareBlock.style.marginTop = squarePositionY + 'px';
        setTimeout(() => {
            squarePositionY += 10;
            squareBlock.style.marginTop = squarePositionY + 'px';
        }, 100)
    } else if (event.code === 'ControlLeft') {
        squareBlock.classList.toggle('transform_square');
    }
}

function textBams () {
    spanText.textContent = 'BAMS!!!';
    setTimeout(deleteBams, 2000)
}

function deleteBams () {
    spanText.textContent = '';
}
