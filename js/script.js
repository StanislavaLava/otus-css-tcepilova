  let modal = document.querySelector('.modal');
    let GetInTouch = document.querySelector('.form-get-in-touch');

    function openForm() {
      modal.classList.add('modal_active');
      GetInTouch.classList.add('form-get-in-touch_active');
      document.body.style.overflowY = 'hidden';
    }

    function closeForm() {
      modal.classList.remove('modal_active');
      GetInTouch.classList.remove('form-get-in-touch_active');
      document.body.style.overflowY = '';
}
    



// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault(); // Отключаем стандартный (сломанный) переход
    
//     const targetId = this.getAttribute('href');
//     const targetElement = document.querySelector(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth', // Плавная прокрутка
//         block: 'start'
//       });
      
//       // Обновляем адрес в строке без "прыжка"
//       history.pushState(null, null, targetId);
//     }
//   });
// });