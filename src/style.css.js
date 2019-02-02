// lets have some CSS in JS: style.css.js
var variables = {
    backgroundColor: '#202020'
}
var button = {
    backgroundColor: variables.backgroundColor,
    padding: '12px',
    borderRadius: '2px',
    width: '100%'
}

export default { button, variables}