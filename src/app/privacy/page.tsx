'use client';

import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV KAISAR PUTRA PRATAMA</h1>
                <p className="text-xs text-gray-500">Kebijakan Privasi</p>
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
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di CV KAISAR PUTRA PRATAMA. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                pribadi Anda saat menggunakan layanan kami, termasuk website dan layanan konsultasi konstruksi gedung pendidikan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Informasi Pribadi</h3>
              <p className="text-gray-600 mb-4">
                Kami dapat mengumpulkan informasi pribadi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Nama lengkap</li>
                <li>Alamat email</li>
                <li>Nomor telepon</li>
                <li>Alamat perusahaan atau rumah</li>
                <li>Informasi perusahaan (jabatan, nama perusahaan)</li>
                <li>Informasi proyek yang akan dibangun</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Informasi Teknis</h3>
              <p className="text-gray-600 mb-4">
                Kami juga dapat mengumpulkan informasi teknis secara otomatis:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Alamat IP</li>
                <li>Jenis browser dan perangkat</li>
                <li>Sistem operasi</li>
                <li>Halaman yang dikunjungi</li>
                <li>Waktu akses</li>
                <li>Informasi lokasi umum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cara Kami Menggunakan Informasi Anda</h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyediakan layanan konsultasi konstruksi</li>
                <li>Merespons pertanyaan dan permintaan Anda</li>
                <li>Mengirim penawaran dan informasi proyek</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Menghubungi Anda terkait proyek konstruksi</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
                <li>Keamanan dan pengamanan fasilitas kami</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pembagian Informasi</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk kepentingan komersial. 
                Namun, kami dapat membagikan informasi Anda dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan Anda yang eksplisit</li>
                <li>Kepada mitra bisnis tepercaya untuk layanan konstruksi</li>
                <li>Kepada penyedia layanan profesional (arsitek, insinyur, konsultan)</li>
                <li>Sesuai dengan persyaratan hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Keamanan Data</h2>
              <p className="text-gray-600 mb-4">
                CV KAISAR PUTRA PRATAMA berkomitmen untuk melindungi keamanan informasi pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Akses terbatas kepada personel yang berwenang</li>
                <li>Protokol keamanan fisik dan digital</li>
                <li>Pemantauan keamanan berkelanjutan</li>
                <li>Pelatihan staf tentang keamanan data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Hak Anda</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pemilik data, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan)</li>
                <li>Menolak pemrosesan data pribadi Anda</li>
                <li>Meminta pembatasan pemrosesan data</li>
                <li>Memindahkan data Anda ke layanan lain</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies dan Teknologi Pelacakan</h2>
              <p className="text-gray-600 mb-4">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis penggunaan website</li>
                <li>Menyediakan konten yang relevan</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Penyimpanan Data</h2>
              <p className="text-gray-600">
                Informasi pribadi Anda akan kami simpan selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, 
                kecuali periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Perubahan Kebijakan Privasi</h2>
              <p className="text-gray-600">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diinformasikan melalui website 
                atau email Anda. Penggunaan layanan kami yang berkelanjutan setelah perubahan menunjukkan persetujuan Anda 
                terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                silakan hubungi kami:
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