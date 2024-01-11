const insertNumber = document.getElementById('insertNumber');
const numbersRangeContainer = document.getElementById('numbersRangeContainer');
const numbersCubesContainer = document.getElementById('numbersCubesContainer');
const calcButton = document.getElementById('calcButton');

let numebersArray = [];
let CubesArray = [];
let numberElement, cubeElement;

calcButton.addEventListener('click', function () {

    let divsToDelete = document.querySelectorAll('.box')
    console.log(divsToDelete)

    for (let i = 0; i < divsToDelete.length; i++) {

        divsToDelete[i].remove()
    }

    for (let i = 0; i <= insertNumber.valueAsNumber; i++) {

        numebersArray.push(i);
        CubesArray.push(numebersArray[i] ** 3)

        numberElement = document.createElement('div')
        numberElement.classList.add('text-center', 'fs-3', 'fw-bold', 'box')
        numberElement.textContent = numebersArray[i];
        numbersRangeContainer.append(numberElement)

        cubeElement = document.createElement('div')
        cubeElement.classList.add('text-center', 'fs-3', 'fw-bold', 'box')
        cubeElement.textContent = CubesArray[i];
        numbersCubesContainer.append(cubeElement)
    }

    console.log(numebersArray);
    console.log(CubesArray);
    numebersArray = [];
    CubesArray = [];

})


