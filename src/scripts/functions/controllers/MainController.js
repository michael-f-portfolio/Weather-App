import Header from "components/header";
import Footer from "components/footer";
import MainContent from "../../components/mainContent";
import WeatherModel from "../../models/WeatherModel";
import getWeather from "../getWeather";

export default class MainController {
  constructor() {
    this.body = document.querySelector("body");
    this.weatherModel = new WeatherModel("Search for a city...");
    this.copyrightInfo = "Copyright © 2024 Michael F.";
    this.copyrightSource = "https://github.com/michael-f-portfolio";
  }

  initialize() {
    // Initialize Views
    this.header = new Header(this.body, "My Weather App");
    this.mainContent = new MainContent(this.body, this.weatherModel.content);
    this.footer = new Footer(
      this.body,
      this.copyrightInfo,
      this.copyrightSource
    );

    // Initialize Binders
    this.mainContent.searchWeatherForm.bindUpdateContent(
      this.handleUpdateContent
    );
    this.mainContent.bindToggleTemperatureScale(
      this.handleToggleTemperatureScale
    );
    this.weatherModel.bindContentChange(this.onContentChange);
  }

  onContentChange = (content) => {
    this.mainContent.displayContent(content);
  };

  handleUpdateContent = async (content) => {
    try {
      const data = await getWeather(content);
      if (data.error) {
        throw Error(`${data.error.code}:${data.error.message}`);
      }
      this.weatherModel.setContent(data);
    } catch (err) {
      if (err.message.includes("2008")) {
        this.mainContent.displayContent({
          error:
            "API Key is invalid or expired, please contact your administrator",
        });
      } else if (err.message.includes("1006")) {
        this.mainContent.displayContent({
          error: `Could Not Find City: ${content}`,
        });
      }
    }
  };

  handleToggleTemperatureScale = () => {
    this.weatherModel.toggleDegreeType();
  };
}
