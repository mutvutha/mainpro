// Character to number mapping
const charToNum = {
    'A': '7 3 9 1 4', 'B': '2 5 8 0 6', 'C': '9 1 4 7 3', 'D': '6 2 8 0 5', 
    'E': '1 9 7 4 2', 'F': '5 0 8 3 6', 'G': '7 2 9 5 4', 'H': '6 3 0 1 8', 
    'I': '9 4 7 2 6', 'J': '3 8 5 1 0', 'K': '2 7 4 9 5', 'L': '8 1 6 0 3',
    'M': '7 4 2 5 9', 'N': '1 6 3 8 0', 'O': '9 2 7 5 3', 'P': '4 8 0 1 6',
    'Q': '3 9 5 2 7', 'R': '8 1 4 6 0', 'S': '2 9 5 7 3', 'T': '4 6 1 8 0',
    'U': '5 9 7 2 1', 'V': '3 8 4 6 9', 'W': '2 1 5 0 7', 'X': '9 7 3 5 1',
    'Y': '4 0 6 2 8', 'Z': '3 7 1 4 9', 'a': '8 6 9 5 3', 'b': '1 4 0 7 2',
    'c': '3 9 6 5 1', 'd': '8 7 0 4 2', 'e': '9 5 1 6 0', 'f': '7 3 2 9 8',
    'g': '4 1 0 5 6', 'h': '9 8 2 6 3', 'i': '5 7 1 4 0', 'j': '6 3 9 2 5',
    'k': '8 7 4 0 2', 'l': '5 3 9 1 6', 'm': '7 2 6 9 0', 'n': '4 1 8 5 2',
    'o': '9 0 3 6 8', 'p': '7 5 2 9 1', 'q': '3 0 6 4 8', 'r': '9 2 5 3 7',
    's': '1 6 8 4 0', 't': '3 5 9 2 6', 'u': '7 1 4 0 9', 'v': '5 8 3 1 7',
    'w': '2 6 9 0 4', 'x': '1 3 7 5 8', 'y': '4 9 2 6 3', 'z': '8 7 0 1 5',
    '0': '5 3 8 1 9', '1': '7 2 6 4 0', '2': '9 5 3 1 8', '3': '6 0 4 2 7',
    '4': '8 1 9 5 3', '5': '7 4 2 6 0', '6': '3 9 1 8 4', '7': '5 2 0 6 1',
    '8': '4 7 9 3 2', '9': '6 1 5 8 0', '!': '2 4 9 7 1', '@': '5 0 3 9 2',
    '#': '6 1 7 4 0', '$': '8 3 2 9 5', '%': '7 0 6 1 4', '^': '9 4 1 6 3',
    '&': '5 8 0 2 7', '*': '3 6 9 1 4', '(': '2 5 7 0 8', ')': '9 3 1 5 6',
    '-': '7 2 8 0 9', '_': '3 1 6 9 4', '=': '5 7 2 8 1', '+': '9 3 4 6 2',
    '[': '7 1 0 9 3', ']': '4 2 8 6 1', '{': '9 7 3 0 5', '}': '6 1 4 2 9',
    '\\': '0 7 5 8 3', '|': '4 1 9 6 7', ';': '8 5 2 1 0', "'": '3 6 0 9 7',
    '"': '5 2 7 4 9', ',': '1 0 6 3 8', '.': '9 7 2 5 1', '<': '8 3 9 2 0',
    '>': '6 4 7 3 1', '?': '2 0 5 8 9', '/': '7 4 3 1 6', '`': '9 1 6 3 0',
    '~': '4 2 8 7 5'
};

const numToChar = Object.fromEntries(
    Object.entries(charToNum).map(([char, nums]) => [nums, char])
);

// Function to encrypt the input text
function encrypt() {
    let inputText = document.getElementById("encryptInput").value;
    let outputText = transformText(inputText, charToNum, ' ');
    document.getElementById("encryptOutput").value = outputText;
}

// Function to decrypt the input text
function decrypt() {
    let inputText = document.getElementById("decryptInput").value;
    let outputText = decryptText(inputText);
    document.getElementById("decryptOutput").value = outputText;
}

// Function to transform text using a given mapping
function transformText(text, mapping, separator) {
    let isDecrypting = separator === '';
    return text.split(isDecrypting ? ' ' : '').map(part => {
        if (mapping[part]) {
            return mapping[part];
        }
        return isDecrypting ? part.split(' ').map(num => mapping[num] || num).join('') : part;
    }).join(separator);
}

// Function to decrypt the text with 5-digit chunks
function decryptText(text) {
    const chunks = text.trim().split(' ');
    let decryptedText = '';
    
    // Process each chunk of 5 digits
    for (let i = 0; i < chunks.length; i += 5) {
        const chunk = chunks.slice(i, i + 5).join(' ');
        if (numToChar[chunk]) {
            decryptedText += numToChar[chunk];
        } else {
            decryptedText += chunk; // Preserve the chunk if not found
        }
    }
    
    return decryptedText;
}
