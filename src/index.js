import { LCTree } from './LCTree.js'

// const arrData = [
//     { id: 1, parent_id: 0, name: '選單1', isOpen: true, isCheck: false, isDisabled: true },
//     { id: 2, parent_id: 0, name: '選單2', isOpen: false, isCheck: false },
//     { id: 3, parent_id: 0, name: '選單3', isOpen: false, isCheck: false },
//     { id: 4, parent_id: 0, name: '選單4', isOpen: true, isCheck: false },
//     { id: 5, parent_id: 1, name: '圖層1-1', isOpen: false, isCheck: false },
//     { id: 6, parent_id: 1, name: '選單1-2', isOpen: true, isCheck: false },
//     { id: 7, parent_id: 6, name: '圖層1-2-1', isOpen: true, isCheck: true },
//     { id: 8, parent_id: 6, name: '圖層1-2-2', isOpen: false, isCheck: false },
//     { id: 9, parent_id: 4, name: '選單4-1', isOpen: true, isCheck: false },
//     { id: 10, parent_id: 4, name: '選單4-2', isOpen: true, isCheck: true, isDisabled: true },
//     { id: 11, parent_id: 9, name: '圖層4-1-1', isOpen: true, isCheck: false },
//     { id: 12, parent_id: 10, name: '圖層4-2-1', isOpen: false, isCheck: false },
// ]

