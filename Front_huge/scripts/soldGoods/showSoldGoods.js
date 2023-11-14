import { SERVER } from "../server.js"

import { btn_menu } from "../ui.js";
import { btn_done } from "../ui.js";
import { btn_exit } from "../ui.js";
import { dropdow } from "../ui.js";



function myFunc() {
   document.getElementById("myDropdown").classList.toggle("show");
};
btn_menu.addEventListener("click", myFunc);

//  Закрити список,якщо був зроблений клік за межою кнопки
window.onclick = function (event) {
   if (!event.target.matches('.btn-menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}

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
   div_top.classList.add("grid", "top")
   div_top.appendChild(div_customer)
   div_top.appendChild(div_phone)
   div_top.appendChild(div_city)

   let div_goods = document.createElement("div")
   div_goods.innerHTML = 'resp.goods[i]'

   let div_amount = document.createElement("div")
   div_amount.innerHTML = 'resp.amount[i]'

   let div_sum = document.createElement("div")
   div_sum.innerHTML = 'resp.sum[i]'

   let div_bottom = document.createElement("div")
   div_bottom.classList.add("grid", "bottom")
   div_bottom.appendChild(div_goods)
   div_bottom.appendChild(div_amount)
   div_bottom.appendChild(div_sum)

   div_top.appendChild(dropdow);
   div_bottom.appendChild(btn_exit)
   div_bottom.appendChild(btn_done)

   let article = document.createElement("article")
   article.appendChild(div_top)
   article.appendChild(div_bottom)

   out.appendChild(article)
} // chickle

//    })
// })

