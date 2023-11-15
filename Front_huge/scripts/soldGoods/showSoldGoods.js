import { SERVER } from "../server.js"

import { btn_menu } from "../ui.js";
import { dropdow } from "../ui.js";

// import {btn} from "../soldGoods/btn.js"






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



   let div_customer = document.createElement("div")
   div_customer.innerHTML = 'resp.customer[i]'

   let div_phone = document.createElement("div")
   div_phone.innerHTML = 'resp.phone[i]'

   let div_city = document.createElement("div")
   div_city.innerHTML = 'resp.city[i]'

   let div_top = document.createElement("div")
   div_top.classList.add('grid', "top", "poss")

   let div_time = document.createElement("div");
   div_time.innerHTML = '14.11.2023';

   // div_top.appendChild(div_time)
   // div_top.appendChild(dropdow); // btn

   let div_goods = document.createElement("div")
   div_goods.innerHTML = 'resp.goods[i]'

   let div_amount = document.createElement("div")
   div_amount.innerHTML = 'resp.amount[i]'

   let div_sum = document.createElement("div")
   div_sum.innerHTML = 'resp.sum[i]'

   let div_bottom = document.createElement("div")
   div_bottom.classList.add('grid', "bottom", "poss")

   let div_box = document.createElement('div');
   div_box.classList.add('div_boxes');

   div_box.appendChild(div_top);
   div_box.appendChild(div_bottom);


   let article = document.createElement("article")

   // article.classList.add('grid')

   div_top.appendChild(div_customer)
   div_top.appendChild(div_phone)
   div_top.appendChild(div_city)
   div_bottom.appendChild(div_goods)
   div_bottom.appendChild(div_amount)
   div_bottom.appendChild(div_sum)
   // article.appendChild(div_top)
   // article.appendChild(div_bottom)
   article.appendChild(div_box)


   out.appendChild(article)

   let div_option = document.createElement('div');
   // div_option.innerHTML = 'run';
   let btn_set = document.createElement('button');
   let btn_img = document.createElement('img');
   btn_img.src = '/Front_huge/img/Gear-icon.svg';

   div_option.classList.add('right', 'grid')
   btn_set.classList.add('right')
   btn_set.classList.add('btn_set')
   // btn_set.classList.add('btn-menu')
   btn_img.classList.add('btn_img')
   btn_img.classList.add('grid')

   btn_set.appendChild(btn_img);
   div_option.appendChild(btn_set);
   article.appendChild(div_option);
} // chickle

//    })
// })





// let menu_option = document.createElement('div')
// let menu_link = document.createElement('a')
// menu_link.href = '#1';

// div_option.innerHTML = btn_set;
// article.append(menu_link);

// btn_set.appendChild(menu_link);



//  Закрити список,якщо був зроблений клік за межою кнопки

// function myFunc() {
//    document.getElementById("myDropdown").classList.toggle("show");
// };

// btn_menu.addEventListener("click", myFunc);
// window.onclick = function (event) {
//    if (!event.target.matches('.btn-menu')) {
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