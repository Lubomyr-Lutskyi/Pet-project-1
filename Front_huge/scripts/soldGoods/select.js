import { SERVER } from "../server.js"

fetch(SERVER + "/sold_goods/select_by_city").then(function (response) {
   response.json().then(resp => {
      for (let i = 0; i < resp.length; i++) {
         let option = document.createElement("option")
         option.value = resp[i]
         option.innerHTML = resp[i]

         document.querySelector("#select_by_city").appendChild(option)
      }
   })
})


fetch(SERVER + "/sold_goods/select_by_goods").then(function (response) {
   response.json().then(resp => {
      for (let i = 0; i < resp.length; i++) {
         let option = document.createElement("option")
         option.value = resp[i]
         option.innerHTML = resp[i]

         document.querySelector("#select_by_goods").appendChild(option)
      }
   })
})

fetch(SERVER + "/sold_goods/select_by_customer").then(function (response) {
   response.json().then(resp => {
      for (let i = 0; i < resp.length; i++) {
         let option = document.createElement("option")
         option.value = resp[i]
         option.innerHTML = resp[i]

         document.querySelector("#select_by_customer").appendChild(option)
      }
   })
})