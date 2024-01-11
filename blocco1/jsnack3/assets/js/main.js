const sumOutput = document.getElementById('sumOutput');
const insertNumber = document.getElementById('insertNumber');
const calcButton = document.getElementById('calcButton');
let sum = 0

function generateRandomNumber(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

let groupNumbers = []






calcButton.addEventListener('click', function () {

    if (isNaN(insertNumber.valueAsNumber)) {
        alert('Non hai inserito un numero valido')

    } else if (groupNumbers.length === 10) {

        alert('Hai già inserito 10 valori')


    } else if (groupNumbers.length < 10) {

        for (let i = 0; i < groupNumbers.length; i++) {

            if (insertNumber.valueAsNumber === groupNumbers[i]) {
                alert('Il numero è già stato inserito!')
                insertNumber.value = ""
                return;
            }
        }

        groupNumbers.push(insertNumber.valueAsNumber);
        insertNumber.value = ""
        console.log('valore inserito')

        if (groupNumbers.length === 10) {

            console.log('ora ti mostro la soluzione')

            for (let i = 0; i < groupNumbers.length; i++) {
                sum += groupNumbers[i];
            }

            sumOutput.valueAsNumber = sum
            groupNumbers = []
            sum = 0
        }


    }

    console.log(groupNumbers)
    console.log(sum)

})

