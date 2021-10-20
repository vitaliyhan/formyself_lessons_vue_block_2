export default {
  bind(el, bindings, vnode) {
    console.log(bindings)
    if (bindings.modifiers['border']) {
      el.style.border = '3px solid green'
    }
    if (bindings.modifiers['big']) {
      el.style.fontSize = '100px'
    }
      el.style[bindings.arg] = bindings.value
  }
}

