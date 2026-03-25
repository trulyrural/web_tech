function analyzeText() {
    let text = document.getElementById("textInput").value;

    // Handle empty input
    if (text.trim() === "") {
        document.getElementById("charCount").innerText = 0;
        document.getElementById("wordCount").innerText = 0;
        document.getElementById("reversedText").innerText = "No text provided.";
        return;
    }

    // Character count
    let charCount = text.length;

    // Word count (handles multiple spaces)
    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

    // Reverse text
    let reversed = text.split("").reverse().join("");

    // Display results
    document.getElementById("charCount").innerText = charCount;
    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("reversedText").innerText = reversed;
}