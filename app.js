// your code here!
function getWords(text){
    return text.toLowerCase().split(/[ ,()\n!.";:-]+/).filter(Boolean).sort();
}
$(function(){
    $('.js-form').submit(function(event){
        event.preventDefault();
        let words = getWords($('#user-text').val());
        let collectionWord = {};
        for (var i = 0; i < words.length; i++) {
            if (words[i] in collectionWord ) {
                collectionWord[words[i]]++;
            }
            else {
                collectionWord[words[i]]=1;
            }
        }
        let countUniqueWords = Object.keys(collectionWord).filter(function(key){
            return collectionWord[key]===1;
        });
        let averageLength = Object.keys(collectionWord).reduce(function(accumulator , key){
            return typeof(accumulator)==="string"?accumulator.length+key.length:accumulator+key.length;
        });
        averageLength = averageLength/Object.keys(collectionWord).length;

        $('dl').removeClass('hidden');
        $('.js-total-words').text(words.length);
        $('.js-unique-words').text(countUniqueWords.length);
        $('.js-average-length').text(averageLength);

    });
});