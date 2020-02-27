function Container(context) {
    context = (context != null) ? context : {};
    
    /* css 속성 shortcut */
    this.width = (context.width != null) ? context.width : "100%";
    this.height = (context.height != null) ? context.height : "100%";
    this.padding = (context.padding != null) ? context.padding : "0px";
    
    ChildWidget.call(this, context);
}
Container.prototype = Object.create(ChildWidget.prototype);



/* @override */
Container.prototype.initWidget = function() {
    this.frame = this.html;
}



/* @override */
Container.prototype.build = function() {
    return  "<div data-widget-name='Container' data-key='" + this.key + "' data-group='" + this.group + "'" + 
            " class='container' style='width:" + this.width + "; height:" + this.height + "; padding:" + this.padding + ";'></div>";
}