const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
/*Pick up elements with the 'trigger' class*/
const triggers = document.getElementsByClassName('trigger');
/*Put those trigger elements into an array*/
const triggerArray = Array.from(triggers).entries();
/*Pick up elements with the 'modal' class*/
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('btn-close');

/*Put each instance of trigger into a corresponding modal*/
for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('show-modal');
  }
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
}

burger.addEventListener('click', function() {
  menu.classList.toggle('menu-active');

});

