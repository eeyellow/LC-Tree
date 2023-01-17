import SimpleVDom from './SimpleVDom/index.js'

/**
 * LCTree類別 - 樹狀選單
 */
export class LCTree {
    #vDom
    #rootEl
    #container
    #originData = []
    #arrData
    #settings = {
        RootValue: "",
        ShowTypeIcon: true
    }

    #css = {
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
    }

    #icon = {
        Empty: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=',

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
    }

    /**
     * 建構式
     * @param {string} 裝載容器的選擇器
     * @param {Array.<Object>} 樹狀選單資料
     */
    constructor (containerSelector, arrData, options = {}) {
        // #region 資料與代理
        this.#originData = this.#CalculateDelete(this.#CalculateLeaf(this.#CalculateDepth(JSON.parse(JSON.stringify(arrData)))))
        this.#originData.forEach(d => {
            d.isCheck = d.isCheck || false
            d.isOpen = d.isOpen || false
            d.isDisabled = d.isDisabled || false
        })

        // 將資料轉為代理物件
        const tempArr = []
        this.#originData.forEach(d => {
            const proxyObj = new Proxy(d, {
                set: (target, property, value, receiver) => {
                    const result = Reflect.set(target, property, value, receiver);
                    this.#originData = this.#CalculateDelete(this.#CalculateLeaf(this.#CalculateDepth(this.#originData)))
                    this.#Update()
                    return result
                }
            })

            tempArr.push(proxyObj)
        })
        this.#arrData = new Proxy(tempArr, {
            set: (target, property, value, receiver) => {
                const result = Reflect.set(target, property, value, receiver);
                this.#originData = this.#CalculateDelete(this.#CalculateLeaf(this.#CalculateDepth(JSON.parse(JSON.stringify(target)))))
                this.#Update()
                return result
            }
        })
        // #endregion 資料與代理

        // #region 覆寫預設值
        this.#settings = Object.assign(this.#settings, options.settings || {})

        this.#css = Object.assign(this.#css, options.css || {})

        this.#icon = Object.assign(this.#icon, options.icon || {})
        // #endregion 覆寫預設值

        // #region HTML容器

        this.#container = document.querySelector(containerSelector)

        // #region 工具區
        const toolDiv = document.createElement('div')
        toolDiv.classList = `${this.#css.ToolArea}`

        const fragment = document.createDocumentFragment()
        const toolExpend = document.createElement('div')
        toolExpend.classList.add(this.#css.ToolAreaExpend)
        const toolExpendImage = document.createElement('img')
        toolExpendImage.classList.add(this.#css.Icon)
        toolExpendImage.classList.add(this.#css.Eventable)
        toolExpendImage.dataset.event = 'AllExpend'
        toolExpendImage.src = this.#icon.ToolExpend
        toolExpendImage.title = '全部展開'
        toolExpend.appendChild(toolExpendImage)
        fragment.appendChild(toolExpend)

        const toolShrink = document.createElement('div')
        toolShrink.classList.add(this.#css.ToolAreaShrink)
        const toolShrinkImage = document.createElement('img')
        toolShrinkImage.classList.add(this.#css.Icon)
        toolShrinkImage.classList.add(this.#css.Eventable)
        toolShrinkImage.dataset.event = 'AllShrink'
        toolShrinkImage.src = this.#icon.ToolShrink
        toolShrinkImage.title = '全部折疊'
        toolShrink.appendChild(toolShrinkImage)
        fragment.appendChild(toolShrink)

        toolDiv.replaceChildren(fragment)
        this.#container.appendChild(toolDiv)
        // #endregion 工具區

        // #region 主內容區
        const containerDiv = document.createElement('div')
        containerDiv.classList = `_temp_container`
        this.#container.appendChild(containerDiv)
        // #endregion 主內容區

        // #endregion HTML容器

        this.#Init()
        this.#EventBind()
    }

    /**
     * 初始化
     */
    #Init () {
        this.#vDom = this.#CreateVirtualDOM(this.#originData);
        const $app = SimpleVDom.render(this.#vDom);
        this.#rootEl = SimpleVDom.mount($app, this.#container.querySelector('._temp_container'));
    }

    /**
     * 建立VirtualDOM
     */
    #CreateVirtualDOM () {
        const childrenRows = this.#originData.map(d => {
            const shouldShow = d._show && !d.IsDelete
            const checkStyle = `Checkbox${d.isDisabled ? `Disabled` : ``}${d.isCheck ? `Checked` : `Unchecked`}`

            return SimpleVDom.createElement('div', {
                attrs: {
                    class: `${this.#css.MainAreaRow} ${shouldShow ? `` : this.#css.Hide}`,
                    'data-key': d.id,
                    style: `padding-left: ${d._depth * 25}px`
                },
                children: [
                    SimpleVDom.createElement('img', {
                        attrs: {
                            class: `${this.#css.Icon} ${this.#css.Eventable}`,
                            'data-event': 'Toggle',
                            'data-property': 'isOpen',
                            src: `${d._IsLeaf
                                ? this.#icon.Empty
                                : d.isOpen
                                    ? this.#icon.FolderOpen
                                    : this.#icon.FolderClose}`
                        }
                    }),
                    SimpleVDom.createElement('img', {
                        attrs: {
                            class: `${this.#css.Icon} ${this.#css.Eventable}`,
                            'data-event': 'Toggle',
                            'data-property': 'isCheck',
                            src: `${this.#icon[checkStyle]}`
                        }
                    }),
                    SimpleVDom.createElement('label', {
                        attrs: {
                            class: `${this.#css.MainAreaRowText}`
                        },
                        children: [
                            String(`${d.name}`)
                        ]
                    }),
                ]
            })
        })
        return SimpleVDom.createElement('div', {
            attrs: {
                class: `${this.#css.MainArea}`
            },
            children: childrenRows,
        })
    }

    /**
     * 計算每筆資料的深度(Depth)
     * @param {*} arrData
     */
    #CalculateDepth (arrData, parentId = this.#settings.RootValue, depth = 0, show = true) {
        const newData = []
        for (const data of arrData) {
            if (data.parent_id === parentId) {
                data._depth = depth
                data._show = show

                newData.push(data)

                newData.push(this.#CalculateDepth(arrData, data.id, depth + 1, data.isOpen && show))
            }
        }

        return newData.flat()
    }

    /**
     * 計算每筆資料是否為Leaf
     */
    #CalculateLeaf (arrData) {
        const hash = {};
        for (const data of arrData) {
            if (!data.IsDelete && !hash[data.parent_id]) {
                hash[data.parent_id] = true;
            }
        }

        for (const data of arrData) {
            data._IsLeaf = !hash[data.id];
        }

        return arrData;
    }

    /**
     * 計算每筆資料是否為Delete
     */
    #CalculateDelete (arrData) {
        for (const data of arrData) {
            if (!Object.prototype.hasOwnProperty.call(data, `IsDelete`)) {
                data.IsDelete = false
            }
        }

        const hash = {}
        for (const data of arrData) {
            if (hash[data.parent_id]) {
                hash[data.id] = true
                data.IsDelete = true
            } else if (data.IsDelete && !hash[data.id]) {
                hash[data.id] = true
            }
        }

        return arrData
    }

    /**
     * 更新VirtualDOM
     */
    #Update () {
        const vNewApp = this.#CreateVirtualDOM(this.#originData);
        const patch = SimpleVDom.diff(this.#vDom, vNewApp);
        this.#rootEl = patch(this.#rootEl);
        this.#vDom = vNewApp;
    }

    /**
     * 事件綁定
     */
    #EventBind () {
        // 工具區
        this.#container.querySelector(`.${this.#css.ToolArea}`).addEventListener('click', e => {
            if (e.target.classList.contains(this.#css.Eventable) && e.target.dataset.event) {
                this[e.target.dataset.event].apply(this)
            }
        })

        // 主內容區
        this.#container.querySelector(`.${this.#css.MainArea}`).addEventListener('click', e => {
            if (e.target.classList.contains(this.#css.Eventable) && e.target.dataset.event) {
                const key = e.target.closest(`.${this.#css.MainAreaRow}`).dataset.key * 1
                this[e.target.dataset.event](key, e.target.dataset)
            }
        })
    }

    /**
     * 刪除
     * @param {*} targetId
     */
    Delete (targetId) {
        const target = this.#arrData.find(a => a.id === targetId)
        if (target) {
            target.IsDelete = true
        }
    }

    /**
     * 切換屬性值
     * @param {*} targetId
     * @param {*} args
     */
    Toggle (targetId, args) {
        const target = this.#arrData.find(a => a.id === targetId)
        if (target && Object.prototype.hasOwnProperty.call(target, args.property)) {
            if (args.value === undefined) {
                target[args.property] = !target[args.property]
            } else {
                target[args.property] = args.value
            }
        }
    }

    /**
     * 全部展開
     */
    AllExpend () {
        this.#arrData.forEach(d => d.isOpen = true)
    }

    /**
     * 全部折疊
     */
    AllShrink () {
        this.#arrData.forEach(d => d.isOpen = false)
    }

    /**
     * 全部勾選
     */
    AllCheck () {
        this.#arrData.forEach(d => d.isCheck = true)
    }

    /**
     * 全部取消勾選
     */
    AllUncheck () {
        this.#arrData.forEach(d => d.isCheck = false)
    }

    /**
     * 取得所有資料
     */
    GetData () {
        return this.#originData
    }
}
