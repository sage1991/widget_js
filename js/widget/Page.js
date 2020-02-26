function Page(context) {
    context = (context != null) ? context : {};
    this.flag = context.flag;
    this.widget = this.build();
    this.onCreate();
}


/* life cycle */
Page.prototype.build = /* abstract Widget */ function() {}
Page.prototype.onCreate = /* abstract void */ function() {}
Page.prototype.onStart = /* abstract void */ function() {}
Page.prototype.onResume = /* abstract void */ function() {}
Page.prototype.onPause = /* abstract void */ function() {}
Page.prototype.onDestroy = /* abstract void */ function() {}



/* destroy page */
Page.prototype.destroy = /* abstract */ function() {}


/*
    [ appendTo() ]
*/
Page.prototype.appendTo = function(target) {
    
    var widget = this.widget;
    this.widget.appendTo(target);
    this.widget.addClass("next_page_animation");
    this.widget.html.addEventListener("animationend", function() {
        widget.removeClass("next_page_animation");
    });
}


/*
    [ removeFrom() ]
*/
Page.prototype.removeFrom = function(target) {
     this.widget.removeFrom(target);
}


Page.prototype.getWidgetByKey = function(key) {
    return this.widget.getWidgetByKey(key);
}


Page.prototype.getWidgetsByGroup = function(group) {
    return this.widget.getWidgetsByGroup(group);
}


