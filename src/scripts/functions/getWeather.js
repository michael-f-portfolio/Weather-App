export default async function getWeather(location) {
  try {
    const result = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${location}`,
      {
        headers: {
          // "free user" key for learning, will learn to hide in env-variables later
          key: "2e9eaa21661f4971b26191120240901",
        },
      }
    );
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
}
