
document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.key');

    navElements.forEach(function(navElement) {
        var navIcon = navElement.querySelector('.nav__icon img');
        var originalSrc = navIcon.src;

        navElement.addEventListener('mouseover', function() {
            navIcon.src = 'img/key-squareNew.png'; // Замените путь на путь к новому изображению
        });

        navElement.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.box');

    navElements.forEach(function(navElement) {
        var navIcon = navElement.querySelector('.nav__icon img');
        var originalSrc = navIcon.src;

        navElement.addEventListener('mouseover', function() {
            navIcon.src = 'img/3d-square 1 (1).png'; // Замените путь на путь к новому изображению
        });

        navElement.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.wallet');

    navElements.forEach(function(navElement) {
        var navIcon = navElement.querySelector('.nav__icon img');
        var originalSrc = navIcon.src;

        navElement.addEventListener('mouseover', function() {
            navIcon.src = 'img/wallet-money 2 (1).png'; // Замените путь на путь к новому изображению
        });

        navElement.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.discount');

    navElements.forEach(function(navElement) {
        var navIcon = navElement.querySelector('.nav__icon img');
        var originalSrc = navIcon.src;

        navElement.addEventListener('mouseover', function() {
            navIcon.src = 'img/discount-shape 1 (1).png'; // Замените путь на путь к новому изображению
        });

        navElement.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.message');

    navElements.forEach(function(navElement) {
        var navIcon = navElement.querySelector('.nav__icon img');
        var originalSrc = navIcon.src;

        navElement.addEventListener('mouseover', function() {
            navIcon.src = 'img/message-question 1 (1).png'; // Замените путь на путь к новому изображению
        });

        navElement.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.user');

    navElements.forEach(function(navElement) {
        var navIcon = navElement.querySelector('.nav__icon img');
        var originalSrc = navIcon.src;

        navElement.addEventListener('mouseover', function() {
            navIcon.src = 'img/user-square 1 (1).png'; // Замените путь на путь к новому изображению
        });

        navElement.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
    });
});