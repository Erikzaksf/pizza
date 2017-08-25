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
    $("input:checkbox[name=pizza]:checked").each(function() {
    thePizza.toppings.array = $(this).val();
    console.log(thePizza);
    });

    $("input:radio[name=size]:checked").each(function(){
    thePizza.size = $(this).val();
    });
  });
});
