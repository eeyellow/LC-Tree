import { LCTree } from './LCTree.js'

let arrData = [
    { id: 1, parent_id: 0, name: '選單1' },
    { id: 2, parent_id: 0, name: '選單2' },
    { id: 3, parent_id: 0, name: '選單3' },
    { id: 4, parent_id: 0, name: '選單4' },
    { id: 5, parent_id: 1, name: '選單1-1' },
    { id: 6, parent_id: 1, name: '選單1-2' },
    { id: 7, parent_id: 6, name: '選單1-2-1' },
    { id: 8, parent_id: 6, name: '選單1-2-2' },
    { id: 9, parent_id: 4, name: '選單4-1' },
    { id: 10, parent_id: 4, name: '選單4-2' },
    { id: 11, parent_id: 9, name: '選單4-1-1' },
    { id: 12, parent_id: 10, name: '選單4-2-1' },
]
window.arrData = arrData

document.addEventListener("DOMContentLoaded", function () {
    window.LC = window.LC || {}
    window.LC.Tree = new LCTree('.LCTree', arrData)
})