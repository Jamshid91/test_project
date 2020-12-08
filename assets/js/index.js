let categories = document.querySelectorAll('.category');
let buttons = document.querySelectorAll(".nav_slider button");
let reviews = document.querySelectorAll(".img_review");
let cards = document.querySelectorAll('.card_list');
let counts = document.querySelectorAll('.count');
let numberGoods = document.querySelector('.number_goods span')
let trendBtns = document.querySelectorAll('.trend_products_btns button')
let newBtns = document.querySelectorAll('.news_products_btns button');
let categoriesMobile = document.querySelector('.categories');
let categoriesLists = document.querySelectorAll('.categories_list');
let categoriesName = document.querySelectorAll('.categories_name');
let menuBurger = document.querySelector('.menu_burger');
let mobileMenuList = document.querySelector('.mobile_menu_list');
let closeMobileMenu = document.querySelector('.close_mobile_menu');

let [left, right] = buttons;

// mobile row

menuBurger.addEventListener('click', () => {
  mobileMenuList.classList.add('show_mobile_menu_list');
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenuList.classList.remove('show_mobile_menu_list');
});

categoriesMobile.addEventListener('click', () => {
  categoriesMobile.parentElement.classList.toggle('anim_categories');
  // console.dir(categoriesMobile.children[1].classList.toggle('anim_rotate'))
});

categoriesLists.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.parentElement.classList.toggle('anim_categories');
  })
});

categoriesName.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.parentElement.classList.toggle('anim_categories')
  })
});



// menu categories
categories.forEach(category => {
    category.addEventListener('mouseover', () => {
        category.children[0].style.backgroundColor = '#fcaf17'
        category.children[0].style.color = '#fff'
        category.children[1].style.display = 'flex'
    })
})

categories.forEach(category => {
    category.addEventListener('mouseout', () => {
        category.children[0].style.backgroundColor = '#fff'
        category.children[0].style.color = '#231f20'
        category.children[1].style.display = 'none'
    })
})



const contries = [
    {category: "Маиший техника воситалари"},
    {category: "Телефон, гаджет, аксессуарлар"},
    {category: "Маиший техника"},
    {category: "Ошхона техникаси"},
    {category: "Спорт анжомлари"},
    {category: "Гўзаллик ва саломатлик"},
    {category: "Авто жиҳозлар"},
    {category: "Барчаси офис, уй ва боғ учун"},
    {category: "Болалар учун ўйинчоқ ва маҳсулотлар"},
]

const showList = (iteam) => {
  const list = document.querySelectorAll(iteam);

  for(let i = 0; i < list.length; i++){
      list[i].addEventListener('click', () => {
          activeList(i)
      })
  }

  function activeList(index) {
      if(list[index].classList.contains('active__list') === true){
          console.log('sfsdsd')
          list[index].classList.remove('active__list');
          list[index].nextElementSibling.classList.remove('active__sublist');

          setTimeout(() => {
              list[index].nextElementSibling.style.display = 'none'
          }, 300)
      }else{
          console.log('dgfhg')
          for(let i = 0; i < list.length; i++){
              list[i].classList.remove('active__list');
              list[i].nextElementSibling.classList.remove('active__sublist');
          }
          list[index].classList.add('active__list');
          list[index].nextElementSibling.style.display = "block";

          setTimeout(() => {
              list[index].nextElementSibling.classList.add('active__sublist')
          }, 10)

      }
  }

  function addCountries (iteam) {
      const listBlock = document.querySelector(iteam)
      for(let i = 0; i < contries.length; i++){
          let div = document.createElement('div');
          div.classList.add('country__list_iteam');
          div.textContent = contries[i].category;
          listBlock.append(div)
          div.addEventListener('click', () => {
            changeCountry(contries[i].cites, div)
          })
      }
  }
  function changeCountry(arr,iteam) {
      iteam.parentElement.previousElementSibling.querySelector('span').textContent = iteam.textContent;
      activeList(0);
      change__all();
      document.querySelector('.country__form_block .err__span').setAttribute('class', 'err__span opacNull');
  }
  addCountries('.country__form_list')
}

showList('.contry__form_btn')

// slider

left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);


let i = 0;
function moveLeft() {
    if (i == reviews.length - 1) {
        reviews[i].style.display = "none";
        i = 0;
        reviews[i].style.display = "block";
    } else {
        reviews[i].style.display = "none";
        reviews[i + 1].style.display = "block";
        i++
    }
}



function moveRight() {
    if (i == 0) {
        reviews[i].style.display = "none";
        i = reviews.length - 1;
        reviews[reviews.length - 1].style.display = "block";

    } else {
        reviews[i].style.display = "none";
        reviews[i - 1].style.display = "block";
        i--;
    }
}


setInterval(function () {
    moveLeft();
}, 2000)

// corusel brends

let nextBrend = document.querySelector('.brend_btns .next');
let prevBrend = document.querySelector('.brend_btns .prev');
let a = 0;

nextBrend.addEventListener('click', moveBrendNext);
prevBrend.addEventListener('click', moveBrendPrev);

function moveBrendNext() {
  let carousel = document.querySelector('.brends_list');
//   carousel.style.left = -130 + 'px'
  a = a- 130;

  if (a < -1170) {
    a = 0;
  }
  carousel.style.left = a + 'px'
};

function moveBrendPrev() {
  let carousel = document.querySelector('.brends_list');
  a = a + 130;
  if (a > 0) {
    a = 0;
  }
  carousel.style.left = a + 'px'
};

setInterval(function () {
    moveBrendNext()
}, 3000)


// cards

cards.forEach(card => {
    card.addEventListener('mouseover', handleOverCard);
    card.addEventListener('mouseout', handleOutCard);
});

function handleOverCard() {
    this.children[2].children[0].style.opacity = '1'
    this.children[2].children[1].style.opacity = '1'
}
 function handleOutCard() {
    this.children[2].children[0].style.opacity = '0'
    this.children[2].children[1].style.opacity = '0'
 }
 
let k = 1;
 counts.forEach(count => {
    count.addEventListener('click', () => {
        let num = count.previousElementSibling;
    // if (num.innerText >= 0) {
        num.innerText = k++
    // }
    
    // numberGoods.innerText = num.innerText
    
    })

 });

//  corusel trend products

let [rightBtn, leftTrend] = trendBtns;
let b = 0;

leftTrend.addEventListener('click', moveTrendNext);
rightBtn.addEventListener('click', moveTrendPrev);

function moveTrendNext() {
  let carousel = document.querySelector('.trend_products .card_items');
  b = b- 257;

  if (b < -1500) {
    b = 0;
  }
  carousel.style.left = b + 'px'
};

function moveTrendPrev() {
  let carousel = document.querySelector('.trend_products .card_items');
  b = b + 257;
  if (b > 0) {
    b = 0;
  }
  carousel.style.left = b + 'px'
  
};

// corusel new products


let [newRightBtn, newLeftTrend] = newBtns;
let c = 0;

newLeftTrend.addEventListener('click', moveNewNext);
newRightBtn.addEventListener('click', moveNewPrev);

function moveNewNext() {
  let carousel = document.querySelector('.news_products .card_items');
  c = c- 257;

  if (c < -1500) {
    c = 0;
  }
  carousel.style.left = c + 'px'
};

function moveNewPrev() {
  let carousel = document.querySelector('.news_products .card_items');
  c = c + 257;
  if (c > 0) {
    c = 0;
  }
  carousel.style.left = c + 'px'
  
};