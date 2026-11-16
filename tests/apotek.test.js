// tests/apotek.test.js

// Fungsi sederhana kalkulasi transaksi obat di apotek
const hitungTotalBelanja = (hargaSatuan, jumlahBeli) => {
  if (hargaSatuan < 0 || jumlahBeli < 0) {
    throw new Error("Nilai tidak boleh negatif");
  }
  return hargaSatuan * jumlahBeli;
};

test('Menghitung total harga pembelian Paracetamol (5000 x 3)', () => {
  const hasil = hitungTotalBelanja(5000, 3);
  expect(hasil).toBe(15000);
});

test('Menghitung total harga dengan jumlah 0', () => {
  const hasil = hitungTotalBelanja(10000, 0);
  expect(hasil).toBe(0);
});