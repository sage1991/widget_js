var WidgetParser = {
    "parser" : new DOMParser(),
    "parseFromString" : function(stringHtml) {
        return this.parser.parseFromString(stringHtml, "text/html").body.firstChild;
    }
};