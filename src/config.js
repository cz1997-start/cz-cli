const templateList=[{
    type: 'list',
    message: 'Please select template',
    name: 'template',
    choices: [
        "vue3-template",
        "vue2-template",
    ],
    filter: function (val) { // 使用filter将回答变为小写
        return val.toLowerCase();
    }
  }]
const templateUrlMap={
    "vue3-template":'direct:https://github.com/cz1997-start/vue-spa-cli.git',
    "vue2-template":'direct:https://github.com/cz1997-start/vue-spa-cli.git'

}

export default {
    templateList,
    templateUrlMap
}