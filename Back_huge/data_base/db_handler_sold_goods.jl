using CSV
using DataFrames

##########################################################################################
##########################################################################################
function read_db()
   return CSV.read("Back_huge/data_base/db_huge.csv", DataFrame)
end


function sold_goods_all_customer_handler()
   df = read_db()
   return Dict(:customer => df[:, :customer], :goods => df[:, :goods], :phone => df[:, :phone], :city => df[:, :city], :amount => df[:, :amount], :sum => df[:, :sum])
end


function sold_goods_select_by_city_handler()
   df = read_db()
   return unique!(sort(df[:, :city]))
end
function sold_goods_select_by_goods_handler()
   df = read_db()
   return unique!(sort(df[:, :goods]))
end
function sold_goods_select_by_customer_handler()
   df = read_db()
   return unique!(sort(df[:, :customer]))
end


function sold_goods_filter_handler(req)
   df = read_db()
   customer = get(req, "customer", "")
   goods = get(req, "goods", "")
   city = get(req, "city", "")

   if !isempty(customer) && !isempty(goods) && !isempty(city)
      data = filter!([:customer, :goods, :city] => (x, y, z) -> x === customer && y === goods && z === city, df)
      return Dict(:customer => data[:, :customer], :phone => data[:, :phone], :city => data[:, :city], :goods => data[:, :goods], :amount => data[:, :amount], :sum => data[:, :sum])
   elseif !isempty(customer)
      data = filter!(:customer => x -> x === customer, df)
      return Dict(:customer => data[:, :customer], :phone => data[:, :phone], :city => data[:, :city], :goods => data[:, :goods], :amount => data[:, :amount], :sum => data[:, :sum])
   elseif !isempty(goods)
      data = filter!(:goods => x -> x === goods, df)
      return Dict(:customer => data[:, :customer], :phone => data[:, :phone], :city => data[:, :city], :goods => data[:, :goods], :amount => data[:, :amount], :sum => data[:, :sum])
   elseif !isempty(city)
      data = filter!(:city => x -> x === city, df)
      return Dict(:customer => data[:, :customer], :phone => data[:, :phone], :city => data[:, :city], :goods => data[:, :goods], :amount => data[:, :amount], :sum => data[:, :sum])
   end


end

function sold_goods_add_sold_handler(req)
   data = json(req)

   df = read_db()
   push!(df, Dict(:customer => data.customer, :phone => data.phone, :city => data.city, :goods => data.goods, :amount => data.amount, :sum => data.sum))
   CSV.write("Back_huge/data_base/db_huge.csv", df)
end