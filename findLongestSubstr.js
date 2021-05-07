// 10. Write a function to find longest substring in a given a string withoutrepeating characters except space
// character. If there are several,return the last one. Considerthat all letters are lowercase.

function findLongestSubstr(str) {
  let countOfLetter = 0;
  let res = [];

  for (let i = 0; i < str.length; i += 1) {
    const currentActiveLetter = str[i];
    let longestSubstring = currentActiveLetter;

    for (let j = i + 1; j < str.length; j += 1) {
      const nextLetter = str[j];
      if (currentActiveLetter === nextLetter) {
        break;
      } else {
        countOfLettersOfLetter += 1;
        longestSubstring += nextLetter;
      }
    }

    res.push(longestSubstring);
  }

  console.log(res);
}

findLongestSubstr(
  'there are no two words in the english language more harmful than "good job"'
);
