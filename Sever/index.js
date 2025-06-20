const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3003;

// เพิ่ม CORS middleware
app.use(cors());
app.use(express.json());

let cards = [
  {
    id: 1,
    name: "D-BT01-1",
    price: 190,
    image:
      "https://down-th.img.susercontent.com/file/th-11134207-7r98v-ly3l01ztsi4i18",
    description: "Nation/Clan : Dragon Empire, Keter Sanctuary, Stoicheia",
  },

  {
    id: 2,
    name: "D-BT-01-2",
    price: 150,
    image:
      "https://laz-img-sg.alicdn.com/p/61f872be0d7bf4b1d7e63d9d2b8ee2c0.jpg",
    description: "Nation/Clan : Brandt Gate, Dark States",
  },

  {
    id: 3,
    name: "D-BT02-1",
    price: 190,
    image:
      "https://www.kidzandkai.com/wp-content/uploads/2024/10/kidkai.Vanguard-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%81%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%94%E0%B8%B5-D-BT02-1-A-Brush-with-the-Legends.jpg",
    description: "Nation/Clan : Brandt Gate, Dragon Empire, Stoicheia",
  },

  {
    id: 4,
    name: "D-BT-02-2",
    price: 150,
    image:
      "https://www.kidzandkai.com/wp-content/uploads/2024/10/kidkai.Vanguard-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%81%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%94%E0%B8%B5-D-BT02-2-A-Brush-with-the-Legends.jpg",
    description: "Nation/Clan : Dark States, Keter Sanctuary",
  },

  {
    id: 5,
    name: "D-BT03-1",
    price: 190,
    image:
      "https://www.kidzandkai.com/wp-content/uploads/2024/12/kidkai.Vanguard-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%81%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%94%E0%B8%B5-D-BT03-1-Advance-of-Intertwined-Stars.jpg",
    description: "Nation/Clan : Dragon Empire, Keter Sanctuary, Stoicheia",
  },

  {
    id: 6,
    name: "D-BT-03-2",
    price: 150,
    image:
      "https://www.kidzandkai.com/wp-content/uploads/2024/12/kidkai.Vanguard-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%81%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%94%E0%B8%B5-D-BT03-2-Advance-of-Intertwined-Stars.jpg",
    description: "Nation/Clan : Brandt Gate, Dark States",
  },

  {
    id: 7,
    name: "D-BT-04-1",
    price: 190,
    image:
      "https://www.kidzandkai.com/wp-content/uploads/2025/02/kidkai.Vanguard-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%81%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%94%E0%B8%B5-BT04-1-Awakening-of-Chakrabarthi-%E0%B9%80%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%A1%E0%B9%84%E0%B8%9E%E0%B8%A3%E0%B9%8C.jpg",
    description: "Nation/Clan : Dark States, Dragon Empire, Stoicheia",
  },

  {
    id: 8,
    name: "D-04-2",
    price: 150,
    image:
      "https://www.kidzandkai.com/wp-content/uploads/2025/02/kidkai.Vanguard-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%81%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%94%E0%B8%B5-BT04-2-Awakening-of-Chakrabarthi-%E0%B9%80%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B9%80%E0%B8%81%E0%B8%95-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%84%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%8B%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B8%B5.jpg",
    description: "Nation/Clan : Brandt Gate, Keter Sanctuary",
  },

  {
    id: 9,
    name: "D-BT-05-1",
    price: 190,
    image:
      "https://kidzandkitz.co.th/acard/wp-content/uploads/sites/2/2025/03/VG-D-BT05-1-2.png",
    description:
      "Nation/Clan : Brandt Gate, Dark States, Dragon Empire, Keter Sanctuary",
  },

  {
    id: 10,
    name: "D-BT05-2",
    price: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU6QRXueFO6veqppdpHjifawmYlju0mFNWA&s",
    description: "Nation/Clan : Dragon Empire, Keter Sanctuary, Stoicheia",
  },
];

// ฟังก์ชันสำหรับหา ID ถัดไป
function getNextId() {
  return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 1;
}

// GET - ดึงรายการทั้งหมด
app.get("/cards", (req, res) => {
  res.json(cards);
});

// GET - ดึงตาม id
app.get("/cards/:id", (req, res) => {
  const card = cards.find((c) => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).json({ error: "Card not found" });
  res.json(card);
});

// POST - เพิ่มการ์ดใหม่
app.post("/cards", (req, res) => {
  const { name, price, image, description } = req.body;
  
  // ตรวจสอบข้อมูลที่จำเป็น
  if (!name || !price || !image || !description) {
    return res.status(400).json({ 
      error: "Missing required fields: name, price, image, description" 
    });
  }

  const newCard = {
    id: getNextId(),
    name,
    price: parseInt(price),
    image,
    description
  };
  
  cards.push(newCard);
  res.status(201).json(newCard);
});

// PUT - แก้ไขการ์ดตาม id
app.put("/cards/:id", (req, res) => {
  const card = cards.find((c) => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).json({ error: "Card not found" });

  // อัพเดตเฉพาะฟิลด์ที่ส่งมา
  if (req.body.name) card.name = req.body.name;
  if (req.body.price) card.price = parseInt(req.body.price);
  if (req.body.image) card.image = req.body.image;
  if (req.body.description) card.description = req.body.description;

  res.json(card);
});

// DELETE - ลบการ์ด
app.delete("/cards/:id", (req, res) => {
  const index = cards.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Card not found" });

  const deletedCard = cards.splice(index, 1)[0]; // เอาเฉพาะ object แรก
  res.json({ message: "Card deleted successfully", deletedCard });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});