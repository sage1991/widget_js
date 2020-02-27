function ListView(context) {
    context = context != null ? context : {};
    ChildrenWidget.call(this, context);
}
ListView.prototype = Object.create(ChildrenWidget.prototype);



/* @override */
ListView.prototype.initWidget = function() {
    this.frame = this.html;
}



/* @override */
ListView.prototype.build = function() {
    return  "<div data-widget-name='ListView' data-key='" + this.key + "' data-group='" + this.group + "' class='list_view'></div>";
}



ListView.prototype.push = function(widget) {
    this.chidren.push(widget);
    widget.appendTo(this.frame);
}



ListView.prototype.pop = function(widget) {
    var child = this.chidren.pop();
    child.destroy();
    child.removeFrom(this.frame);
}


ListView.prototype.splice = function(from, len) {
    var removedChildren = this.chidren.splice(from, len);
    for(var i = 0; i < removedChildren.length; i++) {
        removedChildren[i].destroy();
        removedChildren[i].removeFrom(this.frame);
    }
}


ListView.prototype.removeAll = function() {
    for(var i = 0; i < this.children.length; i++) {
        this.children[i].destroy();
        this.children[i].removeFrom(this.frame);
    }
    this.children = [];
}


ListView.prototype.get = function(index) {
    if(index < this.children.length && index >= 0) {
        return this.children[index];
    } else {
        return null;
    }
}