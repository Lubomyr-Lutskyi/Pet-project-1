import { SERVER } from "../server.js"

import { customer, phone, city, goods, amount, sum, formAction, btn_add } from "../ui.js"

btn_add.addEventListener("click", (e) => {
   e.preventDefault(e)

   fetch(SERVER + formAction, {
      method: "post",
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         customer: customer.value,
         phone: phone.value,
         city: city.value,
         goods: goods.value,
         amount: amount.value,
         sum: sum.value
      })
   })

   customer.value = ""
   phone.value = ""
   city.value = ""
   goods.value = ""
   amount.value = ""
   sum.value = ""
})