"use strict";

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.get('*', function (req, res, next) {
  var html = "\n        <html>\n            <head><title>My First SSR</title></head>\n            <body>\n                <h1>asdasdasdasdasds</h1>\n                <div id=\"root\"></div>\n                \n            </body>\n        </html>\n    ";
  res.send(html);
});

var server = _http["default"].createServer(app);

server.listen(process.env.PORT || 3000, function () {
  return console.log('Server is listening');
});