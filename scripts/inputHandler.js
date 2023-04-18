//Arrow Keys for controlling player

addEventListener("keydown", function(e){
    if(e.code == 'ArrowRight') vx = 5;
    if(e.code == 'ArrowLeft') vx = -5;
    if(e.code == 'ArrowUp') vy = -5;
    if(e.code == 'ArrowDown') vy = 5;
})

addEventListener("keyup", function(e){
    if(e.code == 'ArrowRight') vx = 0;
    if(e.code == 'ArrowLeft') vx = 0;
    if(e.code == 'ArrowUp') vy = 0;
    if(e.code == 'ArrowDown') vy = 0;
})