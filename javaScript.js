function searchProduct() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}