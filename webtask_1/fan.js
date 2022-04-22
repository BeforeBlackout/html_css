let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    images = ["img/us1.png", "img/us2.png", "img/us3.png", "img/us4.png"]


function randImg() {
  let item = images[Math.floor(Math.random()*images.length)]
  return item
}  

form.onsubmit = function () {
  event.preventDefault();
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  formInputs.forEach(function (input) {
    if (input.value.trim() === '') {
      input.classList.add('error');
      console.log('input not filled');
      form.reset();
    } else {
      input.classList.remove('error')
      console.log('correct')
      test(input.value)
      form.reset()
    }
  })

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }
}

function test(message) {
  let messageElem = document.querySelector(".comments")
  let time = new Date().toDateString();
  let template = `<div class="comment">
                    <img src="${randImg()}" class="ava">
                      <span>${message}</span>
                    <div class="date">${time}</div>
                  </div>`
  messageElem.innerHTML += template
}
