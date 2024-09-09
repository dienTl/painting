var color = document.querySelector('#color') 
var erase = document.querySelector('#eraser') 
var decrease = document.querySelector('#decrease') 
var increase = document.querySelector('#increase') 
var sizel = document.querySelector('#size') 
var save = document.querySelector('#save') 
var clear = document.querySelector('#clear') 
var canvas =  document.querySelector('canvas')
var ctx = canvas.getContext('2d');

var painting = false
var colorpain = '#000000';
var size = 10;
sizel.innerHTML = size
var pos1 ={
    x : 0 ,
    y : 0 
}
var pos2 ={
    x : 0 ,
    y : 0 
}
document.addEventListener('mousedown' , function(e){
    pos1={
        x : e.offsetX,
        y : e.offsetY
    }
    painting=true
})
document.addEventListener('mousemove' , function(e){
   
    if(painting){
    pos2={
        x : e.offsetX,
        y : e.offsetY
    }
// vẽ hình tròn
    ctx.beginPath();
    ctx.arc(pos1.x , pos1.y , size ,0 , 2 * Math.PI);
    ctx.fillStyle =colorpain
    ctx.fill();
//vẽ đường viền
    ctx.beginPath();
    ctx.moveTo(pos1.x,pos1.y);
    ctx.lineTo(pos2.x,pos2.y);
    ctx.strokeStyle =colorpain;
    ctx.lineWidth = size*2;
    ctx.stroke();

    pos1.x=pos2.x;
    pos1.y=pos2.y
}
    
})
//nhấc chuột lên là  ko vẽ nữa
document.addEventListener('mouseup', function(e){
    painting=false
})
//lấy value để thay màu
document.addEventListener('change' ,function(e){
    colorpain = e.target.value ;
})
//xoa
erase.addEventListener('click' , function(e){
    colorpain = '#ffffff';
})
//giảm size
decrease.addEventListener('click', function() {
    if( size <= 5){
        size = 5 ; 
        sizel.innerHTML = size;
    }
    else{
        size -=5 ;
        sizel.innerHTML= size ;
    }
})
// tăng size
increase.addEventListener('click' , function(){
    if(size >= 30){
        size = 30 ;
        sizel.innerHTML = size
    }
    else{
        size += 5 ;
        sizel.innerHTML = size ;
    }
})
clear.addEventListener('click' ,function(){
    var canvasreact = canvas.getClientRects()[0]
    ctx.clearRect(0 , 0 ,canvasreact.width , canvasreact.height)
})
save.addEventListener('click' , function(){
    var output = canvas.toDataURL('image/png');
    save.setAttribute('href' ,output)
})



