  const bindStarRatingForm = () => {
    const button = document.querySelector('#hide');
    if (button) {
      button.addEventListener('click', showForm);
    }
  }


  const showForm = (event) => {
    const d1 = document.querySelector('#avg');
    d1.insertAdjacentHTML('afterend', '<span class="fa fa-star checked"></span>');
  }


export { bindStarRatingForm };
