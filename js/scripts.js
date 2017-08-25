//Business logic
var totalTop = "" ;

function Pizza(size, toppings, total) {
  this.size = size;
  this.toppings = toppings;
  this.total = function functionName() {
    return this.size + this.toppings;
  }
}

Pizza.prototype.cost = function () {
    return this.size + this.toppings ;
};



//User interface logic

$(document).ready(function() {
  $("#pizzaForm").submit(function () {
    event.preventDefault();
    debugger
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var Top = $(this).val();
    });
    $("input:select[name=size]:selected")
  });
});
