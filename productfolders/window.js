function myFunction() {
    const paymentButtons = document.querySelectorAll('input[name="payment"]');
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const acc = document.getElementById('accountnamep').innerText;
    const name = document.getElementById('title').innerText.substring(6,200);
    const price = document.getElementById('price').innerText;
    const shipping = document.getElementById('shipping').innerText;
    const delivery = document.getElementById('delivery').innerText.toLocaleLowerCase();
    
    let count = 0;
    for (const payment of paymentButtons) {
        if (payment.checked) {
            count = 0;
            let location = window.prompt("Where are you located?");
            if (location === "") {
                window.alert("No Location Inputted");
                break
            }
            window.confirm(acc+" bought "+quantity+" sized: "+size+" "+name+" for "+price+" with "+shipping+" for delivery with "+acc+"'s "+payment.value+". Arrival to your location: "+location+" is "+delivery);
            break
        } else if (payment.checked == false) {
            if (count == 4) {
                window.alert("Error: No payment method is picked");
                count = 0;
                break
            } else {
                count++;
                if (count == 4) {
                    window.alert("Error: No payment method is picked");
                    count = 0;
                    break}
                }
            }
        }
    }

function myFunction2() {
        const paymentButtons = document.querySelectorAll('input[name="payment"]');
        const size = document.getElementById('size').value;
        const quantity = document.getElementById('quantity').value;
        const acc = document.getElementById('accountnamep').innerText;
        const name = document.getElementById('title').innerText.substring(6,200);
        const price = document.getElementById('price').innerText;
        const shipping = document.getElementById('shipping').innerText;
        const delivery = document.getElementById('delivery').innerText.toLocaleLowerCase();
        
        let count = 0;
        for (const payment of paymentButtons) {
            if (payment.checked) {
                count = 0;
                window.confirm(acc+" added "+quantity+" sized: "+size+" "+name+" for "+price+" with "+shipping+" to cart");
                break
            } else if (payment.checked == false) {
                if (count == 4) {
                    window.alert("Error: No payment method is picked");
                    count = 0;
                    break
                } else {
                    count++;
                    if (count == 4) {
                        window.alert("Error: No payment method is picked");
                        count = 0;
                        break}
                    }
                }
            }
        }
