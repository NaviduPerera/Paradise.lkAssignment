
let ttype;
let nof;
let dutype;
let noft;
var totalQuantity;
var finalquant;
var loyaltypoints


let TicketBooking=document.getElementById("Ticket Booking")
let ticketType=document.getElementById("TType2")
let addtoorder=document.getElementById("add")
let Numberoftickets=document.getElementById("numT")
let duration1=document.getElementById("Duration1");
let duration2=document.getElementById("Duration2");
let duration3=document.getElementById("Duration3");
let duration4=document.getElementById("Duration4");
let Currentcost=document.getElementById("current-cost")
let numberoffoodt=document.getElementById("numFT")
let durationn=document.getElementById("Durationd")
let radioButtons= document.querySelectorAll('input[type="radio"]')
let btnpurchase=document.getElementsByClassName("btn-purchase")[0]



let Tickettypecost;
let Tickettype=ticketType.options[ticketType.selectedIndex].value;
let select1=ticketType.options[ticketType.selectedIndex].text;
let Numberoffoodt=numberoffoodt.value;

let Addfav=document.getElementById("addfav")
let LoadFav=document.getElementById("loadFav")
let CheckLoyalty=document.getElementById("checkLoyalty")
window.addEventListener("load", init);

function init() {
     
    ttype = 0; 
    dutype = 0; 
    noft = 0; 
    
    cost = ttype*nof + (dutype*nof)+noft;

    Currentcost.innerText = `${cost.toFixed(2)}`; 
}


ticketType.addEventListener('change',fticketType)
function fticketType(){ 
    let select1=ticketType.options[ticketType.selectedIndex].value;
    if(select1==5000){
        ttype=5000;
    }
    else if(select1==2500){
        ttype=2500;
    }
    else if(select1==1000){
        ttype=1000;
    }
    else if(select1==500){
        ttype=500;
    }
    else if(select1==4500){
        ttype=4500;
    }
    else if(select1==15000){
        ttype=15000;
    }

    cost = ttype*nof + (dutype*nof)+noft;

    Currentcost.innerText = `${cost.toFixed(2)}`; 
    if (select1==4500 || select1==15000) {
        dutype=0   
     
      document.getElementById("numFT").disabled=true;
        document.getElementById("Durationd").disabled=true;
    }
    else {
        document.getElementById("Durationd").disabled=false;
        document.getElementById("numFT").disabled=false;
    }
}

Numberoftickets.addEventListener("change",numberoftickets)
function numberoftickets(){
    nof=Numberoftickets.value;
    cost = ttype*nof + (dutype*nof)+noft;
    Currentcost.innerText = `${cost.toFixed(2)}`;


}

durationn.addEventListener('change',fduration)

function fduration(){
    let sduration=durationn.options[durationn.selectedIndex].value;
    if(sduration=="3 Hours"){
        if(ttype==1000 || ttype==500 || ttype==5000 || ttype==2500){
            dutype=0;  
        }       
}
    else if(sduration=="1/2 Day"){
        if(ttype==1000 || ttype==500 ) {
            dutype=250;  
        }  
        if(ttype==5000 || ttype==2500 ) {
            dutype=500;  
        }            
    }
    else if(sduration=="Full Day"){
        if(ttype==1000 || ttype==500 ) {
            dutype=500;  
        }  
        if(ttype==5000 || ttype==2500 ) {
            dutype=1000;  
        }            

    }
    else if(sduration=="2 Days"){
        if(ttype==1000 || ttype==500 ) {
            dutype=1000;  
        }  
        if(ttype==5000 || ttype==2500 ) {
            dutype=2000;  
        }            
        
    }
    cost = ttype*nof + (dutype*nof)+noft;
    Currentcost.innerText = `${cost.toFixed(2)}`;
}




numberoffoodt.addEventListener("change",fnumberoftickets)
function fnumberoftickets(){
    let Numberoffoodt=numberoffoodt.value;
    if(ttype==""){
        noft=0;
    }
    else{
    noft=Numberoffoodt*500;
    cost = ttype*nof + (dutype*nof)+noft;
    Currentcost.innerText = `${cost.toFixed(2)}`;}
}




