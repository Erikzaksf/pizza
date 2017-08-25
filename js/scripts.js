//Business logic


function Pizza(size, toppings, total) {
  this.size = size;
  this.toppings = toppings;
  this.total = total;
}

Pizza.prototype.cost = function () {
    return this.size =+ this.toppings = this.total
};



//User interface logic

$(document).ready(function() {
  $("#pizzaForm").submit(function () {
    
  })
})
