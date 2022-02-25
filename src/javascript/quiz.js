/*
// ---let's build a quiz game in thr console ----

// 1. build a function constructor called question to describe a question. A question should include:
// a) question itself
// b) the anwsers from which the player can choose the correct one (choose an adequate data structure here, array,object, etc.)
// c) correct anwser (I would use a number for this)

// 2. Create a couple of questions using the constructor

// 3. Store them all inside an array

// 4. select one random question and log it on the console, together with the possible anwsers (each question should have a number) (Hint: write a method for the Question objects for this task).

// 5. use the 'Prompt' function to ask the user for the correct anwser. The user should input the number of the correct anwser ssuch as you displayed it on task 4

// 6. Check if the number anwser is correct and print to the console whether the anwser is correct or not (Hint: write another method for this)

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that.)
*/

/*

(function() {

    function Question(question, anwsers, correct) {
        this.question = question;
        this.anwsers = anwsers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < 
        this.anwsers.length; i++) {
            console.log(i + ': ' +
            this.anwsers[i]);
        }
    }

    Question.prototype.checkAwnser = function(ans) {
        if (ans === this.correct) {
            console.log('Correct anwser!')
        } else {
            console.log('Wrong anwser. Try again later :')
        }
    }

    var q1 = new Question('Is javascript the colest programming language in the world?',
    ['Yes', 'No'],
    0);

    var q2 = new Question('what is the name of this course\'s teacher?',
    ['john', 'peter', 'jonas'],
    2);

    var q3 = new Question('What does the best describe coding?',
    ['Boring', 'Hard for me', 'Fun', 'tedious'],
    1);

    var q4 = new Question('during the time of your journey in programming who is your mentor or suponsorer',
    ['Temple', 'Junoir', 'Gudion', 'None of Above!'],
    3);

    var questions = [q1, q2, q3, q4];

    var n = Math.floor(Math.random() * 
    questions.length);

    questions[n].displayQuestion();

    var anwser = parseInt(prompt('Please select the correct anwser below.'));

    questions[n].checkAwnser(anwser)

})();

*/

(function() {

    function Question(question, anwsers, correct) {
        this.question = question;
        this.anwsers = anwsers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < 
        this.anwsers.length; i++) {
            console.log(i + ': ' +
            this.anwsers[i]);
        }
    }

    Question.prototype.checkAwnser = function(ans, callBack) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct anwser!')
           sc = callBack(true);
        } else {
            console.log('Wrong anwser. Try again later :')
            sc = callBack(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------------');
    }

    var q1 = new Question('Is javascript the colest programming language in the world?',
    ['Yes', 'No'],
    0);

    var q2 = new Question('what is the name of this course\'s teacher?',
    ['john', 'peter', 'jonas'],
    2);

    var q3 = new Question('What does the best describe coding?',
    ['Boring', 'Hard', 'Fun', 'tedious'],
    1);

    var q4 = new Question('during the time of your journey in programming who is your mentor or suponsorer',
    ['Temple', 'Junoir', 'Gudion', 'None of Above!'],
    3);

    var questions = [q1, q2, q3, q4];

    function score() {
        var sc = 0;
        return function(correct) {
           if (correct) {
               sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestions() {

        var n = Math.floor(Math.random() * 
        questions.length);
    
        questions[n].displayQuestion();
    
        var anwser = prompt('Please select the correct anwser below.');
    

        if (anwser !== 'exit') {
            questions[n].checkAwnser(parseInt(anwser),
            keepScore);

            nextQuestions();
        }
    }

    nextQuestions();
})();


















