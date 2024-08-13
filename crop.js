function calculatePrice() {
    const quantity = document.getElementById('quantity').value;
    

    if (quantity === '' || isNaN(quantity) || quantity <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid quantity.';
        return;
    }
    

    const pricePerKg = 6;
    
    const totalPrice = quantity * pricePerKg;
    
 
    document.getElementById('result').innerText = `Total Price: ₹${totalPrice}`;
}
