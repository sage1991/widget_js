function Navigation(view) {
    this.view = view;
    this.history = [];
}


Navigation.prototype.route = function(routeMap) {
    this.route = routeMap;
}


Navigation.prototype.push = function(key) {
    if(this.route[key] != null) {
        this.route[key].appendTo(this.view);
    }
}


Navigation.prototype.pop = function() {
}