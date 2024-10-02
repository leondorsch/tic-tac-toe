let fields = [
    null, null, null,
    null, null, null,
    null, null, null,
];

let currentPlayer = 'circle';

function init() {
    render();
}

function render() {
    let tableHtml = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            tableHtml += `<td onclick="handleClick(${index}, this)"></td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    document.getElementById('content').innerHTML = tableHtml;
}

function handleClick(index, tdElement) {
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
    }
}
;