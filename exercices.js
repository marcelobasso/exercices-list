const GenerateButton = document.getElementById('generate-list');
const InputInfo = document.getElementById('input-info');
const outputContainer = document.querySelector('dl.output-text');
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

GenerateButton.addEventListener('click', () => {
    let list = 0;
    let inputText = InputInfo.value.trim();
    let args = inputText.split(' ');
    let selection = [];
    outputContainer.innerHTML = '';
    try {
        args.forEach(arg => {
            list++;

            if (/[0-9]+-[0-9]+\*?/.test(arg)) {
                let splited = arg.split('-');
                list = splited[0];
                arg = splited[1];
            }

            nExercices = random(6, 2);
            if (/.*\*/.test(arg)) {
                arg = arg.slice(0, -1);
                nExercices = random(14, 7);
            }

            arg = parseInt(arg);
            if (nExercices > arg) nExercices = arg;

            let sequence = Array(arg).fill().map((e, i) => i + 1);
            selection = getRandomSubarray(sequence, nExercices).sort((a, b) => {
                if (a > b) return 1;
                if (b > a) return -1;
                return 0;
            });

            printList(selection, list);
        });
    } catch (e) {
        console.log(e);
        alert('Invalid input!');
    }
});

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function printList(selection, list) {
    outputContainer.innerHTML += `<dt class="col-sm-3">List ${list}</dt>
    <dd class="col-sm-9">${selection.join(', ')}</dd>`;
}
