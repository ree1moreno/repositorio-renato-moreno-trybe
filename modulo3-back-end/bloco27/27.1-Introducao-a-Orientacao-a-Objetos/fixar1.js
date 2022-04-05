var TV = /** @class */ (function () {
    function TV(brand, size, resolution, connections) {
        console.log("Creating tv ".concat(brand));
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    TV.prototype.turnOn = function () {
        console.log("TV ".concat(this._brand, " - ").concat(this._size, " ").concat(this._resolution, ". Connections: ").concat(this._connections));
    };
    Object.defineProperty(TV.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (this._connections.includes(value)) {
                this._connectedTo = value;
                console.log(this._connectedTo);
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return TV;
}());
var tv1 = new TV('Samsung', 50, 'Ultra HD 4k', ['HDMI', 'USB', 'Wi-Fi']);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log('connectedTo', tv1.connectedTo);
