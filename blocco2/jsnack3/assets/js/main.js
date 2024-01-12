function generateRandomNumber(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const insertInitialNumber = document.getElementById('insertInitialNumber');
const insertFinalNumber = document.getElementById('insertFinalNumber');
const sumOutput = document.getElementById('sumOutput');
const numbersContainer = document.getElementById('numbersContainer');
let divElement;

const calcButton = document.getElementById('calcButton');

let rangeNumbers = [];
let oddPositions = [];
let sum = 0;

calcButton.addEventListener('click', function () {

    if (isNaN(insertInitialNumber.valueAsNumber) || isNaN(insertFinalNumber.valueAsNumber) || insertInitialNumber.valueAsNumber < 0 || insertFinalNumber.valueAsNumber < 0) {

        alert('I numeri non sono validi.');

    } else if (insertFinalNumber.valueAsNumber < insertInitialNumber.valueAsNumber) {

        alert('Il numero finale non può essere minore di quello iniziale.');

    } else if (insertFinalNumber.valueAsNumber === insertInitialNumber.valueAsNumber || (insertFinalNumber.valueAsNumber - insertInitialNumber.valueAsNumber) < 2) {

        alert('I numeri non possono corrispondere e devono avere almeno un intervallo di 2 numeri.');

    } else {

        let divsToDelete = document.querySelectorAll('.box')
        console.log(divsToDelete)

        for (let i = 0; i < divsToDelete.length; i++) {

            divsToDelete[i].remove()
        }

        console.log(divsToDelete);

        for (let i = insertInitialNumber.valueAsNumber; i <= insertFinalNumber.valueAsNumber; i++) {

            rangeNumbers.push(i);

        }

        for (let i = 0; i < rangeNumbers.length; i++) {

            if (i % 2 !== 0) {
                oddPositions.push(rangeNumbers[i]);
            }
        }

        for (let i = 0; i < oddPositions.length; i++) {

            sum += oddPositions[i];
        }

        sumOutput.valueAsNumber = sum;

        for (let i = 0; i < rangeNumbers.length; i++) {

            divElement = document.createElement('div');
            divElement.textContent = rangeNumbers[i];
            divElement.classList.add('box')
            numbersContainer.append(divElement);

            if (i % 2 !== 0) {

                divElement.classList.add('fw-bold', 'fs-3', 'text-center', 'text-danger')
            } else {

                divElement.classList.add('fw-bold', 'fs-3', 'text-center')
            }
        }
    }


    console.log(rangeNumbers);
    console.log(oddPositions);
    console.log(sum);
    rangeNumbers = [];
    oddPositions = [];
    sum = 0;
})

