//Business logic
var totalPrice = 0;

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
Pizza.prototype.price = function (toppings, size) {
  return totalPrice += this.toppings + this.size;
}






//User interface logic

$(document).ready(function() {

  var thePizza = new Pizza(0, 0);
  $("#pizzaForm").submit(function() {
    event.preventDefault();
    $("input:checkbox:checked").each(function() {
      thePizza.toppings +=  parseInt($(this).val());
    });
    $("input:radio[name=size]:checked").each(function(){
    thePizza.size =  parseInt($(this).val());
    console.log(thePizza);
    });
    $('span#total').append('$' + thePizza.price(totalPrice)) ;
  });
});
