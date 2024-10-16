//ES6

const items =
document.querySelectorAll(".accordation-item");

const resetItems =() => {
  items.forEach(
    item => item.classList.remove("active")
  )
};

const handleClick =(element,index) => {
  resetItems();
  element.classList.add("active");
  localStorage.setItem("accordationIndex",index)
};

resetItems();

const activeItem =
items[localStorage.getItem("accordationIndex")];

if (activeItem){
  activeItem.classList.add("active");
} else{
  items[0].classList.add("active");
}