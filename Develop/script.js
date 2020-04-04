

// $(document).ready(function(){   });
// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>


$(document).ready(function(){

    for (const property in localStorage){
        //check for local storage  - populate with local storage info
        if (property.substring(0,4) === "text" ){
            // alert("yes!!")

            // var for Element for text targeting
            let getEl = document.getElementsByClassName(property);

            getEl[0].value = localStorage.getItem(property);

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
        localStorage.setItem(buttonID,theTextInside);


        // console.log(localStorage);




        // check the input text of the associated form 


        // then save it to local storage


        // window.sessionStorage.setItem($(this).attr("id",));
        // fridgeMagnet.text($(this).attr("data-letter"));
        // inputText = 

    });


});