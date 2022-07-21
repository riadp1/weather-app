let weather = {
    apikey:"&units=metric&appid=38ba2157e47e072be340d056b5ce6fab",
    fetchweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             +this.apikey
        
         )

        .then((response)=>response.json())
        .then((Data)=> this.displayweather(Data));

    },
    displayweather: function( Data) {
        const { name} = Data;
        const { icon, description } = Data.weather[0];
        
        const {temp, humidity} = Data.main;
        const {speed} = Data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".description").innerText = description
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "Humidity" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed" + speed + "Km";

    },
    
    search:function (){
    this.fetchweather(document.querySelector(".search-bar").value);
 }

 };
 







 document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

 });

 document.querySelector(".search-bar").addEventListener("keyup",function(event) 
 {
    if(
        event.key == "Enter"
    ){
        weather.search()
    }

 });

