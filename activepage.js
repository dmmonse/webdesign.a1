const activepage = window.location.pathname;
const navlinks= document.querySelectorAll ('nav a ').
forEach(link => {
    if(link.href.includes('${activepage}' )){
link.classlist.add('active');
    }
})
