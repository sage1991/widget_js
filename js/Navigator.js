function Navigator(view) {
    console.log(view);
    this.view = view;
}


Navigator.prototype.route = function(routeMap) {
    this.route = routeMap;
}


Navigator.prototype.push = function(key) {
    console.log(this.route[key]);
    if(this.route[key] != null) {
        console.log(this.view);
        this.route[key].appendTo(this.view);
    }
}


Navigator.prototype.pop = function() {
}