function Navigation(view) {
    this.view = view;
    this.history = [];
}


Navigation.prototype.route = function(routeMap) {
    this.route = routeMap;
}


Navigation.prototype.push = function(key) {
    if(this.route[key] != null) {
        
        console.log(this.history);
        
        var previousPage = null;
        if(this.history.length != 0) {
            previousPage = this.history[this.history.length - 1];
        }
        
        var isIntheHistory = false;
        for(var i = 0; i < this.history.length; i++) {
            if(this.history[i] == this.route[key]) {
                isIntheHistory = true;
                break;
            }
        }
        
        this.history.push(this.route[key]);
        this.route[key].appendTo(this.view);
        if(isIntheHistory) {
            this.route[key].onResume();
        } else {
            this.route[key].onStart();
            this.route[key].onResume();
        }
        
        if(previousPage != null) {
            previousPage.onPause();
        }
        
    }
}


Navigation.prototype.pop = function() {
    console.log(this.history);
    var page = this.history.pop();
    page.destroy();
    page.removeFrom(this.view);
}

