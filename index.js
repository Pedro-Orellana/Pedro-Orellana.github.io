$(document).ready( () => {
    
    //get a reference to important DOM elements
    const button = $("#animation_button");
    const title = $("h1");
    const profilePicture = $("#profile_picture");

    //onClick function
    button.on("click", () => {

        //change color and size of title
        title.css("color", "red");
        title.animate({"font-size": "+=1rem"}, 1500);
        title.animate({"font-size": "-=1rem"}, 1500);
        setTimeout(() => {title.css("color", "black")}, 3000)

        //add borders to profile picture
        profilePicture.css("border", "1rem outset #32a852")
    })
})