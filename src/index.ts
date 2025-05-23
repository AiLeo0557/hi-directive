export default {
  install(app: any) {
    app.directive('mouse-in-out', {
      mounted(el: HTMLElement, binding: any) {
        switch (binding.arg) {
          case 'in':
            el.onmouseenter = binding.value.bind(null, true)
            break
          case 'out':
            el.onmouseleave = binding.value.bind(null, false)
            break
          default:
            el.onmouseleave = el.onmouseenter = binding.value.bind(null, undefined)
        }
      },
      beforeUnmount(el: HTMLElement) {
        el.onmouseenter = null
        el.onmouseleave = null
      },
    })
    app.directive('scroll-horizontal', {
      mounted(el: HTMLElement, binding: any) {
        el.onwheel = (e: any) => {
          const wheel_data = e.wheelDelta || -e.wheelDeltaY * 40
          binding.value.value.setScrollLeft(binding.value.value.wrapRef.scrollLeft - wheel_data)
        }
      },
      beforeUnmount(el: HTMLElement) {
        el.onwheel = null
      }
    })
  }
}