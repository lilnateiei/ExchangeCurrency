function Exchange()  {

    let USD = 35
    let EUR = 37.55
    let THB = 1
    
    const amountDOM = parseFloat(document.getElementById("money").value);
    const currencyDOM = document.getElementById('currency');
    const exchangeDOM = document.getElementById('exchange');

    const selectedCurrency = currencyDOM.value;
    const selectedExchange = exchangeDOM.value;

    
    console.log("Selected currency:", selectedCurrency);
    console.log("Selected exchange", selectedExchange);

    for(let i=0; i < currencyDOM.options.length; i++){
        
    }

    for(let i=0; i < exchangeDOM.options.length; i++) {
        
    }

    let result;
    //  USD to THB
    if(selectedCurrency == "USD" && selectedExchange == "THB" ){
        result = amountDOM * USD
    // THB to USD 
    } else if (selectedCurrency == "THB" && selectedExchange == "USD"){
        result = amountDOM / USD
    // USD to USD & THB to THB & EUR to EUR
    } else if(selectedCurrency == "USD" && selectedExchange == "USD" || selectedCurrency == "THB" && selectedExchange == "THB" || selectedCurrency == "EUR" && selectedExchange == "EUR") {
        result = amountDOM 
    // USD to EUR
    } else if(selectedCurrency == "USD" && selectedExchange == "EUR") {
        result = amountDOM * EUR
    // EUR to USD
    } else if(selectedCurrency == "EUR" && selectedExchange == "USD"){
        result = amountDOM / USD
    } else if(selectedCurrency == "EUR" && selectedExchange == "THB"){
    // EUR to THB
        result = amountDOM * EUR
    // THB to EUR
    } else if(selectedCurrency == "THB" && selectedExchange == "EUR"){
        result = amountDOM / EUR
    }

    let resultDOM = document.getElementById('result')

    if(result == result){
        let resultFormatted = result.toFixed(2);
        resultDOM.innerText = `${resultFormatted} ${selectedExchange}`
    } else {
        resultDOM.innerText = `please input correct number`
    }
    
    

}
