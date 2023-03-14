
function removeWordFromSentence( sentence, word ) {
    
    if(sentence === '' || word === '' || !word || !sentence ) return null;

    let stringSentence = sentence;

    let response = stringSentence.replace(new RegExp(word, 'g'), '');

    return response;
}

module.exports = removeWordFromSentence