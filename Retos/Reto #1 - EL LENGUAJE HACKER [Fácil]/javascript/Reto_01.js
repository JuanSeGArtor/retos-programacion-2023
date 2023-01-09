/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

let naturalLang = prompt("Hola, escribe algo")
naturalLang = naturalLang.toUpperCase()
let hackerLang = ""
const leetLookup = {
    A: "4",
    B: "I3",
    C: "[",
    D: ")",
    E: "3",
    F: "|=",
    G: "&",
    H: "#",
    I: "1",
    J: ",_|",
    K: ">|",
    L: "1",
    M: "nn",
    N: "^/",
    O: "0",
    P: "|*",
    Q: "(_,)",
    R: "I2",
    S: "5",
    T: "7",
    U: "(_)",
    V: "\/",
    W: "\/\/",
    X: "><",
    Y: "j",
    Z: "2",
    1: "I",
    2: "Z",
    3: "E",
    4: "A",
    5: "S",
    6: "G",
    7: "T",
    8: "B",
    9: "P",
    0: "O",
};

for (let i = 0; i < naturalLang.length; i++) {
  let leet = leetLookup[naturalLang[i]];
	if (leet === undefined) {
    leet = "  "
  }
	hackerLang += leet
}

console.log("Lenguaje natural: " + naturalLang)
console.log("Lenguaje hacker: " + hackerLang)
