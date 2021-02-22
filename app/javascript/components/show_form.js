  const button = document.querySelector('#hide');
  const showForm = (event) => {
    event.preventDefault();
    const form = document.querySelector('.form-hide').style.display = 'block';
  }

  console.log(button);

  button.addEventListener('click', showForm);


export { showForm };
