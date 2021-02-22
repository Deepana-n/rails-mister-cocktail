  const bindShowForm = () => {
    const button = document.querySelector('#hide');
    if (button) {
      button.addEventListener('click', showForm);
    }
  }


  const showForm = (event) => {
    event.preventDefault();
    document.querySelector('.form-hide').style.display = 'block';
  }


export { bindShowForm };
