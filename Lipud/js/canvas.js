class Canvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('flag-board');
        this.context = this.canvas.getContext('2d');
        this.canvas.style.border = '1px solid black';
        this.canvas.fillStyle = 'blue';
    }
}