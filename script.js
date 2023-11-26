const navmenu=document.getElementById('nav_menu'),
navtoggle=document.getElementById('nav-toggle'),
navclose=document.getElementById('nav-close');
/*show menu*/
if(navtoggle)
{
   navtoggle.addEventListener("click",function(){
    navmenu.classList.add('show_menu')
   })
}
if(navclose)
{
  navclose.addEventListener("click",function(){
    navmenu.classList.remove('show_menu')
  })
}

/*ACCORDION SKILLS */
const skillsContent=document.getElementsByClassName('skills_content'),
skillsHeader=document.querySelectorAll('.skill_header');

function toggleskills(){
  let itemclass=this.parentNode.className;
  for(let i=0;i<skillsContent.length;i++)
  {
    skillsContent[i].className='skills_content skills_close';
  }
  if(itemclass==='skills_content skills_close')
  {
    this.parentNode.className='skills_content skills_open';
  }
}
skillsHeader.forEach(function(e)
{
  console.log("hi");
  e.addEventListener('click',toggleskills);
})

/*qualification tabs*/
const tabs=document.querySelectorAll('.qualification'),
tabcontents=document.querySelectorAll('.qualification_content')

tabs.forEach(tab=>{
  tab.addEventListener('click',function(){
    const target=document.querySelector(tab.dataset.target);

    tabcontents.forEach(tabcontent=>{
      tabcontent.classList.remove('.qualification_active')
    })
    target.classList.remove('.qualification_Active');
    tab.forEach(tab=>{
      tab.classList.remove('.qualification_active');
    })
    tab.classList.add('.qualification_active')
  })
})

/*Services modals */
const modalViews=document.querySelectorAll('.services_modal'),
modalbtns=document.querySelectorAll('.services_button'),
modalcloses=document.querySelectorAll('.services_modal-close')

let modal=function(modalclick)
{
  modalViews[modalclick].classList.add('active_modal')
}
modalbtns.forEach((modalbtn,i)=>{
  modalbtn.addEventListener('click',()=>{
    modal(i);
  })
})
modalcloses.forEach((modalclose)=>{
  modalclose.addEventListener('click',()=>{
    modalViews.forEach((modalview)=>{
      modalview.classList.remove('active_modal')
    })
  })
})
// portfolio swiper
// import Swiper from 'swiper-bundle.mjs';
//      import 'swiper-bundle.min.css';
     let swiper = new Swiper('.portfolio_container', {
      cssMode: true,
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      mousewheel: true,
      keyboard: true,
    });
// Dark theme
const themebutton=document.getElementById('theme_button')
const darktheme='dark_theme'
const icontheme='uil-sun'

const selectedtheme=localStorage.getItem('selected_theme');
const selectedIcon=localStorage.getItem('selected_icon');

const getcurrentheme=function(){
  document.body.classList.contains(darktheme)?'dark':'light'
}
const getcurrenticon=function(){
  themebutton.classList.contains(icontheme)?'uil-moon':'uil-sun'
}
if(selectedtheme)
{
  document.body.classList[selectedtheme==='dark'?'add':'remove'](darktheme)
  themebutton.classList[selectedIcon==='uil-moon'?'add':'remove'](icontheme)
}
themebutton.addEventListener('click',function(){
  document.body.classList.toggle(darktheme)
  themebutton.classList.toggle(icontheme)

  //we save the theme and the currenicon that the user chooses
  localStorage.setItem('selected_theme',getcurrentheme())
  localStorage.setItem('selected_icon',getcurrenticon())
})