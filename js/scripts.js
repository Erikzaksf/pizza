//Business logic


function Pizza(size, toppings, total) {
  this.size = size;
  this.toppings = toppings;
  this.total = function cost() {
    return this.size + this.toppings;
  }
}
  var thePizza = new Pizza(0, [0], 0);
//Pizza.prototype.cost = function () {
//    return this.size + this.toppings ;
// };



//User interface logic

$(document).ready(function() {
  var Top = "" ;
//var thePizza = new Pizza(0, [0], 0);
  $("#pizzaForm").submit(function () {
    event.preventDefault();
    debugger
    $("input:checkbox[name=pepp]:checked").each(function() {
    thePizza.toppings + $(this).val();
    });
    $("input:checkbox[name=mush]:checked").each(function() {
    thePizza.toppings + $(this).val();
    });
    $("input:checkbox[name=onion]:checked").each(function() {
    thePizza.toppings + $(this).val();
    });
    $("input:checkbox[name=cheese]:checked").each(function() {
    thePizza.toppings + $(this).val();
    });

    $("input:radio[name=size]:checked").each(function(){
    thePizza.size = $(this).val();
    console.log(thePizza);
    });
  });
});
