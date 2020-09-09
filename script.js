// BEFORE ANYTHING: CREATE YOUR RESPONSES???

const drinks = {
    coffee: [
        {
            title: 'Early Bird',
            price: '$$'
        },
        {
            title: 'Dark Horse',
            price: '$'
        },
        {
            title: 'Le Gourmand',
            price: '$'
        }
    ],
    tea: [
        {
            title: 'David\'s Tea',
            price: '$$'
        },
        {
            title: 'Tealish',
            price: '$$'
        },
        {
            title: 'Teavana',
            price: '$'
        }
    ]
};


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
            answerThree = $("input[name=q3]:checked").val()
        ]
        
        console.log(answers);

    
        // 6. TRANSLATE USER INPUT INTO PLANTS???

        // const bevPlaces = drinks;
        // console.log(bevPlaces);

        // 7. DISPLAY PLANT RESULTS ON THE PAGE????

        $(".results").html(`<h1>${answers}</h1>`) //fix this

        // 8. SHOULD I CLEAR THE FORM?

    })

    // SECOND LAST: CALL EVERYTHING!



})