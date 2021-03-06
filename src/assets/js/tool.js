// 存储localStorage
export function setStorage(name, content) {
    // name 键名(根据名字取值)
    // content 存储内容

    // 如果没有键名就不能存储
    if (!name) return;
    // 判断是否是字符串,只能存储字符串类型
    if (typeof content !== String) {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);

}

// 获取localStorage
export function getStorage(name) {
    if (!name) return;
    window.localStorage.getItem(name)
}

// 删除localStorage
export function delStorage(name) {
    if (!name) return
    window.localStorage.removeItem(name)
}

