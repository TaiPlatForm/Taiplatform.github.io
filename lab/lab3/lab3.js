// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Simulated upload functionality
const uploadBtn = document.querySelector('.upload-btn');
uploadBtn.addEventListener('click', () => {
    alert('Chức năng tải lên sẽ được triển khai trong tương lai!');
});

// Dữ liệu tài liệu
const documents = [
    { title: "HCI - Week 3 Understanding your user and their needs", author: "ThS. Trần Thị Thanh Nga", size: "2.6 MB", file: "../../lab/lab3/asset/Week 3 - Understanding your user and their needs.pdf", category: "IT" },
    { title: "HCI - Week 4-5 Understanding Visual Hierarchy & UI Patterns", author: "ThS. Trần Thị Thanh Nga", size: "4.5 MB", file: "../../lab/lab3/asset/Week 4-5 - Understanding Visual Hierarchy & UI Patterns.pdf", category: "IT" },
    { title: "HCI - Week 6-7 Understanding Web UI Elements & Principles", author: "ThS. Trần Thị Thanh Nga", size: "6.2 MB", file: "../../lab/lab3/asset/Week 6-7 - Understanding Web UI Elements & Principles.pdf", category: "IT" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../lab/lab3/asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "IT" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../lab/lab3/asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "IT" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../lab/lab3/asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "IT" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../lab/lab3/asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "Economics" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../lab/lab3/asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "Economics" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../lab/lab3/asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "Medicine" },
    { title: "test - 123123123", author: "ThS. Trần Thị Thanh Nga", size: "2.9 MB", file: "../../../asset/Week 8-9 - Undertanding Visual Elements of UI.pdf", category: "Medicine" },
    // Thêm các tài liệu khác với các ngành khác nhau
];

// Render tài liệu
const documentsContainer = document.getElementById('documentsContainer');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');

function renderDocuments(filteredDocuments) {
    documentsContainer.innerHTML = '';
    filteredDocuments.forEach(doc => {
        const docElement = document.createElement('div');
        docElement.className = 'document neumorphic';
        docElement.innerHTML = `
            <h3>${doc.title}</h3>
            <p>Tác giả: ${doc.author}</p>
            <p>Kích thước: ${doc.size}</p>
            <a href="${doc.file}" class="btn download-btn"><i class="fas fa-download"></i> Tải xuống</a>
            <a href="#" class="btn view-btn" data-file="${doc.file}"><i class="fas fa-eye"></i> Xem trực tiếp</a>
        `;
        documentsContainer.appendChild(docElement);
    });
}

// Tự động tìm kiếm khi nhập chữ
searchInput.addEventListener('input', () => {
    filterDocuments();
});

// Lọc tài liệu khi chọn ngành
categorySelect.addEventListener('change', () => {
    filterDocuments();
});

function filterDocuments() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const filteredDocuments = documents.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    renderDocuments(filteredDocuments);
}

// Render ban đầu
renderDocuments(documents);