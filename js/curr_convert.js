let convertCurrency = () => {

    let fromCurrency = document.getElementById("CURR_FR").value;

    let toCurrency = document.getElementById("CURR_TO").value;

    let amount = document.getElementById("amount").value;

    let result = document.getElementById("CURR_VAL");

    let query = fromCurrency + '_' + toCurrency;
 
    result.setAttribute("placeholder","Converting...");

    
            

    $.getJSON("https://free.currencyconverterapi.com/api/v5/convert?q=" + query + "&compact=y&callback=?",
        ((data) =>{
            // console.log(data);
            // console.log((data[query].val));
            var currFrVal = parseFloat(amount);
            // console.log(currFrVal);
            
            try{ if (isNaN (amount)) {alert('"Please enter a number in the Amount field."');
                        result.setAttribute("placeholder", "Press Convert button");
                        return}
                        {
                        var currFrVal = parseFloat(amount);
                        let total = numeral(currFrVal * data[query].val).format("0,0.00");
                        result.value = total;
                        console.log(total);
                        }
                }

        catch (e)  {
        alert("Sorry, failed!"); console.log(e);
        result.setAttribute("placeholder", "Press Convert button");
        }
        ;
        
    

    }))};  
