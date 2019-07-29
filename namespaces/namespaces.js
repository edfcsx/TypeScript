var Geometry;
(function (Geometry) {
    var Area;
    (function (Area) {
        function rectangle(base, height) {
            return base * height;
        }
        Area.rectangle = rectangle;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
var Geometry;
(function (Geometry) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function circumference(radius) {
            return PI * Math.pow(radius, 2);
        }
        Area.circumference = circumference;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
///<reference path="./geometryRectangle.ts" />
///<reference path="./geometryCircle.ts" />
// Line commander for compiler file with references
// tsc -w --outFile namespaces.js namespaces.ts
console.log(Geometry.Area.circumference(10));
console.log(Geometry.Area.rectangle(3, 4));
