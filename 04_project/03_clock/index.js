const clock = document.getElementById('clock')

setInterval(function(){
  let obj = new Date();
  clock.innerHTML = obj.toLocaleTimeString();
})