var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=5d9534a3ef8a36113a55ba728a0520f6')

.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+Math.round(tempValue-273)+\u00B0+"C";
  input.value ="";
})

.catch(err => alert("Wrong city name!"));
})
