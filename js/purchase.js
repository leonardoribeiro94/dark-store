window.onload = function () {
    let urlParams = new URLSearchParams(window.location.search);
    let pathImage = urlParams.get('pathImage');
    let description = urlParams.get('description');

    document.getElementById("buyImage").src = "../" + pathImage;
    document.getElementById("productName").innerHTML = description;
    document.getElementById("productNameTitle").innerHTML = description;
}

function confirmPurchase() {
    let urlParams = new URLSearchParams(window.location.search);
    let description = urlParams.get('description');

    alert("O produto " + description + " foi inserido ao carrinho de compras!")

}