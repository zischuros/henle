var noun = {
    stem: {
        terra: 'terr'
        , gloria: 'glori'
        , maria: 'mari'
        , victoria: 'victori'
        , silva: 'silv'
    }
    , end: {
        sing: {
            nom: 'a'
            , gen: 'ae'
            , dat: 'ae'
            , acc: 'am'
            , abl: 'a'
        }
        , plur: {
            nom: 'ae'
            , gen: 'arum'
            , dat: 'is'
            , acc: 'as'
            , abl: 'is'
        }
    }
}

function MakeWord(stem, end) {
    this.stem = stem;
    this.end = end;
    this.getWord = function () {
        return this.stem + this.end;
    }
}
