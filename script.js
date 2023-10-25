document.addEventListener("DOMContentLoaded", function () {
    const inputWord = document.getElementById("inputWord");
    const translateButton = document.getElementById("translateButton");
    const translationResult = document.getElementById("translationResult");

    // Load the dictionary from the text file
    fetch("dictionary.txt")
        .then(response => response.text())
        .then(data => {
            const dictionary = data.split('\n')
                .filter(line => line.trim() !== '')
                .reduce((dict, line) => {
                    const [english, chhattisgarhi] = line.split('=');
                    dict[english.toLowerCase()] = chhattisgarhi;
                    return dict;
                }, {});

            translateButton.addEventListener("click", function () {
                const word = inputWord.value.toLowerCase();
                if (dictionary[word]) {
                    translationResult.textContent = dictionary[word];
                } else {
                    translationResult.textContent = "Translation not found.";
                }
            });
        });
});
