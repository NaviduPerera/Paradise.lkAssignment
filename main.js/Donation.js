let donationForm = document.getElementById("resultsForm");
let donationPopup = document.getElementById("popup");
let message = document.getElementById("message-display");
let nameField = document.getElementById("name");
let donationList = document.getElementById("Donation");
let okBtn = document.getElementById("ok-btn");



donationForm.addEventListener("submit",function(event){
    event.preventDefault();
    let name = nameField.value;
    let donationAmount = donationList.options[donationList.selectedIndex].value;

    message.innerHTML = `Hi ${name}, Thank you for the ${donationAmount}LKR Donation.`
    donationPopup.style.visibility="visible";
})


// when ok button inside form is clicked

okBtn.addEventListener("click",function(){
    donationPopup.style.visibility="hidden";
    location.reload();
})






