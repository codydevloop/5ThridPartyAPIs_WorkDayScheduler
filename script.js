
let  hourObjec = {
    textSevenAM: 7,
    textEightAM: 8,
    textNineAM: 9,
    textTenAM: 10,
    textElevenAM: 11,
    textTwelveNoon: 12,
    textOnePM: 13,
    textTwoPM: 14,
    textThreePM: 15,
    textFourPM: 16,
    textFivePM: 17,
    textSixPM:  18,
    textSevenPM: 19,
    textEightPM: 20
};



let m =moment();
// console.log(m.format("MMMM Do YYYY"));
var pEl =$("#currentDay");
pEl.text(m.format("MMMM Do YYYY [- Time:] k[:]mm "));


//used to set initial style
var currentHour = m.hour();
// use for timers
var currentMinutes= m.minutes();

// console.log(hourObjec.textEightPM);

// set styles based on current hour
for(const property in hourObjec){
    // console.log(currentHour);
    // x = property;
    // console.log(`${hourObjec[property]}`);
    let propVal = $(hourObjec[property]);

    let forceIntFromObj = parseInt(propVal[0]);
    let forceIntFromMoment = parseInt(currentHour);

    
    // console.log(propVal);
    console.log(forceIntFromObj);
    console.log(forceIntFromMoment)
    console.log("property :" + property);
    // console.log(property);


    //hours in the future - green
    if(forceIntFromMoment < forceIntFromObj){
        // console.log(property);
        // ??? is there a way to select this with jQuery
        let coloredEl = document.getElementsByClassName(property);
        console.log(coloredEl);
        // coloredEl.style.backgroundColor = "red";
        coloredEl[0].setAttribute("style", "background-color: green");
     
    };


    // hours in the past  color === red
    if(forceIntFromMoment > forceIntFromObj){
        // console.log(property);
        // ??? is there a way to select this with jQuery
        let coloredEl = document.getElementsByClassName(property);
        console.log(coloredEl);
        // coloredEl.style.backgroundColor = "red";
        coloredEl[0].setAttribute("style", "background-color: red");
     
    };

    // check for current hour : color grey
    // this works b/c both values are strings
    if(propVal[0] === currentHour){
        // console.log(property);
        // ??? is there a way to select this with jQuery
        let coloredEl = document.getElementsByClassName(property);
        // console.log(coloredEl);
        // coloredEl.style.backgroundColor = "red";
        coloredEl[0].setAttribute("style", "background-color: grey");
     
    };

};

// console.log(currentMinutes);







// $(document).ready(function(){   });
// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>


$(document).ready(function(){

    for (const property in sessionStorage){
        //check for local storage  - populate with local storage info
        if (property.substring(0,4) === "text" ){
            // alert("yes!!")

            // var for Element for text targeting
            let getEl = document.getElementsByClassName(property);
            

            getEl[0].value = sessionStorage.getItem(property);

        };
    };

    // SAVE to 
    $(".saveBtn").on("click", function(){


        // when save button clicked
        // assign Btn attr id to sevenAM
        let buttonID =$(this).attr("id");

        // var for Element for text targeting
        let textAreaEl = document.getElementsByClassName(buttonID);

        //target text field of that element
        let theTextInside = textAreaEl[0].value;

        //store key= #ID  value = text
        sessionStorage.setItem(buttonID,theTextInside);


    });


});