//1. WRITE A FUNCTION THAT CLEANS TEXT. AFTER CLEANING COUNT THREE MOST FREQUENT WORDS IN THE STRING

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`


function cleanText(string){
    const cleanedText = string
    .replace(/[.,%#@&$;]/gi, '')
    .split(/\s+/)
    .reduce((freq, word) => (freq[word] = (freq[word] || 0) + 1, freq), {});

    const resultArray = Object.entries(cleanedText)
    .sort((a,b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word, count]) => ({word, count}));
    
    return resultArray;

}

console.log(cleanText(sentence))