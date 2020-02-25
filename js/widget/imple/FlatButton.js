function FlatButton(context) {
    
    context = (context != null) ? context : {};
    
    this.text = (context.text != null) ? context.text : "";
    this.onClick = context.onClick;
    
    ChildWidget.call(this, context);
}
FlatButton.prototype = Object.create(ChildWidget.prototype);



/* @override */
FlatButton.prototype.initWidget = function() {
    var _this = this;
    this.html.addEventListener("click", function(e) {
        if(typeof _this.onClick == "function") {
            _this.onClick(e);
        }
    });
}

/* @override */
FlatButton.prototype.build = function() {
    return  "<button data-widget-name='FlatButton' data-key='" + this.key + "' data-group='" + this.group + "' class='flat_button'>" +
                this.text + 
            "</button>";
}


/* @override */
FlatButton.prototype.destroy = function() {}
