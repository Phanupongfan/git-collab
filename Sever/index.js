// สร้างอาร์เรย์เก็บสินค้า 10 ชิ้น
const products = [];

// วนลูปสร้างสินค้า
for (let i = 1; i <= 10; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 1000) + 100, // ราคาสุ่ม 100-1099
        image: `https://www.thaivanguard.net/wp-content/uploads/2024/05/MOCK_VGD_CP01_BOX-1024x739.png` // URL รูปตัวอย่าง
    });
}

// แสดงสินค้า 10 ชิ้น
console.log(products);
