<script>
    // Get the button element
    const buyTicketsBtn = document.getElementById('buyTicketsBtn');

    // Add click event listener to the button
    buyTicketsBtn.addEventListener('click', function() {
        // Scroll to a specific section or position on the page
        // For example, scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scrolling effect
        })
    });
</script>
