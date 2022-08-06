import { forEach } from 'lodash-es'
import type { App } from 'vue'
import * as components from '@/components/index'

export const createComponent = () => {
  // 这里做组件的预处理行为
  return {
    install: (app :App) => {
      forEach(components, component => {
        app.component(component.name, component)
      })
    }
  }
}

export { components }