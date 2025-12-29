import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, subject, message } = body;

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Simulasi pengiriman email (dalam implementasi nyata, 
    // Anda akan menggunakan service seperti SendGrid, Nodemailer, dll)
    console.log('=== Kontak Form Submission ===');
    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Subjek:', subject);
    console.log('Pesan:', message);
    console.log('Waktu:', new Date().toISOString());
    console.log('==============================');

    // Response sukses
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.',
      data: {
        name,
        email,
        subject,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses pesan Anda' },
      { status: 500 }
    );
  }
}