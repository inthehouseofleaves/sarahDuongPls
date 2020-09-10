// BEFORE ANYTHING: CREATE YOUR RESPONSES???

const quizQuestions = [
    q1 = {
        question: "1. Choose your Toronto fighter:",
        a: "fiddleleaf",
        b: "pothos",
        c: "marijuana",
    },
    q2 = {
        question: "2. Pick a suuuuuuper basic quote.",
        a: "pothos",
        b: "fiddleleaf",
        c: "marijuana",
    },
    q3 = {
        question: "3. Your ting wants to go for a date. Where ya headed?",
        a: "marijuana",
        b: "pothos",
        c: "fiddleleaf",
    }
];




// MORE SHIT

const resultsContainer = document.getElementById("resultsHere");
const quizContainer = document.getElementById("quizHere")


// PSEUDOCODE

// 1. Create an event listener for a "submit" event
// 2. Saving information from checked radio buttons into variables
// 3. Determine which finicky houseplant the user is according to their input
// 4. Display the results on the page



// 1. DOCUMENT READY

$(document).ready(function(){


// 2. CREATE AN EVENT LISTENER FOR FORM SUBMIT

    $("form").on("submit", function(event){

        event.preventDefault();

        // 4. MAKE YOUR BUTTON WORK
        // $("button").on()
        // console.log("You are submitting your form!")

        // 5. SAVE INFO FROM CHECKED RADIO BUTTONS INTO VARIABLES

        const answers = [
            answerOne = $("input[name=q1]:checked").val(),
            answerTwo = $("input[name=q2]:checked").val(),
            answerThree = $("input[name=q3]:checked").val(),
        ]

        // 7. FOR LOOP

        for (let i = 0; i < answers.length; i++){
            console.log(answers[i]);
            $(".results").html(`<h4>Your choices: ${answers[0]}, ${answers[1]}, and ${answers[2]}</h4>`);
        }

        // 8. IF STATEMENT

        if (`${answers[0]}` === "pothos"){
            console.log("you a bitch")
        } else {
            console.log("fuck you")
        }




        // MAP METHOD

        // const responses = quizQuestions(function(value){
        //     return value[0];
        // });

        // console.log(responses);

        // 6. TRANSLATE USER INPUT INTO PLANTS???


            

            // console.log(plants)        

        // FILTER METHOD: RETURN VALUE.ANSWER === POTHOS???

        // const users = [
        //     { name: 'Spider-Man', age: 16 },
        //     { name: 'Buffy Summers', age: 25 },
        //     { name: 'Gandalf the Grey', age: 90 },
        //     { name: 'Arthur Read', age: 9 }
        // ];

        // const votingAge = users.filter((person) => {
        //     // use possible if statement here for plants?
        //     return person.age >= 18
        // });

        // console.log(votingAge);
        //[
        //  { name: 'Buffy Summers', age: 25 },
        //  { name: 'Gandalf the Grey', age: 90 }
        //];



        // 7. DISPLAY PLANT RESULTS ON THE PAGE????

        // 8. SHOULD I CLEAR THE FORM?

    })

    // SECOND LAST: CALL EVERYTHING!



})