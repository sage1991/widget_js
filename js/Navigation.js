function Navigation(view) {
    this.view = view;
    this.history = [];
}


Navigation.prototype.route = function(routeMap) {
    this.route = routeMap;
}


Navigation.prototype.push = function(key) {
    if(this.route[key] != null) {
        
        /*
            [ history check ]
            
            if not in history {
                append to view
                onStart
            } else {
                check flag
                handle flag
            }
            onResume
        */
        
        this.route[key].appendTo(this.view);
        this.route[key].onStart();
    }
}


Navigation.prototype.pop = function() {
    /*
        go back word
    */
}

