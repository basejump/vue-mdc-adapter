//
// vue PlugIn
//

import mdcBase from './base'
import mdcButton from './button'
import mdcCard from './card'
import mdcCheckbox from './checkbox'
import mdcDialog from './dialog'
import mdcDrawer from './drawer'
import mdcFab from './fab'
import mdcGridList from './grid-list'
import mdcIconToggle from './icon-toggle'
import mdcLayoutGrid from './layout-grid'
import mdcList from './list'
import mdcMenu from './menu'
import mdcRadio from './radio'
import mdcRipple from './ripple'
import mdcSelect from './select'
import mdcSnackbar from './snackbar'
import mdcSwitch from './switch'
import mdcTabs from './tabs'
import mdcTexfield from './textfield'
import mdcToolbar from './toolbar'
import mdcTypography from './typography'

const plugin = {
  install (vm) {
    vm.use(mdcBase)
    vm.use(mdcButton)
    vm.use(mdcCard)
    vm.use(mdcCheckbox)
    vm.use(mdcDialog)
    vm.use(mdcDrawer)
    vm.use(mdcFab)
    vm.use(mdcGridList)
    vm.use(mdcIconToggle)
    vm.use(mdcLayoutGrid)
    vm.use(mdcList)
    vm.use(mdcMenu)
    vm.use(mdcRadio)
    vm.use(mdcRipple)
    vm.use(mdcSelect)
    vm.use(mdcSnackbar)
    vm.use(mdcSwitch)
    vm.use(mdcTabs)
    vm.use(mdcTexfield)
    vm.use(mdcToolbar)
    vm.use(mdcTypography)
  }
}

export default plugin

// Auto-install
let _Vue = null
if (typeof window !== 'undefined') {
  _Vue = window.Vue
} else if (typeof global !== 'undefined') {
  _Vue = global.Vue
}
if (_Vue) {
  _Vue.use(plugin)
}
