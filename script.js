const scriptURL = 'https://script.google.com/macros/s/AKfycbw5cjcIZywFBdS-nNQzaq-OGq_VwICQNKPWG2BjVc2RqIs77w5yPhz5YcoMS6JcdYbDtA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})