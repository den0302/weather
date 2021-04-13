//kyiv
fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name').textContent = data.name;
      document.querySelector('.deg').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds').textContent = data.weather[0]['description'] ;
      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});

//dnipro


fetch('https://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name2').textContent = data.name;
      document.querySelector('.deg2').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds2').textContent = data.weather[0]['description'] ;
      document.querySelector('.features2 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});

//lviv

fetch('https://api.openweathermap.org/data/2.5/weather?q=lviv,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name3').textContent = data.name;
      document.querySelector('.deg3').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds3').textContent = data.weather[0]['description'] ;
      document.querySelector('.features3 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});



//ivano-frankivsk

fetch('https://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name4').textContent = data.name;
      document.querySelector('.deg4').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds4').textContent = data.weather[0]['description'] ;
      document.querySelector('.features4 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});

//ternopil

fetch('https://api.openweathermap.org/data/2.5/weather?q=Ternopil,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name5').textContent = data.name;
      document.querySelector('.deg5').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds5').textContent = data.weather[0]['description'] ;
      document.querySelector('.features5 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});


fetch('https://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name6').textContent = data.name;
      document.querySelector('.deg6').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds6').textContent = data.weather[0]['description'] ;
      document.querySelector('.features6 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});




fetch('https://api.openweathermap.org/data/2.5/weather?q=Lutsk,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name7').textContent = data.name;
      document.querySelector('.deg7').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds7').textContent = data.weather[0]['description'] ;
      document.querySelector('.features7 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});












fetch('https://api.openweathermap.org/data/2.5/weather?q=Chernivtsi,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name8').textContent = data.name;
      document.querySelector('.deg8').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds8').textContent = data.weather[0]['description'] ;
      document.querySelector('.features8 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});






fetch('https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name9').textContent = data.name;
      document.querySelector('.deg9').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds9').textContent = data.weather[0]['description'] ;
      document.querySelector('.features9 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});








fetch('https://api.openweathermap.org/data/2.5/weather?q=Zhytomyr,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name10').textContent = data.name;
      document.querySelector('.deg10').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds10').textContent = data.weather[0]['description'] ;
      document.querySelector('.features10 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});









fetch('https://api.openweathermap.org/data/2.5/weather?q=Chernihiv,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name11').textContent = data.name;
      document.querySelector('.deg11').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds11').textContent = data.weather[0]['description'] ;
      document.querySelector('.features11 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});











fetch('https://api.openweathermap.org/data/2.5/weather?q=Kropyvnytskyi,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name12').textContent = data.name;
      document.querySelector('.deg12').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds12').textContent = data.weather[0]['description'] ;
      document.querySelector('.features12 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});








fetch('https://api.openweathermap.org/data/2.5/weather?q=Kherson,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name13').textContent = data.name;
      document.querySelector('.deg13').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds13').textContent = data.weather[0]['description'] ;
      document.querySelector('.features13 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});




fetch('https://api.openweathermap.org/data/2.5/weather?q=Mykolaiv,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name14').textContent = data.name;
      document.querySelector('.deg14').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds14').textContent = data.weather[0]['description'] ;
      document.querySelector('.features14 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});



fetch('https://api.openweathermap.org/data/2.5/weather?q=Cherkasy,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name15').textContent = data.name;
      document.querySelector('.deg15').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds15').textContent = data.weather[0]['description'] ;
      document.querySelector('.features15 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});



fetch('https://api.openweathermap.org/data/2.5/weather?q=Sumy,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name16').textContent = data.name;
      document.querySelector('.deg16').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds16').textContent = data.weather[0]['description'] ;
      document.querySelector('.features16 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});



fetch('https://api.openweathermap.org/data/2.5/weather?q=Khmelnytskyi,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name17').textContent = data.name;
      document.querySelector('.deg17').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds17').textContent = data.weather[0]['description'] ;
      document.querySelector('.features17 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});




fetch('https://api.openweathermap.org/data/2.5/weather?q=Poltava,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name18').textContent = data.name;
      document.querySelector('.deg18').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds18').textContent = data.weather[0]['description'] ;
      document.querySelector('.features18 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});



fetch('https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name19').textContent = data.name;
      document.querySelector('.deg19').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds19').textContent = data.weather[0]['description'] ;
      document.querySelector('.features19 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});





fetch('https://api.openweathermap.org/data/2.5/weather?q=Zaporizhzhia,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name20').textContent = data.name;
      document.querySelector('.deg20').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds20').textContent = data.weather[0]['description'] ;
      document.querySelector('.features20 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});



fetch('https://api.openweathermap.org/data/2.5/weather?q=Donetsk,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name21').textContent = data.name;
      document.querySelector('.deg21').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds21').textContent = data.weather[0]['description'] ;
      document.querySelector('.features21 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});

/*
fetch('https://api.openweathermap.org/data/2.5/weather?q=Lugansk,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name22').textContent = data.name;
      document.querySelector('.deg22').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds22').textContent = data.weather[0]['description'] ;
      document.querySelector('.features22 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});
*/


fetch('https://api.openweathermap.org/data/2.5/weather?q=Simferopol,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name23').textContent = data.name;
      document.querySelector('.deg23').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds23').textContent = data.weather[0]['description'] ;
      document.querySelector('.features23 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});




fetch('https://api.openweathermap.org/data/2.5/weather?q=Kropyvnytskyi,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name24').textContent = data.name;
      document.querySelector('.deg24').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds24').textContent = data.weather[0]['description'] ;
      document.querySelector('.features24 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});


fetch('https://api.openweathermap.org/data/2.5/weather?q=Uzhhorod,ua&appid=39c8595470d32d15a006d66047604b7b')
   .then (function(resp) {return resp.json()  })
   .then (function(data) {
      console.log(data);
      document.querySelector('.city-name25').textContent = data.name;
      document.querySelector('.deg25').innerHTML = Math.round (data.main.temp -273) + '&deg;' ;
      document.querySelector('.clouds25').textContent = data.weather[0]['description'] ;
      document.querySelector('.features25 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
.catch(function() {

});






