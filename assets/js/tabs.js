document.addEventListener('DOMContentLoaded', (event) => {

    const tabs = document.querySelectorAll('.tabs > ul > li');

    tabs.forEach((tab, index) => {  // index is captured here
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            tabs.forEach(item => item.classList.remove('active'));

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Remove 'active' class from all tab contents
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Add 'active' class to the corresponding tab content
            const activeContent = document.getElementById(tab.getAttribute('data-tab'));
            activeContent.classList.add('active');

            // Apply border radius only if it's not the first tab
            if (index === 0) {
                activeContent.style.borderTopLeftRadius = '0px'; // No radius for first tab
            }
        });
    });
});
