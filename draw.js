function draw(){
const canvas = document.querySelector('#canvas');

if (!canvas.getContext) {
    console.log("no canvas");
    return;
}
const ctx = canvas.getContext('2d');

// set line stroke and line width
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;

// draw a red line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.stroke();
}
draw();

/*
for (let windex = 0; windex < 10; windex++) {
    for (let index = 0; index < 10; index++) {
 
        Composite.add(engine.grid, Bodies.circle(50*windex,50*index,5,{isStatic:true,i}))
    } 
}*/