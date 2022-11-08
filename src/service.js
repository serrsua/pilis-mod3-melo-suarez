export const getWeather = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`);
    console.log(response.status);
    return response.json();
  } catch {
    throw new Error('No se encuentra el Clima solicitado');
  }
};