let darmod = document.querySelector('.sitx-header__link');
let them = 'light';
let ul = document.querySelector(".hero__inner-taxt")
let elinput = document.querySelector('#input')
let elli = document.querySelector(".hero__link")


fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        radom(data)
    })


function radom(array) {
    ul.textContent = ""
    array.forEach((arr) => {
        let li = document.createElement("li");
        li.className = "bg-light"
        li.id = "hero__link"
        li.innerHTML = `
        <img class="imge" src="${arr.flags.png}">
        <div class="hero__text">
            <h2 id="name2">${arr.name.common}</h2>
            <p> <span class="hero__span">Population:</span>${arr.population}</p>
            <p>
                <span class="hero__span"> Region: </span>${arr.region}
            </p>
            <p> <span class="hero__span"> Capital:</span>${arr.capital}</p>
            <a href="${arr.maps.googleMaps}">maps</a>
        </div>`
        ul.appendChild(li)

        darmod.addEventListener('click', () => {
            if (them === "dark") {
                them = 'light';
                li.className = "bg-dark"

            } else if (them == "light") {
                them = 'dark';
                li.className = "bg-light"

            }
        })
    })

}
let erro = document.querySelector('.erro')

elinput.addEventListener('input', () => {
    fetch('https://restcountries.com/v3.1/name/' + elinput.value)
        .then((res) => res.json())
        .then((data) => {

            radom(data)
        })
})
let header = document.querySelector(".sitx-header")
let link = document.querySelector(".link")
let model = document.querySelector(".sitx-header__moder")
let cars = document.querySelector("#cars")
let sun = document.querySelector("#sun")
let mon = document.querySelector("#mon")


cars.addEventListener("change", () => {
    if (cars.value == 'All') {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                radom(data)
            })
    }else {
        fetch('https://restcountries.com/v3.1/region/' + cars.value)
            .then((res) => res.json())
            .then((data) => {
                radom(data)
            })
    }
})

darmod.addEventListener('click', () => {
    if (them === "dark") {
        document.body.style.background = "#fff"
        them = 'light';
        header.style.background = ("#fff")
        elinput.style.background = ("#fff")
        ul.style.background = ("#fff")
        elinput.style.color = ("#000")
        elinput.style.border = ("2px solid none")
        cars.style.background = ("#fff")
        cars.style.color = ("#000")
        link.style.color = ("#000")
        model.style.color = ("#000")
        sun.style.display = ("none")
        mon.style.display = ("block")

    } else if (them == "light") {
        document.body.style.background = "#212529"
        them = 'dark';
        elinput.style.background = ("#212529")
        ul.style.background = ("#212529")
        elinput.style.color = ("#fff")
        cars.style.background = ("#212529")
        elinput.style.border = ("2px solid #fff")
        cars.style.color = ("#fff")
        header.style.background = ("#212529")
        link.style.color = ("#fff")
        model.style.color = ("#fff")
        mon.style.display = ("none")
        sun.style.display = ("block")
    }
})

