import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';
   _data;
//   _data = []; // Initialize _data to an empty array

  _generateMarkup() {
    console.log(this._data);
    // Check if _data is an array before trying to map over it
    if (Array.isArray(this._data)) {
      return this._data.map(this._generateMarkupPreview).join('');
    }
    return '';
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" /> <!-- Replace "Test" with a meaningful description -->
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`
  }
}

export default new ResultsView();