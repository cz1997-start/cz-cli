"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

var _create = require("./create");

console.log('program----', _commander["default"]);

_commander["default"] // 定义命令和参数
.command('create <app-name>').description('create a new project') // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
.option('-f, --force', 'overwrite target directory if it exist').action(function (name, options) {
  (0, _create.create)(name, options);
});

_commander["default"] // 配置版本号信息
.version("v".concat(require('../package.json').version)).usage('<command> [option]'); // 解析用户执行命令传入参数


_commander["default"].parse(process.argv);