function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } 
        else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } 
        else {
            item.style.display = 'none';
        }
    });
    updateActiveButton(category);
}
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");
const selectedItemText = document.getElementById("selectedItemName");
document.querySelectorAll('.order-btn').forEach(button => {
    button.onclick = function() {
        const itemName = this.parentElement.querySelector('h3').innerText;
        selectedItemText.innerText = "Ordering: " + itemName;
        modal.style.display = "block";
    }
});
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}
document.getElementById("orderForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you! Your order has been placed successfully.");
    modal.style.display = "none";
    this.reset();
}