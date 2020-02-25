function Scaffold(context) {
    
    context = (context != null) ? context : {};
    
    this.appBar = context.appBar;
    this.bottomNavigation = context.bottomNavigation;
    this.drawer = context.drawer;
    
    ChildWidget.call(this, context);
}
Scaffold.prototype = Object.create(ChildWidget.prototype);



/* @override */
Scaffold.prototype.initWidget = function() {
    this.appBarContainer = this.html.children[0];
    this.frame = this.html.children[1];
    this.bottomNavigationContainer = this.html.children[2];
    this.drawerContainer = this.html.children[3];
    
    var bodyCalc = 0;
    
    if(this.appBar != null) {
        bodyCalc += 54;
        this.appBarContainer.appendChild(this.appBar.html);
    } else {
        this.appBarContainer.style.display = "none";
    }
    
    if(this.bottomNavigation != null) {
        bodyCalc += 56;
        this.bottomNavigationContainer.appendChild(this.bottomNavigation.html);
    } else {
        this.bottomNavigationContainer.style.display = "none";
    }
    
    this.frame.style.height = "calc(100vh - " + bodyCalc + "px)";
}



/* @override */
Scaffold.prototype.build = function() {
    return  "<div data-widget-name='Scaffold' data-key='" + this.key + "' data-group='" + this.group + "' class='scaffold'>" + 
                "<div data-widget-name='Scaffold-appbar' style='width:100%; height:54px; background-color:skyblue;'></div>" + 
                "<div data-widget-name='Scaffold-body' style='width:100%; height:calc(100vh - 124px);'></div>" + 
                "<div data-widget-name='Scaffold-bottom-navigation' style='width:100%; height:56px; background-color:black;'></div>" + 
                "<div data-widget-name='Scaffold-drawer' style='position:absolute; left:100%; top:0px; width:100%; height:100% transition: background-color 0.5s;'></div>" + 
            "</div>";
}



Scaffold.prototype.openDrawer = function() {
    
}


Scaffold.prototype.closeDrawer = function() {
    
}