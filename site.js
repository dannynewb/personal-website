document.addEventListener('DOMContentLoaded', () => {
    addBurgerClickEvent();
    
    var theme = localStorage.getItem('theme');

    if (theme != 'null') {
        changeBodyBg(theme);
    }
    else {
        changeBodyBg('blue-jeans');
    }
});

function setSelectedTheme() {

}

function addBurgerClickEvent() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
}

function changeBodyBg(className) {
    localStorage.setItem('theme', className);

    var heroBody = document.getElementsByClassName('hero-body');
    removeClasses(heroBody[0])
    heroBody[0].classList.add(className);

    var navbarItems = document.getElementsByClassName('navbar-item');

    for (var navBarItemsIndex = 0; navBarItemsIndex < navbarItems.length; navBarItemsIndex++) {
        var currentNavbarItem = navbarItems[navBarItemsIndex];

        removeClasses(currentNavbarItem)

        if (currentNavbarItem.classList.contains('is-active') || currentNavbarItem.id == 'colour-picker') {
            currentNavbarItem.classList.add(className);
        }
    }
}

function removeClasses(element) {
    element.classList.remove("blue-jeans");
    element.classList.remove("magenta");
    element.classList.remove("fiery-rose");
    element.classList.remove("violet-blue");
    element.classList.remove("gunmetal");
}