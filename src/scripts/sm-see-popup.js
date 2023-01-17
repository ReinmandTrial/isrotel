!(function smSeePopup() {
   const seePopup = document.querySelector('.sm-see-order-dynamic-block')
   seePopup &&
      seePopup.addEventListener('click', (el) => {
         if (el.target.classList.contains('sm-data-send-submit-btn')) {
            seePopup.querySelector('.sm-see-order-first-step').style.display = 'none'
            seePopup.querySelector('.sm-see-order-second-step').style.display = 'block'
            seePopup.querySelector('.sm-enter-code-input:first-child').focus()
         }
      })
})()
!(function smEnterCode() {
   const smEnterCodeList = document.querySelectorAll('.sm-enter-code-input')
   smEnterCodeList &&
      smEnterCodeList.forEach((input) => {
         input.addEventListener('input', (el) => {
            const _t = el.target
            _t.value = _t.value.replace(/\D/, '')
            if (_t.value !== '' && _t.nextElementSibling) {
               _t.nextElementSibling.focus()
            }
            // if (_t.value === '' && _t.previousElementSibling) {
            //    _t.previousElementSibling.focus()
            // }
         })
      })
})()

$(function () {
   $('#smDateInput').datepicker()
})
