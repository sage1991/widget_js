function Center(context) {
    
    context = (context != null) ? context : {};
    
    ChildWidget.call(this, context);
}
Center.prototype = Object.create(ChildWidget.prototype);



/* @override */
Center.prototype.initWidget = function() {
    this.frame = this.html;
}



/* @override */
Center.prototype.build = function() {
    return  "<div data-widget-name='Center' data-key='" + this.key + "' data-group='" + this.group + "' class='center'></div>";
}