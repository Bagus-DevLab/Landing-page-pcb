import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LiveData() {
  const [sensorData, setSensorData] = useState({
    suhu: 0,
    kelembaban: 0,
    amonia: 0,
    statusPompa: 'OFF'
  });
  const [loading, setLoading] = useState(true);

  // Fungsi untuk tarik data dari backend FastAPI
  const fetchData = async () => {
    try {
      // GANTI URL INI sesuai dengan endpoint public di backend lu
      const response = await fetch('https://api.pcb.my.id/api/kandang/status'); 
      
      if (!response.ok) throw new Error('Gagal narik data');
      
      const data = await response.json();
      setSensorData({
        suhu: data.suhu,
        kelembaban: data.kelembaban,
        amonia: data.amonia,
        statusPompa: data.status_pompa // Sesuaikan nama key dari JSON lu
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Fallback data simulasi kalau API belum siap/error
      setSensorData({
        suhu: 28.5,
        kelembaban: 65,
        amonia: 12,
        statusPompa: 'ON'
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Auto-refresh tiap 5 detik (opsional, hapus kalau mau manual aja)
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  // Variasi animasi untuk card angka
  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="live-data" className="py-24 px-6 relative overflow-hidden">
      {/* Background Ornamen */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pcb-blue/5 to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-pcb-light">
              Live <span className="text-pcb-orange">Dashboard</span>
            </h2>
            <p className="text-pcb-light/70 max-w-xl text-lg">
              Pantauan langsung dari sensor DHT11 dan MQ-135 yang terpasang di kandang saat ini.
            </p>
          </div>
          
          {/* Indikator Status */}
          <div className="mt-6 md:mt-0 flex items-center bg-pcb-dark/80 border border-pcb-blue/30 rounded-full px-4 py-2">
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 bg-pcb-green rounded-full mr-3 shadow-[0_0_10px_#A2D729]"
            ></motion.div>
            <span className="text-sm font-medium text-pcb-light">
              {loading ? 'Menghubungkan ke API...' : 'Sistem Online'}
            </span>
          </div>
        </div>

        {/* Grid Angka Sensor */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card Suhu */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-pcb-dark to-slate-800 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-pcb-orange/20 rounded-full blur-2xl group-hover:bg-pcb-orange/40 transition-all"></div>
            <h3 className="text-pcb-light/60 font-semibold mb-2 text-lg">Suhu Ruangan</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black text-pcb-orange">{loading ? '--' : sensorData.suhu}</span>
              <span className="text-2xl text-pcb-light/50">°C</span>
            </div>
          </motion.div>

          {/* Card Kelembaban */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-pcb-dark to-slate-800 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-pcb-blue/20 rounded-full blur-2xl group-hover:bg-pcb-blue/40 transition-all"></div>
            <h3 className="text-pcb-light/60 font-semibold mb-2 text-lg">Kelembaban</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black text-pcb-blue">{loading ? '--' : sensorData.kelembaban}</span>
              <span className="text-2xl text-pcb-light/50">%</span>
            </div>
          </motion.div>

          {/* Card Amonia */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-pcb-dark to-slate-800 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-pcb-green/20 rounded-full blur-2xl group-hover:bg-pcb-green/40 transition-all"></div>
            <h3 className="text-pcb-light/60 font-semibold mb-2 text-lg">Kadar Amonia</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black text-pcb-green">{loading ? '--' : sensorData.amonia}</span>
              <span className="text-2xl text-pcb-light/50">ppm</span>
            </div>
            
            {/* Indikator Pompa Kecil di dalam card Amonia */}
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-sm text-pcb-light/60">Status Pompa Limbah:</span>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${sensorData.statusPompa === 'ON' ? 'bg-pcb-green/20 text-pcb-green' : 'bg-red-500/20 text-red-400'}`}>
                {loading ? '...' : sensorData.statusPompa}
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}