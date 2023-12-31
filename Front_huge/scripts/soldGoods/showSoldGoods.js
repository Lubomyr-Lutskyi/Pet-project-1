import { SERVER } from "../server.js"

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
   div_sum.innerHTML = resp.sum[i] + " шт."

   let div_bottom = document.createElement("div")
   div_bottom.classList.add('grid', "bottom", "poss")

   let div_box = document.createElement('div');
   div_box.classList.add('div_boxes');
   div_box.id = crypto.randomUUID();

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
   btn_img.src = 'https://cdn.iconscout.com/icon/free/png-256/free-gear-3604249-3003892.png';

   div_option.classList.add('right', 'grid')
   btn_set.classList.add('right')
   btn_set.classList.add('btn_set')
   btn_set.classList.add('btnSet')
   btn_img.classList.add('btn_img')
   btn_img.classList.add('grid')

   // === Випадаюче меню ===

   let menu_option = document.createElement('div');
   menu_option.classList.add('dropdown-content');
   menu_option.id = i;

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

   //  Закрити список,якщо був зроблений клік за межою кнопки

   window.onclick = function (event) {
      if (!event.target.matches('.btn_img')) {
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


   btn_set.addEventListener("click", toggleDropdown(i));

} // chickle

//    })
// })

function toggleDropdown(id) {
   return function () {
      const listMenu = document.getElementById(`${id}`);
      listMenu.classList.toggle("show");
   }
};
