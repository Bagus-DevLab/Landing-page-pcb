import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Efek Cahaya / Glow di Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pcb-blue/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pcb-green/10 rounded-full blur-[100px] -z-10"></div>

      <div className="z-10 text-center max-w-4xl mx-auto">
        {/* Animasi Judul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-pcb-light leading-tight">
            Sistem Monitoring <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pcb-blue to-pcb-green">
              Smart Kandang PCB
            </span>
          </h1>
        </motion.div>

        {/* Animasi Deskripsi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-pcb-light/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Platform IoT terintegrasi untuk memantau suhu, kelembaban, dan kadar amonia sekaligus mengotomatisasi pompa pembersih, pencahayaan, serta pemberian pakan.
        </motion.p>

        {/* Animasi Tombol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#fitur"
            className="w-full sm:w-auto px-8 py-4 bg-pcb-orange hover:bg-opacity-90 text-pcb-light rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(250,130,76,0.4)] hover:shadow-[0_0_30px_rgba(250,130,76,0.6)]"
          >
            Lihat Fitur Utama
          </a>
          <a
            href="https://api.pcb.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-pcb-blue text-pcb-blue hover:bg-pcb-blue hover:text-pcb-dark rounded-full font-bold text-lg transition-all"
          >
            Buka Dashboard
          </a>
        </motion.div>
      </div>
    </section>
  );
}