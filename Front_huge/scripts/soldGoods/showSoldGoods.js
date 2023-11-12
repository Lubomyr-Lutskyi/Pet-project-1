import { SERVER } from "../server.js"

import { out } from "../ui.js"


// fetch(SERVER + "/sold_goods/all_customer").then(function (response) {
// response.json().then(resp => {

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
   div_customer.innerHTML = resp.customer[i]

   let div_phone = document.createElement("div")
   div_phone.innerHTML = resp.phone[i]

   let div_city = document.createElement("div")
   div_city.innerHTML = resp.city[i]

   let div_top = document.createElement("div")
   div_top.classList.add("grid", "top")
   div_top.appendChild(div_customer)
   div_top.appendChild(div_phone)
   div_top.appendChild(div_city)

   let div_goods = document.createElement("div")
   div_goods.innerHTML = resp.goods[i]

   let div_amount = document.createElement("div")
   div_amount.innerHTML = resp.amount[i]

   let div_sum = document.createElement("div")
   div_sum.innerHTML = resp.sum[i]

   let div_bottom = document.createElement("div")
   div_bottom.classList.add("grid", "bottom")
   div_bottom.appendChild(div_goods)
   div_bottom.appendChild(div_amount)
   div_bottom.appendChild(div_sum)


   let article = document.createElement("article")
   article.appendChild(div_top)
   article.appendChild(div_bottom)

   out.appendChild(article)
}


// })
// })


// let res = {
//    'customer': ['Olya', 'Yulia', 'Vlad'],
//    'goods': ['Phone', 'Bread', 'bulka'],
//    'phone': [123, 234, 567]
// };

// for (let i = 0; i < res.customer.length; i++) {
//    let article = document.createElement('article');
//    article.classList.add('article', 'grid');

//    let customer = document.createElement('div');
//    customer.innerHTML = res.customer[i];

//    let goods = document.createElement('div');
//    goods.innerHTML = res.goods[i];

//    let sum = document.createElement('div');
//    sum.innerHTML = '123';

//    let city = document.createElement('div');
//    city.innerHTML = '123';

//    let phone = document.createElement('div');
//    phone.innerHTML = res.phone[i];

//    article.appendChild(phone);
//    article.appendChild(sum);
//    article.appendChild(customer);
//    article.appendChild(city);
//    article.appendChild(goods);

//    out.appendChild(article);
// }

