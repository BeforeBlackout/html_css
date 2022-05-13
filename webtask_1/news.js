window.onload = function () {
    if (isOnline) {
        let img = localStorage.getItem("1"),
            title = localStorage.getItem("2"),
            body = localStorage.getItem("3")
        printF(img, title, body)
    }
}

function printF(img, title, body) {
    console.log(title)
    console.log(title.textContent)
    let messageElem = document.querySelector(".news_slider")
    let template = `<div class="card">
                        <div class="img-div">${img}</div>
                        <div class="div-text">${title}</div>
                        <div class="div-body">${body}</div>
                        <button class="find_more"><a href="index.html#contacts_pointer">Find more<i class="arrow right"></i></a>
                        </button>
                    </div>`
    messageElem.innerHTML += template
}


function isOnline() {
    return window.navigator.onLine;
}
