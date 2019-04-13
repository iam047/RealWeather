export const fetchWeather = (city: string) => {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=380333d47d591b073e01150c5943197a`;

   return fetch(url).then((response) => response.json())
};

export const fetchLocationWeather = (lat: any, lon: any) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=380333d47d591b073e01150c5943197a`
    return fetch(url).then((response) => response.json())
};
