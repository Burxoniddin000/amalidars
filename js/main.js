let darmod = document.querySelector('.sitx-header__link');
let them = 'light';

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        let ul = document.querySelector(".hero__inner-taxt")
        data.forEach(() => {
            data.forEach((arr) => {
                let li = document.createElement("li");
                li.innerHTML = `
                <li class="hero__link">
                <img class="imge" src="${arr.coatOfArms.png}">
                <div class="hero__text">
                    <h2>${arr.name.common}</h2>
                    <p> <span class="hero__span">Population:</span>${arr.population}</p>
                    <p>
                        <span class="hero__span"> Region: </span>${arr.region}
                    </p>
                    <p> <span class="hero__span"> Capital:</span>${arr.capital}</p>
                </div>
            </li>`
                ul.appendChild(li)

            })
        })
    })


    let elli = document.querySelector(".hero__link")
    darmod.addEventListener('click', () => {
        if (them === "dark") {
            document.body.style.background = "#fff"
            them = 'light';
            elli.style.background=("#fff")
        } else if (them == "light") {
            document.body.style.background = "#212529"
            them = 'dark';
            elli.style.background=("#212529")
        }
    })