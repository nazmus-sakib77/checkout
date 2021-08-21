
function allGetprice(amount,charge){
            let memoryInput = document.getElementById( amount+'-price');
            const memorytext = memoryInput.value;
            const memory = parseFloat(memorytext);
            memoryInput.innerText =   + charge;
            calculateTotal()
}




function alltotalPrice(total){
    const totalPrice = document.getElementById(total+'-price');
    const totalPriceText =  totalPrice.innerText;
    const totalPriceList = parseFloat(totalPriceText);
    return totalPriceList;
}

function getTotalPrice(totalPriceAmount, previusPrice, totalAmountAll){
    const bestPrice = document.getElementById(previusPrice);
    const bestPriceText = parseFloat(bestPrice.innerText);

    const previusTotal = document.getElementById(totalPriceAmount);
    const previusTotalText = previusTotal.innerText;
    const previusTotalPrice = parseFloat(previusTotalText);
     previusTotal.innerText = bestPriceText + totalAmountAll;

}

// promo button
document.getElementById('apply-btn').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const userPromo = promoInput.value;
    if(userPromo == 'stevekaku'){
           console.log(userPromo)
    }
    else{
           alert('Promo Code Is Not Valid')
    }
})


function calculateTotal(){
    const memoryTotalPrice = alltotalPrice('memory');
    const storageTotal = alltotalPrice('storage') ;
    const deliveryTotal = alltotalPrice('delivery') ;
    let totalAmountAll = deliveryTotal + storageTotal + memoryTotalPrice;
    

    
    
      
    getTotalPrice('totalFooter', 'previus-price', totalAmountAll)

    getTotalPrice('total-price', 'previus-price', totalAmountAll);

  

}

// memory start
document.getElementById('8gb-memory').addEventListener('click', function(){
         allGetprice('memory', 0)
});
document.getElementById('16gb-memory').addEventListener('click', function(){
         allGetprice('memory', 180)
});
// memory end
// storage start
document.getElementById('256gb-storage').addEventListener('click', function(){
        allGetprice('storage', 0)
});
document.getElementById('512gb-storage').addEventListener('click', function(){
        allGetprice('storage', 100)
});

document.getElementById('1tb-storage').addEventListener('click', function(){
        allGetprice('storage', 180)           
});
// storage end
// delivery start
document.getElementById('free-delivery-price').addEventListener('click', function(){
          allGetprice('delivery', 0)
});
document.getElementById('charge-delivery-price').addEventListener('click', function(){
      allGetprice('delivery', 20)
});
// delivery end