export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, "", event.target.href);
  
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname];
    
    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.querySelector("#app").innerHTML = html));

    
    this.setBgImg(pathname)
    this.setActiveLinkStyle(pathname)
  }

  setBgImg(pathname) {
    const body = document.querySelector('body')

    if(pathname == "/") {
      body.classList.add('home-bg')
      body.classList.remove('the-universe-bg')
      body.classList.remove('exploration-bg')
    }

    if(pathname == "/theuniverse") {
      body.classList.add('the-universe-bg')
      body.classList.remove('exploration-bg')
      body.classList.remove('home-bg')
    }

    if(pathname == "/exploration") {
      body.classList.add('exploration-bg')
      body.classList.remove('home-bg')
      body.classList.remove('the-universe-bg')
    }

  }

  setActiveLinkStyle(pathname) {
    const homeLink = document.querySelector('header nav a:nth-child(1)')
    const universeLink = document.querySelector('header nav a:nth-child(2)')
    const explorationLink = document.querySelector('header nav a:nth-child(3)')

    if(pathname == "/") {
      homeLink.classList.add('active-link')
      universeLink.classList.remove('active-link')
      explorationLink.classList.remove('active-link')
    }

    if(pathname == "/theuniverse") {
      universeLink.classList.add('active-link')
      homeLink.classList.remove('active-link')
      explorationLink.classList.remove('active-link')
    }

    if(pathname == "/exploration") {
      explorationLink.classList.add('active-link')
      homeLink.classList.remove('active-link')
      universeLink.classList.remove('active-link')
    }

  }
}