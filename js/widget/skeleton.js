function Skeleton(context) {
    context = (context != null) ? context : {};
    Widget.call(this, context);
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
