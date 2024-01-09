export default class WeatherModel {
  constructor(content) {
    this.content = content;
    this.showAsCelsius = true;
  }

  updateContent(content) {
    this.tempC = content.current.temp_c;
    this.tempF = content.current.temp_f;
    this.currentCondition = content.current.condition.text;
    this.currentConditionIcon = content.current.condition.icon;
    this.windKPH = content.current.wind_kph;
    this.windMPH = content.current.wind_mph;
    this.windDirection = content.current.wind_dir;
    this.country = content.location.country;
    this.province = content.location.region;
    this.city = content.location.name;
    if (this.showAsCelsius) {
      this.onContentChanged({
        temperature: this.tempC,
        currentCondition: this.currentCondition,
        currentConditionIcon: this.currentConditionIcon,
        windSpeed: this.windKPH,
        windDirection: this.windDirection,
        country: this.country,
        province: this.province,
        city: this.city,
        asCelsius: true,
      });
    } else {
      this.onContentChanged({
        temperature: this.tempF,
        currentCondition: this.currentCondition,
        currentConditionIcon: this.currentConditionIcon,
        windSpeed: this.windMPH,
        windDirection: this.windDirection,
        country: this.country,
        province: this.province,
        city: this.city,
        asCelsius: false,
      });
    }
  }

  toggleDegreeType() {
    this.showAsCelsius = !this.showAsCelsius;
  }

  bindContentChange(callback) {
    this.onContentChanged = callback;
  }
}
