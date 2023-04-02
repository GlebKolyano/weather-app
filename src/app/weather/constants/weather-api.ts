const WEATHER_API_KEY = 'b09733c2d2b1498bbc8104526232903';

enum WeatherUrls {
  currentForecast = 'https://api.weatherapi.com/v1/current.json',
  forecast = 'https://api.weatherapi.com/v1/forecast.json',
  cities = 'https://api.weatherapi.com/v1/search.json',
}

enum CachedWeatherUrls {
  forecast = 'https://api.weatherapi.com/v1/forecast.json',
  cities = 'https://api.weatherapi.com/v1/search.json',
}

const DEFAULT_FORECAST_PARAMS = {
  days: 7,
  aqi: 'no',
  alerts: 'no',
};

export { WeatherUrls, CachedWeatherUrls, DEFAULT_FORECAST_PARAMS, WEATHER_API_KEY };
