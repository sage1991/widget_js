function FlatButton(context) {
    
    context = (context != null) ? context : {};
    context.style = (context.style == null) ? "width:100%; height:100%; background-color:transparent; border:none;" : context.style;
    
    this.text = (context.text != null) ? context.text : "";
    this.onClick = context.onClick;
    
    
    Widget.call(this, context);
}
FlatButton.prototype = Object.create(Widget.prototype);



/* @override */
FlatButton.prototype.initWidget = function() {}

/* @override */
FlatButton.prototype.build = function() {
    return  "<button data-widget-name='FlatButton' data-key='" + this.key + "' style='" + this.style + "' class='" + this.class + "'>" +
                this.text + 
            "</button>";
}

/* @override */
FlatButton.prototype.initState = function() {
    var _this = this;
    this.html.addEventListener("click", function(e) {
        if(typeof _this.onClick == "function") {
            _this.onClick(e);
        }
    });
}

/* @override */
FlatButton.prototype.destroy = function() {}