addtoorder.addEventListener("click",addorder)
function addorder(){
    let Tickettype=ticketType.options[ticketType.selectedIndex].value;
    nof=Numberoftickets.value;
    let Numberoffoodt=numberoffoodt.value;
    if(Tickettype!="n" && nof!=0 ){
        


cost = ttype*nof + (dutype*nof)+noft;
let select2=ticketType.options[ticketType.selectedIndex].text
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

if(cost>0){
var cartRowContents = `
    <div class="cart-item cart-column">
        
        <span class="cart-item-title">${select2} </span>
    </div>
    <span class="cart-price cart-column">${cost}</span>
    <div class="cart-quantity cart-column">
    <span class="cart-quantity-input">${nof} </span>
    <button class="btn btn-danger" onclick="removeCartItem(this)" type="button">REMOVE</button></div>
    `
 
cartRow.innerHTML = cartRowContents

   cartItems.append(cartRow)
}

updateCartTotal()
ttype = 0; 
nof = 0; 
dutype = 0; 
noft = 0; 

cost = ttype*nof + (dutype*nof)+noft;

Currentcost.innerText = `${cost.toFixed(2)}`; 

document.getElementById("TType2").value = "n";
document.getElementById("Durationd").value = "1n";
document.getElementById("numT").value = 0;


document.getElementById("numFT").value = 0;

    }
    else{
        alert('slect item')
    }




}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    
    var total = 0
    var totalQuantity=0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
       var quantityElement1= parseInt(quantityElement.textContent)
        
        
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))
        

        total = total + price  
        totalQuantity=totalQuantity+quantityElement1
     

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs. ' + total
    finalquant=totalQuantity

    
    
   }

   function removeCartItem(buttonClicked) {
    
    
     buttonClicked.parentElement.parentElement.remove()
     remUpdatecart()
 }
 function remUpdatecart(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    
    var total = 0
    var totalQuantity=0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        
        
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))

        total = total +price 


        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var quantityElement1= parseInt(quantityElement.textContent)
        totalQuantity=totalQuantity+quantityElement1
        
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs. ' + total
    finalquant=totalQuantity
}

btnpurchase.addEventListener("click",placeOrder)
function placeOrder(){
    var cartItems = document.getElementsByClassName('cart-items')[1]
    
       
    alert('Thank you for your purchase')
    location.reload()
}

Addfav.addEventListener("click",Addfavb)
function Addfavb(){
   
    let select1=ticketType.options[ticketType.selectedIndex].text;
    newselect1=select1
    newcost1=cost
    newnof=parseInt(nof)
    newdutype=dutype*newnof
    let Addfav1={itemname:newselect1,Fcost:newcost1,quantity:newnof,duration:newdutype}
    localStorage.setItem('fav',JSON.stringify(Addfav1));

    if(newselect1!=0 && newnof!=0 && radioButtons != 0){
    alert('successfullly ')
    }
    else{
        alert('unsucs')
    }
  
    
    
}
LoadFav.addEventListener("click",loadFav)
function loadFav(){
let retufav = JSON.parse(localStorage.getItem('fav'))

newselect1=retufav.itemname
newcost1=retufav.Fcost
newdutype=retufav.duration
newnof=retufav.quantity

cost = ttype*nof + (dutype*nof)+noft;
let select2=ticketType.options[ticketType.selectedIndex].text
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')





if(cost>0){
var cartRowContents = `
    <div class="cart-item cart-column">
        
        <span class="cart-item-title">${newselect1}</span>
    </div>
    <span class="cart-price cart-column">${newcost1}</span>
    <div class="cart-quantity cart-column">
    <span class="cart-quantity-input">${newnof} </span>
    <button class="btn btn-danger" onclick="removeCartItem(this)" type="button">REMOVE</button></div>
    `
 
cartRow.innerHTML = cartRowContents

   cartItems.append(cartRow)
   updateCartTotal()





}
}

CheckLoyalty.addEventListener("click",countnumberoftickets)
function countnumberoftickets(){
    

    if(finalquant>3){
        loyaltypoints=20*finalquant;
       alert(`you earned ${loyaltypoints} of loyalty points`)
        let loyaltyp={Loyaltypoint:loyaltypoints}
        localStorage.setItem('loyal',JSON.stringify(loyaltyp))
    }
    else{
        alert('buy more than 3 items')
    }
}



