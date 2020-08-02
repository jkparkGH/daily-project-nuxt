import Vue from 'vue'

Vue.filter('lineTextToHtml', (value) => {
  if (value) {
    return value.replace(/(?:\r\n|\r|\n|\/n|\/\n)/g, '<br />')
  } else {
    return '-'
  }
})
