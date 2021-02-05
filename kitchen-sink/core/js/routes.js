var routes = [
  // Index page
  {
    path: '/',
    componentUrl: './pages/home.html',
    name: 'home',
    master(f7) {
      return f7.theme === 'aurora';
    },
  },
  // About page
  {
    path: '/about/',
    componentUrl: './pages/about.html',
    name: 'about',
  },
  // names view
  {
    path: '/names/',
    componentUrl: './pages/names.html',
  },
  //colors view
  {
    path: '/colors/',
    componentUrl: './pages/colors.html',
  },
  //numbers view
  {
    path: '/numbers',
    componentUrl: './pages/numbers.html'
  },
  //phrases view
  {
    path: '/phrases/',
    componentUrl: './pages/phrases.html'
  },
  //family members view
  {
    path: '/family',
    componentUrl: './pages/family.html'
  },
  //history view
  {
    path: '/history',
    componentUrl: './pages/history.html'
  },
  //support view
  {
    path: '/support',
    componentUrl: './pages/support.html'
  },
  //favorites view
  {
    path: '/favorite',
    componentUrl: './pages/favorite.html'
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
