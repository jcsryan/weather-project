var buttonEl = document.querySelector('.button');
var inputValueEl = document.querySelector('.inputValue');
 var nameEl= document.querySelector('.name');
 const iconEl = document.getElementById("icon");
 var descriptionEl = document.querySelector('.description');
 var tempEl= document.querySelector('.temp');
 var humidityEl= document.querySelector('.humidity');
 var windspeedEl = document.querySelector('.windspeed');

 var date1El=document.querySelector('.date1');
 var date2El=document.querySelector('.date2');
 var date3El=document.querySelector('.date3');
 var date4El=document.querySelector('.date4');
 var date5El=document.querySelector('.date5');

 const image1=document.getElementById('wicon1');
 const image2=document.getElementById('wicon2');
 const image3=document.getElementById('wicon3');
 const image4=document.getElementById('wicon4');
 const image5=document.getElementById('wicon5');


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
 
      
    
        nameEl.innerHTML = nameValue;
        descriptionEl.innerHTML = 'Description: ' + desValue;
        iconEl.setAttribute("src","https://openweathermap.org/img/wn/" + iconValue + "@2x.png");
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

        var iconValue1 = data['list'][0]['weather'][0]['icon']
        var iconValue2 = data['list'][1]['weather'][0]['icon']
        var iconValue3 = data['list'][9]['weather'][0]['icon']
        var iconValue4 = data['list'][17]['weather'][0]['icon']
        var iconValue5 = data['list'][25]['weather'][0]['icon']
        
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

        image1.setAttribute("src","https://openweathermap.org/img/wn/" + iconValue1 + "@2x.png");
        image2.setAttribute("src","https://openweathermap.org/img/wn/" + iconValue2 + "@2x.png");
        image3.setAttribute("src","https://openweathermap.org/img/wn/" + iconValue3 + "@2x.png");
        image4.setAttribute("src","https://openweathermap.org/img/wn/" + iconValue4 + "@2x.png");
        image5.setAttribute("src","https://openweathermap.org/img/wn/" + iconValue5 + "@2x.png");

        temp1El.innerHTML = 'Temp: ' + temp1 + 'F';
        temp2El.innerHTML = 'Temp: ' + temp2 + 'F';
        temp3El.innerHTML = 'Temp: ' + temp3 + 'F';
        temp4El.innerHTML = 'Temp: ' + temp4 + 'F';
        temp5El.innerHTML = 'Temp: ' + temp5 + 'F';

        humidity1El.innerHTML = 'Humidity: ' +humi1 + '%';
        humidity2El.innerHTML = 'Humidity: ' +humi2 + '%';
        humidity3El.innerHTML = 'Humidity: ' +humi3 + '%';
        humidity4El.innerHTML = 'Humidity: ' +humi4 + '%';
    })
};

const myForm = document.getElementById("todo");
const list = document.querySelector(".list-items");


function addTodo(e) {
 // e.preventDefault();
  const userInput = document.querySelector(".userAdd").value;
  const userListItem = document.createElement("li");
  userListItem.appendChild(document.createTextNode(userInput));
  list.appendChild(userListItem);
  const myArray = map(listItems, getText);
  localStorage.setItem('userListItem', JSON.stringify(myArray));
}

const listItems = document.getElementsByTagName('li');


function map(arrayLike, fn) {
    var ret = [], i = -1, len = arrayLike.length;
    while (++i < len) ret[i] = fn(arrayLike[i]);
    return ret;
}


function getText(node) {
    if (node.nodeType === 3) return node.data;
    var txt = '';
    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);
    return txt;
}
