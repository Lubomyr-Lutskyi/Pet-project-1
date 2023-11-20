import { SERVER } from "../server.js"
// import { filterInp } from "../ui"

// fetch(SERVER + "/sold_goods/all_customer").then(function (response) {
//    response.json().then(resp => {

let resp = {
   'customer': ['Оля', 'Влад', 'Олексій', 'Оля', 'Влад', 'Олексій'],
   'goods': ['Телефон', 'Ноутбук', 'Навушники'],
   'phone': ['097 777 77 77', '098 888 88 88', '099 999 99 99', '097 777 77 77', '098 888 88 88', '099 999 99 99'],
   'city': ['Київ', 'Умань', 'Черкаси', 'Київ', 'Умань', 'Черкаси'],
   'amount': ['100 грн', '200 грн', '300 грн'],
   'sum': ['2', '3', '4']
};

for (let i = 0; i < resp.customer.length; i++) {

   // === Block Time ===

   let div_time = document.createElement("div");
   div_time.classList.add('div_time')
   div_time.innerHTML = '14.11.2023';


   let div_customer = document.createElement("div")
   div_customer.innerHTML = resp.customer[i]

   let div_phone = document.createElement("div")
   div_phone.innerHTML = resp.phone[i]

   let div_city = document.createElement("div")
   div_city.innerHTML = resp.city[i]

   let div_top = document.createElement("div")
   div_top.classList.add('grid', "top", "poss")

   let div_goods = document.createElement("div")
   div_goods.innerHTML = resp.goods[i]

   let div_amount = document.createElement("div")
   div_amount.innerHTML = resp.amount[i]

   let div_sum = document.createElement("div")
   div_sum.innerHTML = resp.sum[i]

   let div_bottom = document.createElement("div")
   div_bottom.classList.add('grid', "bottom", "poss")

   let div_box = document.createElement('div');
   div_box.classList.add('div_boxes');

   let article = document.createElement("article")

   div_box.appendChild(div_time)
   div_box.appendChild(div_top);
   div_box.appendChild(div_bottom);


   div_top.appendChild(div_customer)
   div_top.appendChild(div_phone)
   div_top.appendChild(div_city)
   div_bottom.appendChild(div_goods)
   div_bottom.appendChild(div_amount)
   div_bottom.appendChild(div_sum)
   article.appendChild(div_box)

   out.appendChild(article)

   // === Кнопка налаштування ===

   let div_option = document.createElement('div');
   let btn_set = document.createElement('button');
   let btn_img = document.createElement('img');
   btn_img.src = '/Front_huge/img/Gear-icon.svg';

   div_option.classList.add('right', 'grid')
   btn_set.classList.add('right')
   btn_set.classList.add('btn_set')
   btn_img.classList.add('btn_img')
   btn_img.classList.add('grid')

   // === Випадаюче меню ===

   let menu_option = document.createElement('div');
   menu_option.classList.add('dropdown-content');

   div_option.classList.add('dropdown');

   let menu_a = document.createElement('a');
   menu_a.innerHTML = 'Редактировать';
   menu_a.href = '#';

   let menu_a2 = document.createElement('a');
   menu_a2.innerHTML = 'Удалить';
   menu_a2.href = '#';


   btn_set.appendChild(btn_img);
   div_option.appendChild(btn_set);
   article.appendChild(div_option);

   menu_option.appendChild(menu_a);
   menu_option.appendChild(menu_a2);
   div_option.appendChild(menu_option)


   btn_set.addEventListener("click", myFunc);

   //  Закрити список,якщо був зроблений клік за межою кнопки

   // window.onclick = function (event) {
   //    if (!event.target.matches('.btn_set')) {
   //       var dropdowns = document.getElementsByClassName("dropdown-content");
   //       var i;
   //       for (i = 0; i < dropdowns.length; i++) {
   //          var openDropdown = dropdowns[i];
   //          if (openDropdown.classList.contains('show')) {
   //             openDropdown.classList.remove('show');
   //          }
   //       }
   //    }
   // }
} // chickle

//    })
// })

function myFunc() {
   document.querySelector('.dropdown-content').classList.toggle("show");
};



//  === Block Filter ===

window.onload = FilterCity("#inputCity", ".ull li")
FilterCity("#inputName", ".ull-name li")
FilterCity("#inputGoods", ".ull-goods li")
function FilterCity(index, clas) {
   let inpFilter = document.querySelector(index)

   inpFilter.oninput = function () {
      let value = this.value.trim();
      let listt = document.querySelectorAll(clas)

      if (value) {
         listt.forEach(elem => {
            if (elem.innerText.search(value) == -1) {
               elem.classList.add('hide')
            }
         })
      } else {
         listt.forEach(elem => {
            elem.classList.remove('hide')
         })
      }
   }

}










