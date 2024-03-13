const content = document.querySelector(".content");

const columns = 20;
const rows = 30;
for (let i = 0; i < rows * columns; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    content.appendChild(block);
}

let blocks = document.querySelectorAll(".content .block");

function getX(offsetLeft) {
    const getCellX = (offsetLeft - content.offsetLeft) / 40 + 1;
    return getCellX;
}

function getY(offsetTop) {
    const getCellY = (offsetTop - content.offsetTop) / 40 + 1;
    return getCellY;
}

function highlightLinesXandY(x, y) {
    [...blocks].map((block) => {
        if (getX(block.offsetLeft) === x || getY(block.offsetTop) === y) {
            paintXandYAxis(block);
        }
    });
}

function paintXandYAxis(block) {
    block.classList.add("block-lines");
}

content.addEventListener("click", (e) => {
    if (!e.shiftKey) {
        clearCellsAxis();
    }

    const x = getX(e.target.offsetLeft);
    const y = getY(e.target.offsetTop);
    highlightLinesXandY(x, y);
    e.target.innerHTML = `X:${x}  Y:${y}`;
    e.target.classList.add("block-selected");
});

function clearCellsAxis() {
    blocks.forEach((block) => {
        block.classList.remove("block-selected");
        block.innerText = "";
        block.classList.remove("block-lines");
    });
}