function submitGridSize(e){
    let form = document.querySelector(".grid_size")
    let grid_size = parseInt(form.value);
    if (grid_size > 100){
        grid_size = 100;
        form.value = 100;
    }
    else if (grid_size < 1){
        grid_size = 1;
        form.value = 1;
    }
    let canvas = generateCanvas(grid_size);
    let sketch = document.querySelector(".sketcher");
    sketch.replaceChildren(canvas);
}

function generateCanvas(grid_size){
    const canvas = document.createElement("div");
    canvas.classList.add("canvas");
    for (let i = 0; i < grid_size; i++){
        let row = document.createElement("div");
        row.classList.add("canvas_row");
        for (let j = 0; j < grid_size; j++){
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener('mouseover', paintElement);
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
    return canvas;
}

function paintElement(e){
    this.classList.add("filled");
}

const button = document.querySelector(".form_submit");
button.addEventListener("click",submitGridSize)