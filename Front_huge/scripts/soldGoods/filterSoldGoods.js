import { SERVER } from "../server.js"

addEventListener("submit", () => {
   fetch(SERVER + "/sold_goods/filter" + "?" + "goods=" + goods_select + "city=" + city_select).then(function (response) {
      response.json().then(resp => {
         console.log(resp)

      })
   })
})