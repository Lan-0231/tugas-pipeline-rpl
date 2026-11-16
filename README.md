# Aplikasi Apotek - Praktik Pipeline CI (Rekayasa Perangkat Lunak)

Repository ini berisi implementasi *Continuous Integration* (CI) menggunakan **GitHub Actions** untuk proyek **Aplikasi Apotek** sebagai bagian dari tugas *Team-Based Project* mata kuliah Rekayasa Perangkat Lunak.

---

## Teknologi yang Digunakan
* **Runtime:** Node.js (v18 / v20)
* **Framework Backend:** Express.js
* **Testing Framework:** Jest
* **CI/CD Tool:** GitHub Actions

---

## Struktur Proyek
```text
apotek-app/
├── .github/
│   └── workflows/
│       └── ci.yml          # Konfigurasi workflow GitHub Actions
├── src/
│   └── app.js              # Kode utama aplikasi
├── tests/
│   └── apotek.test.js      # File unit testing
├── .gitignore
├── package.json
└── README.md

Cara Menjalankan Proyek & Pengujian (Lokal)

Pastikan Node.js dan npm sudah terinstal di komputer Anda sebelum menjalankan perintah berikut:
1. Clone repository ini: git clone [https://github.com/Lan-0231/tugas-pipeline-rpl.git](https://github.com/Lan-0231/tugas-pipeline-rpl.git)
cd tugas-pipeline-rpl
2. Install seluruh dependensi: npm install
3. Jalankan Unit Test: npm test

Cara Kerja Pipeline CI
Workflow CI dikonfigurasi pada berkas .github/workflows/ci.yml dan akan berjalan secara otomatis setiap kali terjadi aktivitas push atau pull_request pada branch main, master, atau dev.
Tahapan otomatis yang dijalankan oleh runner GitHub Actions:
1. Checkout Repository: Mengambil kode terbaru dari repository.
2. Setup Node.js: Menyiapkan lingkungan Node.js (versi 18.x dan 20.x).
3. Install Dependencies: Menjalankan perintah npm install.
4. Run Unit Tests: Menjalankan pengujian otomatis menggunakan npm test untuk memverifikasi fungsi kalkulasi dan validasi pada aplikasi apotek.

Ringkasan Error & Perbaikan (Simulasi CI)
1. Kasus Gagal (Failed Run): Dilakukan pengujian kegagalan dengan mengubah nilai ekspektasi pada skenario kalkulasi total harga obat di tests/apotek.test.js, sehingga pipeline gagal pada tahap Run Unit Tests.
2. Langkah Perbaikan: Mengembalikan logika assertion ke nilai yang sesuai dan melakukan push ulang ke branch utama, sehingga seluruh tahapan build dan test kembali berstatus sukses (passed).

Anggota Tim

    Muh. Zufar Fauzan (F5512520074) — Kelas TI-B, Teknik Informatika, Universitas Tadulako
