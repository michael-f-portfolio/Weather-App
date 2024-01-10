import "styles/mainContent.css";
import SearchWeatherForm from "./searchWeatherForm";

export default class MainContent {
  constructor(parentElement, content) {
    this.parent = parentElement;

    this.mainContentContainer = document.createElement("div");
    this.mainContentContainer.id = "main-container";

    this.messageDisplay = document.createElement("h2");
    this.messageDisplay.id = "message-display";
    this.messageDisplay.textContent = content;

    this.weatherDisplayContainer = document.createElement("div");
    this.weatherDisplayContainer.id = "weather-display-container";
    this.weatherDisplayContainer.classList.add("hidden");

    this.locationContainer = document.createElement("div");
    this.locationContainer.id = "location-container";

    this.cityDisplay = document.createElement("div");
    this.cityDisplay.id = "city-display";
    this.provinceDisplay = document.createElement("div");
    this.provinceDisplay.id = "province-display";
    this.countryDisplay = document.createElement("div");
    this.countryDisplay.id = "country-display";
    this.locationContainer.append(
      this.cityDisplay,
      this.provinceDisplay,
      this.countryDisplay
    );

    this.temperatureContainer = document.createElement("div");
    this.temperatureContainer.id = "temperature-container";

    this.currentConditionContainer = document.createElement("div");
    this.currentConditionContainer.id = "current-condition-container";
    this.currentConditionIconDisplay = document.createElement("img");
    this.currentConditionIconDisplay.id = "current-condition-icon";
    this.currentConditionDisplay = document.createElement("div");
    this.currentConditionDisplay.id = "current-condition-display";
    this.currentConditionContainer.append(
      this.currentConditionIconDisplay,
      this.currentConditionDisplay
    );
    this.temperatureDisplay = document.createElement("div");
    this.temperatureDisplay.id = "temperature-display";
    this.temperatureContainer.append(
      this.currentConditionContainer,
      this.temperatureDisplay
    );

    this.windConditionsContainer = document.createElement("div");
    this.windConditionsContainer.id = "wind-condition-container";
    this.windSpeedDisplay = document.createElement("div");
    this.windSpeedDisplay.id = "wind-speed-display";
    this.windDirectionDisplay = document.createElement("div");
    this.windDirectionDisplay.id = "wind-direction-display";
    this.windConditionsContainer.append(
      this.windSpeedDisplay,
      this.windDirectionDisplay
    );
    this.weatherDisplayContainer.append(
      this.locationContainer,
      this.temperatureContainer,
      this.windConditionsContainer
    );

    this.mainContentContainer.append(
      this.messageDisplay,
      this.weatherDisplayContainer
    );

    this.searchWeatherForm = new SearchWeatherForm(this.mainContentContainer);

    this.parent.appendChild(this.mainContentContainer);
  }

  displayContent(content) {
    if (content.error) {
      this.messageDisplay.textContent = content.error;
    } else {
      this.weatherDisplayContainer.classList.remove("hidden");
      this.messageDisplay.textContent = "";
      // this.cityDisplay.textContent = `${content.city}, `;
      this.cityDisplay.textContent = `${content.city}`;
      // this.provinceDisplay.textContent = `${content.province}, `;
      this.provinceDisplay.textContent = `${content.province}`;
      this.countryDisplay.textContent = content.country;
      this.currentConditionIconDisplay.src = content.currentConditionIcon;
      this.currentConditionDisplay.textContent = content.currentCondition;
      this.temperatureDisplay.textContent = `${content.temperature} ${
        content.asCelsius ? "°C" : "°F"
      }`;
      this.windSpeedDisplay.textContent = `${content.windSpeed} ${
        content.asCelsius ? "KPH" : "MPH"
      }`;
      this.windDirectionDisplay.textContent = `(${content.windDirection})`;
    }
  }
}
