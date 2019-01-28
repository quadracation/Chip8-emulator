var Renderer= function(canvas, height, width,cellSize){
    this.context=canvas.getContext("2d");
    this.canvas=canvas;
    this.width=+width;
    this.height=+height;
    this.draws=0;
    //this.setCellSize
    //need foreground and background colours?
};

Renderer.prototype.clear=function(){
    this.context.clearRect(0,0,this.width*this.cellSize,this.height*this.cellSize);
};

Renderer.prototype.render=function(display){
    var x; var y; var i;
    this.clear();
    for(i=0; i<display.length;i++){
        x=(i% this.width)*this.cellSize; //inherited from mother function
        y=Math.floor(i/this.width)*this.cellSize;
        //fill
    };
    this.draws++;

};

