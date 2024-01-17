let shuffledQuestions = [];

function sortQuestions() {
    while (shuffledQuestions.length <= 6) {
        const random = questions[math.floor(math.random() * questions.length)];
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random);
        }
    }
}