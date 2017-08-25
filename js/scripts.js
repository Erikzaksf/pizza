//Business logic


function Pizza(size, toppings, total) {
  this.size = size;
  this.toppings = toppings;
  this.total = function cost() {
    return this.size + this.toppings;
  }
}

//Pizza.prototype.cost = function () {
//    return this.size + this.toppings ;
// };



//User interface logic

$(document).ready(function() {
  var Top = "" ;
  var thePizza = new Pizza(0, 0, 0);
  $("#pizzaForm").submit(function () {
    event.preventDefault();
    debugger
    $("input:checkbox[name=pizza]:checked").each(function() {
    this.toppings = $(this).val();
    });
    console.log(thePizza.topping);
    $("input:radio[name=size]:checked").each(function(){
    this.size = $(this).val();
    });
  });
});
