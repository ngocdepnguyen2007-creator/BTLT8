// Lấy các element DOM
const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');

// Xử lý sự kiện click trên icon hamburger di động
btn.addEventListener('click', () => {
    // Sử dụng classList.toggle để thêm/xóa class 'hidden' và 'flex' của Tailwind
    // Hành vi này thay thế hoàn toàn cho việc gọi file JS có sẵn của Bootstrap
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});