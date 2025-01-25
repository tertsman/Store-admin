// $(document).ready(function () {});
// let toggle = document.querySelector(".toggle");
// let navigate = document.querySelector(".aside");
// let main = document.querySelector(".mainsection");

// toggle.onclick = function () {
//   navigate.classList.toggle("action");
//   main.classList.toggle("changwidth");
// };
// let add_New = document.querySelector(".btn-add");
// let main_Form = document.querySelector(".main-from");
// let btn_close = document.querySelector(".form-action");
// let btn_save = document.querySelector(".save-btn");
// let btn_cancel = document.querySelector(".can-btn");

// add_New.onclick = function () {
//   main_Form.classList.add("showForm");
// };
// btn_close.onclick = function () {
//   main_Form.classList.remove("showForm");
// };
// btn_cancel.onclick = function () {
//   main_Form.classList.remove("showForm");
// };
// btn_save.onclick = function () {
//   main_Form.classList.remove("showForm");
// };


// // chart 

// const ctx = document.getElementById('myChart1').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','August','Seb','Nov','Dec'],
//         datasets: [
//             {
//                 label: 'sale A',
//                 data: [60, 55, 80, 70, 80, 65, 50,70,55,77,70],
//                 borderColor: 'rgba(54, 162, 235, 0.4)',
//                 backgroundColor: 'rgba(54, 1, 235, 0.2)',
//                 fill: true,
//                 tension: 0.4,
//                 pointBackgroundColor: 'rgba(54, 162, 235, .3)',
//                 pointBorderColor: '#fff',
//                 pointHoverBackgroundColor: '#fff',
//                 pointHoverBorderColor: 'rgba(54, 162, 235, 0.2)',
//             },
//             {
//                 label: 'Expance B',
//                 data: [60, 75, 55, 70, 60, 80, 55,50,70,55,60],
//                 borderColor: 'rgba(201, 203, 207, 1)',
//                 backgroundColor: 'rgba(201, 20, 207, 0.2)',
//                 fill: true,
//                 tension: 0.4,
//                 pointBackgroundColor: 'rgba(201, 203, 207, 1)',
//                 pointBorderColor: '#fff',
//                 pointHoverBackgroundColor: '#fff',
//                 pointHoverBorderColor: 'rgba(201, 203, 207, 1)',
//             }
//         ]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             tooltip: {
//                 mode: 'index',
//                 intersect: false,
//                 callbacks: {
//                     title: function(tooltipItems) {
//                         return tooltipItems[0].label;
//                     },
//                     label: function(tooltipItem) {
//                         return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
//                     }
//                 }
//             },
//             legend: {
//                 display: false
//             }
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false
//                 }
//             },
//             y: {
//                 min: 40,
//                 max: 90,
//                 ticks: {
//                     stepSize: 10
//                 }
//             }
//         }
//     }
// });

// // chart 2

// const ctx1 = document.getElementById('chart');

//         new Chart(ctx1, {
//             type: 'polarArea',
//             data: {
//                 labels: ['Monday', 'Tuesday', '', 'Wednesday', 'Thursday', 'Friday', 'Satuday', 'Sunday'],
//                 datasets: [{
//                     label: '# of Votes',
//                     data: [12, 19, 3, 5, 2, 3],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });