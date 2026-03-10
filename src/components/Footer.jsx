import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 border-t border-white/5 pt-16 pb-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand & Deskripsi */}
        <div>
          <div className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pcb-blue to-pcb-green mb-4">
            PCB<span className="text-pcb-light text-sm font-medium ml-2 tracking-normal">Smart Kandang</span>
          </div>
          <p className="text-pcb-light/60 text-sm leading-relaxed max-w-sm">
            Sistem monitoring dan otomatisasi kandang pintar berbasis IoT. Dikembangkan sebagai bentuk implementasi teknologi untuk efisiensi peternakan.
          </p>
        </div>

        {/* Quick Links Navigasi */}
        <div>
          <h4 className="text-pcb-light font-bold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-pcb-light/60 text-sm">
            <li><a href="#beranda" className="hover:text-pcb-green transition-colors">Beranda</a></li>
            <li><a href="#fitur" className="hover:text-pcb-blue transition-colors">Fitur Sistem</a></li>
            
          </ul>
        </div>

        {/* Tech Stack Info */}
        <div>
          <h4 className="text-pcb-light font-bold mb-4">Spesifikasi Sistem</h4>
          <ul className="space-y-2 text-pcb-light/60 text-sm">
            <li><span className="text-pcb-blue font-medium">Frontend:</span> React + Tailwind CSS</li>
            <li><span className="text-pcb-green font-medium">Backend:</span> Python (FastAPI)</li>
            <li><span className="text-pcb-orange font-medium">Hardware:</span> ESP32, Sensor DHT11 & MQ-135</li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-pcb-light/40 text-xs">
        <p>&copy; {new Date().getFullYear()} Project PCB - Bagus. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Dibuat untuk Praktik Kerja Lapangan (PKL)</p>
      </div>
    </footer>
  );
}