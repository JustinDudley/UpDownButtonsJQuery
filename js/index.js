let nbr = 0;
console.log("Good connection");

$().ready( () => {  // this line is almost universal when using jQuery
    console.log("Ready, finally, with jQuery!");
    
    $("#minus").click( () => { /* here we put the code we want to execute every time the button is clicked*/
        console.log("button clicked");

        
        
        $("#plus").click(() => {
            display(++nbr);
            
            $("#minus").click(() => display(--nbr));
            display(nbr);
        })
        
        // $("delta").val(99);
        // nbr = $("delta").val;
        // $("#delta").val(nbr);
        
        
        // subtract one from whatever value is resting in the number input box, which has an id of delta
        
        // $("#out").val( $("#in").val() );  
        
        
    } ) ; 

});

const display = nbr => {
    let ctrl = $("#nbr");
    ctrl.val(nbr);
    ctrl.css("color", (nbr % 2 == 0 ? "red": "black"))
    .css("fontWeight", (nbr %3 == 0 ? "bold": "normal"))
    .css("fontStyle", (nbr %5 == 0 ? "italic": "normal"));
}


    
    // gets whatever is in the left input box, stores it in a variable called input
     // out is the selector.  Second one isn't creating sometinig, just reading. 
    // the click method, in jQuery?  inside the () of lc  click, we can pass an anonymous function  // var input holds whatever the user keys in







    
