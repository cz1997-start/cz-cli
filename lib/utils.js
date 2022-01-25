"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadGitRepo = downloadGitRepo;

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _ora = _interopRequireDefault(require("ora"));

function downloadGitRepo(url) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  return new Promise(function (res, rej) {
    var spinner = (0, _ora["default"])("\u6B63\u5728\u4E0B\u8F7D\u9879\u76EE\u6A21\u677F\uFF0C\u6E90\u5730\u5740\uFF1A".concat(url));
    spinner.start();
    console.log('下载中----', url);
    (0, _downloadGitRepo["default"])(url, path, {
      clone: true
    }, function (err) {
      // clone false 设置成false 具体设置看官网设置
      if (err) {
        spinner.fail();
        rej(err);
      } else {
        // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
        spinner.succeed();
        res(url);
      }
    });
  });
}