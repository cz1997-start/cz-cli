"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var templateList = [{
  type: 'list',
  message: 'Please select template',
  name: 'template',
  choices: ["vue3-template", "vue2-template"],
  filter: function filter(val) {
    // 使用filter将回答变为小写
    return val.toLowerCase();
  }
}];
var templateUrlMap = {
  "vue3-template": 'direct:https://github.com/cz1997-start/vue-spa-cli.git',
  "vue2-template": 'direct:https://github.com/cz1997-start/vue-spa-cli.git'
};
var _default = {
  templateList: templateList,
  templateUrlMap: templateUrlMap
};
exports["default"] = _default;