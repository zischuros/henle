// where selected word will be displayed --- the mid-div between
// the vocab list and the fields to enter declensions
var wordSelected = document.getElementById('wordSelected');

function Selection(word) {
    this.word = word;
    this.setSelectedWord = function (w) {
        this.word = w;
    }
    this.getSelectedWord = function () {
        return this.word;
    }
    this.getStem = function () {
        return this.word.substr(0, this.word.length - 1);
    }
}
var selectedWord = new Selection('');

function populate(noun, makeword) {
    var words = [];
    for (w in noun.stem) {
        var word = new makeword(noun.stem[w], noun.end.sing.nom);
        words.push(word.getWord());
    }
    return words;
}
var wlist = populate(noun, MakeWord);
// populate form
// get form handle
var createInput = function (value) {
    var vocabList = document.getElementById('vocabList');
    var textNode = document.createTextNode(value);
    var label = document.createElement('label');
    label.setAttribute('for', value);
    var input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'vocabWords');
    input.setAttribute('value', value);
    label.appendChild(textNode);
    label.appendChild(input);
    vocabList.appendChild(label);
    return input;
};
// not sure accessible but need to clear out selection:
function clearEntries() {
    console.log('clearEntries() function');
    for (var ip = 0; ip < getInputs().length; ip++) {
        getInputs().item(ip).value = null;
        getInputs().item(ip).style.backgroundColor = 'white';
    }
}
// use wlist to make form fields
// tester to verify proper input fields
wlist.forEach(function (w) {
    //    console.log(w);
    createInput(w).addEventListener('click', function (evt) {
        wordSelected.innerHTML = this.value;
        selectedWord.setSelectedWord(this.value);
        clearEntries();
    });
});
