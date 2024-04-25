import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
    _data;
    render(data) {
        this.data = data;
        const markeup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markeup);
    
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
    `
    this._parentElement.insertAdjacentHTML('afterbegin', markeup);
    this._clear();
        }
    }