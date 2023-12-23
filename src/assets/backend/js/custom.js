// add hovered class to selected list item
let list = document.querySelectorAll(".sidebar li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".sidebar");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

//search icone

$(document).ready(function () {
    $("#search-button").click(function () {
        $("#search-input").toggle(); // Toggle the visibility of the search input
        $("#search-input").toggleClass('active'); // Toggle the 'active' class
        if ($("#search-input").hasClass('active')) {
            $("#search-input").focus(); // Automatically set focus to the input field when it's active
            $("#search-input").css('width', '200px'); // Set the desired width when active
        } else {
            $("#search-input").css('width', '0'); // Set the width to 0 when not active
        }
    });
});

// Sample data for the bar chart
const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'],
    datasets: [{
        label: 'Sample Data',
        data: [10, 40, 30, 70, 50, 80, 90],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Create the bar chart
const ctx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// table design by jquery
$(document).ready(function () {
    $('#myTable').DataTable();
});

