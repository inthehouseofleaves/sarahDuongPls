// BEFORE ANYTHING: CREATE YOUR RESPONSES???

const quizQuestions = [
    q1 = {
        question: "1. Choose your Toronto fighter:",
        a: "fiddleleaf fig",
        b: "pothos",
        c: "marijuana",
    },
    q2 = {
        question: "2. Pick a suuuuuuper basic quote.",
        a: "pothos",
        b: "fiddleleaf fig",
        c: "marijuana",
    },
    q3 = {
        question: "3. Your ting wants to go for a date. Where ya headed?",
        a: "marijuana",
        b: "pothos",
        c: "fiddleleaf fig",
    }
];

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

        // 5. SAVE INFO FROM CHECKED RADIO BUTTONS INTO VARIABLES

        const answers = [
            answerOne = $("input[name=q1]:checked").val(),
            answerTwo = $("input[name=q2]:checked").val(),
            answerThree = $("input[name=q3]:checked").val(),
        ]

        // 8. IF STATEMENT/DISPLAY ON PAGE

        if (answers[0] === answers[1]){
            $(".results").html(`<h4>You are a: ${answers[0]}</h4>`);
        } else if (answers[1] === answers[2]){
            $(".results").html(`<h4>You are a: ${answers[1]}</h4>`);
        } else if (answers[0] === answers[2]){
            $(".results").html(`<h4>You are a: ${answers[2]}</h4>`);
        } else {
            $(".results").html(`<h4>You are a ${answers[Math.floor(Math.random() * answers.length)]}`)
        }

        // 9. MORE IF STATEMENTS

        if (answers === "pothos"){
            $(".results").html(`<p>What in tarnation is happening?</p>`)
            console.log("pothos bitch")
        }

    }) // end of form

}) // end of document ready