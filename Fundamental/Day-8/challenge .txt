// Soal 1
function isPalindrome(str) {
    // Hapus semua karakter yang bukan huruf dan ubah ke huruf kecil
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const reverseStr = cleanedStr.split('').reverse().join('');
    // Bandingkan string yang sudah dibersihkan dengan versi terbaliknya
    return cleanedStr === reverseStr
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("react"));

// Soal 2
function apakahAnagram(str1, str2) {
    // Fungsi untuk membersihkan string dari spasi, tanda baca, dan huruf kapital
    function cleanString(str) {
        return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    }

    // Bandingkan string yang sudah dibersihkan
    return cleanString(str1) === cleanString(str2);
}

console.log(apakahAnagram("listen", "silent")); // true
console.log(apakahAnagram("hello", "world"));   // false
console.log(apakahAnagram("Astronomer", "Moon starer")); // true
