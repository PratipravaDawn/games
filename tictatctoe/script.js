boxes = document.querySelectorAll('.box');

turns = 1;
winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]];


boxes.forEach((box) => {
    box.addEventListener('click', function() {
            if (turns % 2 !== 0) {
                box.innerText = 'X';
            } else {
                box.innerText = 'O';
            }
            turns++;
            box.disabled = true;
            checkWinner();
            if (turns > 9) {
                alert("It's a draw!");
            }
    });
});

reset = () =>{
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
    turns = 1;
    document.getElementById('overlay').style.visibility = 'hidden';
}

disbleboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

showWinner = (value) =>{
    let result = document.getElementById('message');
    result.innerText = `Player ${value} wins!`;
    document.getElementById('overlay').style.visibility = 'visible';
    disbleboxes();
}

draw = () =>{
    let result = document.getElementById('message');
    result.innerText = "It's a draw!";
    document.getElementById('overlay').style.visibility = 'visible';
}

function checkWinner() {
    for(pattern of winning){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 !== '' && val2 !== '' && val3 !== '') {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                return;
            }
        }
    }
}

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('restart').addEventListener('click', reset);