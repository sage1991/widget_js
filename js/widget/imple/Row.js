function Row(context) {
    context = (context != null) ? context : {};
    
    /* css 속성 shortcut */
    this.reverse = context.reverse;
    this.justifyContent = context.justifyContent;
    this.alignItems = context.alignItems;
    
    ChildrenWidget.call(this, context);
}
Row.prototype = Object.create(ChildrenWidget.prototype);



/* @override */
Row.prototype.initWidget = function() {
    
    this.frame = this.html;
    
    if(this.reverse) {
        this.frame.style.flexDirection = "row-reverse";
    }
    
    if(this.justifyContent != null) {
        this.frame.style.justifyContent = this.justifyContent;
    }
    
    if(this.alignItems != null) {
        this.frame.style.alignItems = this.alignItems;
    }
    
}



/* @override */
Row.prototype.build = function() {
    return  "<div data-widget-name='Column' data-key='" + this.key + "' data-group='" + this.group + "' class='row'></div>";
}