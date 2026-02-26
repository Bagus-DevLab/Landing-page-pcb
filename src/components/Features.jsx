import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: 'Suhu Udara',
    description: 'Pemantauan suhu kandang secara real-time untuk memastikan ayam berada di iklim yang ideal dan mencegah stres termal.',
    icon: (
      <svg className="w-8 h-8 text-pcb-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'border-pcb-orange',
  },
  {
    title: 'Kelembaban Udara',
    description: 'Sensor responsif untuk menjaga tingkat kelembaban, mencegah pertumbuhan bakteri atau jamur berbahaya di dalam kandang.',
    icon: (
      <svg className="w-8 h-8 text-pcb-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'border-pcb-blue',
  },
  {
    title: 'Kadar Amonia',
    description: 'Deteksi gas amonia secara dini dari kotoran ayam untuk menjaga kualitas udara dan kesehatan sistem pernapasan ternak.',
    icon: (
      <svg className="w-8 h-8 text-pcb-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'border-pcb-green',
  },
  {
    title: 'Otomatisasi Pompa',
    description: 'Sistem pintar yang terintegrasi untuk mengontrol sirkulasi pakan dan pembuangan limbah secara otomatis berdasarkan data sensor.',
    icon: (
      <svg className="w-8 h-8 text-pcb-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'border-pcb-light/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda animasi antar card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Features() {
  return (
    <section id="fitur" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-pcb-light">
            Sistem IoT <span className="text-pcb-green">Terintegrasi</span>
          </h2>
          <p className="text-pcb-light/70 max-w-2xl mx-auto text-lg">
            Sistem kami membaca data langsung dari perangkat mikrokontroler untuk memberikan kontrol penuh atas kandang Anda.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`bg-pcb-dark/80 p-8 rounded-2xl border-t-4 ${feature.color} shadow-lg backdrop-blur-sm transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              <div className="w-14 h-14 bg-pcb-dark rounded-xl flex items-center justify-center mb-6 shadow-inner border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-pcb-light">{feature.title}</h3>
              <p className="text-pcb-light/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}