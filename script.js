function filtrar(cat) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (cat === "all" || card.dataset.categoria === cat) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}