const form = document.forms.newForm;
const table = document.querySelector('#table');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const elements = form.elements;
    const [name, lastname, birthday, male, female, city, en, uk, address] = elements;

    const userElem = [name, lastname, birthday, city, address];
    const checkElem = [male, female, en, uk];

    for (const elem of userElem) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.innerText = `${elem.name}: ${elem.value}`;
    }

    for (const elem of checkElem) {
        if (elem.checked === true) {
            const row = table.insertRow();
            const cell = row.insertCell();
            cell.innerText = `${elem.name}: ${elem.nextElementSibling.innerText}`;

        }
    }
    form.style.visibility = "hidden";
});