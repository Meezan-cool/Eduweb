// import React from "react";
// const Main=()=>{
//     const cityInput = document.getElementById("city");
// const submitButton = document.getElementById("submit");
// const weatherDiv = document.getElementById("weather");

// const apiKey = "YOUR_API_KEY";

// submitButton.addEventListener("click", () => {
//   const city = cityInput.value;

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       const weather = data.weather[0];
//       const temperature = data.main.temp;
//       const description = weather.description;

//       weatherDiv.innerHTML = `
//         <h2>Weather in ${city}</h2>
//         <p>Temperature: ${temperature}°C</p>
//         <p>Description: ${description}</p>
//       `;
//     });
// });
//     return (
//         <body>
//         <div class="container">
//         <h1>Weather App</h1>
//         <input type="text" id="city" placeholder="Enter city name"/>
//         <button id="submit">Get Weather</button>
//         <div id="weather"></div>
//         </div>
//         </body>
//     )
// }
// export default Main
// import React, { useState } from "react";
// // import fetch from "fetch";

// const WeatherApp = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const handleSubmit = () => {
//     const apiKey = "YOUR_API_KEY";
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         setWeather(data);
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Weather App</h1>
//       <input
//         type="text"
//         id="city"
//         placeholder="Enter city name"
//         onChange={e => setCity(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Get Weather</button>
//       {weather && (
//         <div id="weather">
//           <h2>Weather in {city}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Description: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
import React from "react";
const Main=()=>{
    return(
        <body className="Main">
            
        
        <div  className="container">
            <div className="subcontainer">
                <h1>Hello World!</h1>
                <div className="sub2container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias accusamus voluptas at. Vero optio eos velit autem pariatur culpa et veritatis. 
                            Similique aliquid tempora ipsa soluta laudantium itaque sequi?</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>My Name is Meezan</h1>
                <div className="sub2container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio repudiandae accusantium animi ea et, voluptatibus iste eos quos voluptates, sapiente reprehenderit mollitia error asperiores odit quaerat, suscipit laborum illum!</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>Hello World!</h1>
                <div className="sub2container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias accusamus voluptas at. Vero optio eos velit autem pariatur culpa et veritatis. 
                            Similique aliquid tempora ipsa soluta laudantium itaque sequi?</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>My Name is Meezan</h1>
                <div className="sub2container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio repudiandae accusantium animi ea et, voluptatibus iste eos quos voluptates, sapiente reprehenderit mollitia error asperiores odit quaerat, suscipit laborum illum!</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>Hello World!</h1>
                <div className="sub2container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias accusamus voluptas at. Vero optio eos velit autem pariatur culpa et veritatis. 
                            Similique aliquid tempora ipsa soluta laudantium itaque sequi?</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>My Name is Meezan</h1>
                <div className="sub2container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio repudiandae accusantium animi ea et, voluptatibus iste eos quos voluptates, sapiente reprehenderit mollitia error asperiores odit quaerat, suscipit laborum illum!</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>Hello World!</h1>
                <div className="sub2container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias accusamus voluptas at. Vero optio eos velit autem pariatur culpa et veritatis. 
                            Similique aliquid tempora ipsa soluta laudantium itaque sequi?</p>
                </div>
            </div>
            <div className="subcontainer">
                <h1>My Name is Meezan</h1>
                <div className="sub2container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio repudiandae accusantium animi ea et, voluptatibus iste eos quos voluptates, sapiente reprehenderit mollitia error asperiores odit quaerat, suscipit laborum illum!</p>
                </div>
            </div>
        </div>
        </body>
    )
}
export default Main