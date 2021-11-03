const activepage = window.location.pathname;
const navlinks= document.querySelectorAll ('nav a ').
foreach(link => {
    if(link.href.includes('${activepage}' )){
link.classlist.add('active');
    }
})
