import View from "./view";
import icons from "../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _generateMarkup() {
    return this._data.map((el) => this._generateMarkupPerview(el)).join("");
  }
  _generateMarkupPerview(results) {
    return `
    <li class="preview">
          <a class="preview__link preview__link--active" href="#${results.id}">
            <figure class="preview__fig">
              <img src="${results.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${results.title}</h4>
              <p class="preview__publisher">${results.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
    `;
  }
}
export default new ResultsView();
