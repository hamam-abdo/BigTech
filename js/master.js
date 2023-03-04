let icon = document.querySelector("header i")
icon.addEventListener("click", () => {
  document.body.classList.add("click")
  document.querySelector(".mobile").classList.add("click")
  let bak = document.querySelector(".mobile .head i")
  bak.classList.add("rotate")
  document.querySelector(".ovrflow").style.display = "block"
  bak.addEventListener("click", () => {
    bak.classList.remove("rotate")
    document.querySelector(".mobile").classList.remove("click")
    document.querySelector(".ovrflow").style.display = "none"
    document.body.classList.remove("click")
  })
})
let navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  let a3 = this.scrollY;
  let a = navbar.scrollHeight;

  if (a3 > a) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

let teim = document.querySelector(".time .Second")
let teim_2 = document.querySelector(".time .Minute")
let teim_3 = document.querySelector(".time .Hour")


let i = setInterval(() => {
  teim.innerHTML--

  if (teim.innerHTML === "0") {
    if (teim_2.innerHTML > "0" && teim_2.innerHTML !== "00") {
      teim_2.innerHTML--
      teim.innerHTML = 60
      if (teim_2.innerHTML === "0") {
        if (teim_3.innerHTML > "0" && teim_3.innerHTML !== "00") {
          teim_3.innerHTML--
          teim_2.innerHTML = 60
        }
      }
    }
  }
  if (teim_3.innerHTML === "0") {
    teim_3.innerHTML = "00"
  }
  if (teim_2.innerHTML === "0") {
    teim_2.innerHTML = "00"
  }
  if (teim.innerHTML === "0") {
    teim.innerHTML = "00"
    clearInterval(i)
  }

}, 1000)


var swiper = new Swiper(".on", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  speed: 500,
  autoplay: {
    disableOnInteraction: false,
  },

});


let sales = document.querySelectorAll(".cot-sales .box li")

sales.forEach((li) => {
  li.addEventListener("click", (e) => {
    sales.forEach((i) => {
      i.classList.remove("actve")
    })
    e.currentTarget.classList.add("actve")
  })
})

document.querySelector(".sr-1").onclick = (e => {
  document.querySelector(".sr").classList.remove("show")
  document.querySelector(".sr h1").innerHTML = "1 CNL = 0.0863 BTC"
  setTimeout(() => {
    document.querySelector(".sr").classList.add("show")
  })

})
document.querySelector(".sr-2").onclick = (e => {
  document.querySelector(".sr").classList.remove("show")
  document.querySelector(".sr h1").innerHTML = "2 CNL = 0.0967 BTC"
  setTimeout(() => {
    document.querySelector(".sr").classList.add("show")
  })

})

document.querySelectorAll("form [placeholder]").forEach(e => {
  e.addEventListener("focus", (e) => {
    e.currentTarget.setAttribute("data", e.currentTarget.getAttribute("placeholder"))
    e.currentTarget.setAttribute("placeholder", "")
  })
  e.addEventListener("blur", (e) => {

    e.currentTarget.setAttribute("placeholder", e.currentTarget.getAttribute("data"))
    e.currentTarget.setAttribute("data", "")
  })
})

document.querySelector("footer .bar-1 ").onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}

