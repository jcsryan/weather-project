var buttonEl = document.querySelector('.button');
var inputValueEl = document.querySelector('.inputValue');
 var nameEl= document.querySelector('.name');
 //var iconEl=document.querySelector('.icon');
 var descriptionEl = document.querySelector('.description');
 var tempEl= document.querySelector('.temp');
 var humidityEl= document.querySelector('.humidity');
 var windspeedEl = document.querySelector('.windspeed');

 var date1El=document.querySelector('.date1');
 var date2El=document.querySelector('.date2');
 var date3El=document.querySelector('.date3');
 var date4El=document.querySelector('.date4');
 var date5El=document.querySelector('.date5');

 var temp1El=document.querySelector('.temp1');
 var temp2El=document.querySelector('.temp2');
 var temp3El=document.querySelector('.temp3');
 var temp4El=document.querySelector('.temp4');
 var temp5El=document.querySelector('.temp5');

 var humidity1El=document.querySelector('.humidity1');
 var humidity2El=document.querySelector('.humidity2');
 var humidity3El=document.querySelector('.humidity3');
 var humidity4El=document.querySelector('.humidity4');
 var humidity5El=document.querySelector('.humidity5');
 

function buttonCall() {
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ inputValueEl.value + '&appid=9258310cbe3ce12fc60025bf8d0e566b' + '&units=imperial')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       // console.log(data)
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var desValue = data['weather'][0]['description'];
      var humidityValue = data['main']['humidity'];
      var windspeedValue= data['wind']['speed'];
      var iconValue = data['weather'][0]['icon'];
     // var iconURL = "http://openweathermap.org/img/wn/" + iconValue + '.png';

        nameEl.innerHTML = nameValue;
        descriptionEl.innerHTML = 'Description: ' + desValue;
        //iconEl.innerHTML = iconValue;
        //$('#wicon').attr('src', iconURL);
        tempEl.innerHTML = 'Temp: ' + tempValue + 'F';
        humidityEl.innerHTML = 'Humidity: ' + humidityValue;
        windspeedEl.innerHTML = 'Windspeed: ' + windspeedValue;
     // .catch(err => alert('Pleae select a valid city.'))
    });

};

function fiveDay() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + inputValueEl.value + '&appid=9258310cbe3ce12fc60025bf8d0e566b' + '&units=imperial')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        var date1=moment(data.list[0].dt_txt).format("MM/ DD")
        var date2=moment(data.list[1].dt_txt).format("MM/ DD")
        var date3=moment(data.list[9].dt_txt).format("MM/ DD")
        var date4=moment(data.list[17].dt_txt).format("MM/ DD")
        var date5=moment(data.list[25].dt_txt).format("MM/ DD")
        
        var temp1=data['list'][0]['main']['temp'];
        var temp2=data['list'][1]['main']['temp'];
        var temp3=data['list'][2]['main']['temp'];
        var temp4=data['list'][3]['main']['temp'];
        var temp5=data['list'][4]['main']['temp'];
       
        var humi1=data['list'][0]['main']['humidity'];
        var humi2=data['list'][1]['main']['humidity'];
        var humi3=data['list'][2]['main']['humidity'];
        var humi4=data['list'][3]['main']['humidity'];
        var humi5=data['list'][4]['main']['humidity'];

        date1El.innerHTML = date1;
        date2El.innerHTML = date2;
        date3El.innerHTML = date3;
        date4El.innerHTML = date4;
        date5El.innerHTML = date5;

        temp1El.innerHTML = 'Temp: ' + temp1 + 'F';
        temp2El.innerHTML = 'Temp: ' + temp2 + 'F';
        temp3El.innerHTML = 'Temp: ' + temp3 + 'F';
        temp4El.innerHTML = 'Temp: ' + temp4 + 'F';
        temp5El.innerHTML = 'Temp: ' + temp5 + 'F';

        humidity1El.innerHTML = 'Humidity: ' +humi1 + '%';
        humidity2El.innerHTML = 'Humidity: ' +humi2 + '%';
        humidity3El.innerHTML = 'Humidity: ' +humi3 + '%';
        humidity4El.innerHTML = 'Humidity: ' +humi4 + '%';
        humidity5El.innerHTML = 'Humidity: ' +humi5 + '%';
    })
};