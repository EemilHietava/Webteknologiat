let searchCount = 0;

function getData() {
    const gif = document.getElementById("gif");
    const counter = document.getElementById("counter");
    const accordion = document.getElementById("accordionExample");

    gif.style.display = "block";
    fetch(`http://numbersapi.com/random/math`)
        .then(function (response) {
            //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
            return response.text(); //huom. tässä response tulee JSON-muodossa
        })
        .then(function (result) {
            gif.style.display = "none";

            searchCount++;
            counter.textContent = searchCount;

            const newAccordionItem = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${searchCount}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${searchCount}" aria-expanded="true" aria-controls="collapse${searchCount}">
                            Haku ${searchCount}
                        </button>
                    </h2>
                    <div id="collapse${searchCount}" class="accordion-collapse collapse show" aria-labelledby="heading${searchCount}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${result}
                        </div>
                    </div>
                </div>
            `;

            accordion.innerHTML += newAccordionItem;
        })
        .catch(function (error) {
            gif.style.display = "none";
            console.error(error);
        });
}