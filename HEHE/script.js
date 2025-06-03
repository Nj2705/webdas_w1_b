function showAlert() {
  const rekomendasi = ["Stroopwafel", "Haring", "Bitterballen", "Poffertjes"];
  const randomIndex = Math.floor(Math.random() * rekomendasi.length);
  alert("Coba makanan ini: " + rekomendasi[randomIndex]);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Terima kasih atas pesan Anda!");
    });
  }
});

const resepData = [
  {
    nama: "Stroopwafel",
    kategori: "cemilan",
    deskripsi: "Wafel tipis isi sirup karamel khas Belanda."
  },
  {
    nama: "Bitterballen",
    kategori: "makanan",
    deskripsi: "Kroket daging sapi yang digoreng renyah."
  },
  {
    nama: "Poffertjes",
    kategori: "cemilan",
    deskripsi: "Pancake kecil lembut dan manis dengan gula bubuk."
  },
  {
    nama: "Haring",
    kategori: "makanan",
    deskripsi: "Ikan haring mentah yang disajikan dengan bawang dan acar."
  },
  {
    nama: "Koffie verkeerd",
    kategori: "minuman",
    deskripsi: "Kopi susu khas Belanda yang mirip latte."
  }
];

function tampilkanResep(data) {
  const container = document.getElementById("daftarResep");
  if (!container) return;
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow hover:shadow-lg transition duration-300";
    card.innerHTML = `<h3 class="text-xl font-bold mb-2">${item.nama}</h3><p class="text-gray-600">${item.deskripsi}</p>`;
    container.appendChild(card);
  });
}

function filterResep() {
  const kategori = document.getElementById("kategori").value;
  if (kategori === "semua") {
    tampilkanResep(resepData);
  } else {
    const hasil = resepData.filter(r => r.kategori === kategori);
    tampilkanResep(hasil);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanResep(resepData);
});
