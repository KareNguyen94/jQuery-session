// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

$('button').click( function(e){
  e.preventDefault();
})

$('#clear-btn').click(function(){
 $('input').val('');
})

// var all = $('.phone')[0].value = $('.phone')[0].innerText
// var all = $('.phone')[0].innerText + $('.phone')[1].innerText + $('.phone')[2].innerText


$('input').on('click', function() {
  $('.phone1').value = $('.phone1').innerHTML
  console.log($('.phone1').value)
localStorage.setItem('name', $('#name').val());
// localStorage.setItem('phone', JSON.stringify(all));
localStorage.setItem('email', $('#email').val());
})

console.log($('p').text())
