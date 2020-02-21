function Skeleton(buildContext) {
    buildContext = (buildContext != null) ? buildContext : {};
    Widget.call(this, buildContext);
}
Skeleton.prototype = Object.create(Widget.prototype);



/* @override */
Skeleton.prototype.initWidget = function() {}

/* @override */
Skeleton.prototype.build = function() {
    return  "<div data-widget-name='Skeleton' data-key='" + this.key + "'></div>";
}

/* @override */
Skeleton.prototype.initState = function() {}

/* @override */
Skeleton.prototype.destroy = function() {}
