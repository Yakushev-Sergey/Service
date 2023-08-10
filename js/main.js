

let swiper = new Swiper(".swiper__partners", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1500,
  navigation: {
    nextEl: ".partners__button-prev",
    prevEl: ".partners__button-next",
  },
});



const sliderRang = document.querySelector('#slider');

noUiSlider.create(sliderRang, {
  start: 1,
  animate: false,
  // step: 1,
  range: {
    'min': 1,
    'max': 7
  },
});


// слайдер перемещается нажатием на пипс 
const pips = sliderRang.querySelectorAll('.range__item');

function clickOnPip() {
  let value = Number(this.getAttribute('data-value'));
  sliderRang.noUiSlider.set(value);
}

for (let i = 0; i < pips.length; i++) {

  // For this example. Do this in CSS!
  pips[i].style.cursor = 'pointer';
  pips[i].addEventListener('click', clickOnPip);
}







// при навиденнии изменять цвет 

let activePips = [null, null];

sliderRang.noUiSlider.on('update', function (values, handle) {
  // Удалите активный класс из текущего канала
  if (activePips[handle]) {
    activePips[handle].classList.remove('active-color');

  }

  // Соответствует форматированию канала
  let dataValue = Math.round(values[handle]);


  // Найдите пункт, соответствующий значению
  activePips[handle] = sliderRang.querySelector('.range__item[data-color="'
    + dataValue + '"]');
  activePips[handle].click()


  // Добавьте активный класс
  if (activePips[handle]) {
    activePips[handle].classList.add('active-color');
  }
});




const buttonTab = document.querySelectorAll('[data-button]');
const contentTab = document.querySelectorAll('[data-tab-content]')
// const select = document.querySelector('');

buttonTab.forEach(function (item) {

  item.addEventListener('click', function () {
    contentTab.forEach(function (item) {
      item.classList.add('price__content--hidden')
    })

    const contentBox = document.querySelector('#' + this.dataset.button)
    contentBox.classList.remove('price__content--hidden');

  })
})





// табы для телефона 

const buttonTabMb = document.querySelectorAll('[data-tab]');
const contentTabMb = document.querySelectorAll('[data-tab-content]')



  buttonTabMb.forEach(function (item) {

    item.addEventListener('click', function () {
      contentTabMb.forEach(function (item) {
        item.classList.add('price__content--hidden')
      })

      const contentBoxmb = document.querySelector('#' + this.dataset.tab)
      contentBoxmb.classList.remove('price__content--hidden');

    })
  })





// выподающее меню 

const selectOpt = document.querySelector('.price-option__list')
const optionActiv = document.querySelector('.option__list')
const arrow = document.querySelector('.price-option__img')

selectOpt.addEventListener('click', function(){
  optionActiv.classList.toggle('option--active')
  arrow.classList.toggle('option--active')
})


// отображение выбранного значения 

const listItems = document.querySelectorAll('.price-mobile');
const textLink = document.querySelector('.price-option__link');
const textLinkFirst = document.querySelector('.first');


listItems.forEach((item) => {

  // постоянное отображение 

  if (textLinkFirst) {
    textLink.innerText = textLinkFirst.innerHTML  
  }

  // подставляем значение 
  item.addEventListener('click', function() {
    textLink.innerText = this.innerHTML;
  })

})




// меню смартфон

const menuMobile = document.querySelector('.menu__mobile')
const mobileSpan = document.querySelectorAll('.span-x')
const activeMenu = document.querySelectorAll('.active__menu')

menuMobile.addEventListener('click', function () {
  activeMenu.forEach(element => {
    element.classList.toggle('active--menu')

  });

  mobileSpan.forEach(function (e) {
    e.classList.toggle('active--menu')
  })

})


// при нажатии на кнопку вызова модалки закрывается меню 

const challengeBtn = document.querySelector('.challenge__btn')

challengeBtn.addEventListener('click', function () {

  activeMenu.forEach(function (item) {
    item.classList.remove('active--menu')
  })
  mobileSpan.forEach(function (e) {
    e.classList.remove('active--menu')
  })
})


// модельное окно 

const buttonMbals = document.querySelectorAll('[data-modal-button]')
const modal = document.querySelector('[data-modal]')
const buttonClose = document.querySelector("[data-modal-close]")


// прослушка по кнопкам и открытие модального окна
buttonMbals.forEach(function (item) {
  item.addEventListener('click', function () {
    modal.classList.remove('btn-forms__hidden')

  })
})

