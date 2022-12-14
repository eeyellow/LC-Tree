import { Tree } from './Tree.js'

/**
 * LCTree類別 - 樹狀選單
 */
export class LCTree {
    /**
     * 建構式
     * @param {string} 裝載容器的選擇器
     * @param {Array.<Object>} 樹狀選單資料
     */
    constructor (containerSelector, arrData, options = {}) {
        const o = this
        this.container = document.querySelector(containerSelector)

        this.arrData = JSON.parse(JSON.stringify(arrData))

        this.settings = Object.assign({
            ShowTypeIcon: true
        }, options.settings)

        this.css = Object.assign({
            Hide: 'LCTree-Hide',
            Icon: 'LCTree-Icon',

            ToolArea: 'LCTree-ToolArea',
            ToolAreaExpend: 'LCTree-ToolAreaExpend',
            ToolAreaShrink: 'LCTree-ToolAreaShrink',

            MainArea: 'LCTree-MainArea',
            MainAreaRow: 'LCTree-MainAreaRow',
            MainAreaRowIcon: 'LCTree-MainAreaRowIcon',
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

        // 建立樹狀結構根節點
        this.store = new Tree(0, '根')

        this.Init()
        this.RenderContainer()
        this.RenderToolArea()
        this.RenderMainArea()
    }

    /**
     * Store初始化
     */
    Init () {
        // 找出根節點的子節點，並接著遞迴處理
        this.arrData
            .filter(a => a.parent_id === 0)
            .forEach(d => this.InsertNode(0, d))
    }

    /**
     * 樹狀結構加入子節點到目標父節點中
     * @param {*} parentId 父節點的Key
     * @param {*} data 子節點的資料
     */
    InsertNode (parentId, data) {
        this.store.insert(parentId, data.id, data.name, { ...data });
        this.arrData
            .filter(a => a.parent_id === data.id)
            .forEach(d => this.InsertNode(data.id, d))
    }

    /**
     * 渲染主容器
     */
    RenderContainer () {
        const fragment = document.createDocumentFragment()

        const toolArea = document.createElement('div')
        toolArea.classList.add(this.css.ToolArea)
        fragment.appendChild(toolArea)

        const mainArea = document.createElement('div')
        mainArea.classList.add(this.css.MainArea)
        fragment.appendChild(mainArea)

        this.container.appendChild(fragment)
    }

    /**
     * 渲染工具區
     */
    RenderToolArea () {
        // #region HTML
        const fragment = document.createDocumentFragment()

        // #region 選單工具區
        const toolExpend = document.createElement('div')
        toolExpend.classList.add(this.css.ToolAreaExpend)
        const toolExpendImage = document.createElement('img')
        toolExpendImage.classList.add(this.css.Icon)
        toolExpendImage.src = this.icon.ToolExpend
        toolExpendImage.title = '全部展開'
        toolExpend.appendChild(toolExpendImage)
        fragment.appendChild(toolExpend)

        const toolShrink = document.createElement('div')
        toolShrink.classList.add(this.css.ToolAreaShrink)
        const toolShrinkImage = document.createElement('img')
        toolShrinkImage.classList.add(this.css.Icon)
        toolShrinkImage.src = this.icon.ToolShrink
        toolShrinkImage.title = '全部折疊'
        toolShrink.appendChild(toolShrinkImage)
        fragment.appendChild(toolShrink)
        // #endregion 選單工具區

        // #endregion HTML

        // #region Event
        toolExpend.addEventListener('click', e => {
            this.store.AllExpend()
            this.RenderMainArea()
        })
        toolShrink.addEventListener('click', e => {
            this.store.AllShrink()
            this.RenderMainArea()
        })
        // #endregion Event

        this.container.querySelector(`.${this.css.ToolArea}`).replaceChildren(fragment)
    }

    /**
     * 渲染樹狀選單區
     */
    RenderMainArea () {
        // #region HTML
        const fragment = document.createDocumentFragment()

        // #region 主內容(樹狀選單)區
        for (const node of this.store.preOrderTraversal()) {
            if (node.depth > 0) { // 根節點不用渲染（要依需求調整）
                // 資料列
                const mainAreaRow = document.createElement('div')
                mainAreaRow.classList.add(this.css.MainAreaRow)
                mainAreaRow.dataset.key = node.key
                if (node.depth > 1 && !node.allParent.map(p => p.isOpen).filter(o => o !== undefined).reduce((pre, curr) => curr && pre)) {
                    mainAreaRow.classList.add(this.css.Hide)
                }
                Object.assign(mainAreaRow.style, { paddingLeft: `${(node.depth - 1) * 20}px` })

                const mainAreaRowIcon = document.createElement('div')
                mainAreaRowIcon.classList.add(this.css.MainAreaRowIcon)

                const mainAreaRowIconCheckbox = document.createElement('img')
                mainAreaRowIconCheckbox.classList.add(this.css.Icon)
                mainAreaRowIconCheckbox.src = node.isCheck ? this.icon.CheckboxDisabledChecked : this.icon.CheckboxUnchecked
                mainAreaRowIcon.appendChild(mainAreaRowIconCheckbox)

                if (this.settings.ShowTypeIcon && !node.isLeaf) {
                    const mainAreaRowIconImage = document.createElement('img')
                    mainAreaRowIconImage.classList.add(this.css.Icon)
                    mainAreaRowIconImage.src = node.isOpen ? this.icon.FolderOpen : this.icon.FolderClose
                    mainAreaRowIcon.appendChild(mainAreaRowIconImage)
                }

                mainAreaRow.appendChild(mainAreaRowIcon)

                const mainAreaRowText = document.createElement('div')
                mainAreaRowText.classList.add(this.css.MainAreaRowText)
                mainAreaRowText.innerText = node.value
                mainAreaRow.appendChild(mainAreaRowText)

                fragment.appendChild(mainAreaRow)
            }
        }

        // #endregion 主內容(樹狀選單)區

        // #endregion HTML

        // #region Event
        this.container.querySelector(`.${this.css.MainArea}`).addEventListener('click', e => {
            // debugger
        })

        // #endregion Event

        this.container.querySelector(`.${this.css.MainArea}`).replaceChildren(fragment)
    }
}
