//ES6

const items =
document.querySelectorAll(".accordation-item");

const resetItems =() => {
  items.forEach(
    item => item.classList.remove("active")
  )
};