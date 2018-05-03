function DnaTranscriber () {
    this.translator = {
        'G':'C',
        'C':'G',
        'T':'A',
        'A':'U'
    }
    this.toRna = (strand) => {
        return strand.split("").map(a => this.translator[a]).join("")
    }
    
}


module.export = DnaTranscriber();