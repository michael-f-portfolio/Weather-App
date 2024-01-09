import "styles/searchWeatherForm.css";

export default class SearchWeatherForm {
  constructor(parentElement) {
    this.parent = parentElement;

    this.form = document.createElement("form");
    this.form.id = "search-weather-form";

    this.textInput = document.createElement("input");
    this.textInput.type = "text";
    this.textInput.placeholder = "Lookup weather for city";
    this.textInput.value = "Calgary";

    this.formSubmitButton = document.createElement("button");
    this.formSubmitButton.type = "submit";
    this.formSubmitButton.textContent = "Submit";

    this.form.append(this.textInput, this.formSubmitButton);
    this.parent.appendChild(this.form);
  }

  bindUpdateContent(handler) {
    this.formSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      handler(this.textInput.value);
    });
  }
}
