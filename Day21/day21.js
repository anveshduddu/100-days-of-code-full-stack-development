const toggle = document.querySelector('.toggle');

toggle.addEventListener('click',()=>{
    const sharebtn = document.querySelector('.share');
    sharebtn.classList.toggle('active');
})
