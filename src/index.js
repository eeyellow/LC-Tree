import { LCTree } from './LCTree.js'

const arrData = [
    { id: 1, parent_id: 0, name: '選單1', isOpen: true, isCheck: false, isDisabled: true },
    { id: 2, parent_id: 0, name: '選單2', isOpen: false, isCheck: false },
    { id: 3, parent_id: 0, name: '選單3', isOpen: false, isCheck: false },
    { id: 4, parent_id: 0, name: '選單4', isOpen: true, isCheck: false },
    { id: 5, parent_id: 1, name: '圖層1-1', isOpen: false, isCheck: false },
    { id: 6, parent_id: 1, name: '選單1-2', isOpen: true, isCheck: false },
    { id: 7, parent_id: 6, name: '圖層1-2-1', isOpen: true, isCheck: true },
    { id: 8, parent_id: 6, name: '圖層1-2-2', isOpen: false, isCheck: false },
    { id: 9, parent_id: 4, name: '選單4-1', isOpen: true, isCheck: false },
    { id: 10, parent_id: 4, name: '選單4-2', isOpen: true, isCheck: true, isDisabled: true },
    { id: 11, parent_id: 9, name: '圖層4-1-1', isOpen: true, isCheck: false },
    // { id: 12, parent_id: 10, name: '圖層4-2-1', isOpen: false, isCheck: false },
]
window.arrData = arrData

document.addEventListener("DOMContentLoaded", function () {
    window.LC = window.LC || {}
    window.LC.Tree = new LCTree('.LCTree', arrData)
})
