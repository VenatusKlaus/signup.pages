// let openBar = document.getElementById('open')
// let sideSec = document.getElementById('leftsection')
// let closeSec = document.getElementById('closebar')

// openBar.addEventListener('click', function() {
//     sideSec.style.display = 'block';
// })

// closeSec.addEventListener('click', function(event) {
//     event.preventDefault();
//     sideSec.style.display = 'none';
// })

let openBar = document.getElementById('open');
let sideSec = document.getElementById('leftsection');
let closeSec = document.getElementById('closebar');

openBar.addEventListener('click', function() {
    sideSec.classList.add('show');
});

closeSec.addEventListener('click', function(event) {
    event.preventDefault();
    sideSec.classList.remove('show');
});