// const arrData = [
//     {
//         id: 13,
//         parent_id: 0,
//         name: "系統管理",
//         IsDelete: false
//     },
//     {
//         id: 14,
//         parent_id: 13,
//         name: "角色權限設定",
//         IsDelete: false
//     },
//     {
//         id: 15,
//         parent_id: 13,
//         name: "人員帳號設定",
//         IsDelete: false
//     },
//     {
//         id: 16,
//         parent_id: 13,
//         name: "農產品項管理",
//         IsDelete: false
//     },
//     {
//         id: 17,
//         parent_id: 13,
//         name: "報表類別管理",
//         IsDelete: false
//     },
//     {
//         id: 18,
//         parent_id: 13,
//         name: "系統公告管理",
//         IsDelete: false
//     },
//     {
//         id: 19,
//         parent_id: 0,
//         name: "驗證資料管理",
//         IsDelete: false
//     },
//     {
//         id: 20,
//         parent_id: 19,
//         name: "生產業者資料管理",
//         IsDelete: false
//     },
//     {
//         id: 21,
//         parent_id: 19,
//         name: "加分流業者資料管理",
//         IsDelete: false
//     },
//     {
//         id: 22,
//         parent_id: 19,
//         name: "生產標章管理",
//         IsDelete: false
//     },
//     {
//         id: 23,
//         parent_id: 19,
//         name: "加分流標章管理",
//         IsDelete: false
//     },
//     {
//         id: 24,
//         parent_id: 0,
//         name: "統計報表查詢",
//         IsDelete: false
//     },
//     {
//         id: 25,
//         parent_id: 24,
//         name: "有機戶數及種植面積",
//         IsDelete: false
//     },
//     {
//         id: 26,
//         parent_id: 13,
//         name: "驗證單位設定",
//         IsDelete: false
//     },
//     {
//         id: 27,
//         parent_id: 13,
//         name: "驗證單位設定",
//         IsDelete: false
//     },
//     {
//         id: 28,
//         parent_id: 24,
//         name: "驗證補助請領清冊",
//         IsDelete: false
//     },
//     {
//         id: 29,
//         parent_id: 24,
//         name: "加分流業者戶數統計",
//         IsDelete: false
//     },
//     {
//         id: 30,
//         parent_id: 24,
//         name: "生產業者性別統計",
//         IsDelete: false
//     },
//     {
//         id: 31,
//         parent_id: 13,
//         name: "友善團體設定",
//         IsDelete: false
//     },
//     {
//         id: 32,
//         parent_id: 13,
//         name: "友善團體設定",
//         IsDelete: false
//     },
//     {
//         id: 1031,
//         parent_id: 0,
//         name: "友善耕作資料管理",
//         IsDelete: false
//     },
//     {
//         id: 1032,
//         parent_id: 1031,
//         name: "友善業者資料管理",
//         IsDelete: false
//     },
//     {
//         id: 1033,
//         parent_id: 13,
//         name: "友善補貼設定",
//         IsDelete: false
//     },
//     {
//         id: 1035,
//         parent_id: 0,
//         name: "有機農業獎勵及補貼作業",
//         IsDelete: false
//     },
//     {
//         id: 1036,
//         parent_id: 1035,
//         name: "申請作業管理",
//         IsDelete: false
//     },
//     {
//         id: 1037,
//         parent_id: 19,
//         name: "驗證資料查詢",
//         IsDelete: false
//     },
//     {
//         id: 1038,
//         parent_id: 1035,
//         name: "審核作業管理",
//         IsDelete: false
//     },
//     {
//         id: 1039,
//         parent_id: 1035,
//         name: "抽查作業管理",
//         IsDelete: false
//     },
//     {
//         id: 2039,
//         parent_id: 13,
//         name: "相關連結管理",
//         IsDelete: false
//     },
//     {
//         id: 2040,
//         parent_id: 13,
//         name: "檔案下載管理",
//         IsDelete: false
//     },
//     {
//         id: 2041,
//         parent_id: 13,
//         name: "常見問題管理",
//         IsDelete: false
//     },
//     {
//         id: 2042,
//         parent_id: 24,
//         name: "農產品標章核發年度統計表",
//         IsDelete: false
//     },
//     {
//         id: 3042,
//         parent_id: 0,
//         name: "驗證費用補助作業",
//         IsDelete: false
//     },
//     {
//         id: 3043,
//         parent_id: 3042,
//         name: "申請作業管理",
//         IsDelete: false
//     },
//     {
//         id: 3044,
//         parent_id: 3042,
//         name: "審核作業管理",
//         IsDelete: false
//     },
//     {
//         id: 3045,
//         parent_id: 13,
//         name: "驗證補助設定",
//         IsDelete: false
//     },
//     {
//         id: 3046,
//         parent_id: 24,
//         name: "驗證機構標章核發年度統計表",
//         IsDelete: false
//     },
//     {
//         id: 3047,
//         parent_id: 24,
//         name: "生產業者標章核發統計表",
//         IsDelete: false
//     },
//     {
//         id: 3048,
//         parent_id: 24,
//         name: "加分流業者標章核發統計表",
//         IsDelete: false
//     },
//     {
//         id: 3049,
//         parent_id: 24,
//         name: "驗證單位登錄驗證資料統計表",
//         IsDelete: false
//     },
//     {
//         id: 3051,
//         parent_id: 24,
//         name: "土地申請補助紀錄",
//         IsDelete: false
//     },
//     {
//         id: 3052,
//         parent_id: 24,
//         name: "業者申請補助紀錄",
//         IsDelete: false
//     },
//     {
//         id: 3053,
//         parent_id: 13,
//         name: "系統操作紀錄",
//         IsDelete: false
//     },
//     {
//         id: 3054,
//         parent_id: 24,
//         name: "友善戶數及種植面積",
//         IsDelete: false
//     },
//     {
//         id: 3058,
//         parent_id: 24,
//         name: "友善農地查核清冊",
//         IsDelete: false
//     },
//     {
//         id: 3059,
//         parent_id: 24,
//         name: "友善團體登錄友善資料統計表",
//         IsDelete: false
//     },
//     {
//         id: 3060,
//         parent_id: 0,
//         name: "公有土地與國營事業土地出租資料管理",
//         IsDelete: false
//     },
//     {
//         id: 3061,
//         parent_id: 3060,
//         name: "租金優惠土地檢核",
//         IsDelete: false
//     },
//     {
//         id: 3062,
//         parent_id: 19,
//         name: "跨單位驗證資料查詢",
//         IsDelete: false
//     },
//     {
//         id: 3063,
//         parent_id: 19,
//         name: "汙染地處理紀錄",
//         IsDelete: false
//     },
//     {
//         id: 3064,
//         parent_id: 1031,
//         name: "汙染地處理紀錄",
//         IsDelete: false
//     },
//     {
//         id: 3065,
//         parent_id: 19,
//         name: "交易證明文件管理",
//         IsDelete: false
//     },
//     {
//         id: 3066,
//         parent_id: 19,
//         name: "QR Code下載紀錄",
//         IsDelete: false
//     },
//     {
//         id: 3067,
//         parent_id: 24,
//         name: "交易證明文件核發統計表",
//         IsDelete: false
//     },
//     {
//         id: 3068,
//         parent_id: 24,
//         name: "標章使用佔比統計表",
//         IsDelete: false
//     },
//     {
//         id: 3069,
//         parent_id: 0,
//         name: "前台-交易證明文件",
//         IsDelete: false
//     },
//     {
//         id: 3070,
//         parent_id: 3069,
//         name: "交易證明文件列表",
//         IsDelete: false
//     },
//     {
//         id: 3071,
//         parent_id: 3069,
//         name: "交易證明文件異動申請",
//         IsDelete: false
//     },
//     {
//         id: 3072,
//         parent_id: 0,
//         name: "前台-業者專區",
//         IsDelete: false
//     },
//     {
//         id: 3073,
//         parent_id: 3072,
//         name: "業者專區",
//         IsDelete: false
//     },
//     {
//         id: 3080,
//         parent_id: 3060,
//         name: "租金優惠獎勵申請",
//         IsDelete: false
//     },
//     {
//         id: 3081,
//         parent_id: 19,
//         name: "標章終止使用登錄",
//         IsDelete: false
//     },
//     {
//         id: 3082,
//         parent_id: 0,
//         name: "驗證受理案件管理",
//         IsDelete: false
//     },
//     {
//         id: 3083,
//         parent_id: 3082,
//         name: "生產業者申請資料管理",
//         IsDelete: false
//     },
//     {
//         id: 3084,
//         parent_id: 3082,
//         name: "加分流業者申請資料管理",
//         IsDelete: false
//     },
//     {
//         id: 3085,
//         parent_id: 0,
//         name: "農地圖資",
//         IsDelete: false
//     },
//     {
//         id: 3086,
//         parent_id: 3085,
//         name: "有機及友善農地圖資",
//         IsDelete: false
//     },
//     {
//         id: 3087,
//         parent_id: 3085,
//         name: "補貼申請農地圖資",
//         IsDelete: false
//     },
//     {
//         id: 3088,
//         parent_id: 13,
//         name: "租金獎勵設定",
//         IsDelete: false
//     },
//     {
//         id: 3089,
//         parent_id: 19,
//         name: "經營者帳號審核",
//         IsDelete: false
//     },
//     {
//         id: 3090,
//         parent_id: 3060,
//         name: "租金優惠獎勵審核",
//         IsDelete: false
//     },
//     {
//         id: 3093,
//         parent_id: 24,
//         name: "農地重複登錄清冊",
//         IsDelete: false
//     },
//     {
//         id: 3095,
//         parent_id: 19,
//         name: "回覆函管理",
//         IsDelete: false
//     },
//     {
//         id: 3096,
//         parent_id: 13,
//         name: "認證單位設定",
//         IsDelete: false
//     },
//     {
//         id: 3097,
//         parent_id: 13,
//         name: "認證單位設定",
//         IsDelete: false
//     },
//     {
//         id: 4098,
//         parent_id: 24,
//         name: "驗證機構定期追蹤查驗比率統計表",
//         IsDelete: false
//     },
//     {
//         id: 5097,
//         parent_id: 19,
//         name: "標章暫時終止使用登錄",
//         IsDelete: false
//     },
//     {
//         id: 5098,
//         parent_id: 13,
//         name: "API管理設定",
//         IsDelete: false
//     },
//     {
//         id: 6098,
//         parent_id: 24,
//         name: "年度回報資訊中心補助資料清單",
//         IsDelete: false
//     },
//     {
//         id: 6099,
//         parent_id: 24,
//         name: "驗證單位驗證戶數統計",
//         IsDelete: false
//     },
//     {
//         id: 6100,
//         parent_id: 24,
//         name: "國內友善環境耕作團體面積概況",
//         IsDelete: false
//     },
//     {
//         id: 6101,
//         parent_id: 0,
//         name: "資材資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6102,
//         parent_id: 6101,
//         name: "有機種子(苗)資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6103,
//         parent_id: 13,
//         name: "Banner管理",
//         IsDelete: false
//     },
//     {
//         id: 6104,
//         parent_id: 19,
//         name: "標章申請登錄",
//         IsDelete: false
//     },
//     {
//         id: 6106,
//         parent_id: 6104,
//         name: "標章使用回報",
//         IsDelete: false
//     },
//     {
//         id: 6107,
//         parent_id: 24,
//         name: "市售抽驗與未宣告追蹤查驗統計",
//         IsDelete: false
//     },
//     {
//         id: 6108,
//         parent_id: 13,
//         name: "發送訊息管理",
//         IsDelete: false
//     },
//     {
//         id: 6109,
//         parent_id: 6108,
//         name: "簡訊群組設定",
//         IsDelete: false
//     },
//     {
//         id: 6110,
//         parent_id: 6108,
//         name: "郵件群組設定",
//         IsDelete: false
//     },
//     {
//         id: 6111,
//         parent_id: 6108,
//         name: "發送紀錄",
//         IsDelete: false
//     },
//     {
//         id: 6112,
//         parent_id: 0,
//         name: "數據分析資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6113,
//         parent_id: 6112,
//         name: "年度推廣目標面積",
//         IsDelete: false
//     },
//     {
//         id: 6116,
//         parent_id: 6112,
//         name: "有機與友善每月公告面積",
//         IsDelete: false
//     },
//     {
//         id: 6117,
//         parent_id: 6112,
//         name: "差勤資訊管理",
//         IsDelete: false
//     },
//     {
//         id: 6118,
//         parent_id: 24,
//         name: "友善戶數及種植面積(署內用)",
//         IsDelete: false
//     },
//     {
//         id: 6119,
//         parent_id: 6112,
//         name: "數據儀表板",
//         IsDelete: false
//     },
//     {
//         id: 6120,
//         parent_id: 0,
//         name: "有機集團栽培專區",
//         IsDelete: false
//     },
//     {
//         id: 6121,
//         parent_id: 6120,
//         name: "專區土地資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6124,
//         parent_id: 0,
//         name: "有機農業促進區資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6129,
//         parent_id: 0,
//         name: "查核與檢驗資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6136,
//         parent_id: 19,
//         name: "未經驗證加工業者帳號審核",
//         IsDelete: false
//     },
//     {
//         id: 6137,
//         parent_id: 24,
//         name: "品質檢驗統計",
//         IsDelete: false
//     },
//     {
//         id: 6138,
//         parent_id: 24,
//         name: "標示查核統計",
//         IsDelete: false
//     },
//     {
//         id: 6139,
//         parent_id: 24,
//         name: "地方政府品質抽驗與標示查核結果統計",
//         IsDelete: false
//     },
//     {
//         id: 6140,
//         parent_id: 6124,
//         name: "土地資料檢核",
//         IsDelete: true
//     },
//     {
//         id: 6141,
//         parent_id: 6124,
//         name: "公告資料申請",
//         IsDelete: true
//     },
//     {
//         id: 6142,
//         parent_id: 6124,
//         name: "公告資料審核",
//         IsDelete: true
//     },
//     {
//         id: 6143,
//         parent_id: 6124,
//         name: "已通過促進區",
//         IsDelete: true
//     },
//     {
//         id: 6144,
//         parent_id: 6129,
//         name: "品質查核記錄管理",
//         IsDelete: false
//     },
//     {
//         id: 6145,
//         parent_id: 6129,
//         name: "品質檢驗資料管理",
//         IsDelete: false
//     },
//     {
//         id: 6146,
//         parent_id: 6129,
//         name: "標示查核紀錄管理",
//         IsDelete: false
//     },
//     {
//         id: 6147,
//         parent_id: 6124,
//         name: "土地資料檢核",
//         IsDelete: false
//     },
//     {
//         id: 6148,
//         parent_id: 6124,
//         name: "公告資料申請",
//         IsDelete: false
//     },
//     {
//         id: 6149,
//         parent_id: 6124,
//         name: "公告資料審核",
//         IsDelete: false
//     },
//     {
//         id: 6150,
//         parent_id: 6124,
//         name: "已通過促進區",
//         IsDelete: false
//     }
// ]

