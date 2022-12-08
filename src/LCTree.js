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
    constructor(containerSelector, arrData, options = {}) {
        let o = this
        this.container = document.querySelector(containerSelector)
        
        this.arrData = JSON.parse(JSON.stringify(arrData))

       

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
            FolderClose: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIie3VMQ5AQBQE0MfFtLj/CXYdQKGnoUU2vojsJFNsM+93yx8yImM96YyuFLgaP7qUInfGS5oxNPsjKjka0EaOV6ACFajAl4ApcD/DgOT5DyehDzz+pWxDZ0aAC5Uj5QAAAABJRU5ErkJggg==',
            FolderOpen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRIie3VP0vCURjF8Q8iEjQFDm4Nbb2JCCLwz6tp6zUJBtEuLe01N2XhoENDUISow68HfmCK5fPb/MKBO51zn3O597JnCzoYYfGL3nG2a8A689DHriGbzP+qN3SrDFjgYV3AN67Q/H8Zq9RK62s84ylpkhHaMcEXjjBOMg+9xAT3OEUro5YSjQi4Qy/ZHG5hjhN53Zd1Cec4rsB8inoNQ9XUM8AszmDl9iXQj8UhPuXWM0Gd4qJd4CB59zeYRUCl9cCj3HrGfuoJeopnNsP8VfGB7dmeJRnZ2UuriPksAAAAAElFTkSuQmCC',
        }, options.icon)
        
        //建立樹狀結構根節點
        this.store = new Tree(0, '根')


        this.storeproxy = new Proxy(this.store, {
            get(target, prop, receiver) {
                //debugger;
                let value = Reflect.get(...arguments);                                
                return typeof value == 'function' ? value.bind(target) : value;
            }
            // ,set: (target, property, value) => {
            //     debugger;
            //     // 觸發回調函數
            //     this.StoreProxyCallback(property, value);
            //     // 修改物件屬性
            //     target[property] = value;
            //     
            //     return true;
            // }
        });

        this.Init()
        this.RenderContainer()
        this.RenderToolArea()
        this.RenderMainArea()
    }

    /**
     * Store初始化
     */
    Init() {
        //找出根節點的子節點，並接著遞迴處理
        this.arrData
            .filter(a => a.parent_id === 0)
            .forEach(d => this.InsertNode(0, d))
    }

    /**
     * 樹狀結構加入子節點到目標父節點中
     * @param {*} parentId 父節點的Key
     * @param {*} data 子節點的資料
     */
    InsertNode(parentId, data) {
        this.store.insert(parentId, data.id, data.name, { isOpen: data.isOpen });
        this.arrData
            .filter(a => a.parent_id === data.id)
            .forEach(d => this.InsertNode(data.id, d))
    }
    
    StoreProxyCallback(property, value){
        debugger
    }

    RenderContainer(){
        let fragment = document.createDocumentFragment()
        
        let toolArea = document.createElement('div')
        toolArea.classList.add(this.css.ToolArea)
        fragment.appendChild(toolArea)

        let mainArea = document.createElement('div')
        mainArea.classList.add(this.css.MainArea)
        fragment.appendChild(mainArea)

        this.container.appendChild(fragment)
    }
    
    RenderToolArea(){
        //#region HTML
        let fragment = document.createDocumentFragment()

        //#region 選單工具區
        let toolExpend = document.createElement('div')
        toolExpend.classList.add(this.css.ToolAreaExpend)
        let toolExpendImage = document.createElement('img')
        toolExpendImage.classList.add(this.css.Icon)                
        toolExpendImage.src = this.icon.ToolExpend
        toolExpendImage.title = '全部展開'
        toolExpend.appendChild(toolExpendImage)
        fragment.appendChild(toolExpend)

        let toolShrink = document.createElement('div')
        toolShrink.classList.add(this.css.ToolAreaShrink)
        let toolShrinkImage = document.createElement('img')
        toolShrinkImage.classList.add(this.css.Icon)                
        toolShrinkImage.src = this.icon.ToolShrink
        toolShrinkImage.title = '全部折疊'
        toolShrink.appendChild(toolShrinkImage)
        fragment.appendChild(toolShrink)
        //#endregion 選單工具區
        
        //#endregion HTML

        //#region Event 
        toolExpend.addEventListener('click', e => {
            this.store.AllExpend()            
            this.RenderMainArea()
        })
        toolShrink.addEventListener('click', e => {
            this.store.AllShrink()
            this.RenderMainArea()
        })
        //#endregion Event 

        this.container.querySelector(`.${this.css.ToolArea}`).replaceChildren(fragment)   
    }

    RenderMainArea() {
        //#region HTML
        let fragment = document.createDocumentFragment()
        
        //#region 主內容(樹狀選單)區
        for (let node of this.store.preOrderTraversal()) {            
            if(node.depth > 0) { //根節點不用渲染（要依需求調整）
                //資料列
                let mainAreaRow = document.createElement('div')
                mainAreaRow.classList.add(this.css.MainAreaRow)
                mainAreaRow.dataset.key = node.key              
                if(node.depth > 1 && !node.allParent.map(p => p.isOpen).filter(o => o !== undefined).reduce((pre, curr) => curr && pre)){
                    mainAreaRow.classList.add(this.css.Hide)
                }
                Object.assign(mainAreaRow.style, { paddingLeft: `${(node.depth - 1) * 20}px` })
                
                let mainAreaRowIcon = document.createElement('div')
                mainAreaRowIcon.classList.add(this.css.MainAreaRowIcon)
                
                let mainAreaRowIconImage = document.createElement('img')
                mainAreaRowIconImage.classList.add(this.css.Icon)                
                mainAreaRowIconImage.src = node.isOpen ? this.icon.FolderOpen : this.icon.FolderClose

                mainAreaRowIcon.appendChild(mainAreaRowIconImage)
                mainAreaRow.appendChild(mainAreaRowIcon)

                let mainAreaRowText = document.createElement('div')
                mainAreaRowText.classList.add(this.css.MainAreaRowText)                
                mainAreaRowText.innerText = node.value                
                mainAreaRow.appendChild(mainAreaRowText)
                                                
                fragment.appendChild(mainAreaRow)
            }            
        }
        
        
        //#endregion 主內容(樹狀選單)區

        //#endregion HTML

        //#region Event                
        fragment.querySelectorAll(`.${this.css.MainAreaRow}`).forEach(t => {            
            t.addEventListener('click', e => {
                let targetKey = e.currentTarget.dataset.key
                this.store.toggleProp({ key: targetKey, prop: 'isOpen'})     
                this.RenderMainArea()
            })
        })

        //#endregion Event
        
        this.container.querySelector(`.${this.css.MainArea}`).replaceChildren(fragment)        
    }
}
