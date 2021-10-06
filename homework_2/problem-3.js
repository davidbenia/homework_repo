let colors = ["red", "green", "yellow", "blue", "violet"];

function changeColor(color) {
    this.style.color = color;
    console.log(this);
}

for (let i = 1; i <= 5; i++) {
    document.getElementById("div" + i).addEventListener("click", changeColor.bind(document.getElementById("div" + i), colors[i - 1]));
}