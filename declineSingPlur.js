/*
    all text fields
*/
// get all inputs for text fields
var getInputs = function () {
    return document.getElementById('declension').getElementsByTagName('input');
};
// loop through and add event listener
for (var ip = 0; ip < getInputs().length; ip++) {
    getInputs().item(ip).addEventListener('keyup', function (evt) {
        var word = selectedWord.getSelectedWord();
        var stem = selectedWord.getStem();
        var declen = this.getAttribute('id');
        var declensions = declen.split('-');
        var sing = declensions[0];
        var thecase = declensions[1];
        if (this.value === stem + noun.end[sing][thecase]) {
            this.style.backgroundColor = 'lightblue';
        }
        else {
            this.style.backgroundColor = 'pink';
        }
    }, false);
}
