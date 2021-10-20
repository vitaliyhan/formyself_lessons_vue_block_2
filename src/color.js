export default {
  bind(el, bindings, vnode) {
    console.log(bindings)
    console.log(vnode)
    el.style.color = bindings.value;
  }
}

