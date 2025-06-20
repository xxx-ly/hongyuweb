// 選單切換功能
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.main__sidemenu li');
    const contentArea = document.getElementById('main_content');

    function loadContent(file, activeItem) {
        fetch(file)
        .then(res => res.text())
        .then(html => {
            contentArea.innerHTML = html;
            // 清除所有選單的 active 狀態
            menuItems.forEach(li => li.classList.remove('--active'));
            // 套用目前這項
            activeItem.classList.add('--active');
        })
        .catch(() => {
            contentArea.innerHTML = '<p>內容載入失敗</p>';
        });
    }

    // 綁定每一個選單點擊事件
    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const file = item.getAttribute('data-file');
            loadContent(file, item);
            // 更新網址（可選）：
            const url = new URL(window.location);
            url.searchParams.set('tab', index + 1);
            window.history.replaceState({}, '', url);
        });
    });

    // 從 URL 決定要開啟哪個 tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabIndex = parseInt(urlParams.get('tab')) || 1;
    const targetItem = menuItems[tabIndex - 1];

    // 預設點擊對應項目
    if (targetItem) {
        const file = targetItem.getAttribute('data-file');
        loadContent(file, targetItem);
    }
});

//通用header
fetch('header.html')
.then(res => res.text())
.then(html => {
    document.getElementById('common-header').innerHTML = html;
});

//通用footer
fetch('footer.html')
.then(res => res.text())
.then(html => {
    document.getElementById('common-footer').innerHTML = html;
});

//banner
const swiper = new Swiper('.swiper', {
    pagination: { // 使用頁籤方法
        el: ".swiper-pagination", // 找到class為swiper-pagination的標籤
        dynamicBullets: true, // 是否使用動畫
    },
    autoplay: { // 自動輪播 swiper
        delay: 2 * 1000, // 每兩秒切換下一張
    },
    loop: true,
});

//AOS
AOS.init();