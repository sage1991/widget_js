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
Page.prototype.destroy = function() {
    this.onDestroy();
    this.widget.destroy();
}


/*
    [ appendTo() ]
*/
Page.prototype.appendTo = function(target) {
    
    var widget = this.widget;
    widget.appendTo(target);
    widget.addClass("next_page_animation");
    var animationEnd = function() {
        widget.removeClass("next_page_animation");
        widget.html.removeEventListener("animationend", animationEnd);
    }
    widget.html.addEventListener("animationend", animationEnd);
}


/*
    [ removeFrom() ]
*/
Page.prototype.removeFrom = function(target) {
    var _this = this;
    var widget = this.widget;
    widget.addClass("before_page_animation");
    var animationEnd = function() {
        widget.removeClass("before_page_animation");
        widget.html.removeEventListener("animationend", animationEnd);
        widget.removeFrom(target);
    }
    widget.html.addEventListener("animationend", animationEnd);
}


Page.prototype.getWidgetByKey = function(key) {
    return this.widget.getWidgetByKey(key);
}


Page.prototype.getWidgetsByGroup = function(group) {
    return this.widget.getWidgetsByGroup(group);
}


