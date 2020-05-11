document.addEventListener('DOMContentLoaded', () => {
    addBurgerClickEvent();
    getGitHubActivity();
    
    var theme = localStorage.getItem('theme');

    if (theme == 'null' || theme == null) {
        changeBodyBg('blue-jeans');
    }
    else {
        changeBodyBg(theme);
    }
});

function getGitHubActivity() {
    GitHubActivity.feed({
        username: "dannynewb",
        selector: "#feed",
        limit: 3
    });
}

function addBurgerClickEvent() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                const target = el.dataset.target;
                const $target = document.getElementById(target);

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
        else {
            currentNavbarItem.classList.add(className + '-hover');
        }
    }
}

function removeClasses(element) {
    element.classList.remove("blue-jeans");
    element.classList.remove("magenta");
    element.classList.remove("fiery-rose");
    element.classList.remove("violet-blue");
    element.classList.remove("gunmetal");

    element.classList.remove("blue-jeans-hover");
    element.classList.remove("magenta-hover");
    element.classList.remove("fiery-rose-hover");
    element.classList.remove("violet-blue-hover");
    element.classList.remove("gunmetal-hover");
}