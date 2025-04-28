function updatePrice() {
    const pizzaSize = parseFloat(document.getElementById("pizza-size").value);

    const toppings = document.querySelectorAll(".topping:checked");
    const toppingsPrice = Array.from(toppings).reduce((total, topping) => {
        return total + parseFloat(topping.value);
    }, 0);

    const totalPrice = pizzaSize + toppingsPrice;

    document.getElementById("total-price").value = `${totalPrice}€`;
}
function resetSelections() {
    document.getElementById("pizza-size").value = "6";

    const toppings = document.querySelectorAll(".topping");
    toppings.forEach((topping) => {
        topping.checked = false;
    });

    document.getElementById("total-price").value = "0";
}