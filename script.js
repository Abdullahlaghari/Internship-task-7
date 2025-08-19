document.addEventListener('DOMContentLoaded', () => {

    // Dark/Light Mode Toggle
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Update button text and icon
        if (body.classList.contains('dark-mode')) {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark';
        } else {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i> Light';
        }
    });

    // Sidebar Collapse/Expand Toggle
    // Note: The HTML and CSS are set up for a responsive sidebar that changes for mobile.
    // A separate JS toggle isn't strictly necessary for this layout but can be added.
    // For a traditional collapse/expand:
    // const sidebar = document.querySelector('.sidebar');
    // sidebar.addEventListener('click', () => {
    //     sidebar.classList.toggle('collapsed');
    // });

    // Search bar filter for the data table
    const searchInput = document.getElementById('user-search');
    const tableRows = document.querySelectorAll('#user-table tbody tr');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            if (rowText.includes(searchTerm)) {
                row.style.display = ''; // Show row
            } else {
                row.style.display = 'none'; // Hide row
            }
        });
    });

    // Chart.js Integration
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar', // Can be 'bar', 'line', 'pie', etc.
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Sales',
                data: [1200, 1500, 1800, 1400, 2000, 2500],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});