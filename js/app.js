// Example JS for a smooth scroll effect when clicking "Learn More" button
document.querySelector('.btn-light').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
});
