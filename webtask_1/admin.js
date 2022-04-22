let adminForm = document.querySelector('.js-admin-form'),
    adminFormInputs = document.querySelectorAll('.js-admin-input')


adminForm.onsubmit = function () {
  event.preventDefault();
  let emptyInputs = Array.from(adminFormInputs).filter(input => input.value === '');
  adminFormInputs.forEach(function (input) {
    if (input.value.trim() === '') {
      input.classList.add('error');
      console.log('input not filled');
    } else {
      input.classList.remove('error')
      console.log('correct')
    }
  })

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  } else {
    console.log('successfully submitted')
    showSuccessMessage();
    adminForm.reset();
  }
}

function showSuccessMessage() {
  // alert("Post was successfully posted")
  this.preventDefault
  let messageElem = document.querySelector(".dropas")
  let template = `<div>
                    <img src="img/suc.png" class="suc">
                    <span class="green">Post was successfully created</span>
                  </div>`
  messageElem.innerHTML += template
}
