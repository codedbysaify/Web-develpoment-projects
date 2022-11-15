let card1=document.querySelector('.first');
let card2=document.querySelector('.second');
let card3=document.querySelector('.third');

let pannel=document.querySelector('.pannel');

card1.addEventListener('mouseenter',()=>{
card1.classList.toggle('active');
});

card1.addEventListener('mousleave',()=>{
card1.classList.toggle('active');
});



card2.addEventListener('mouseenter',()=>{
    card2.classList.toggle('active')
})
card2.addEventListener('mouseleave',()=>{
card2.classList.toggle('active');
});


card3.addEventListener('mouseenter',()=>{
    card3.classList.toggle('active')
})
card3.addEventListener('mouseleave',()=>{
card3.classList.toggle('active');
});