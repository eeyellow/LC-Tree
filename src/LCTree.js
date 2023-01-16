import createElement from './vdom/createElement.js';
import render from './vdom/render.js';
import mount from './vdom/mount.js';
import diff from './vdom/diff.js';

/**
 * LCTree類別 - 樹狀選單
 */
export class LCTree {
    vApp
    rootEl
    /**
     * 建構式
     * @param {string} 裝載容器的選擇器
     * @param {Array.<Object>} 樹狀選單資料
     */
    constructor (containerSelector, arrData, options = {}) {
        this.container = document.querySelector(containerSelector)

        // 將資料轉為代理物件
        const tempArr = []
        JSON.parse(JSON.stringify(arrData)).forEach(d => {
            const proxyObj = new Proxy(d, {
                set: (target, property, value, receiver) => {
                    const result = Reflect.set(target, property, value, receiver);
                    this.Init()
                    return result
                }
            })

            tempArr.push(proxyObj)
        })
        this.arrData = new Proxy(tempArr, {
            set: (target, property, value, receiver) => {
                const result = Reflect.set(target, property, value, receiver);
                this.Update(target)
                return result
            }
        })

        this.settings = Object.assign({
            ShowTypeIcon: true
        }, options.settings)

        this.css = Object.assign({
            Hide: 'LCTree-Hide',
            Icon: 'LCTree-Icon',
            Eventable: 'LCTree-Eventable',

            ToolArea: 'LCTree-ToolArea',
            ToolAreaExpend: 'LCTree-ToolAreaExpend',
            ToolAreaShrink: 'LCTree-ToolAreaShrink',

            MainArea: 'LCTree-MainArea',
            MainAreaRow: 'LCTree-MainAreaRow',
            MainAreaRowIcon: 'LCTree-MainAreaRowIcon',
            MainAreaRowIconCheckbox: 'LCTree-MainAreaRowIconCheckbox',
            MainAreaRowIconFolderOpen: 'LCTree-MainAreaRowIconFolderOpen',
            MainAreaRowIconFolderClose: 'LCTree-MainAreaRowIconFolderClose',
            MainAreaRowText: 'LCTree-MainAreaRowText',
        }, options.css || {})

        this.icon = Object.assign({
            ToolExpend: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA0UlEQVRIie2W0Q6CMAxFT/wHF/wTf19IJCBP+uDn4Isks7TNxnxRdpKFkPT2MqBdobJHemBWVpeg7QxtLwMPivhsJJ0TjC2snCuDZT2B0wajI3AXuZKNH9E1ZJgGoc02jp86dedS02wx1hJ55pqpzOfSAW10H7+60dHd0D+NzJdFACaUsojo3zE5/0OlskMCcAUuTkxLYTkNfNZr3EAGRzeiNxCZz8RrmY0lUmKX9lp8SHimnvnvHIs5O5UUDQLfnLlWxtrMZR19JTOXVw2VP+UFNPN/MOXTrioAAAAASUVORK5CYII=',
            ToolShrink: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAA3ElEQVRYhe2XOw7CMBBEH9wBxIE4Mw1URBEFVKTgKHSEAluyrLWxhb2LECO5iPKZFzs76yyw0RrYAXcr8wmYgbO2+Qq4OvMbsPmbt9AIDJnz4ZpP7ripZjckqUx7CkBtzSUA1Q8uBlD/2kMAk1LzAGZ17gG6lloJgEnCxQC5IYbVsgHAofC6VFiJGil7q33NQyWlZuBReP/2U4BahaWW6wFdFHc1VQApZNQAUgmnApCL1+4A77K9K0BJY+kGUNrVugDUbCAH4NjS/Hf37V9tDq8fRJOdjNcJuFiZPwFx+IXYbmFJMAAAAABJRU5ErkJggg==',

            // FolderClose: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIie3VMQ5AQBQE0MfFtLj/CXYdQKGnoUU2vojsJFNsM+93yx8yImM96YyuFLgaP7qUInfGS5oxNPsjKjka0EaOV6ACFajAl4ApcD/DgOT5DyehDzz+pWxDZ0aAC5Uj5QAAAABJRU5ErkJggg==',
            FolderClose: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgElEQVR4nO3UsQ3CMBBA0bdBGIEOJkBMALtACRMxQcYApolLKiMkoECJaHyRLPl3rp4s35lWre2xjgTOyEjYRgDHN5AjocsPkjGUhjpcR6DUoH8tcJ94o42CLfEYgfpqbtLhFjnOU2M8RAOp5J7MsvGHOf6uV6do4NMOq++pVX1P3nlQZdlb7fIAAAAASUVORK5CYII=',
            // FolderOpen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRIie3VP0vCURjF8Q8iEjQFDm4Nbb2JCCLwz6tp6zUJBtEuLe01N2XhoENDUISow68HfmCK5fPb/MKBO51zn3O597JnCzoYYfGL3nG2a8A689DHriGbzP+qN3SrDFjgYV3AN67Q/H8Zq9RK62s84ylpkhHaMcEXjjBOMg+9xAT3OEUro5YSjQi4Qy/ZHG5hjhN53Zd1Cec4rsB8inoNQ9XUM8AszmDl9iXQj8UhPuXWM0Gd4qJd4CB59zeYRUCl9cCj3HrGfuoJeopnNsP8VfGB7dmeJRnZ2UuriPksAAAAAElFTkSuQmCC',
            FolderOpen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4nO2TMQqAMAxF3670gnpNnZ2yeqSK0IKWxlbbRciDQIfk/WYIGMZvccAKLOHd2ndjBATwoUQZdpm+c7bIfBnySkgqjzV92cAnIZq8eoOnH+6hShtWMQBbRtZFXhsiLfJSiPSQayFd5REXDurVURnGDzgAY95HHhGSjp4AAAAASUVORK5CYII=',

            CheckboxUnchecked: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nO2WQQoAMAjD8v9Pd0/wotuEBLwXNEUQ+ZQMzb4AXRggrgCPEDXEIspodRaoYdQQNWTpS5ZXAUS4xQFiTJ9hjE0QswAAAABJRU5ErkJggg==',
            CheckboxChecked: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVR4nO2WSw6AIAxE5xRAvCIe14iepm66YCGfxAKKnaQ7oG8GCAAq1UtFjep7AFJSAPrVFjgAfhSAAxB47tobwALYeN4BYOkJYDPNxQA8R5yLPSTGPAZYEw1qmosAmCjikyMuxS4KcOe2xrn4ITSR6xrn4gBgtztXyXmza2i4pNab6y2YC4BGf8loFIBKhV66ALSFwbHLylWKAAAAAElFTkSuQmCC',
            CheckboxDisabledUnchecked: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAF1JREFUWEft17ENACAIRFHZhf0nul20spKYSDRYfHvhfKFAk9Rb4TECIBAJuPuTsZS01A2H8JsAUeIMzXzQsQABEEAAAQQQQACBcoHM9rO7c7wRlQW43XhXj68ZAgN3FeqBuueZgwAAAABJRU5ErkJggg==',
            CheckboxDisabledChecked: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAQ1JREFUWEftl9sNgzAMRS+sgOCfxy4sAbMgZgGGYBbCBMAMrRyJKk1DSSClrRR+eFn29fFVAh5j7IYvHp4T4AioCGRZ9hFbMsZe8ipN+DMCVIqPoFkbMibgBPwlgWma0Pc9iqJ42OUyD1BxKjyOI6qqQlmWXMQlAuZ55gWHYUCSJGjbFlEUXSPgXXFrBKijPM8RhuHTUiBiT9OUdy7HnB5B0zSo6xpyAZ3iVggsy8LNRfON4xhd18H3/c2Zy6vlaQKUUO6WnpHbt7CLIqwIoIQiCbqX3b61T1gTIJKga5XhVCKsClhJ0DkIAq3N0boArapCkBNwmIAp6r144y+ivYSm77UFmCY+E+9+zRyBO5CgU5DFCIwIAAAAAElFTkSuQmCC',
        }, options.icon)

        this.Init()
    }

    /**
     * Store初始化
     */
    Init () {
        this.vApp = this.createVApp(this.arrData);
        const $app = render(this.vApp);
        this.rootEl = mount($app, this.container);
    }

    createVApp (arrData) {
        const childrenRows = arrData.map(d => {
            return createElement('div', {
                attrs: {
                    class: `${this.css.MainAreaRow}`,
                    'data-key': d.id
                },
                children: [
                    createElement('img', {
                        attrs: {
                            src: `${this.icon.CheckboxDisabledChecked}`
                        }
                    }),
                    createElement('label', {
                        attrs: {
                            class: `${this.css.MainAreaRowText}`
                        },
                        children: [
                            String(`${d.name}`)
                        ]
                    }),
                ]
            })
        })
        return createElement('div', {
            attrs: {
                class: `${this.css.MainArea}`
            },
            children: childrenRows,
        })
    }

    Update (arrData) {
        const vNewApp = this.createVApp(arrData);
        const patch = diff(this.vApp, vNewApp);
        this.rootEl = patch(this.rootEl);
        this.vApp = vNewApp;
    }
}
