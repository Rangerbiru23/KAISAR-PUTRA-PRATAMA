'use client';

import { FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV KAISAR PUTRA PRATAMA</h1>
                <p className="text-xs text-gray-500">Syarat & Ketentuan</p>
              </div>
            </div>
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              CV KAISAR PUTRA PRATAMA - Konstruksi Gedung Pendidikan
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Penerimaan Syarat & Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di CV KAISAR PUTRA PRATAMA. Dengan mengakses atau menggunakan website dan layanan kami, 
                Anda setuju untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun 
                dari syarat ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informasi Perusahaan</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 mb-2">CV KAISAR PUTRA PRATAMA</p>
                <p className="text-gray-600 mb-1">📧 Email: kaisarputrapratama@outlook.co.id</p>
                <p className="text-gray-600 mb-1">📞 Telepon: 082382466172</p>
                <p className="text-gray-600">📍 Alamat: Lingkungan Sawa, Desa/Kelurahan Sawa, Kec. Sawa, Kab. Konawe Utara, Provinsi Sulawesi Tenggara</p>
              </div>
              <p className="text-gray-600">
                CV KAISAR PUTRA PRATAMA adalah perusahaan yang bergerak di bidang konstruksi gedung pendidikan, 
                menyediakan layanan pembangunan, renovasi, dan konsultasi untuk berbagai jenis gedung pendidikan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Layanan Kami</h2>
              <p className="text-gray-600 mb-4">
                CV KAISAR PUTRA PRATAMA menyediakan layanan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Pembangunan gedung sekolah (TK, SD, SMP, SMA)</li>
                <li>Pembangunan gedung kampus dan universitas</li>
                <li>Pembangunan fasilitas pendukung pendidikan</li>
                <li>Renovasi dan perbaikan gedung pendidikan</li>
                <li>Konsultasi desain dan perencanaan</li>
                <li>Supervisi dan manajemen proyek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Kewajiban Klien</h2>
              <p className="text-gray-600 mb-4">
                Sebagai klien, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Menyediakan dokumen yang diperlukan (izin, sertifikat tanah, dll)</li>
                <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
                <li>Memberikan akses ke lokasi proyek</li>
                <li>Menginformasikan perubahan kebutuhan proyek secara tertulis</li>
                <li>Bekerja sama dalam proses supervisi dan inspeksi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Kewajiban Perusahaan</h2>
              <p className="text-gray-600 mb-4">
                CV KAISAR PUTRA PRATAMA berkomitmen untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyelesaikan proyek sesuai spesifikasi dan standar kualitas</li>
                <li>Menggunakan material yang sesuai dengan kesepakatan</li>
                <li>Mematuhi jadwal penyelesaian proyek</li>
                <li>Menyediakan tenaga kerja yang profesional dan berpengalaman</li>
                <li>Memastikan keselamatan dan keamanan di lokasi proyek</li>
                <li>Memberikan garansi untuk pekerjaan yang dilakukan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Pembayaran</h2>
              <p className="text-gray-600 mb-4">
                Ketentuan pembayaran:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pembayaran dilakukan sesuai dengan kontrak yang disepakati</li>
                <li>Pembayaran dapat dilakukan secara bertahap sesuai progres pekerjaan</li>
                <li>Pembayaran akhir dilakukan setelah proyek selesai dan diserahkan</li>
                <li>Keterlambatan pembayaran dapat dikenakan denda sesuai kesepakatan</li>
                <li>Semua pembayaran harus menggunakan rekening resmi perusahaan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Jangka Waktu Proyek</h2>
              <p className="text-gray-600 mb-4">
                Ketentuan waktu proyek:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Jangka waktu proyek ditentukan dalam kontrak</li>
                <li>Perpanjangan waktu dapat dilakukan dengan persetujuan tertulis</li>
                <li>Keterlambatan karena cuaca buruk atau force majeure akan dievaluasi</li>
                <li>Perubahan desain atau spesifikasi dapat mempengaruhi jadwal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Kualitas dan Garansi</h2>
              <p className="text-gray-600 mb-4">
                Standar kualitas dan garansi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Semua pekerjaan mengikuti standar konstruksi Indonesia (SNI)</li>
                <li>Material yang digunakan sesuai spesifikasi yang disepakati</li>
                <li>Garansi struktural diberikan sesuai dengan ketentuan perundangan</li>
                <li>Garansi pemeliharaan diberikan untuk periode tertentu setelah penyelesaian</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Kekayaan Intelektual</h2>
              <p className="text-gray-600">
                Semua konten, desain, gambar teknis, dan materi lainnya yang dibuat oleh CV KAISAR PUTRA PRATAMA 
                merupakan kekayaan intelektual perusahaan dan dilindungi oleh hukum hak cipta. 
                Klien tidak boleh menggunakan desain atau gambar teknis untuk proyek lain tanpa izin tertulis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Pembatalan Proyek</h2>
              <p className="text-gray-600 mb-4">
                Ketentuan pembatalan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pembatalan oleh klien harus dilakukan secara tertulis</li>
                <li>Biaya pembatalan akan dihitung berdasarkan progres pekerjaan</li>
                <li>Material yang telah dibeli menjadi tanggung jawab klien</li>
                <li>Pembatalan oleh perusahaan akan disertai alasan yang valid</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Penyelesaian Sengketa</h2>
              <p className="text-gray-600 mb-4">
                Proses penyelesaian sengketa:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sengketa akan diselesaikan secara musyawarah terlebih dahulu</li>
                <li>Jika tidak tercapai kesepakatan, sengketa dapat dibawa ke mediasi</li>
                <li>Sebagai langkah terakhir, sengketa akan diselesaikan melalui pengadilan</li>
                <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Force Majeure</h2>
              <p className="text-gray-600">
                CV KAISAR PUTRA PRATAMA tidak bertanggung jawab atas keterlambatan atau ketidakmampuan 
                untuk melaksanakan kewajiban jika disebabkan oleh kejadian di luar kendali kami, 
                termasuk tetapi tidak terbatas pada bencana alam, perang, kerusuhan, pandemi, 
                atau perubahan peraturan pemerintah.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Perubahan Syarat & Ketentuan</h2>
              <p className="text-gray-600">
                Kami berhak mengubah Syarat & Ketentuan ini dari waktu ke waktu. Perubahan akan 
                diinformasikan melalui website atau email Anda. Penggunaan layanan kami yang berkelanjutan 
                setelah perubahan menunjukkan persetujuan Anda terhadap syarat yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">CV KAISAR PUTRA PRATAMA</p>
                <p className="text-gray-600 mb-1">📧 Email: kaisarputrapratama@outlook.co.id</p>
                <p className="text-gray-600 mb-1">📞 Telepon: 082382466172</p>
                <p className="text-gray-600">📍 Alamat: Lingkungan Sawa, Desa/Kelurahan Sawa, Kec. Sawa, Kab. Konawe Utara, Provinsi Sulawesi Tenggara</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 CV KAISAR PUTRA PRATAMA. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}