
// I'd like to make our avatar move down slowly as user scrolls down the page, and vice versa
// let position = $(window).scrollTop();

// $(window).scroll(() => {
//   let scroll = $(window).scrollTop();
//   let current = $('#avatarImg').position().top
//   if (scroll > position) {
//     // scrolling down
//     $('#avatarImg').offset({
//       'top': current + 2
//     })
//   } else if (scroll < position) {
//     // scrolling up
//     $('#avatarImg').offset({
//       'top': current - 2
//     })
//   }
//   position = scroll;
// })

// doesn't work very smoothly, so commenting out for future tinkering