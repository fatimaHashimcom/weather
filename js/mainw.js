
let today=document.getElementById('today')
let today_date=document.getElementById('today_date')
let today_month=document.getElementById('today_month')
let today_degree=document.getElementById('today_degree')
let imgtody=document.getElementById('imgtody')
let decription=document.getElementById('decription')
let wind1=document.getElementById('wind1')
let wind2=document.getElementById('wind2')
let wind3=document.getElementById('wind3')


let NextDay=document.getElementsByClassName('NextDay')




days=['Sunday','Monday','Tusday','Wednesday','Thursday','Friday','Saterday'];
month=['Jan','Febr','March','Abril','May','June','July','Ags','Sept','Oct'];
let data;
let result;
let  searchcity="Alexandria";

async function getDate(){
    data =await fetch  (`http://api.weatherapi.com/v1/forecast.json?key=025c526410aa4851abd153140230403&q=${searchcity}&days=3&aqi=no&alerts=no`)
    result =await data.json()
   console.log(result)
   displaydateweather()
   displayNextDay()
}
getDate()

function displaydateweather(){
    let date=new Date()
    today.innerHTML= days[date.getDay()]
    today_date.innerHTML=date.getDate()
    today_month.innerHTML=month[date.getMonth()]
    today_degree.innerHTML=result.current.temp_c
    imgtody.setAttribute("src",`https:${result.current.condition.icon}`)
    decription.innerHTML=result.current.condition.text
    wind1.innerHTML=result.current.humidity
    wind2.innerHTML=result.current.wind_kph
    wind3.innerHTML=result.current.wind_dir
}

function displayNextDay(){
    for(let i=0;i<NextDay.length;i++){
        NextDay[i].innerHTML=days[ new Date (result.forecast.forecastday[i+1].date).getDay()]

        nextdayaicon[i].setAttribute("src",`https:${result.forecast.forecastday[i+1].day.condition.icon }`)
        maxdegree[i].innerHTML=result.forecast.forecastday[i+1].day.maxtemp_c
        mindegree[i].innerHTML=result.forecast.forecastday[i+1].day.mintemp_c
        nextcondition[i].innerHTML=result.forecast.forecastday[i+1].day.condition.text

    }
}
search.addEventListener("keyup",function(){
   searchcity =search.value
getDate()

})