const arrData = [
    {
        id: 44,
        parent_id: "",
        name: "使用者管理",
        IsDelete: false
    },
    {
        id: 45,
        parent_id: 44,
        name: "瀏覽使用者列表",
        IsDelete: false
    },
    {
        id: 46,
        parent_id: 44,
        name: "檢視使用者資料",
        IsDelete: false
    },
    {
        id: 47,
        parent_id: 44,
        name: "新增使用者",
        IsDelete: false
    },
    {
        id: 48,
        parent_id: 44,
        name: "更新使用者",
        IsDelete: false
    },
    {
        id: 49,
        parent_id: 44,
        name: "刪除使用者",
        IsDelete: false
    },
    {
        id: 50,
        parent_id: "",
        name: "角色管理",
        IsDelete: false
    },
    {
        id: 51,
        parent_id: 50,
        name: "瀏覽角色列表",
        IsDelete: false
    },
    {
        id: 52,
        parent_id: 50,
        name: "檢視角色資料",
        IsDelete: false
    },
    {
        id: 53,
        parent_id: 50,
        name: "新增角色",
        IsDelete: false
    },
    {
        id: 54,
        parent_id: 50,
        name: "更新角色",
        IsDelete: false
    },
    {
        id: 55,
        parent_id: 50,
        name: "刪除角色",
        IsDelete: false
    },
    {
        id: 56,
        parent_id: "",
        name: "系統公告管理",
        IsDelete: false
    },
    {
        id: 57,
        parent_id: 56,
        name: "瀏覽系統公告列表",
        IsDelete: false
    },
    {
        id: 58,
        parent_id: 56,
        name: "新增系統公告",
        IsDelete: false
    },
    {
        id: 59,
        parent_id: 56,
        name: "更新系統公告",
        IsDelete: false
    },
    {
        id: 60,
        parent_id: 56,
        name: "刪除系統公告",
        IsDelete: false
    },
    {
        id: 61,
        parent_id: "",
        name: "農產品項管理",
        IsDelete: false
    },
    {
        id: 62,
        parent_id: 61,
        name: "瀏覽農產品項列表",
        IsDelete: false
    },
    {
        id: 63,
        parent_id: 61,
        name: "新增農產品項",
        IsDelete: false
    },
    {
        id: 64,
        parent_id: 61,
        name: "更新農產品項",
        IsDelete: false
    },
    {
        id: 65,
        parent_id: 61,
        name: "刪除農產品項",
        IsDelete: false
    },
    {
        id: 66,
        parent_id: "",
        name: "報表類別管理",
        IsDelete: false
    },
    {
        id: 67,
        parent_id: 66,
        name: "瀏覽報表類別列表",
        IsDelete: false
    },
    {
        id: 68,
        parent_id: 66,
        name: "新增報表類別",
        IsDelete: false
    },
    {
        id: 69,
        parent_id: 66,
        name: "更新報表類別",
        IsDelete: false
    },
    {
        id: 70,
        parent_id: 66,
        name: "刪除報表類別",
        IsDelete: false
    },
    {
        id: 71,
        parent_id: "",
        name: "驗證單位管理",
        IsDelete: false
    },
    {
        id: 72,
        parent_id: 71,
        name: "瀏覽驗證單位列表",
        IsDelete: false
    },
    {
        id: 73,
        parent_id: 71,
        name: "新增驗證單位",
        IsDelete: false
    },
    {
        id: 74,
        parent_id: 71,
        name: "更新驗證單位-管理者",
        IsDelete: false
    },
    {
        id: 75,
        parent_id: 71,
        name: "刪除驗證單位",
        IsDelete: false
    },
    {
        id: 76,
        parent_id: 71,
        name: "更新驗證單位-驗證單位",
        IsDelete: false
    },
    {
        id: 77,
        parent_id: 71,
        name: "驗證單位人員帳號列表-管理者",
        IsDelete: false
    },
    {
        id: 78,
        parent_id: 71,
        name: "驗證單位人員帳號列表-驗證單位",
        IsDelete: false
    },
    {
        id: 79,
        parent_id: 71,
        name: "建立驗證單位人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 80,
        parent_id: 71,
        name: "建立驗證單位人員帳號-驗證單位",
        IsDelete: false
    },
    {
        id: 81,
        parent_id: 71,
        name: "修改驗證單位人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 82,
        parent_id: 71,
        name: "修改驗證單位人員帳號-驗證單位",
        IsDelete: false
    },
    {
        id: 83,
        parent_id: 71,
        name: "刪除驗證單位人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 84,
        parent_id: 71,
        name: "刪除驗證單位人員帳號-驗證單位",
        IsDelete: false
    },
    {
        id: 85,
        parent_id: "",
        name: "生產業者資料管理",
        IsDelete: false
    },
    {
        id: 86,
        parent_id: 85,
        name: "瀏覽生產業者資料列表",
        IsDelete: false
    },
    {
        id: 87,
        parent_id: 85,
        name: "新增生產業者資料",
        IsDelete: false
    },
    {
        id: 88,
        parent_id: 85,
        name: "更新生產業者資料",
        IsDelete: false
    },
    {
        id: 89,
        parent_id: 85,
        name: "刪除生產業者資料",
        IsDelete: false
    },
    {
        id: 90,
        parent_id: "",
        name: "加工業者資料管理",
        IsDelete: false
    },
    {
        id: 91,
        parent_id: 90,
        name: "瀏覽加工業者資料列表",
        IsDelete: false
    },
    {
        id: 92,
        parent_id: 90,
        name: "新增加工業者資料",
        IsDelete: false
    },
    {
        id: 93,
        parent_id: 90,
        name: "更新加工業者資料",
        IsDelete: false
    },
    {
        id: 94,
        parent_id: 90,
        name: "刪除加工業者資料",
        IsDelete: false
    },
    {
        id: 95,
        parent_id: 85,
        name: "匯入生產業者資料",
        IsDelete: false
    },
    {
        id: 96,
        parent_id: 90,
        name: "匯入加工業者資料",
        IsDelete: false
    },
    {
        id: 97,
        parent_id: "",
        name: "生產標章管理",
        IsDelete: false
    },
    {
        id: 98,
        parent_id: 97,
        name: "瀏覽生產標章管理列表",
        IsDelete: false
    },
    {
        id: 99,
        parent_id: 97,
        name: "新增生產標章",
        IsDelete: false
    },
    {
        id: 100,
        parent_id: 97,
        name: "更新生產標章",
        IsDelete: false
    },
    {
        id: 101,
        parent_id: 97,
        name: "刪除生產標章",
        IsDelete: false
    },
    {
        id: 102,
        parent_id: 97,
        name: "匯入生產標章",
        IsDelete: false
    },
    {
        id: 103,
        parent_id: "",
        name: "加工標章管理",
        IsDelete: false
    },
    {
        id: 104,
        parent_id: 103,
        name: "瀏覽加工標章管理列表",
        IsDelete: false
    },
    {
        id: 105,
        parent_id: 103,
        name: "新增加工標章",
        IsDelete: false
    },
    {
        id: 106,
        parent_id: 103,
        name: "更新加工標章",
        IsDelete: false
    },
    {
        id: 107,
        parent_id: 103,
        name: "刪除加工標章",
        IsDelete: false
    },
    {
        id: 108,
        parent_id: 103,
        name: "匯入加工標章",
        IsDelete: false
    },
    {
        id: 109,
        parent_id: "",
        name: "統計報表查詢",
        IsDelete: false
    },
    {
        id: 110,
        parent_id: 109,
        name: "驗證補助請領清冊",
        IsDelete: false
    },
    {
        id: 111,
        parent_id: 109,
        name: "有機戶數及種植面積",
        IsDelete: false
    },
    {
        id: 112,
        parent_id: 85,
        name: "檢視生產業者資料",
        IsDelete: false
    },
    {
        id: 113,
        parent_id: 90,
        name: "檢視加工業者資料",
        IsDelete: false
    },
    {
        id: 114,
        parent_id: 97,
        name: "檢視生產標章",
        IsDelete: false
    },
    {
        id: 115,
        parent_id: 103,
        name: "檢視加工標章",
        IsDelete: false
    },
    {
        id: 116,
        parent_id: 109,
        name: "加分流業者戶數統計",
        IsDelete: false
    },
    {
        id: 117,
        parent_id: 109,
        name: "生產業者性別統計",
        IsDelete: false
    },
    {
        id: 118,
        parent_id: "",
        name: "友善團體設定",
        IsDelete: false
    },
    {
        id: 119,
        parent_id: 118,
        name: "瀏覽友善團體列表",
        IsDelete: false
    },
    {
        id: 120,
        parent_id: 118,
        name: "新增友善團體",
        IsDelete: false
    },
    {
        id: 121,
        parent_id: 118,
        name: "更新友善團體-管理者",
        IsDelete: false
    },
    {
        id: 122,
        parent_id: 118,
        name: "刪除友善團體",
        IsDelete: false
    },
    {
        id: 123,
        parent_id: 118,
        name: "更新友善團體-友善團體",
        IsDelete: false
    },
    {
        id: 124,
        parent_id: 118,
        name: "友善團體人員帳號列表-管理者",
        IsDelete: false
    },
    {
        id: 125,
        parent_id: 118,
        name: "友善團體人員帳號列表-友善團體",
        IsDelete: false
    },
    {
        id: 126,
        parent_id: 118,
        name: "建立友善團體人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 127,
        parent_id: 118,
        name: "建立友善團體人員帳號-友善團體",
        IsDelete: false
    },
    {
        id: 128,
        parent_id: 118,
        name: "修改友善團體人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 129,
        parent_id: 118,
        name: "修改友善團體人員帳號-友善團體",
        IsDelete: false
    },
    {
        id: 130,
        parent_id: 118,
        name: "刪除友善團體人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 131,
        parent_id: 118,
        name: "刪除友善團體人員帳號-友善團體",
        IsDelete: false
    },
    {
        id: 1119,
        parent_id: "",
        name: "友善業者資料管理",
        IsDelete: false
    },
    {
        id: 1120,
        parent_id: 1119,
        name: "瀏覽友善業者資料列表",
        IsDelete: false
    },
    {
        id: 1121,
        parent_id: 1119,
        name: "新增友善業者資料",
        IsDelete: false
    },
    {
        id: 1122,
        parent_id: 1119,
        name: "更新友善業者資料",
        IsDelete: false
    },
    {
        id: 1123,
        parent_id: 1119,
        name: "刪除友善業者資料",
        IsDelete: false
    },
    {
        id: 1124,
        parent_id: 1119,
        name: "匯入友善業者資料",
        IsDelete: false
    },
    {
        id: 1125,
        parent_id: 1119,
        name: "檢視友善業者資料",
        IsDelete: false
    },
    {
        id: 1126,
        parent_id: "",
        name: "友善補貼設定",
        IsDelete: false
    },
    {
        id: 1127,
        parent_id: 1126,
        name: "瀏覽友善補貼設定列表",
        IsDelete: false
    },
    {
        id: 1128,
        parent_id: 1126,
        name: "新增友善補貼設定",
        IsDelete: false
    },
    {
        id: 1129,
        parent_id: 1126,
        name: "更新友善補貼設定",
        IsDelete: false
    },
    {
        id: 1130,
        parent_id: 1126,
        name: "刪除友善補貼設定",
        IsDelete: false
    },
    {
        id: 1131,
        parent_id: 1126,
        name: "檢視友善補貼設定",
        IsDelete: false
    },
    {
        id: 1132,
        parent_id: "",
        name: "有機農業獎勵及補貼作業",
        IsDelete: false
    },
    {
        id: 1133,
        parent_id: 1132,
        name: "申請作業管理",
        IsDelete: false
    },
    {
        id: 1134,
        parent_id: 1132,
        name: "友善補貼申請列表",
        IsDelete: false
    },
    {
        id: 1135,
        parent_id: 1132,
        name: "新增友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1136,
        parent_id: 1132,
        name: "編輯友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1137,
        parent_id: 1132,
        name: "檢視友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1138,
        parent_id: 1132,
        name: "取回友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1139,
        parent_id: 1132,
        name: "刪除友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1142,
        parent_id: "",
        name: "驗證資料查詢",
        IsDelete: false
    },
    {
        id: 1143,
        parent_id: 1142,
        name: "瀏覽驗證資料查詢列表",
        IsDelete: false
    },
    {
        id: 1144,
        parent_id: "",
        name: "友善耕作補貼審核作業",
        IsDelete: false
    },
    {
        id: 1145,
        parent_id: 1144,
        name: "審核作業管理",
        IsDelete: false
    },
    {
        id: 1146,
        parent_id: 1144,
        name: "友善補貼審核列表",
        IsDelete: false
    },
    {
        id: 1147,
        parent_id: 1144,
        name: "審核友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1148,
        parent_id: 1144,
        name: "檢視友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1149,
        parent_id: 1144,
        name: "重審友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1150,
        parent_id: 1144,
        name: "刪除友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1151,
        parent_id: "",
        name: "友善耕作補貼抽查作業",
        IsDelete: false
    },
    {
        id: 1152,
        parent_id: 1151,
        name: "抽查作業管理",
        IsDelete: false
    },
    {
        id: 1153,
        parent_id: 1151,
        name: "友善補貼抽查列表",
        IsDelete: false
    },
    {
        id: 1154,
        parent_id: 1151,
        name: "新增友善補貼申請抽查資料",
        IsDelete: false
    },
    {
        id: 1155,
        parent_id: 1151,
        name: "編輯友善補貼申請抽查資料",
        IsDelete: false
    },
    {
        id: 1156,
        parent_id: 1151,
        name: "檢視友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1157,
        parent_id: 1151,
        name: "重新抽查友善補貼申請資料",
        IsDelete: false
    },
    {
        id: 1158,
        parent_id: 1151,
        name: "刪除友善補貼申請抽查資料",
        IsDelete: false
    },
    {
        id: 1159,
        parent_id: "",
        name: "驗證補貼設定",
        IsDelete: false
    },
    {
        id: 1160,
        parent_id: 1159,
        name: "瀏覽驗證補貼設定列表",
        IsDelete: false
    },
    {
        id: 1161,
        parent_id: 1159,
        name: "新增驗證補貼設定",
        IsDelete: false
    },
    {
        id: 1162,
        parent_id: 1159,
        name: "更新驗證補貼設定",
        IsDelete: false
    },
    {
        id: 1163,
        parent_id: 1159,
        name: "刪除驗證補貼設定",
        IsDelete: false
    },
    {
        id: 1164,
        parent_id: 1159,
        name: "檢視驗證補貼設定",
        IsDelete: false
    },
    {
        id: 1165,
        parent_id: "",
        name: "相關連結管理",
        IsDelete: false
    },
    {
        id: 1166,
        parent_id: 1165,
        name: "瀏覽相關連結管理列表",
        IsDelete: false
    },
    {
        id: 1167,
        parent_id: 1165,
        name: "新增相關連結管理",
        IsDelete: false
    },
    {
        id: 1168,
        parent_id: 1165,
        name: "更新相關連結管理",
        IsDelete: false
    },
    {
        id: 1169,
        parent_id: 1165,
        name: "刪除相關連結管理",
        IsDelete: false
    },
    {
        id: 1170,
        parent_id: "",
        name: "驗證費用補助作業",
        IsDelete: false
    },
    {
        id: 1171,
        parent_id: 1170,
        name: "申請作業管理",
        IsDelete: false
    },
    {
        id: 1172,
        parent_id: 1170,
        name: "驗證補助申請列表",
        IsDelete: false
    },
    {
        id: 1173,
        parent_id: 1170,
        name: "新增驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1174,
        parent_id: 1170,
        name: "編輯驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1175,
        parent_id: 1170,
        name: "檢視驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1176,
        parent_id: 1170,
        name: "取回驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1177,
        parent_id: 1170,
        name: "刪除驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1178,
        parent_id: "",
        name: "驗證費用補助審核作業",
        IsDelete: false
    },
    {
        id: 1179,
        parent_id: 1178,
        name: "審核作業管理",
        IsDelete: false
    },
    {
        id: 1180,
        parent_id: 1178,
        name: "驗證補助審核列表",
        IsDelete: false
    },
    {
        id: 1181,
        parent_id: 1178,
        name: "審核驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1182,
        parent_id: 1178,
        name: "檢視驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1183,
        parent_id: 1178,
        name: "重審驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1184,
        parent_id: 1178,
        name: "刪除驗證補助申請資料",
        IsDelete: false
    },
    {
        id: 1185,
        parent_id: "",
        name: "檔案下載管理",
        IsDelete: false
    },
    {
        id: 1186,
        parent_id: 1185,
        name: "瀏覽檔案下載管理列表",
        IsDelete: false
    },
    {
        id: 1187,
        parent_id: 1185,
        name: "新增檔案下載管理",
        IsDelete: false
    },
    {
        id: 1188,
        parent_id: 1185,
        name: "更新檔案下載管理",
        IsDelete: false
    },
    {
        id: 1189,
        parent_id: 1185,
        name: "刪除檔案下載管理",
        IsDelete: false
    },
    {
        id: 1190,
        parent_id: "",
        name: "常見問題管理",
        IsDelete: false
    },
    {
        id: 1191,
        parent_id: 1190,
        name: "瀏覽常見問題管理列表",
        IsDelete: false
    },
    {
        id: 1192,
        parent_id: 1190,
        name: "新增常見問題管理",
        IsDelete: false
    },
    {
        id: 1193,
        parent_id: 1190,
        name: "更新常見問題管理",
        IsDelete: false
    },
    {
        id: 1194,
        parent_id: 1190,
        name: "刪除常見問題管理",
        IsDelete: false
    },
    {
        id: 1195,
        parent_id: 109,
        name: "農產品標章核發年度統計表",
        IsDelete: false
    },
    {
        id: 2195,
        parent_id: 109,
        name: "驗證機構標章核發年度統計表",
        IsDelete: false
    },
    {
        id: 2196,
        parent_id: 109,
        name: "生產業者標章核發統計表",
        IsDelete: false
    },
    {
        id: 2197,
        parent_id: 109,
        name: "加分流業者標章核發統計表",
        IsDelete: false
    },
    {
        id: 2198,
        parent_id: 109,
        name: "驗證單位登錄驗證資料統計表",
        IsDelete: false
    },
    {
        id: 2200,
        parent_id: 109,
        name: "土地申請補助紀錄",
        IsDelete: false
    },
    {
        id: 2201,
        parent_id: 109,
        name: "業者申請補助紀錄",
        IsDelete: false
    },
    {
        id: 2202,
        parent_id: "",
        name: "系統操作紀錄",
        IsDelete: false
    },
    {
        id: 2203,
        parent_id: 2202,
        name: "瀏覽系統操作紀錄列表",
        IsDelete: false
    },
    {
        id: 2205,
        parent_id: 2202,
        name: "封存紀錄",
        IsDelete: false
    },
    {
        id: 2206,
        parent_id: 2202,
        name: "下載封存紀錄",
        IsDelete: false
    },
    {
        id: 2207,
        parent_id: 1144,
        name: "匯出有機及友善審核作業管理補正通知書農友名單",
        IsDelete: false
    },
    {
        id: 2208,
        parent_id: 1144,
        name: "匯出有機及友善審核作業管理媒體轉帳清冊",
        IsDelete: false
    },
    {
        id: 2209,
        parent_id: 1144,
        name: "匯出有機及友善審核作業管理申領清冊",
        IsDelete: false
    },
    {
        id: 2210,
        parent_id: 1144,
        name: "匯出有機及友善審核作業管理補正通知書",
        IsDelete: false
    },
    {
        id: 2211,
        parent_id: 1144,
        name: "匯出有機及友善審核作業管理審核結果通知書",
        IsDelete: false
    },
    {
        id: 2212,
        parent_id: 1151,
        name: "匯出友善補貼申請抽查資料",
        IsDelete: false
    },
    {
        id: 2213,
        parent_id: 1151,
        name: "匯出友善補貼申請抽查資料抽查表",
        IsDelete: false
    },
    {
        id: 2214,
        parent_id: 109,
        name: "友善戶數及種植面積",
        IsDelete: false
    },
    {
        id: 2223,
        parent_id: 109,
        name: "友善農地查核清冊",
        IsDelete: false
    },
    {
        id: 2224,
        parent_id: 109,
        name: "友善團體登錄友善資料統計表",
        IsDelete: false
    },
    {
        id: 2225,
        parent_id: "",
        name: "租金優惠土地檢核",
        IsDelete: false
    },
    {
        id: 2226,
        parent_id: 2225,
        name: "瀏覽租金優惠土地檢核",
        IsDelete: false
    },
    {
        id: 2227,
        parent_id: 2225,
        name: "租金優惠土地檢核匯入查詢",
        IsDelete: false
    },
    {
        id: 2228,
        parent_id: 2225,
        name: "租金優惠土地檢核匯出結果",
        IsDelete: false
    },
    {
        id: 2229,
        parent_id: "",
        name: "跨單位驗證資料查詢",
        IsDelete: false
    },
    {
        id: 2230,
        parent_id: 2229,
        name: "瀏覽跨單位驗證資料查詢列表",
        IsDelete: false
    },
    {
        id: 2231,
        parent_id: 2229,
        name: "跨單位驗證業者查詢",
        IsDelete: false
    },
    {
        id: 2232,
        parent_id: 2229,
        name: "跨單位驗證農地查詢",
        IsDelete: false
    },
    {
        id: 2233,
        parent_id: "",
        name: "汙染地處理記錄",
        IsDelete: false
    },
    {
        id: 2234,
        parent_id: 2233,
        name: "瀏覽汙染地處理記錄列表",
        IsDelete: false
    },
    {
        id: 2235,
        parent_id: 2233,
        name: "編輯汙染地處理記錄",
        IsDelete: false
    },
    {
        id: 2236,
        parent_id: "",
        name: "汙染地處理記錄",
        IsDelete: false
    },
    {
        id: 2237,
        parent_id: 2236,
        name: "瀏覽汙染地處理記錄列表",
        IsDelete: false
    },
    {
        id: 2238,
        parent_id: 2236,
        name: "編輯汙染地處理記錄",
        IsDelete: false
    },
    {
        id: 2239,
        parent_id: 109,
        name: "交易證明文件核發統計表",
        IsDelete: false
    },
    {
        id: 2240,
        parent_id: "",
        name: "交易證明文件管理",
        IsDelete: false
    },
    {
        id: 2241,
        parent_id: 2240,
        name: "瀏覽交易證明文件列表",
        IsDelete: false
    },
    {
        id: 2242,
        parent_id: 2240,
        name: "檢視交易證明文件",
        IsDelete: false
    },
    {
        id: 2243,
        parent_id: 2240,
        name: "編輯交易證明文件",
        IsDelete: false
    },
    {
        id: 2244,
        parent_id: 2240,
        name: "刪除交易證明文件",
        IsDelete: false
    },
    {
        id: 2245,
        parent_id: 2240,
        name: "新增交易證明文件異動單",
        IsDelete: false
    },
    {
        id: 2246,
        parent_id: 2240,
        name: "文件備註設定",
        IsDelete: false
    },
    {
        id: 2247,
        parent_id: "",
        name: "QR Code下載紀錄",
        IsDelete: false
    },
    {
        id: 2248,
        parent_id: 2247,
        name: "QR Code下載紀錄",
        IsDelete: false
    },
    {
        id: 2249,
        parent_id: 2247,
        name: "QR Code下載歷程",
        IsDelete: false
    },
    {
        id: 2250,
        parent_id: 2247,
        name: "QR Code瀏覽歷程",
        IsDelete: false
    },
    {
        id: 2251,
        parent_id: 109,
        name: "標章使用佔比統計表",
        IsDelete: false
    },
    {
        id: 2252,
        parent_id: "",
        name: "交易證明文件申請",
        IsDelete: false
    },
    {
        id: 2253,
        parent_id: 2252,
        name: "瀏覽交易證明文件列表",
        IsDelete: false
    },
    {
        id: 2254,
        parent_id: 2252,
        name: "新增交易證明文件申請",
        IsDelete: false
    },
    {
        id: 2255,
        parent_id: 2252,
        name: "檢視交易證明文件申請",
        IsDelete: false
    },
    {
        id: 2256,
        parent_id: 2252,
        name: "修改交易證明文件申請",
        IsDelete: false
    },
    {
        id: 2257,
        parent_id: 2252,
        name: "刪除交易證明文件申請",
        IsDelete: false
    },
    {
        id: 2258,
        parent_id: 2268,
        name: "瀏覽交易證明文件異動列表",
        IsDelete: false
    },
    {
        id: 2259,
        parent_id: 2268,
        name: "新增交易證明文件異動申請",
        IsDelete: false
    },
    {
        id: 2260,
        parent_id: 2268,
        name: "檢視交易證明文件異動申請",
        IsDelete: false
    },
    {
        id: 2261,
        parent_id: 2268,
        name: "修改交易證明文件異動申請",
        IsDelete: false
    },
    {
        id: 2262,
        parent_id: 2268,
        name: "刪除交易證明文件異動申請",
        IsDelete: false
    },
    {
        id: 2263,
        parent_id: 2252,
        name: "下載交易證明文件",
        IsDelete: false
    },
    {
        id: 2264,
        parent_id: "",
        name: "前台-業者專區",
        IsDelete: false
    },
    {
        id: 2265,
        parent_id: 2264,
        name: "個人資料",
        IsDelete: false
    },
    {
        id: 2266,
        parent_id: 2264,
        name: "修改密碼",
        IsDelete: false
    },
    {
        id: 2267,
        parent_id: 2264,
        name: "有機驗證QR Code下載",
        IsDelete: false
    },
    {
        id: 2268,
        parent_id: "",
        name: "交易證明文件異動申請",
        IsDelete: false
    },
    {
        id: 2276,
        parent_id: "",
        name: "租金優惠獎勵申請",
        IsDelete: false
    },
    {
        id: 2277,
        parent_id: 2276,
        name: "瀏覽租金優惠獎勵申請",
        IsDelete: false
    },
    {
        id: 2278,
        parent_id: 2276,
        name: "租金優惠土地獎勵匯入查詢",
        IsDelete: false
    },
    {
        id: 2279,
        parent_id: 2276,
        name: "租金優惠土地獎勵匯出結果",
        IsDelete: false
    },
    {
        id: 2281,
        parent_id: "",
        name: "標章終止使用登錄",
        IsDelete: false
    },
    {
        id: 2282,
        parent_id: 2281,
        name: "標章終止使用登錄列表",
        IsDelete: false
    },
    {
        id: 2283,
        parent_id: 2281,
        name: "新增標章終止使用登錄",
        IsDelete: false
    },
    {
        id: 2284,
        parent_id: 2281,
        name: "更新標章終止使用登錄",
        IsDelete: false
    },
    {
        id: 2285,
        parent_id: "",
        name: "生產業者申請資料管理",
        IsDelete: false
    },
    {
        id: 2286,
        parent_id: 2285,
        name: "瀏覽生產業者申請資料列表",
        IsDelete: false
    },
    {
        id: 2287,
        parent_id: 2285,
        name: "新增生產業者申請資料",
        IsDelete: false
    },
    {
        id: 2288,
        parent_id: 2285,
        name: "更新生產業者申請資料",
        IsDelete: false
    },
    {
        id: 2289,
        parent_id: 2285,
        name: "刪除生產業者申請資料",
        IsDelete: false
    },
    {
        id: 2290,
        parent_id: 2285,
        name: "檢視生產業者申請資料",
        IsDelete: false
    },
    {
        id: 2291,
        parent_id: 2281,
        name: "刪除標章終止使用登錄",
        IsDelete: false
    },
    {
        id: 2292,
        parent_id: 2281,
        name: "檢示標章終止使用登錄",
        IsDelete: false
    },
    {
        id: 2293,
        parent_id: "",
        name: "加分流業者申請資料管理",
        IsDelete: false
    },
    {
        id: 2294,
        parent_id: 2293,
        name: "瀏覽加分流業者申請資料列表",
        IsDelete: false
    },
    {
        id: 2295,
        parent_id: 2293,
        name: "新增加分流業者申請資料",
        IsDelete: false
    },
    {
        id: 2296,
        parent_id: 2293,
        name: "更新加分流業者申請資料",
        IsDelete: false
    },
    {
        id: 2297,
        parent_id: 2293,
        name: "刪除加分流業者申請資料",
        IsDelete: false
    },
    {
        id: 2298,
        parent_id: 2293,
        name: "檢視加分流業者申請資料",
        IsDelete: false
    },
    {
        id: 2299,
        parent_id: 2293,
        name: "匯入加分流業者資料",
        IsDelete: false
    },
    {
        id: 2300,
        parent_id: "",
        name: "有機驗證與友善耕作農地分布",
        IsDelete: false
    },
    {
        id: 2301,
        parent_id: 2300,
        name: "有機驗證與友善耕作農地分布檢視",
        IsDelete: false
    },
    {
        id: 2302,
        parent_id: 2300,
        name: "有機驗證與友善耕作農地分布土地校正",
        IsDelete: false
    },
    {
        id: 2303,
        parent_id: "",
        name: "有機及友善環境耕作補貼農地分布",
        IsDelete: false
    },
    {
        id: 2304,
        parent_id: 2303,
        name: "有機及友善環境耕作補貼農地檢視",
        IsDelete: false
    },
    {
        id: 2305,
        parent_id: 2240,
        name: "退回",
        IsDelete: false
    },
    {
        id: 2306,
        parent_id: "",
        name: "租金獎勵設定",
        IsDelete: false
    },
    {
        id: 2307,
        parent_id: 2306,
        name: "瀏覽租金獎勵設定列表",
        IsDelete: false
    },
    {
        id: 2308,
        parent_id: 2306,
        name: "新增租金獎勵設定",
        IsDelete: false
    },
    {
        id: 2309,
        parent_id: 2306,
        name: "更新租金獎勵設定",
        IsDelete: false
    },
    {
        id: 2310,
        parent_id: 2306,
        name: "刪除租金獎勵設定",
        IsDelete: false
    },
    {
        id: 2311,
        parent_id: 2306,
        name: "檢視租金獎勵設定",
        IsDelete: false
    },
    {
        id: 2312,
        parent_id: "",
        name: "經營者帳號審核審核管理",
        IsDelete: false
    },
    {
        id: 2313,
        parent_id: 2312,
        name: "瀏覽驗證經營者列表",
        IsDelete: false
    },
    {
        id: 2314,
        parent_id: 2312,
        name: "更新驗證經營者",
        IsDelete: false
    },
    {
        id: 2315,
        parent_id: 2276,
        name: "瀏覽租金優惠獎勵編輯",
        IsDelete: false
    },
    {
        id: 2316,
        parent_id: 2276,
        name: "租金優惠土地獎勵刪除",
        IsDelete: false
    },
    {
        id: 2317,
        parent_id: "",
        name: "租金優惠獎勵審核",
        IsDelete: false
    },
    {
        id: 2318,
        parent_id: 2317,
        name: "瀏覽租金優惠獎勵審核",
        IsDelete: false
    },
    {
        id: 2319,
        parent_id: 2317,
        name: "瀏覽租金優惠獎勵審核編輯",
        IsDelete: false
    },
    {
        id: 2320,
        parent_id: 2233,
        name: "汙染地比對結果通知信設定",
        IsDelete: false
    },
    {
        id: 2321,
        parent_id: 2236,
        name: "汙染地比對結果通知信設定",
        IsDelete: false
    },
    {
        id: 2325,
        parent_id: 109,
        name: "農地重複登錄清冊",
        IsDelete: false
    },
    {
        id: 2331,
        parent_id: "",
        name: "回覆函管理",
        IsDelete: false
    },
    {
        id: 2332,
        parent_id: 2331,
        name: "瀏覽回覆函管理列表",
        IsDelete: false
    },
    {
        id: 2333,
        parent_id: 2331,
        name: "編輯回覆函資料",
        IsDelete: false
    },
    {
        id: 2334,
        parent_id: 2331,
        name: "回覆函管理通知信設定",
        IsDelete: false
    },
    {
        id: 2335,
        parent_id: 2331,
        name: "檢視回覆函資料",
        IsDelete: false
    },
    {
        id: 2336,
        parent_id: "",
        name: "認證單位設定",
        IsDelete: false
    },
    {
        id: 2337,
        parent_id: 2336,
        name: "瀏覽認證單位列表",
        IsDelete: false
    },
    {
        id: 2338,
        parent_id: 2336,
        name: "新增認證單位",
        IsDelete: false
    },
    {
        id: 2339,
        parent_id: 2336,
        name: "更新認證單位-管理者",
        IsDelete: false
    },
    {
        id: 2340,
        parent_id: 2336,
        name: "更新認證單位-認證單位",
        IsDelete: false
    },
    {
        id: 2341,
        parent_id: 2336,
        name: "刪除認證單位",
        IsDelete: false
    },
    {
        id: 2342,
        parent_id: 2336,
        name: "認證單位人員帳號列表-管理者",
        IsDelete: false
    },
    {
        id: 2343,
        parent_id: 2336,
        name: "認證單位人員帳號列表-認證單位",
        IsDelete: false
    },
    {
        id: 2344,
        parent_id: 2336,
        name: "建立認證單位人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 2345,
        parent_id: 2336,
        name: "建立認證單位人員帳號-認證單位",
        IsDelete: false
    },
    {
        id: 2346,
        parent_id: 2336,
        name: "修改認證單位人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 2347,
        parent_id: 2336,
        name: "修改認證單位人員帳號-認證單位",
        IsDelete: false
    },
    {
        id: 2348,
        parent_id: 2336,
        name: "刪除認證單位人員帳號-管理者",
        IsDelete: false
    },
    {
        id: 2349,
        parent_id: 2336,
        name: "刪除認證單位人員帳號-認證單位",
        IsDelete: false
    },
    {
        id: 2350,
        parent_id: 109,
        name: "驗證機構定期追蹤查驗比率統計表",
        IsDelete: false
    },
    {
        id: 3350,
        parent_id: "",
        name: "標章暫時終止使用登錄",
        IsDelete: false
    },
    {
        id: 3351,
        parent_id: 3350,
        name: "標章暫時終止使用登錄列表",
        IsDelete: false
    },
    {
        id: 3352,
        parent_id: 3350,
        name: "新增標章暫時終止使用登錄",
        IsDelete: false
    },
    {
        id: 3353,
        parent_id: 3350,
        name: "更新標章暫時終止使用登錄",
        IsDelete: false
    },
    {
        id: 3354,
        parent_id: 3350,
        name: "刪除標章暫時終止使用登錄",
        IsDelete: false
    },
    {
        id: 3355,
        parent_id: 3350,
        name: "檢示標章暫時終止使用登錄",
        IsDelete: false
    },
    {
        id: 3356,
        parent_id: "",
        name: "API管理設定",
        IsDelete: false
    },
    {
        id: 3357,
        parent_id: 3356,
        name: "瀏覽API設定列表",
        IsDelete: false
    },
    {
        id: 3358,
        parent_id: 3356,
        name: "瀏覽API設定詳細資料",
        IsDelete: false
    },
    {
        id: 3359,
        parent_id: 3356,
        name: "新增API設定",
        IsDelete: false
    },
    {
        id: 3360,
        parent_id: 3356,
        name: "修改API設定",
        IsDelete: false
    },
    {
        id: 3361,
        parent_id: 3356,
        name: "刪除API設定",
        IsDelete: false
    },
    {
        id: 3362,
        parent_id: 3356,
        name: "瀏覽API介接設定列表",
        IsDelete: false
    },
    {
        id: 3363,
        parent_id: 3356,
        name: "瀏覽API介接設定詳細內容",
        IsDelete: false
    },
    {
        id: 3364,
        parent_id: 3356,
        name: "建立API介接設定",
        IsDelete: false
    },
    {
        id: 3365,
        parent_id: 3356,
        name: "修改API介接設定",
        IsDelete: false
    },
    {
        id: 3366,
        parent_id: 3356,
        name: "刪除API介接設定",
        IsDelete: false
    },
    {
        id: 3367,
        parent_id: 3356,
        name: "瀏覽APILog列表",
        IsDelete: false
    },
    {
        id: 3368,
        parent_id: 3356,
        name: "瀏覽APILog詳細內容",
        IsDelete: false
    },
    {
        id: 4356,
        parent_id: 109,
        name: "年度回報資訊中心補助資料清單",
        IsDelete: false
    },
    {
        id: 4357,
        parent_id: 109,
        name: "驗證單位驗證戶數統計",
        IsDelete: false
    },
    {
        id: 4358,
        parent_id: 109,
        name: "國內友善環境耕作團體面積概況",
        IsDelete: false
    },
    {
        id: 4359,
        parent_id: "",
        name: "有機種子(苗)資料管理",
        IsDelete: false
    },
    {
        id: 4360,
        parent_id: 4359,
        name: "瀏覽有機種子(苗)資料管理列表",
        IsDelete: false
    },
    {
        id: 4361,
        parent_id: "",
        name: "Banner管理",
        IsDelete: false
    },
    {
        id: 4362,
        parent_id: 4361,
        name: "瀏覽Banner管理列表",
        IsDelete: false
    },
    {
        id: 4363,
        parent_id: 4361,
        name: "新增",
        IsDelete: false
    },
    {
        id: 4364,
        parent_id: 4361,
        name: "編輯",
        IsDelete: false
    },
    {
        id: 4365,
        parent_id: 4361,
        name: "刪除",
        IsDelete: false
    },
    {
        id: 4366,
        parent_id: 4359,
        name: "瀏覽有機種子(苗)資料管理 內容",
        IsDelete: false
    },
    {
        id: 4367,
        parent_id: 4359,
        name: "新增有機種子(苗)資料",
        IsDelete: false
    },
    {
        id: 4368,
        parent_id: 4359,
        name: "更新有機種子(苗)資料",
        IsDelete: false
    },
    {
        id: 4369,
        parent_id: 4359,
        name: "刪除有機種子(苗)資料",
        IsDelete: false
    },
    {
        id: 4370,
        parent_id: "",
        name: "標章申請登錄",
        IsDelete: false
    },
    {
        id: 4371,
        parent_id: 4370,
        name: "標章申請登錄列表",
        IsDelete: false
    },
    {
        id: 4372,
        parent_id: 4370,
        name: "標章申請登錄新增",
        IsDelete: false
    },
    {
        id: 4373,
        parent_id: 4370,
        name: "標章申請登錄編輯",
        IsDelete: false
    },
    {
        id: 4374,
        parent_id: 4370,
        name: "標章申請登錄刪除",
        IsDelete: false
    },
    {
        id: 4375,
        parent_id: 4370,
        name: "標章申請登錄QRCode下載",
        IsDelete: false
    },
    {
        id: 4376,
        parent_id: 4370,
        name: "標章使用回報",
        IsDelete: false
    },
    {
        id: 4377,
        parent_id: 4370,
        name: "標章使用回報新增",
        IsDelete: false
    },
    {
        id: 4378,
        parent_id: 4370,
        name: "標章使用回報編輯",
        IsDelete: false
    },
    {
        id: 4379,
        parent_id: 4370,
        name: "標章使用回報刪除",
        IsDelete: false
    },
    {
        id: 4380,
        parent_id: 109,
        name: "市售抽驗與未宣告追蹤查驗統計",
        IsDelete: false
    },
    {
        id: 4381,
        parent_id: "",
        name: "發送訊息管理",
        IsDelete: false
    },
    {
        id: 4382,
        parent_id: 4381,
        name: "瀏覽發送訊息列表",
        IsDelete: false
    },
    {
        id: 4383,
        parent_id: 4381,
        name: "新增發送訊息",
        IsDelete: false
    },
    {
        id: 4384,
        parent_id: 4381,
        name: "檢視發送紀錄",
        IsDelete: false
    },
    {
        id: 4385,
        parent_id: 4381,
        name: "群組刪除",
        IsDelete: false
    },
    {
        id: 4386,
        parent_id: 4381,
        name: "簡訊群組設定",
        IsDelete: false
    },
    {
        id: 4387,
        parent_id: 4381,
        name: "郵件群組設定",
        IsDelete: false
    },
    {
        id: 4388,
        parent_id: 4381,
        name: "群組新增",
        IsDelete: false
    },
    {
        id: 4389,
        parent_id: 4381,
        name: "群組編輯",
        IsDelete: false
    },
    {
        id: 4390,
        parent_id: 4381,
        name: "簡訊群組列表",
        IsDelete: false
    },
    {
        id: 4391,
        parent_id: 4381,
        name: "簡訊群組新增",
        IsDelete: false
    },
    {
        id: 4392,
        parent_id: 4381,
        name: "簡訊群組編輯",
        IsDelete: false
    },
    {
        id: 4393,
        parent_id: 4381,
        name: "簡訊群組刪除",
        IsDelete: false
    },
    {
        id: 4394,
        parent_id: 4381,
        name: "郵件群組列表",
        IsDelete: false
    },
    {
        id: 4395,
        parent_id: 4381,
        name: "郵件群組新增",
        IsDelete: false
    },
    {
        id: 4396,
        parent_id: 4381,
        name: "郵件群組編輯",
        IsDelete: false
    },
    {
        id: 4397,
        parent_id: 4381,
        name: "郵件群組刪除",
        IsDelete: false
    },
    {
        id: 5390,
        parent_id: 2229,
        name: "跨單位驗證場所查詢",
        IsDelete: false
    },
    {
        id: 5391,
        parent_id: "",
        name: "年度推廣目標面積",
        IsDelete: false
    },
    {
        id: 5392,
        parent_id: 5391,
        name: "瀏覽年度推廣目標面積列表",
        IsDelete: false
    },
    {
        id: 5393,
        parent_id: 5391,
        name: "新增年度推廣目標面積",
        IsDelete: false
    },
    {
        id: 5394,
        parent_id: 5391,
        name: "檢視年度推廣目標面積",
        IsDelete: false
    },
    {
        id: 5395,
        parent_id: 5391,
        name: "刪除年度推廣目標面積",
        IsDelete: false
    },
    {
        id: 5396,
        parent_id: 5391,
        name: "檢視年度推廣目標面積歷程",
        IsDelete: false
    },
    {
        id: 5397,
        parent_id: "",
        name: "有機與友善每月公告面積",
        IsDelete: false
    },
    {
        id: 5398,
        parent_id: 5397,
        name: "瀏覽有機與友善每月公告面積列表",
        IsDelete: false
    },
    {
        id: 5399,
        parent_id: 5397,
        name: "匯入有機與友善每月公告面積",
        IsDelete: false
    },
    {
        id: 5400,
        parent_id: 5397,
        name: "檢視有機與友善每月公告面積",
        IsDelete: false
    },
    {
        id: 5401,
        parent_id: 5397,
        name: "刪除有機與友善每月公告面積",
        IsDelete: false
    },
    {
        id: 5402,
        parent_id: 5397,
        name: "匯入有機與友善每月公告面積",
        IsDelete: false
    },
    {
        id: 5403,
        parent_id: "",
        name: "差勤資訊管理",
        IsDelete: false
    },
    {
        id: 5404,
        parent_id: 5403,
        name: "瀏覽差勤資訊管理列表",
        IsDelete: false
    },
    {
        id: 5405,
        parent_id: 5403,
        name: "新增差勤資訊",
        IsDelete: false
    },
    {
        id: 5406,
        parent_id: 5403,
        name: "檢視差勤資訊",
        IsDelete: false
    },
    {
        id: 5407,
        parent_id: 5403,
        name: "刪除差勤資訊",
        IsDelete: false
    },
    {
        id: 5408,
        parent_id: 109,
        name: "友善戶數及種植面積(署內用)",
        IsDelete: false
    },
    {
        id: 5409,
        parent_id: "",
        name: "數據儀表板",
        IsDelete: false
    },
    {
        id: 5410,
        parent_id: 5409,
        name: "瀏覽數據儀表板",
        IsDelete: false
    },
    {
        id: 5411,
        parent_id: "",
        name: "有機集團栽培專區",
        IsDelete: false
    },
    {
        id: 5412,
        parent_id: 5411,
        name: "專區土地資料管理",
        IsDelete: false
    },
    {
        id: 5413,
        parent_id: 5411,
        name: "檢視專區土地詳細資料",
        IsDelete: false
    },
    {
        id: 5414,
        parent_id: 5411,
        name: "檢視專區土地地圖",
        IsDelete: false
    },
    {
        id: 5415,
        parent_id: 5411,
        name: "匯入集團栽培專區土地清冊",
        IsDelete: false
    },
    {
        id: 5416,
        parent_id: 5411,
        name: "匯出集團栽培專區土地清冊",
        IsDelete: false
    },
    {
        id: 5417,
        parent_id: "",
        name: "有機農業促進區資料管理",
        IsDelete: false
    },
    {
        id: 5426,
        parent_id: 5411,
        name: "刪除專區紀錄",
        IsDelete: false
    },
    {
        id: 5427,
        parent_id: "",
        name: "品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5434,
        parent_id: "",
        name: "未經驗證加工業者帳號審核管理",
        IsDelete: false
    },
    {
        id: 5435,
        parent_id: 5434,
        name: "瀏覽未經驗證加工業者列表",
        IsDelete: false
    },
    {
        id: 5436,
        parent_id: 5434,
        name: "更新未經驗證加工業者",
        IsDelete: false
    },
    {
        id: 5437,
        parent_id: 5434,
        name: "未經驗證加工業者通知信設定",
        IsDelete: false
    },
    {
        id: 5438,
        parent_id: 109,
        name: "品質檢驗統計",
        IsDelete: false
    },
    {
        id: 5439,
        parent_id: 109,
        name: "標示查核統計",
        IsDelete: false
    },
    {
        id: 5440,
        parent_id: 109,
        name: "地方政府品質抽驗與標示查核結果統計",
        IsDelete: false
    },
    {
        id: 5445,
        parent_id: "",
        name: "土地資料檢核",
        IsDelete: false
    },
    {
        id: 5446,
        parent_id: "",
        name: "公告資料申請",
        IsDelete: false
    },
    {
        id: 5447,
        parent_id: 5446,
        name: "編輯-公告資料申請",
        IsDelete: false
    },
    {
        id: 5448,
        parent_id: 5446,
        name: "新申請-公告資料申請",
        IsDelete: false
    },
    {
        id: 5449,
        parent_id: 5446,
        name: "異動申請-公告資料申請",
        IsDelete: false
    },
    {
        id: 5450,
        parent_id: 5446,
        name: "終止申請-公告資料申請",
        IsDelete: false
    },
    {
        id: 5451,
        parent_id: 5446,
        name: "檢視-公告資料申請",
        IsDelete: false
    },
    {
        id: 5452,
        parent_id: 5446,
        name: "刪除-公告資料申請",
        IsDelete: false
    },
    {
        id: 5453,
        parent_id: "",
        name: "公告資料審核",
        IsDelete: false
    },
    {
        id: 5454,
        parent_id: 5453,
        name: "編輯-公告資料審核",
        IsDelete: false
    },
    {
        id: 5455,
        parent_id: 5453,
        name: "檢視-公告資料審核",
        IsDelete: false
    },
    {
        id: 5456,
        parent_id: 5453,
        name: "退回-公告資料審核",
        IsDelete: false
    },
    {
        id: 5457,
        parent_id: "",
        name: "已通過促進區",
        IsDelete: false
    },
    {
        id: 5458,
        parent_id: 5457,
        name: "檢視-已通過促進區",
        IsDelete: false
    },
    {
        id: 5459,
        parent_id: 5457,
        name: "終止申請-已通過促進區",
        IsDelete: false
    },
    {
        id: 5460,
        parent_id: "",
        name: "品質檢驗資料管理",
        IsDelete: false
    },
    {
        id: 5461,
        parent_id: 5460,
        name: "列表-品質檢驗資料管理",
        IsDelete: false
    },
    {
        id: 5462,
        parent_id: 5460,
        name: "檢視-品質檢驗資料管理",
        IsDelete: false
    },
    {
        id: 5463,
        parent_id: 5460,
        name: "匯出-品質檢驗資料管理",
        IsDelete: false
    },
    {
        id: 5464,
        parent_id: 5460,
        name: "下載-品質檢驗資料管理",
        IsDelete: false
    },
    {
        id: 5465,
        parent_id: "",
        name: "標示查核紀錄管理",
        IsDelete: false
    },
    {
        id: 5466,
        parent_id: 5465,
        name: "列表-標示查核紀錄管理",
        IsDelete: false
    },
    {
        id: 5467,
        parent_id: 5465,
        name: "檢視-標示查核紀錄管理",
        IsDelete: false
    },
    {
        id: 5468,
        parent_id: 5465,
        name: "匯出-標示查核紀錄管理",
        IsDelete: false
    },
    {
        id: 5469,
        parent_id: 5465,
        name: "下載-標示查核紀錄管理",
        IsDelete: false
    },
    {
        id: 5470,
        parent_id: 5427,
        name: "列表-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5471,
        parent_id: 5427,
        name: "匯入-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5472,
        parent_id: 5427,
        name: "匯出-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5473,
        parent_id: 5427,
        name: "新增-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5474,
        parent_id: 5427,
        name: "編輯-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5475,
        parent_id: 5427,
        name: "檢視-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5476,
        parent_id: 5427,
        name: "刪除-品質查核記錄管理",
        IsDelete: false
    },
    {
        id: 5477,
        parent_id: 5445,
        name: "列表-土地資料檢核",
        IsDelete: false
    },
    {
        id: 5478,
        parent_id: 5445,
        name: "匯入-土地資料檢核",
        IsDelete: false
    },
    {
        id: 5479,
        parent_id: 5445,
        name: "下載-土地資料檢核",
        IsDelete: false
    },
    {
        id: 5480,
        parent_id: 5445,
        name: "刪除-土地資料檢核",
        IsDelete: false
    },
    {
        id: 5481,
        parent_id: 5446,
        name: "列表-公告資料申請",
        IsDelete: false
    },
    {
        id: 5482,
        parent_id: 5453,
        name: "列表-公告資料審核",
        IsDelete: false
    },
    {
        id: 5483,
        parent_id: 5457,
        name: "列表-已通過促進區",
        IsDelete: false
    },
    {
        id: 5484,
        parent_id: 5457,
        name: "匯出-已通過促進區",
        IsDelete: false
    }
]

window.arrData = arrData

document.addEventListener("DOMContentLoaded", function () {
    window.LC = window.LC || {}
    window.LC.Tree = new LCTree('.LCTree', arrData)
})
