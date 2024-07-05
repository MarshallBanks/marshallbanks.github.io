document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.tabs ul li').forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            document.querySelectorAll('.tabs ul li').forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Remove 'active' class from all tab contents
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            // Add 'active' class to the corresponding tab content
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });
});
