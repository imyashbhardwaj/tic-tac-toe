var char="A";
var comp="";
var arr=[1,2,3,4,5,6,7,8,9];
var index;
var draw=1;
var c="#p";
var random=0;
var win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var use=[];
var com=[];
function check(ar,mark){
  for(var i=0;i<win.length;i++){
    if((ar.indexOf(win[i][0])!=-1)&&(ar.indexOf(win[i][1])!=-1)&&(ar.indexOf(win[i][2])!=-1)){
      draw=0;
      $("#win").html(mark+" Won the game");
      alert(mark+" Won the game");
      location.reload(true);
      break;
    }
  }
}
$("#X").on("click",function(){
  char='X';
  comp='O';
  });
$("#O").on("click",function(){
  char='O';
  comp='X';
});
$("#p1").on("click",function(){
  index=arr.indexOf(1);
  arr.splice(index,1);
  use.push(1);
  if(char!='A'){
    $("#p1").html("<font color='black'>"+char+"</font>");
    
 check(use,char); 
    
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
  draw();
});
$("#p2").on("click",function(){
  index=arr.indexOf(2);
  arr.splice(index,1);
  use.push(2);
  if(char!='A'){
    $("#p2").html("<font color='black'>"+char+"</font>");
    
  check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p3").on("click",function(){
  index=arr.indexOf(3);
  arr.splice(index,1);
  use.push(3);
  if(char!='A'){
    $("#p3").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p4").on("click",function(){
  index=arr.indexOf(4);
  arr.splice(index,1);
  use.push(4);
  if(char!='A'){
    
    $("#p4").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p5").on("click",function(){
  index=arr.indexOf(5);
  arr.splice(index,1);
  use.push(5);
  if(char!='A'){
    $("#p5").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p6").on("click",function(){
  index=arr.indexOf(6);
  arr.splice(index,1);
  use.push(6);
  if(char!='A'){
    $("#p6").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p7").on("click",function(){
  index=arr.indexOf(7);
  arr.splice(index,1);
  use.push(7);
  if(char!='A'){
    $("#p7").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p8").on("click",function(){
  index=arr.indexOf(8);
  arr.splice(index,1);
  use.push(8);
  if(char!='A'){
    $("#p8").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
$("#p9").on("click",function(){
  index=arr.indexOf(9);
  arr.splice(index,1);
  use.push(9);
  if(char!='A'){
    $("#p9").html("<font color='black'>"+char+"</font>");
  
    check(use,char);
  random=arr[Math.floor(Math.random()*(arr.length-1)+0)];
  console.log(random);
  com.push(random);
  c+=random;
  $(c).html("<font color=black>"+comp+"</font>");
    
  index=arr.indexOf(random);
  arr.splice(index,1);
  console.log(arr);
  c="#p";
  console.log(use);
  console.log(com);
  check(com,comp);}
draw();});
function draw(){
  if((use.length==5)||(com.length==5)){
    if(draw==0){
      alert("Game Draw");
      location.reload(true);
    }
  }
  else return;
}