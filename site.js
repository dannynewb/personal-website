function changeBodyBg(className) {
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