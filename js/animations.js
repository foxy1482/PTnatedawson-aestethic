const headerOCbutton = document.querySelector(".header__ocbutton");
const inicioText = document.querySelector(".inicio__text");
const planes = document.querySelector(".sector_planes")

/* FUNCIONES */

const closeNav = ()=>
    {
        
        const headerNavWrapper = document.querySelector(".header__nav-wrapper");
        const headerNav = document.querySelector(".header__nav");
        
        headerOCbutton.addEventListener("click",()=>
        {
            if (headerNav.classList.contains("oculto"))
                {
                    headerNavWrapper.classList.remove("fuera");
                    headerNav.classList.remove("oculto");
                    headerNavWrapper.classList.remove("oculto");
                    unanimateNav(headerNav,headerNavWrapper);
            } else
            {
                headerNavWrapper.classList.add("fuera");
                headerNav.classList.add("oculto");
                headerNavWrapper.classList.add("oculto");
                animateNav();
            }
        })
}

const removeBlur = ()=>
{
    setTimeout(()=>
    {
        inicioText.classList.remove("blur");
        document.querySelector(".inicio__button").classList.remove("blur");
    },500)
}

const loadHref = ()=>
{
    href = "https://messenger.com";
    for (i = 0; i < 3; i++)
    {
        plan = planes.children[i];
        planBoton = plan.childNodes[9];
        planBoton.href = href;
    }
}

const animateNav = ()=>
{
    const nav = document.querySelector(".header__nav.oculto");
    const navWrapper = document.querySelector(".header__nav-wrapper");
    navWrapper.classList.add("fuera");
    nav.style.margin = "0";
    setTimeout(()=>
        {
            nav.style.transition = "margin .2s";
            navWrapper.style.transition = "opacity .16s";
            navWrapper.style.opacity = "0";
        },600)
}
const unanimateNav = (headerNav,headerNavWrapper)=>
{
    headerNavWrapper.removeAttribute("style");
    headerNav.removeAttribute("style");
}

const transitionVideo = ()=>
{
    const videos = document.querySelectorAll(".inicio__video");
    let indice = 0;
    setInterval(()=>
    {
        videos[indice].classList.remove("activo");
        indice = (indice + 1) % videos.length;
        videos[indice].classList.add("activo");
    },8000)
}

/* EJECUCIONES */
transitionVideo();
closeNav();
removeBlur();
loadHref();