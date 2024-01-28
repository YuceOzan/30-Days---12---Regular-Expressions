//1. WRITE A FUNCTION TO GET THE TEN MOST FREQUENT WORDS FROM A STRING

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(string) {
    const wordFrequency = string
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi, '')
      .split(/\s+/)
      .reduce((freq, word) => (freq[word] = (freq[word] || 0) + 1, freq), {});
  
    const resultArray = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({ word, count }));
  
    return resultArray;
  }

  const result = tenMostFrequentWords(paragraph);
  console.log(result);
  
