//scroll script
window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        var yOffset = window.pageYOffset;
        var scrolldistance = 340;
        //if page off set is larger than 120px, need to add the stick class
        if (yOffset > scrolldistance) {
            document.querySelector(".searchbar").classList.add("stick");
        } else {
            document.querySelector(".searchbar").classList.remove("stick");
        }

    })
    //carousel script
    //clicking on the right button, hide the first group
document.querySelector(".controlright").addEventListener("click", () => {
    document.querySelectorAll(".group1").forEach((e) => {
        e.classList.add("hide");
    });
});
//clicking on the left button, show the first group
document.querySelector(".controlleft").addEventListener("click", () => {

    document.querySelectorAll(".group1").forEach((e) => {
        e.classList.remove("hide");
    });
});
//creat a feed of cards and insert them under ".feed" class
const numCard = 20;
for (i = 0; i < numCard; i++) {
    var card = document.createElement("div");
    card.className = "card";
    document.querySelector(".feed").appendChild(card);
}
// console.log(document.querySelector(".feed"));
//open a modal window upon clicking on card #1
document.querySelector("#card_selected").addEventListener("click", () => {
        document.querySelector(".modal").classList.remove("hide");
    })
    //close the modal window upon clicking on the x
document.querySelector(".modal_close").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hide");
})