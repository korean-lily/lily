function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var productItems = document.querySelectorAll('.product-item');
    var validCodeFound = false;

    productItems.forEach(function(item) {
        var productCode = item.querySelector('h3').textContent.toLowerCase().trim();
        var imgContainer = item.querySelector('.img-container');

        if (productCode === "code: " + searchTerm) {
            validCodeFound = true;
            item.style.display = 'block';
            // Adjust dimensions of img-container for mobile view
            if (window.innerWidth <= 768) {
                imgContainer.style.width = '191.200px';
                imgContainer.style.height = '211.900px';
            } else { // For laptop/PC screen
                imgContainer.style.width = '357.56px';
                imgContainer.style.height = '380.22px';
            }
            // Centering the img-container
            var marginLeft = (item.offsetWidth - parseFloat(window.getComputedStyle(imgContainer).width)) / 2;
            imgContainer.style.marginLeft = marginLeft + 'px';
        } else {
            item.style.display = 'none';
        }
    });

    if (!validCodeFound) {
        alert("Invalid code! \nPlease enter correct code.");
        window.location.reload();
    }
}

document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});
