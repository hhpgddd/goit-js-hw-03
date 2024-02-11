    function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
    }
    calculateEngravingPrice("JavaScript is in my blood", 10)