// прослушка и закрытие 
buttonClose.addEventListener('click', function () {
  modal.classList.add('btn-forms__hidden')
})







// маска для телефона самая самая самая правильная маска 


document.addEventListener('DOMContentLoaded', function(){
  let phoneInputs = document.querySelectorAll('input[data-input-tel]')


  let getInputNumbersValue = function(input) {
    return input.value.replace(/\D/g, "");
  }

//  событие ивент тут выводим числа 
  let onPhoneInput = function(e) {
    let input = e.target 
        inputNambersValue = getInputNumbersValue(input);
        formatInputValue = "";
        selectionStart = input.selectionStart; //положение курсора 

        // форматирование номера  
        if (!inputNambersValue ) {
          return input.value = ""
        }

        // удаление в середине строки  
        if (input.value.length != selectionStart) {

          if (e.data && /\D/g.test(e.data)){
            input.value = inputNambersValue;
          }
          return;
        }

        if (["7", "8", "9"].indexOf(inputNambersValue[0]) > -1) {
          // russian phone number
          if (inputNambersValue[0] == 9) {
            inputNambersValue = "7" + inputNambersValue
          }

          let firstSymbols = (inputNambersValue[0] == "8") ? "8" : "+7";
          formatInputValue = firstSymbols + " ";

          if (inputNambersValue.length > 1) {
            formatInputValue += "(" + inputNambersValue.substring(1, 4);
          }

          if(inputNambersValue.length >= 5){
            formatInputValue += ") " + inputNambersValue.substring(4, 7);
          }

          if(inputNambersValue.length >= 8){
            formatInputValue += "-" + inputNambersValue.substring(7, 9);
          }

          if(inputNambersValue.length >= 10){
            formatInputValue += "-" + inputNambersValue.substring(9, 11);
          }

        } else {
        // not russian phone number 
        formatInputValue = "+" + inputNambersValue.substring(0, 16) ;

        }
        input.value = formatInputValue;


  }

  //  нашли все инпуты телефоны 
  let onPhoneKeydown = function(e) {
    let input = e.target;
    if(e.keyCode == 8 && getInputNumbersValue(input).length == 1){
      input.value = "";
    }
  }

  let onPhonePaste = function(e){
    let pasted = e.clipboardData || window.clipboardData
    input = e.target, 
    inputNambersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)){
        input.value = inputNambersValue;
      }
    }
    
  }


    for (i = 0; i < phoneInputs.length; i++ ) {
      let input = phoneInputs[i];
        input.addEventListener('input', onPhoneInput);
        input.addEventListener('keydown', onPhoneKeydown)
        input.addEventListener('paste', onPhonePaste)
    }


});








// отправка на почту 

// const applicantForm = document.querySelector('#form-action')

// function serializeForm(formNode) {
//   const { elements } = formNode

//   const data = new FormData()


//   Array.from(elements)
//     .filter((item) => !!item.name)
//     .forEach((element) => {
//       const { name, value } = element
//       data.append(name, value)
//     })
//     return new FormData(formNode)

//   }


// // // функция отправки 
// function handleFormSubmit(event) {
//   event.preventDefault()
//   serializeForm(applicantForm);
  
// }

// applicantForm.addEventListener('submit', handleFormSubmit)


// async function sendData(data) {
//   return await fetch('/api/apply/', {
//     method: 'POST',
//     headers: {'Content-Type': 'multipart/form-data'},
//     body: data,
//   })
// }

// async function handleFormSubmit(event) {
//   event.preventDefault()

//   const data = serializeForm(event.target)
//   const response = await sendData(data)

// }

// function toggleLoader() {
//   const loader = document.querySelector('#loader')
//   loader.classList.toggle('hiden')
// }

// async function handleFormSubmit(event) {
//   event.preventDefault()
//   const data = serializeForm(event.target)

//   toggleLoader()

//   const response = await sendData(data)

//   toggleLoader()
// }

// function onSuccess(formNote) {
//   alert('Ваша заявка ')
//   formNote.classList.toggle('hidden')
// }


// async function handleFormSubmit(event) {
//   event.preventDefault()
//   const data = serializeForm(event.target)

//   toggleLoader()
//   const { status } = await sendData(data)
//   toggleLoader()

//   if(status === 200) {
//     onSuccess(event.target)
//   }
// }







































