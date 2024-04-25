import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
    _data;
    render(data, render = true) {
        if (!data || (Array.isArray(data) && data.length === 0))
          return this.renderError();
    
        this._data = data;
        const markup = this._generateMarkup();
    
        if (!render) return markup;
    
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
    
    _clear (){
        this._parentElement.innerHTML = '';
    
    }
    
    renderSpinner (){
        const markeup = `
             <div class="spinner">
             <svg>
               <use href="${icons}#icon-loader"></use>
             </svg>
             </div>`; 
             this._clear();
         this._parentElement.insertAdjacentHTML('afterbegin', markeup);
       
       }
       renderError(message = this._errorMessage) {
        const markeup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markeup);
      }
    }