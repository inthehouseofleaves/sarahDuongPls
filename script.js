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

        // 6. EXPLANATIONS

        const explanations = {

            pothos: "Whether at the zoo, in a park, or heck - on a balcony overlooking the Gardiner - you have an affinity for the outdoors. You're adventurous and fun to be around, I don't know what else to say except how much am I supposed to fucking water you? Why are you both dead and alive? Why are you are the bane of my existence?",

            marijuana: "You're super chill and have a great sense of humor. You prefer to live life day-by-day and don't like taking things too seriously. Except for re-potting. You hate re-potting. You'll wither away and die even though I've put all of my love and effort into your existence. Fuck you. I hate you.",

            fiddleleaf: "You're basic as fuck, what can I say? Yorkdale Mall? Seriously? I'd rather spend the night watching that terrible new Charlie Kaufman movie and gouging my own eyes out.",

        }


        // 8. IF STATEMENT/DISPLAY ON PAGE
        
        const displayAnswer = function() {

            // DISPLAY RESULTS

            if (answers[0] === answers[1]){
                $(".results").html(`<div class="resultsWrapper"><h4>You're a ${answers[0]}.</h4></div>`);
            } else if (answers[1] === answers[2]){
                $(".results").html(`<div class="resultsWrapper"><h4>You're a ${answers[1]}</h4></div>`);
            } else if (answers[0] === answers[2]){
                $(".results").html(`<div class="resultsWrapper"><h4>You're a ${answers[2]}</h4></div>`);
            } else {
                $(".results").html(`<div class="resultsWrapper"><h4>You are a ${answers[Math.floor(Math.random() * answers.length)]}</h4></div>`)
            }

            // DISPLAY EXPLANATIONS

            if ($(".results").html().includes("pothos")) {
                $(".explanation").html(`<div class="resultsWrapper"><p>${explanations.pothos}</p><div>`)
            } else if ($(".results").html().includes("marijuana")) {
                $(".explanation").html(`<div class="resultsWrapper"><p>${explanations.marijuana}</p></div>`)
            } else if ($(".results").html().includes("fiddleleaf fig")) {
                $(".explanation").html(`<div class="resultsWrapper"><p>${explanations.fiddleleaf}</p></div>`)
            }

        }

        // CALL FUNCTION

        displayAnswer()


    }) // end of form

}) // end of document ready