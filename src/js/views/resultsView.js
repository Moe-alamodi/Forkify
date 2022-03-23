import View from "./view";
import icons from "../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipe found for your query. Please try again!";
  _message = "";
  _generateMarkup() {
    return this._data.map((el) => this._generateMarkupPerview(el)).join("");
  }
  _generateMarkupPerview(results) {
    return `
    <li class="preview">
          <a class="preview__link " href="#${results.id}">
            <figure class="preview__fig">
              <img src="${results.image}" alt=${results.title}/>
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${results.title}</h4>
              <p class="preview__publisher">${results.publisher}</p>
              
            </div>
          </a>
        </li>
    `;
  }
}
export default new ResultsView();
