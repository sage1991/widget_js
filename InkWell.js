function InkWell(buildContext) {
    buildContext = (buildContext != null) ? buildContext : {};
    WebWidget.call(this, buildContext);
}
InkWell.prototype = Object.create(WebWidget.prototype);




InkWell.prototype.initWidget = function() {
    this.container = this.html.querySelector("div");
}


InkWell.prototype.build = function() {
    return  "<div data-widget-name='InkWell' style='position: relative; " + this.style + "' data-key='" + this.key + "'>" + 
                "<svg style='width: 100%; height: 100%; position: absolute; left: 0; top:0; margin: 0; padding: 0; transition: background-color 0.5s;'></svg>" +
                "<div style='position: absolute; top:0; width: 100%; height: 100%; margin: 0; padding: 0;'></div>" + 
            "</div>";
}


InkWell.prototype.initState = function() {
    
    var _this = this;
    this.radius = 0;
    this.svg = this.html.querySelector("svg");
    this.inkWellAnimationId = null;
    this.circle = null;
    
    this.html.addEventListener("touchstart", function(e) {
        if(_this.circle == null) {
            _this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            _this.circle.setAttribute("cx", e.offsetX);
            _this.circle.setAttribute("cy", e.offsetY);
            _this.circle.setAttribute("r", _this.radius);
            _this.circle.setAttribute("fill", "grey");
            _this.circle.setAttribute("style", "opacity:0.15;");

            _this.svg.style.backgroundColor = "rgba(100, 100, 100, 0.1)";
            _this.svg.appendChild(_this.circle);

            var animate = function() {
                _this.radius += 5;
                _this.circle.setAttribute("r", _this.radius);
                _this.inkWellAnimationId = requestAnimationFrame(animate);
            }
            animate();
        }
    });
    
    this.html.addEventListener("touchmove", function(e) {
        if(_this.circle != null) {
            cancelAnimationFrame(_this.inkWellAnimationId);
            _this.radius = 0;
            _this.inkWellAnimationId = null;
            _this.svg.removeChild(_this.circle);
            _this.circle = null;
            _this.svg.style.backgroundColor = "transparent";
        }
    });
    
    this.html.addEventListener("touchend", function(e) {
        if(_this.circle != null) {
            cancelAnimationFrame(_this.inkWellAnimationId);
            _this.radius = 0;
            _this.inkWellAnimationId = null;
            _this.svg.removeChild(_this.circle);
            _this.circle = null;
            _this.svg.style.backgroundColor = "transparent";
        }
    });
    
}


InkWell.prototype.destroy = function() {
    
}
