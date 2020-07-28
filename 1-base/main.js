// select buttons
const linkBtn1 = document.querySelectorAll('.linkBtn1');
const linkBtn2 = document.querySelectorAll('.linkBtn2');
// add event listenerst
linkBtn1[1].addEventListener('click', redirectProjects);
linkBtn2[0].addEventListener('click', contact);
// function to projects
function redirectProjects(){
    setTimeout(function(){
        window.location.href = "http://maciekto.eu/subpages/projects.html";
    },350);
}
// function contact
function contact(){
    setTimeout(function(){
        window.open("https://www.facebook.com/maciektoto", '_blank');
    },350);
}