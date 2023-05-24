function secondVersion(className,img) {
    let navElements = document.querySelector(className);
    let navIcon = navElements.querySelector('.nav__icon img');
        let originalSrc = navIcon.src;
        navElements.addEventListener('mouseover', function() {
            navIcon.src = img;
        });
        navElements.addEventListener('mouseout', function() {
            navIcon.src = originalSrc;
        });
}
secondVersion('.key','img/key-squareNew.png')
secondVersion('.box','img/3d-square 1 (1).png')
secondVersion('.wallet','img/wallet-money 2 (1).png')
secondVersion('.discount','img/discount-shape 1 (1).png')
secondVersion('.message','img/message-question 1 (1).png')
secondVersion('.user','img/user-square 1 (1).png')