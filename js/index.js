const dark_btn = document.getElementById('darkBtn');

dark_btn.addEventListener('click',()=> {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme','light');
    }
})