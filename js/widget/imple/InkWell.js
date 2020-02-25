function InkWell(context) {
    
    context = (context != null) ? context : {};
    
    this.inkColor = (context.inkColor) ? context.inkColor : "rgba(150, 150, 150, 0.1)";
    this.backgroundColor = (context.backgroundColor) ? context.backgroundColor : "rgba(100, 100, 100, 0.1)";
    this.diffusionSpeed = (context.diffusionSpeed) ? context.diffusionSpeed : 8;
    
    ChildWidget.call(this, context);
}
InkWell.prototype = Object.create(ChildWidget.prototype);




InkWell.prototype.initWidget = function() {
    this.frame = this.html.querySelector("div");
    this._initEvent();
}


InkWell.prototype.build = function() {
    return  "<div data-widget-name='InkWell' class='ink_well' style='' data-key='" + this.key + "' data-group='" + this.group + "'>" + 
                "<svg style='width: 100%; height: 100%; position: absolute; left: 0; top:0; margin: 0; padding: 0; transition: background-color 0.5s;'></svg>" +
                "<div style='position: absolute; top:0; width: 100%; height: 100%; margin: 0; padding: 0;'></div>" + 
            "</div>";
}


InkWell.prototype._initEvent = function() {
    var _this = this;
    this.radius = 0;
    this.svg = this.html.querySelector("svg");
    this.inkWellAnimationId = null;
    this.circle = null;
    
    // trigger inkwell animation when touch start
    this.html.addEventListener("touchstart", function(e) {
        
        if(_this.circle == null) {
            var x = e.targetTouches[0].pageX - _this.html.offsetLeft;
            var y = e.targetTouches[0].pageY - _this.html.offsetTop;
            _this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            _this.circle.setAttribute("cx", x);
            _this.circle.setAttribute("cy", y);
            _this.circle.setAttribute("r", _this.radius);
            _this.circle.setAttribute("fill", _this.inkColor);
            _this.svg.style.backgroundColor = _this.backgroundColor;
            _this.svg.appendChild(_this.circle);
            
            // inkwell animation
            var animate = function() {
                
                _this.maxRadius = Math.sqrt(Math.pow(_this.html.offsetWidth, 2) + Math.pow(_this.html.offsetHeight, 2));
                _this.radius += _this.diffusionSpeed;
                _this.circle.setAttribute("r", _this.radius);
                _this.inkWellAnimationId = requestAnimationFrame(animate);
                
                // cancel animation when radius reach up to max radius
//                if(_this.maxRadius <= _this.radius) {
//                    cancelAnimationFrame(_this.inkWellAnimationId);
//                    _this.inkWellAnimationId = null;
//                } 
//                
//                // other case
//                else {
//                    _this.circle.setAttribute("r", _this.radius);
//                    _this.inkWellAnimationId = requestAnimationFrame(animate);
//                }
            }
            
            animate();
        }
    });
    
    // cancel inkwell animation wen touch move or end
    this.html.addEventListener("touchmove", function(e) {
        if(_this.circle != null) {
            cancelAnimationFrame(_this.inkWellAnimationId);
            _this.inkWellAnimationId = null;
            _this.radius = 0;
            _this.svg.removeChild(_this.circle);
            _this.circle = null;
            _this.svg.style.backgroundColor = "transparent";
        }
    });
    
    
    this.html.addEventListener("touchend", function(e) {
        if(_this.circle != null) {
            cancelAnimationFrame(_this.inkWellAnimationId);
            _this.inkWellAnimationId = null;
            _this.radius = 0;
            _this.svg.removeChild(_this.circle);
            _this.circle = null;
            _this.svg.style.backgroundColor = "transparent";
        }
    });
    
}


InkWell.prototype.onDestroy = function() {
    
    if(this.circle != null) {
        cancelAnimationFrame(this.inkWellAnimationId);
        this.radius = 0;
        this.inkWellAnimationId = null;
        this.svg.removeChild(_this.circle);
        this.circle = null;
        this.svg.style.backgroundColor = "transparent";
    }
}
