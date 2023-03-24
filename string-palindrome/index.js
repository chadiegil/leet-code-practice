const s = "A man, a plan, a canal: Panama";
const s2 = "0P";

const string2 = "race a car";
const string3 = "";

function isPalindrome(s) {
  let palindrome = s
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "");
  let rev = palindrome.split("").reverse().join("");
  if (s.length <= 0) return true;
  console.log(rev);
  console.log(palindrome);
  return rev === palindrome;
}

console.log(isPalindrome(s2));
