class Colors{
    constructor(colorIndex){
        this.index = colorIndex ? colorIndex % 9 : 0;
        this.colorPalette = [ 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black' ];
        this.color = this.colorPalette[this.index];
    }

    next = function(colorIndex) {
        if (colorIndex) {this.index = (this.index + colorIndex) % 9;} 
        else {this.index = ++this.index % 9;}
        this.color = this.colorPalette[this.index];
        return this;
    }
    
    previous = function(colorIndex) {
        if (colorIndex) {
            this.index = (this.index - colorIndex) % 9;
            if (this.index < 0) this.index += 9;
        } else {
            this.index > 0 ? this.index-- : this.index = 8;
        }
        this.color = this.colorPalette[this.index];
        return this;
    }
}

const newColor = new Colors();
console.log(newColor.next()
    .previous()
    .previous()
    .color)