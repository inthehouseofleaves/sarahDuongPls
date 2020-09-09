// BEFORE ANYTHING: CREATE YOUR RESPONSES???

// WHAT THE FUCK IS HAPPENING

// const assignedHouseplant = {
//     pothos: {
//         q1answer: "b) Chair Girl",
//         q2answer: "a) Carpe diem",
//         q3answer: "c) The capybara enclosure at High Park",
//     }
// }



// MORE SHIT

const resultsContainer = document.getElementById("resultsHere");
const quizContainer = document.getElementById("quizHere")


// PSEUDOCODE

// 1. Create an event listener for a "submit" event
// 2. Saving information from checked radio buttons into variables
    // a) Answers for question 1
    // b) Answers for question 2
    // c) Answers for question 3
// 3. Determine which finicky houseplant the user is according to their input
// 4. Display the results on the page






// 1. DOCUMENT READY

$(document).ready(function(){


// 2. CREATE AN EVENT LISTENER FOR FORM SUBMIT

    $("form").on("submit", function(event){

        event.preventDefault();

        // 4. MAKE YOUR BUTTON WORK
        // $("button").on()
        console.log("You are submitting your form!")

        // 5. SAVE INFO FROM CHECKED RADIO BUTTONS INTO VARIABLES

        // const formAnswers = function(){

            // a) Answer for question 1
            let answerOne = $("input[name=q1]:checked").val();
            console.log(`Here is your first answer: ${answerOne}`);

            // b) Answer for question 2
            let answerTwo = $("input[name=q2]:checked").val();
            console.log(`Here is your second answer: ${answerTwo}`);

            // c) Answers for question 3
            let answerThree = $("input[name=q3]:checked").val();
            console.log(`Here is your third answer: ${answerThree}`);


        // }

        // 6. CONSOLE.LOG TO MAKE SURE IT'S WORKING


    })

    // SECOND LAST: CALL EVERYTHING!

    // DISPLAY RESULTS ON THE PAGE

})