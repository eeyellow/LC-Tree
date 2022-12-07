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
        this.container = document.querySelector(containerSelector)
        
        this.arrData = JSON.parse(JSON.stringify(arrData))

        this.css = Object.assign({
            Hide: {
                display: 'none'
            },
            IconFolderClose: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIie3VMQ5AQBQE0MfFtLj/CXYdQKGnoUU2vojsJFNsM+93yx8yImM96YyuFLgaP7qUInfGS5oxNPsjKjka0EaOV6ACFajAl4ApcD/DgOT5DyehDzz+pWxDZ0aAC5Uj5QAAAABJRU5ErkJggg==',
            IconFolderOpen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRIie3VP0vCURjF8Q8iEjQFDm4Nbb2JCCLwz6tp6zUJBtEuLe01N2XhoENDUISow68HfmCK5fPb/MKBO51zn3O597JnCzoYYfGL3nG2a8A689DHriGbzP+qN3SrDFjgYV3AN67Q/H8Zq9RK62s84ylpkhHaMcEXjjBOMg+9xAT3OEUro5YSjQi4Qy/ZHG5hjhN53Zd1Cec4rsB8inoNQ9XUM8AszmDl9iXQj8UhPuXWM0Gd4qJd4CB59zeYRUCl9cCj3HrGfuoJeopnNsP8VfGB7dmeJRnZ2UuriPksAAAAAElFTkSuQmCC',
            MainArea: {
                height: '100%',
                background: '#EEE',
            },
            MainAreaRow: {
                display: 'flex'
            },
            MainAreaRowIcon: {
                marginRight: '5px'
            },
            MainAreaRowIconImage: {
                
            },
            MainAreaRowText: {

            }
        }, options.css || {})
        
        //建立樹狀結構根節點
        this.structure = new Tree(0, '根')

        this.Init()
        this.Render()
    }

    /**
     * 初始化
     */
    Init() {
        //找出根節點的子節點，並接著遞迴處理
        arrData
            .filter(a => a.parent_id === 0)
            .forEach(d => this.InsertNode(0, d))
    }

    /**
     * 樹狀結構加入子節點到目標父節點中
     * @param {*} parentId 父節點的Key
     * @param {*} data 子節點的資料
     */
    InsertNode(parentId, data) {
        this.structure.insert(parentId, data.id, data.name);
        arrData
            .filter(a => a.parent_id === data.id)
            .forEach(d => this.InsertNode(data.id, d))
    }
    
    Render() {
        let fragment = document.createDocumentFragment()
        
        let mainArea = document.createElement('div')
        mainArea.classList.add('LCTreeMainArea')
        Object.assign(mainArea.style, this.css.MainArea)
        for (let node of this.structure.preOrderTraversal()) {
            //console.table({key: node.key, value: node.value, depth: node.depth})
            
            if(node.depth > 0) { //根節點不用渲染（要依需求調整）
                let mainAreaRow = document.createElement('div')
                mainAreaRow.classList.add('LCTreeMainAreaRow')
                Object.assign(mainAreaRow.style, { paddingLeft: `${(node.depth - 1) * 20}px` }, this.css.MainAreaRow)
                
                let mainAreaRowIcon = document.createElement('div')
                mainAreaRowIcon.classList.add('LCTreeMainAreaRowIcon')
                Object.assign(mainAreaRowIcon.style, this.css.MainAreaRowIcon)
                let mainAreaRowIconImage = document.createElement('img')
                mainAreaRowIconImage.classList.add('LCTreeMainAreaRowIconImage')
                Object.assign(mainAreaRowIconImage.style, this.css.MainAreaRowIconImage)
                mainAreaRowIconImage.src = this.css.IconFolderClose
                mainAreaRowIcon.appendChild(mainAreaRowIconImage)
                mainAreaRow.appendChild(mainAreaRowIcon)

                let mainAreaRowText = document.createElement('div')
                mainAreaRowText.classList.add('LCTreeMainAreaRowText')
                Object.assign(mainAreaRowText.style, this.css.MainAreaRowText)
                mainAreaRowText.innerText = node.value
                
                mainAreaRow.appendChild(mainAreaRowText)
                
                
                mainArea.appendChild(mainAreaRow)
            }            
        }

        fragment.appendChild(mainArea)
        this.container.appendChild(fragment)
    }
}
