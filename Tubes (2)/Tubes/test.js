
    document.addEventListener('DOMContentLoaded', () => {
      const menuBtn = document.getElementById('menu-btn');
      const dropdown = document.getElementById('dropdown-menu');

      menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('hidden');
      });

      // Tutup dropdown saat klik di luar
      window.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    });
    const resepData = {
      makanan: [
        { title: "Stamppot", desc: "Masakan tradisional berupa kentang tumbuk dicampur sayuran seperti kale atau wortel, biasanya disajikan dengan sosis atau daging asap." },
        { title: "Haring (Herring mentah)", desc: "Ikan haring yang difermentasi ringan, dimakan dengan cara unik: langsung dimasukkan ke mulut sambil dipegang ekornya, atau disajikan dalam roti dengan bawang dan acar." },
        { title: "Erwtensoep (Sup kacang polong)", desc: "Sup kental dari kacang polong hijau dengan potongan daging, sosis, dan sayuran — populer di musim dingin." }
      ],
      minuman: [
        { title: "Jeneve", desc: "Minuman beralkohol tradisional Belanda, pendahulu gin, dibuat dari juniper berries. Tersedia dalam versi muda (jonge) dan tua (oude)." },
        { title: "Chocomel", desc: "Minuman cokelat susu siap minum yang terkenal di Belanda. Bisa diminum panas atau dingin." },
        { title: "Koffie verkeerd", desc: "Versi Belanda dari café au lait — kopi dengan susu dalam jumlah yang hampir sama banyak." }
      ],
      camilan: [
        { title: "Stroopwafel", desc: "Wafel tipis berisi sirup karamel di tengahnya. Enak disantap hangat di atas secangkir teh atau kopi." },
        { title: "Bitterballen", desc: "Bola-bola goreng berisi ragout daging sapi, biasa disajikan dengan mustard — cocok sebagai teman bir." },
        { title: "Drop (Permen Licorice)", desc: "Camilan manis atau asin berbahan dasar akar manis (licorice), sangat populer di Belanda meskipun rasanya unik dan tidak semua orang suka." }
      ]
    };

    function showRecipe(kategori) {
      const contentDiv = document.getElementById("resep-content");
      const selected = resepData[kategori];
      contentDiv.innerHTML = selected.map(item => `
        <div>
          <h3 class="text-xl font-semibold mb-1">${item.title}</h3>
          <p class="text-gray-400">${item.desc}</p>
        </div>
      `).join('');
    }

    showRecipe('makanan'); // Tampilkan default
  // Carousel logic
  const slides = document.querySelectorAll('.carousel-img');
  const indicators = document.querySelectorAll('.active-indicator');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
    indicators.forEach((ind, i) => {
      ind.classList.toggle('opacity-100', i === index);
      ind.classList.toggle('opacity-60', i !== index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Auto play carousel every 5s
  slideInterval = setInterval(nextSlide, 5000);

  // Pause auto play on hover
  const carousel = document.getElementById('customCarousel');
  carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carousel.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

  // Touch swipe support for carousel
  let startX = 0;
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  carousel.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevSlide();
    else if (startX - endX > 50) nextSlide();
  });

  // See More toggle
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const rekomendasi = document.getElementById('rekomendasi');

  seeMoreBtn.addEventListener('click', () => {
    if (rekomendasi.classList.contains('opacity-0')) {
      rekomendasi.classList.remove('opacity-0', 'pointer-events-none');
      rekomendasi.classList.add('opacity-100');
    } else {
      rekomendasi.classList.add('opacity-0', 'pointer-events-none');
      rekomendasi.classList.remove('opacity-100');
    }
  });

  // Tutup dropdown See More saat klik di luar
  window.addEventListener('click', (e) => {
    if (!seeMoreBtn.contains(e.target) && !rekomendasi.contains(e.target)) {
      rekomendasi.classList.add('opacity-0', 'pointer-events-none');
      rekomendasi.classList.remove('opacity-100');
    }
  });

  // Inisialisasi slide pertama
  showSlide(0);