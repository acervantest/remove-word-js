const removeWordFromSentence = require('./removeWordFromSentence.js')

test('when function invoqued missing parameter, returns null', () => {
    expect(removeWordFromSentence('This is a test', '')).toBe(null);
});

test('when function invoqued missing first parameter, returns null', () => {
    expect(removeWordFromSentence('', 'test')).toBe(null);
});

test('when function invoqued missing second parameter, returns null', () => {
    expect(removeWordFromSentence( 'test' )).toBe(null);
});

test('removes \'test\' from sentence : This is a test', () => {
    expect(removeWordFromSentence('This is a test', 'test')).toBe('This is a ');
});//

test('removes \'test\' from sentence : This test is good', () => {
    expect(removeWordFromSentence('This test is good', 'test')).toBe('This  is good');
});

test('removes \'write\' from sentence ', () => {
    "The programmers can write code that is computer-understandable while Good programmers write code that is understandable by humans."
    expect(removeWordFromSentence('programmers can write code that is computer-understandable while Good programmers write code understandable by humans', 'write'))
    .toBe("programmers can  code that is computer-understandable while Good programmers  code understandable by humans");
});