let fields = [
    null, null, null,
    null, null, null,
    null, null, null,
];


const winningCombinations = [
    [0, 1, 2], // obere Reihe
    [3, 4, 5], // mittlere Reihe
    [6, 7, 8], // untere Reihe
    [0, 3, 6], // linke Spalte
    [1, 4, 7], // mittlere Spalte
    [2, 5, 8], // rechte Spalte
    [0, 4, 8], // diagonale von oben links nach unten rechts
    [2, 4, 6]  // diagonale von oben rechts nach unten links
];

let currentPlayer = 'circle'; // standart beginn mit circle
let gameOver = false;

function init() {
    render();
}

function render() {
    let tableHtml = '<table>'; // table wird erstellt

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j; // 0 * 3 + 0 = 0 / 
            tableHtml += `<td onclick="handleClick(${index}, this)"></td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    document.getElementById('content').innerHTML = tableHtml;
}

function handleClick(index, tdElement) {
    if (gameOver || fields[index] !== null) return;
    // Setze den aktuellen Spieler in das fields Array
    if (fields[index] === null) {
        fields[index] = currentPlayer;

        // Setze das passende SVG in das <td> Element
        if (currentPlayer === 'circle') {
            tdElement.innerHTML = createCircleSVG();
            currentPlayer = 'cross';
        } else {
            tdElement.innerHTML = createCrossSVG();
            currentPlayer = 'circle';
        }

        // Entferne den onclick-Handler
        tdElement.onclick = null;

        checkWinner();
    }
}

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            gameOver = true; // Stoppe das Spiel, wenn jemand gewinnt
            drawWinningLine(combo); // Zeichne die Gewinnlinie
            break;
        }
    }
}

function drawWinningLine(combination) {
    const lineColor = '#ffffff';
    const lineWidth = 5;

    const startCell = document.querySelectorAll(`td`)[combination[0]];
    const endCell = document.querySelectorAll(`td`)[combination[2]];
    const startRect = startCell.getBoundingClientRect();
    const endRect = endCell.getBoundingClientRect();

    const lineLength = Math.sqrt(
        Math.pow(endRect.left - startRect.left, 2) + Math.pow(endRect.top - startRect.top, 2)
    );
    const lineAngle = Math.atan2(endRect.top - startRect.top, endRect.left - startRect.left);

    const line = document.createElement('div');
    line.style.position = 'absolute';
    line.style.width = `${lineLength}px`;
    line.style.height = `${lineWidth}px`;
    line.style.backgroundColor = lineColor;
    line.style.top = `${ startRect.top + startRect.height / 2 - lineWidth / 2 } px`;
    line.style.left = `${ startRect.left + startRect.width / 2 } px`;
    line.style.transform = `rotate(${ lineAngle }rad)`;
    document.getElementById('content').appendChild(line);
}
;