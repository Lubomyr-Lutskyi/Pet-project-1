using HTTP
using Oxygen

include("../data_base/db_handler_sold_goods.jl")
##########################################################################################
##########################################################################################

@get "/sold_goods/all_customer" function ()
   return sold_goods_all_customer_handler()
end


@get "/sold_goods/select_by_city" function () # возврашает список городов в select html
   return sold_goods_select_by_city_handler()
end
@get "/sold_goods/select_by_goods" function () # возврашает список товаров в select html
   return sold_goods_select_by_goods_handler()
end
@get "/sold_goods/select_by_customer" function () # возврашает список товаров в select html
   return sold_goods_select_by_customer_handler()
end


@get "/sold_goods/filter" function (req::HTTP.Request) # выводит отфильтрованный список по CUSTOMER и GOODS
   return sold_goods_filter_handler(queryparams(req))
end


@post "/sold_goods/add_sold" function (req) # добавляет продажу в БД
   sold_goods_add_sold_handler(req)
end

##########################################################################################
##########################################################################################
serve()