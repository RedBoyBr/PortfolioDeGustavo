function openNav()
{
    document.getElementById("nav").style.width = "250px";

    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav()
{
    document.getElementById("nav").style.width = "0";

    document.getElementById("main").style.marginLeft = "0";
}

let currentSlide = 0;

function moveSlide(direction)
{
    const track = document.getElementById("carouselTrack");

    const slides = document.querySelectorAll(".project-card");

    let visibleSlides = 3;

    if(window.innerWidth <= 600)
    {
        visibleSlides = 1;
    }

    else if(window.innerWidth <= 900)
    {
        visibleSlides = 2;
    }

    const maxSlide = slides.length - visibleSlides;

    currentSlide += direction;

    if(currentSlide < 0)
    {
        currentSlide = maxSlide;
    }

    if(currentSlide > maxSlide)
    {
        currentSlide = 0;
    }

    track.style.transform =
    `translateX(-${currentSlide * (100 / visibleSlides)}%)`;
}

function openPopup(title, description)
{
    document.getElementById("popupTitle").innerText = title;

    document.getElementById("popupDescription").innerText = description;

    document.getElementById("popupOverlay").classList.add("show");
}

function closePopup()
{
    document.getElementById("popupOverlay").classList.remove("show");
}

document.getElementById("popupOverlay")
.addEventListener("click", function(event)
{
    if(event.target === this)
    {
        closePopup();
    }
});