/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  MonitorPlay,
  Code2,
  Download,
  Printer,
  Copy,
  Check,
  Maximize2,
  ChevronRight,
  Sparkles,
  Layers,
  Award,
  HelpCircle,
  BarChart3,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'rpp' | 'mpi' | 'code'>('rpp');
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('all');
  const [iframeKey, setIframeKey] = useState<number>(1);

  const handleCopyCode = () => {
    fetch('/spldv-mpi.html')
      .then((res) => res.text())
      .then((text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
  };

  const handleDownloadMPI = () => {
    const a = document.createElement('a');
    a.href = '/spldv-mpi.html';
    a.download = 'LinearQuest_SPLDV_Interactive_Lab_GradeX.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrintRPP = () => {
    setActiveTab('rpp');
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Banner Navigation */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-black text-lg text-blue-200">
              TP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight">EduTPACK Studio • SPLDV Kelas X</h1>
                <span className="bg-amber-400/20 text-amber-300 text-xs px-2 py-0.5 rounded-full border border-amber-400/40 font-medium">
                  Kemendikdasmen Standard
                </span>
              </div>
              <p className="text-xs text-blue-200">
                RPP Berbasis TPACK & Deep Learning + Media Pembelajaran Interaktif (MPI) Mandiri
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('rpp')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'rpp'
                  ? 'bg-white text-blue-950 shadow-sm'
                  : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>OUTPUT 1: RPP TPACK</span>
            </button>

            <button
              onClick={() => setActiveTab('mpi')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'mpi'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <MonitorPlay className="w-4 h-4" />
              <span>OUTPUT 2: Live MPI Lab</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-white text-blue-950 shadow-sm'
                  : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Kode Single-File</span>
            </button>

            <div className="h-6 w-px bg-white/20 mx-1 hidden sm:block"></div>

            <button
              onClick={handleDownloadMPI}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              title="Download standalone HTML file for offline classroom use"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh .HTML (Offline)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        {/* =========================================================
            TAB 1: OUTPUT 1 - RPP BERBASIS TPACK LENGKAP
            ========================================================= */}
        {activeTab === 'rpp' && (
          <div className="space-y-6">
            {/* Header info card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    Output 1
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-0.5 rounded-md">
                    Level TPACK: Advancing
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-md">
                    Deep Learning Cycle
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Rencana Pelaksanaan Pembelajaran (RPP) Berbasis TPACK
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Mata Pelajaran Matematika • Fase E (Kelas X) • Materi Pokok: Sistem Persamaan Linear Dua Variabel (SPLDV)
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrintRPP}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / PDF</span>
                </button>
                <button
                  onClick={() => setActiveTab('mpi')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-sm"
                >
                  <MonitorPlay className="w-4 h-4" />
                  <span>Jalankan MPI Terkait &rarr;</span>
                </button>
              </div>
            </div>

            {/* Quick Section Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-medium">
              {[
                { id: 'all', label: 'Tampilkan Semua Bagian' },
                { id: 'sec-a', label: 'A. Identitas' },
                { id: 'sec-b', label: 'B. Tujuan (ABCD)' },
                { id: 'sec-c', label: 'C. CP & Profil Lulusan' },
                { id: 'sec-d', label: 'D. Matriks TPACK' },
                { id: 'sec-e', label: 'E. Karakteristik MPI' },
                { id: 'sec-f', label: 'F. Sintaks Deep Learning' },
                { id: 'sec-g', label: 'G. Asesmen & Rubrik' },
                { id: 'sec-h', label: 'H. Sumber Belajar' },
                { id: 'sec-i', label: 'I. Refleksi Guru' },
                { id: 'sec-j', label: 'J. Model ADDIE' },
                { id: 'sec-ttd', label: 'Pengesahan & Tanda Tangan' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${
                    activeSection === s.id
                      ? 'bg-blue-900 text-white font-bold'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Document Content */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10 leading-relaxed text-slate-700">
              
              {/* SECTION A */}
              {(activeSection === 'all' || activeSection === 'sec-a') && (
                <section id="sec-a" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      A
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">Identitas Pembelajaran</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <span className="font-semibold text-slate-500 block">Satuan Pendidikan:</span>
                      <span className="text-slate-900 font-medium">SMA / SMK (Fase E)</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500 block">Mata Pelajaran:</span>
                      <span className="text-slate-900 font-medium">Matematika</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500 block">Kelas / Semester:</span>
                      <span className="text-slate-900 font-medium">X (Sepuluh) / Semester Ganjil</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500 block">Materi Pokok:</span>
                      <span className="text-slate-900 font-medium">Sistem Persamaan Linear Dua Variabel (SPLDV)</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500 block">Guru Mata Pelajaran Pengampu:</span>
                      <span className="text-blue-900 font-bold">Nabila Triasari, S.Pd.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-500 block">Alokasi Waktu:</span>
                      <span className="text-slate-900 font-medium">2 × 45 Menit (1 Pertemuan Tatap Muka Terpadu)</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-slate-500 block">Model & Pendekatan:</span>
                      <span className="text-slate-900 font-medium">
                        Model Deep Learning (Berkesadaran, Bermakna, Menggembirakan) dengan Pendekatan TPACK & Constructive Alignment
                      </span>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION B */}
              {(activeSection === 'all' || activeSection === 'sec-b') && (
                <section id="sec-b" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      B
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Tujuan Pembelajaran (Formula ABCD Eksplisit)
                    </h3>
                  </div>

                  <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 mb-6 text-sm">
                    <p className="font-semibold text-blue-950 mb-2">Pernyataan Tujuan Holistik:</p>
                    <p className="text-slate-800 italic">
                      "Melalui eksplorasi mandiri berbantuan <strong>Media Pembelajaran Interaktif (MPI) LinearQuest</strong> non-linear dan diskusi terfasilitasi <strong>[Condition]</strong>, 
                      peserta didik kelas X <strong>[Audience]</strong> mampu memahami masalah kontekstual, membuat model matematika SPLDV, menentukan strategi penyelesaian (grafik/substitusi/eliminasi), dan mengaplikasikannya dalam kehidupan nyata <strong>[Behavior]</strong> 
                      dengan tingkat ketepatan analisis minimal 85% pada asesmen analitik digital serta penalaran logis bebas miskonsepsi <strong>[Degree]</strong>."
                    </p>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">
                    Indikator Pencapaian Kompetensi (IPK) Rinci:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-blue-300 transition">
                      <div className="font-bold text-blue-900 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center">1</span>
                        Memahami Masalah (Understanding)
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Peserta didik dapat mengidentifikasi relasi ketergantungan antara dua kuantitas variabel yang belum diketahui dari narasi kontekstual nyata.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-blue-300 transition">
                      <div className="font-bold text-blue-900 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center">2</span>
                        Membuat Model Matematika (Modeling)
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Peserta didik dapat merumuskan sistem persamaan linear dua variabel dalam bentuk aljabar standar $a_1x + b_1y = c_1$ dan $a_2x + b_2y = c_2$ dengan tepat.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-blue-300 transition">
                      <div className="font-bold text-blue-900 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center">3</span>
                        Menentukan Strategi (Solving Strategies)
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Peserta didik dapat membandingkan dan memilih efisiensi metode eliminasi, substitusi, atau grafik berdasarkan bentuk koefisien persamaan.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-blue-300 transition">
                      <div className="font-bold text-blue-900 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center">4</span>
                        Aplikasi & Evaluasi Solusi (Application & Evaluation)
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Peserta didik dapat menginterpretasi titik potong koordinat $(x, y)$ sebagai solusi kuantitas/harga riil serta menguji kendala fisis (nilai non-negatif).
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION C */}
              {(activeSection === 'all' || activeSection === 'sec-c') && (
                <section id="sec-c" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      C
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Capaian Pembelajaran & Dimensi Profil Lulusan
                    </h3>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm mb-4">
                    <span className="font-bold text-slate-900 block mb-1">Capaian Pembelajaran Fase E (Elemen Aljabar dan Fungsi):</span>
                    <p className="text-slate-700 text-xs leading-relaxed">
                      "Di akhir fase E, peserta didik dapat menyelesaikan masalah yang berkaitan dengan sistem persamaan linear tiga variabel dan sistem pertidaksamaan linear dua variabel. Mereka dapat menyelesaikan masalah yang berkaitan dengan persamaan dan fungsi kuadrat serta persamaan dan fungsi eksponensial."
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-white border border-slate-200 rounded-lg">
                      <div className="font-bold text-slate-900 mb-1">1. Bernalar Kritis</div>
                      <p className="text-slate-600">
                        Menganalisis asumsi pemodelan aljabar, menguji konsistensi sistem, serta membedakan sistem berkonsistensi tunggal, tak berhingga, dan tanpa solusi.
                      </p>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg">
                      <div className="font-bold text-slate-900 mb-1">2. Mandiri</div>
                      <p className="text-slate-600">
                        Mengatur kecepatan belajar (self-paced) melalui kendali penuh pada menu navigasi non-linear MPI dan mengoreksi pemahaman lewat feedback instan.
                      </p>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg">
                      <div className="font-bold text-slate-900 mb-1">3. Gotong Royong</div>
                      <p className="text-slate-600">
                        Berkolaborasi dalam telaah cabang keputusan "What If Scenario" untuk menentukan strategi anggaran paling hemat pada simulasi bazaar sekolah.
                      </p>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg">
                      <div className="font-bold text-slate-900 mb-1">4. Kreatif</div>
                      <p className="text-slate-600">
                        Menemukan ragam rute pemecahan alternatif dan menghubungkan konsep persamaan matematika dengan persoalan ekonomi mikro di lingkungan sekitar.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION D */}
              {(activeSection === 'all' || activeSection === 'sec-d') && (
                <section id="sec-d" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                        D
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        Integrasi Kerangka TPACK (Technological Pedagogical Content Knowledge)
                      </h3>
                    </div>
                    <span className="bg-purple-100 text-purple-900 text-xs font-extrabold px-3 py-1 rounded-full border border-purple-300">
                      Target Level: ADVANCING (Transformative Learning)
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-4">
                    Tabel matriks 7 domain TPACK yang menjelaskan deskripsi teoretis dan wujud konkret aplikasinya di kelas:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 font-bold">
                          <th className="p-2.5 border border-slate-200 w-28">Domain TPACK</th>
                          <th className="p-2.5 border border-slate-200">Deskripsi Konseptual</th>
                          <th className="p-2.5 border border-slate-200">Wujud Konkret dalam Pembelajaran di Kelas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-2.5 font-bold text-blue-900 border border-slate-200 bg-blue-50/30">
                            CK<br /><span className="text-[10px] text-slate-500 font-normal">Content Knowledge</span>
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Penguasaan materi inti SPLDV: definisi variabel, koefisien, konstanta, bentuk umum, metode penyelesaian (eliminasi, substitusi, grafik), dan kondisi keterpenuhan (unik, tak hingga, tidak ada solusi).
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Guru menyajikan konsep dasar sistem linear dan membimbing verifikasi matematis determinan serta kemiringan gradien garis pada perpotongan koordinat.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-blue-900 border border-slate-200 bg-blue-50/30">
                            PK<br /><span className="text-[10px] text-slate-500 font-normal">Pedagogical Knowledge</span>
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Pemahaman teori belajar konstruktivisme, siklus Deep Learning (Berkesadaran, Bermakna, Menggembirakan), manajemen kelas kolaboratif, dan teknik scaffolding berbasis diferensiasi.
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Guru memulai kelas dengan mindful reflection, mengelompokkan siswa secara heterogen, dan menerapkan questioning berjenjang (scaffolding HOTS).
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-blue-900 border border-slate-200 bg-blue-50/30">
                            TK<br /><span className="text-[10px] text-slate-500 font-normal">Technological Knowledge</span>
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Keahlian mengoperasikan perangkat digital (Chromebook/laptop/HP), peramban web modern, navigasi aplikasi single-file HTML5, dan platform Ruang Murid Kemendikdasmen.
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Guru dan siswa membuka file MPI tanpa kendala instalasi, memanfaatkan fitur interaktif slider, audio feedback, dan form ekspor laporan digital.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-blue-900 border border-slate-200 bg-blue-50/30">
                            PCK<br /><span className="text-[10px] text-slate-500 font-normal">Pedagogical Content Knowledge</span>
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Keahlian menyajikan materi aljabar yang abstrak menjadi konkret melalui analogi timbangan neraca keseimbangan dan konteks kantin sekolah/bazaar.
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Guru menggunakan metafora "timbangan neraca ekuivalen" untuk menjelaskan mengapa kedua ruas persamaan aljabar harus diperlakukan secara adil dan seimbang.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-blue-900 border border-slate-200 bg-blue-50/30">
                            TCK<br /><span className="text-[10px] text-slate-500 font-normal">Technological Content Knowledge</span>
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Pemanfaatan teknologi untuk memvisualisasikan konten matematika secara dinamis yang mustahil dilakukan di papan tulis statis.
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Visualisator Canvas koordinat Kartesius menggeser garis aljabar secara instan seiring pergeseran slider koefisien, memperlihatkan titik potong $(x, y)$ seketika.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-blue-900 border border-slate-200 bg-blue-50/30">
                            TPK<br /><span className="text-[10px] text-slate-500 font-normal">Technological Pedagogical Knowledge</span>
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Penggunaan teknologi untuk mendukung pedagogi berpusat pada siswa: navigasi non-linear memberi kontrol penuh (learner agency) dan feedback langsung merangsang metakognisi.
                          </td>
                          <td className="p-2.5 border border-slate-200">
                            Siswa memilih sendiri rute belajar (Route Alpha, Beta, atau Gamma) dalam simulasi skenario percabangan, sementara sistem memberikan umpan balik diagnostik adaptif.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-emerald-900 border border-slate-200 bg-emerald-50">
                            TPACK<br /><span className="text-[10px] text-emerald-700 font-bold">Total Integration</span>
                          </td>
                          <td className="p-2.5 border border-slate-200 font-medium">
                            Sinergi harmonis di mana teknologi, pedagogi Deep Learning, dan konten aljabar melebur sempurna untuk menciptakan pengalaman belajar yang berkesadaran, bermakna, dan menggembirakan.
                          </td>
                          <td className="p-2.5 border border-slate-200 font-medium text-emerald-900">
                            Siswa memodelkan permasalahan riil kantin menggunakan Model Builder interaktif di MPI, menguji strategi pemecahan aljabar, merefleksikan hasilnya di jurnal digital, dan mengunggah laporan hasil belajar ke platform Ruang Murid Kemendikdasmen.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200 text-xs text-purple-900">
                    <strong>Rasionalisasi Level TPACK (Advancing):</strong> Guru tidak lagi memposisikan teknologi sebagai sekadar alat bantu presentasi (Accepting/Adapting), melainkan merancang ekosistem pembelajaran di mana teknologi interaktif menjadi media konstruksi kognitif siswa dalam menemukan konsep dan memvalidasi hipotesis secara otonom.
                  </div>
                </section>
              )}

              {/* SECTION E */}
              {(activeSection === 'all' || activeSection === 'sec-e') && (
                <section id="sec-e" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      E
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Media Pembelajaran Interaktif (MPI) yang Digunakan
                    </h3>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-slate-500 block">Nama MPI:</span>
                        <span className="text-slate-900 font-bold">LinearQuest: Dual-Variable Interactive Lab</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-500 block">Platform / Teknologi:</span>
                        <span className="text-slate-900 font-medium">
                          Single-file HTML5 murni (HTML5 Canvas, CSS3 Flex/Grid, Vanilla ES6 JavaScript, Web Audio API). Tanpa dependensi eksternal, kompatibel offline dan terintegrasi dengan portal Ruang Murid / Rumah Pendidikan Kemendikdasmen.
                        </span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">
                    Pemenuhan 4 Karakteristik Utama MPI:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="font-bold text-blue-900 text-sm mb-1 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        1. Interaktivitas (User Control Penuh)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Peserta didik memegang kendali aktif atas media: dapat menggeser slider koefisien secara bebas, mengklik token aljabar pada Model Builder, mencoba operasi timbangan neraca, serta mengatur audio feedback secara mandiri.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="font-bold text-emerald-900 text-sm mb-1 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        2. Feedback Langsung (Immediate Diagnostic Feedback)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Sistem memberikan umpan balik kognitif seketika saat pilihan jawaban diklik: menampilkan status benar/salah, penjelasan matematis ilmiah, petunjuk diagnostik (hint), pergeseran grafik real-time, dan sintesis audio chime.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                        3. Non-Linearitas (Branching Navigation)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Tidak ada keharusan belajar secara kaku dari layar 1 ke layar 6. Siswa dapat berpindah bebas melalui menu tab atas kapan saja, serta mengeksplorasi skenario percabangan "What If" (Rute Eliminasi, Substitusi, atau Analisis Kenaikan Harga) sesuai minat kognitifnya.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="font-bold text-purple-900 text-sm mb-1 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                        4. Integrasi Multimedia (Prinsip Mayer)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Menerapkan prinsip Mayer: <em>Signaling</em> (pewarnaan variabel $x$ biru, $y$ oranye), <em>Segmenting</em> (pemisahan 6 layar tematik), <em>Coherence</em> (menghilangkan elemen dekoratif tak relevan), dan <em>Modality</em> (grafik dinamis kanvas bersanding dengan keterangan formula terarah).
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION F */}
              {(activeSection === 'all' || activeSection === 'sec-f') && (
                <section id="sec-f" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      F
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Kegiatan Pembelajaran (Siklus Deep Learning Terpadu TPACK)
                    </h3>
                  </div>

                  {/* Tahap 1: Pendahuluan */}
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Tahap 1</span>
                        Pendahuluan: Berkesadaran (Mindful Awareness)
                      </h4>
                      <span className="text-xs font-semibold text-slate-500">15 Menit</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <p>
                        <strong>1. Mindful Check-In (Pedagogi):</strong> Guru mengajak siswa melakukan latihan pernapasan sadar 2 menit untuk menghadirkan fokus penuh (mindfulness) sebelum pembelajaran dimulai.
                      </p>
                      <p>
                        <strong>2. Apersepsi Kontekstual (Konten):</strong> Guru menampilkan stimulus kontekstual: "Pernahkah kalian membeli paket cemilan di kantin sekolah atau toko buku, tetapi tidak mengetahui harga satuan masing-masing barang?".
                      </p>
                      <p>
                        <strong>3. Orientasi Teknologi & Tujuan ABCD (Teknologi + TPACK):</strong> Guru mengarahkan siswa membuka <em>LinearQuest MPI</em> (Layar 1: Mission & Objectives), mengamati target pembelajaran formula ABCD, serta memahami cara kerja navigasi non-linear.
                      </p>
                    </div>
                  </div>

                  {/* Tahap 2: Kegiatan Inti */}
                  <div className="mb-6 p-4 bg-blue-50/40 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                        <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded">Tahap 2</span>
                        Kegiatan Inti: Memahami &rarr; Mengaplikasi &rarr; Merefleksi
                      </h4>
                      <span className="text-xs font-semibold text-slate-500">60 Menit</span>
                    </div>

                    <div className="space-y-4 text-xs text-slate-700 mt-3">
                      {/* Sub-tahap A */}
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-blue-900 block mb-1">
                          A. Memahami (Meaningful Understanding) — 20 Menit
                        </span>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>Eksplorasi Kanvas Dinamis (Layar 2):</strong> Siswa menggeser slider koefisien $a_1, b_1, c_1$ dan $a_2, b_2, c_2$. Mereka mengamati bagaimana perubahan nilai aljabar seketika mengubah kemiringan garis visual pada sistem koordinat Kartesius.
                          </li>
                          <li>
                            <strong>Investigasi Miskonsepsi (TCK):</strong> Siswa mencoba preset <em>"Parallel Lines"</em> dan <em>"Coincident Lines"</em> untuk menyadari bahwa tidak semua SPLDV memiliki tepat 1 solusi.
                          </li>
                          <li>
                            <strong>Diskusi Penalaran:</strong> Guru memandu penemuan terbimbing: mengapa dua garis sejajar tidak memiliki solusi? (karena gradien sama namun titik potong sumbu berbeda, sehingga jaraknya konstan dan tidak pernah berpotongan).
                          </li>
                        </ul>
                      </div>

                      {/* Sub-tahap B */}
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-blue-900 block mb-1">
                          B. Mengaplikasi (Active & Authentic Application) — 25 Menit
                        </span>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>Simulasi Percabangan (Layar 3):</strong> Siswa masuk ke studi kasus <em>The Nusantara Eco-Market Canteen Dilemma</em>. Siswa memilih cabang solusi (Rute Alpha: Eliminasi, Rute Beta: Substitusi, atau Rute Gamma: Analisis Syok Biaya).
                          </li>
                          <li>
                            <strong>Model Builder Interaktif (Layar 4):</strong> Siswa merangkai persamaan aljabar dengan memilih token ($4x + 3y = 29000$) dan menguji ekuivalensi ruas kiri dan kanan pada visualisasi neraca timbangan.
                          </li>
                          <li>
                            <strong>Tantangan Kuis Adaptif (Layar 5):</strong> Siswa menyelesaikan soal tantangan HOTS, menerima skor XP langsung, dan menelaah penjelasan ilmiah diagnostik jika melakukan kekeliruan.
                          </li>
                        </ul>
                      </div>

                      {/* Sub-tahap C */}
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-blue-900 block mb-1">
                          C. Merefleksi (Metacognitive Reflection) — 15 Menit
                        </span>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>Jurnal Refleksi Digital (Layar 6):</strong> Siswa menuliskan perbandingan kelebihan metode grafik vs eliminasi vs substitusi dalam formulir digital interaktif.
                          </li>
                          <li>
                            <strong>Penilaian Batasan Realitas:</strong> Siswa menanggapi pertanyaan mengapa variabel kuantitas barang dalam dunia nyata tidak boleh bernilai negatif ($x \ge 0, y \ge 0$).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tahap 3: Penutup */}
                  <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                        <span className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded">Tahap 3</span>
                        Penutup: Gembira & Merayakan (Joyful & Celebration)
                      </h4>
                      <span className="text-xs font-semibold text-slate-500">15 Menit</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <p>
                        <strong>1. Ekspor & Apresiasi Belajar:</strong> Siswa mengunduh laporan ringkasan portofolio belajar (.txt) dari MPI dan menunjukkannya kepada guru. Guru memberikan apresiasi atas capaian skor XP dan penguasaan konsep.
                      </p>
                      <p>
                        <strong>2. Penguatan Konsep (Meaningful Summary):</strong> Guru dan siswa bersama-sama merangkum 3 pilar utama SPLDV: pemahaman masalah, ketepatan pemodelan, dan pemilihan strategi yang efisien.
                      </p>
                      <p>
                        <strong>3. Tindak Lanjut Ruang Murid Kemendikdasmen:</strong> Siswa ditugaskan mengakses modul pengayaan di platform Ruang Murid / Rumah Pendidikan untuk tantangan SPLTV lanjutan.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION G */}
              {(activeSection === 'all' || activeSection === 'sec-g') && (
                <section id="sec-g" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      G
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Asesmen Pembelajaran & Rubrik Penilaian
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">1. Asesmen Formatif (Berbasis Data Analitik MPI):</span>
                      <p className="text-slate-600 leading-relaxed mb-2">
                        Dinilai otomatis oleh MPI selama proses eksplorasi:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-700">
                        <li>Ketepatan pembentukan persamaan pada Model Builder (Layar 4).</li>
                        <li>Skor akurasi kuis adaptif (Layar 5) dengan feedback diagnostik langsung.</li>
                        <li>Kedalaman refleksi metakognitif pada jurnal digital (Layar 6).</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">2. Asesmen Sumatif (Produk HOTS Otentik):</span>
                      <p className="text-slate-600 leading-relaxed mb-2">
                        Tugas portofolio kontekstual: <strong>"Proposal Optimasi Anggaran Usaha Kreatif Pelajar"</strong>:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-700">
                        <li>Siswa merancang 2 jenis produk/jasa yang akan dijual pada bazaar sekolah.</li>
                        <li>Membuat sistem persamaan linear berdasarkan modal dan kapasitas kerja.</li>
                        <li>Menentukan titik perpotongan optimal serta memverifikasi kelayakan bisnisnya.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">
                    Rubrik Penilaian Holistik Asesmen Sumatif (Skala 1 - 4):
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 font-bold">
                          <th className="p-2 border border-slate-200">Kriteria Penilaian</th>
                          <th className="p-2 border border-slate-200">Perlu Bimbingan (1)</th>
                          <th className="p-2 border border-slate-200">Cukup (2)</th>
                          <th className="p-2 border border-slate-200">Mahir (3)</th>
                          <th className="p-2 border border-slate-200">Sangat Mahir (4)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-2 font-bold text-slate-900 border border-slate-200">Pemahaman Masalah & Variabel</td>
                          <td className="p-2 border border-slate-200">Belum dapat mengidentifikasi variabel dari situasi nyata.</td>
                          <td className="p-2 border border-slate-200">Mengidentifikasi variabel namun definisi kuantitas belum presisi.</td>
                          <td className="p-2 border border-slate-200">Mengidentifikasi 2 variabel dengan satuan dan definisi jelas.</td>
                          <td className="p-2 border border-slate-200">Mendefinisikan variabel secara presisi beserta batasan domain riilnya ($x, y \ge 0$).</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-900 border border-slate-200">Pemodelan Matematika</td>
                          <td className="p-2 border border-slate-200">Model persamaan keliru atau tidak konsisten.</td>
                          <td className="p-2 border border-slate-200">Satu persamaan benar, satu persamaan lainnya memiliki kesalahan koefisien.</td>
                          <td className="p-2 border border-slate-200">Kedua persamaan aljabar dimodelkan secara tepat.</td>
                          <td className="p-2 border border-slate-200">Kedua persamaan akurat, disajikan dalam bentuk baku dan disertai representasi visual.</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-900 border border-slate-200">Strategi Penyelesaian</td>
                          <td className="p-2 border border-slate-200">Tidak ada prosedur aljabar yang terselesaikan.</td>
                          <td className="p-2 border border-slate-200">Prosedur perhitungan ada namun terdapat kekeliruan aritmetika.</td>
                          <td className="p-2 border border-slate-200">Menyelesaikan sistem aljabar dengan eliminasi/substitusi secara benar.</td>
                          <td className="p-2 border border-slate-200">Memilih strategi paling efektif, membuktikannya dengan metode alternatif/grafik.</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-900 border border-slate-200">Aplikasi & Interpretasi</td>
                          <td className="p-2 border border-slate-200">Hanya menampilkan angka tanpa tafsiran makna.</td>
                          <td className="p-2 border border-slate-200">Menafsirkan nilai $x$ dan $y$ namun kesimpulan kurang relevan.</td>
                          <td className="p-2 border border-slate-200">Menghubungkan nilai $(x, y)$ dengan keputusan bisnis secara logis.</td>
                          <td className="p-2 border border-slate-200">Memberikan rekomendasi optimasi manajerial yang tajam, kritis, dan realistis.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* SECTION H */}
              {(activeSection === 'all' || activeSection === 'sec-h') && (
                <section id="sec-h" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      H
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Sumber Belajar & Peralatan
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-900 block text-sm">Sumber Belajar:</span>
                      <p>
                        <strong>1. Platform Ruang Murid / Rumah Pendidikan Kemendikdasmen:</strong> Modul Interaktif Aljabar Fase E dan Bank Masalah SPLDV Kontekstual.
                      </p>
                      <p>
                        <strong>2. Buku Teks Utama:</strong> Buku Panduan Guru & Buku Siswa Matematika SMA/SMK Kelas X, Pusat Perbukuan Kemendikbudristek/Kemendikdasmen.
                      </p>
                      <p>
                        <strong>3. Lingkungan Otentik:</strong> Data harga paket kantin dan koperasi siswa SMA setempat.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-900 block text-sm">Peralatan & Media:</span>
                      <p>
                        <strong>1. Media Digital:</strong> <em>LinearQuest: Dual-Variable Interactive Lab (SPLDV Explorer)</em> single-file HTML5 mandiri.
                      </p>
                      <p>
                        <strong>2. Perangkat Keras:</strong> Chromebook, laptop, atau smartphone peserta didik dengan peramban web modern (Google Chrome/Edge/Firefox).
                      </p>
                      <p>
                        <strong>3. Sarana Pendukung:</strong> Proyektor kelas untuk demonstrasi klasikal dan lembar portofolio digital.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION I */}
              {(activeSection === 'all' || activeSection === 'sec-i') && (
                <section id="sec-i" className="border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      I
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Refleksi Guru Terkait Level TPACK
                    </h3>
                  </div>

                  <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-3">
                    <p className="font-semibold text-sm text-amber-900">
                      Evaluasi Diri Transformasi Pedagogi Digital Guru (Level Advancing):
                    </p>
                    <p>
                      <strong>1. Pergeseran Paradigma Pengajaran:</strong> Sebelum integrasi TPACK, pembelajaran SPLDV cenderung reduktif pada hafalan rumus eliminasi mekanis di papan tulis. Dengan adanya MPI berkarakteristik non-linear dan feedback langsung, guru bertransformasi dari penyampai materi tunggal menjadi <em>fasilitator eksplorasi kognitif</em> yang mendampingi siswa memvalidasi konsep matematis secara visual dan analitik.
                    </p>
                    <p>
                      <strong>2. Integrasi TCK yang Mengikis Miskonsepsi:</strong> Keterbatasan terbesar pengajaran manual adalah kesulitan memvisualisasikan bagaimana perubahan koefisien $a$ dan $b$ mempengaruhi rotasi kemiringan garis. Melalui kanvas Kartesius HTML5 yang dinamis, miskonsepsi mengenai garis sejajar (tidak ada solusi) dan garis berimpit (solusi tak hingga) teratasi secara intuitif.
                    </p>
                    <p>
                      <strong>3. Pembelajaran Mendalam (Deep Learning):</strong> Suasana kelas menjadi berkesadaran (siswa paham mengapa mereka belajar), bermakna (terhubung dengan masalah nyata kantin dan bazaar), serta menggembirakan (interaksi audio chime dan badge skor XP meningkatkan motivasi intrinsik tanpa membebani kognisi berlebih).
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION J */}
              {(activeSection === 'all' || activeSection === 'sec-j') && (
                <section id="sec-j" className="pb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                      J
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Catatan Pengembangan MPI Menggunakan Model ADDIE Ringkas
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-blue-900 block mb-1">1. Analysis</span>
                      <p className="text-slate-600">
                        Mengidentifikasi kesulitan siswa kelas X dalam menghubungkan bentuk aljabar dengan grafik garis serta kebutuhan media ringan yang dapat berjalan tanpa internet di laboratorium sekolah.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-blue-900 block mb-1">2. Design</span>
                      <p className="text-slate-600">
                        Merancang arsitektur non-linear 6 modul, storyboard skenario bazaar Nusantara, palet warna berprinsip Mayer (koherensi & sinyal visual), serta format antarmuka bilingual ilmiah.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-blue-900 block mb-1">3. Development</span>
                      <p className="text-slate-600">
                        Mengembangkan kode single-file HTML5/CSS3/Vanilla JS murni, mesin visualisator kanvas koordinat Kartesius, simulator timbangan aljabar, dan Web Audio synthesizer tanpa file mp3 eksternal.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-blue-900 block mb-1">4. Implementation</span>
                      <p className="text-slate-600">
                        Mendistribusikan file langsung ke gawai siswa (Chromebook/laptop/HP) dan mengunggahnya sebagai paket media interaktif di platform Ruang Murid Kemendikdasmen.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-blue-900 block mb-1">5. Evaluation</span>
                      <p className="text-slate-600">
                        Menganalisis efektivitas belajar melalui log skor analitik siswa, rubrik refleksi kualitatif, serta data ketepatan jawaban kuis untuk perbaikan iterasi media berikutnya.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION PENGESAHAN & TANDA TANGAN */}
              {(activeSection === 'all' || activeSection === 'sec-ttd') && (
                <section id="sec-ttd" className="pt-6 border-t-2 border-dashed border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                      ✓
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Lembar Pengesahan Perangkat Pembelajaran
                    </h3>
                  </div>

                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-right text-xs text-slate-600 mb-6 font-medium">
                      Ditetapkan di: ........................................, ................................. 2026
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-xs">
                      {/* Mengetahui Kepala Sekolah */}
                      <div className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col justify-between h-64">
                        <div>
                          <p className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">Mengetahui,</p>
                          <p className="font-bold text-slate-900 text-sm mt-0.5">Kepala Sekolah</p>
                        </div>
                        
                        <div className="my-auto py-4">
                          <div className="w-52 mx-auto border-b-2 border-slate-400 border-dashed py-8 text-slate-300 italic text-[11px]">
                            (Tanda Tangan & Cap Lembaga)
                          </div>
                        </div>

                        <div>
                          <p className="font-bold text-slate-900 text-base">A. Rofiq Ghozali, S.Pt</p>
                          <p className="text-slate-500 font-mono mt-0.5">NIP. ....................................................</p>
                        </div>
                      </div>

                      {/* Guru Pengampu Nabila Triasari, S.Pd. */}
                      <div className="p-5 bg-white rounded-xl border-2 border-blue-200 shadow-sm flex flex-col justify-between h-64 relative overflow-hidden">
                        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          Guru Pengampu
                        </div>
                        <div>
                          <p className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">Penyusun / Guru Pengampu,</p>
                          <p className="font-bold text-blue-950 text-sm mt-0.5">Guru Mata Pelajaran Matematika</p>
                        </div>

                        <div className="my-auto py-4">
                          <div className="w-56 mx-auto border-b-2 border-blue-400 border-dashed py-8 text-blue-300 italic text-[11px] flex items-center justify-center">
                            (Tanda Tangan Guru Pengampu)
                          </div>
                        </div>

                        <div>
                          <p className="font-bold text-blue-900 text-base">Nabila Triasari, S.Pd.</p>
                          <p className="text-slate-600 font-mono mt-0.5">NIP / NUPTK. ........................................</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center text-[11px] text-slate-500 italic border-t border-slate-200 pt-3">
                      * Perangkat RPP berbasis TPACK & Deep Learning ini disahkan untuk implementasi kurikulum Matematika Fase E (Kelas X) serta arsip portofolio pembelajaran digital Ruang Murid Kemendikdasmen.
                    </div>
                  </div>
                </section>
              )}

            </div>
          </div>
        )}

        {/* =========================================================
            TAB 2: OUTPUT 2 - LIVE MPI RUNNER (Embedded Full Interactive)
            ========================================================= */}
        {activeTab === 'mpi' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded">
                    Output 2: Live Simulator
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    LinearQuest: Dual-Variable Lab (Grade X)
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Media Pembelajaran Interaktif (MPI) Mandiri — Siap Dijalankan Langsung
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIframeKey((prev) => prev + 1)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                  title="Reset simulasi ke kondisi awal"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Lab</span>
                </button>

                <a
                  href="/spldv-mpi.html"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-sm"
                  title="Buka dalam tab terpisah layar penuh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Buka Tab Penuh</span>
                </a>

                <button
                  onClick={handleDownloadMPI}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh File .HTML</span>
                </button>
              </div>
            </div>

            {/* Embedded Live Iframe with Key for Resetting */}
            <div className="w-full bg-white rounded-2xl border border-slate-300 shadow-lg overflow-hidden h-[780px]">
              <iframe
                key={iframeKey}
                src="/spldv-mpi.html"
                title="LinearQuest SPLDV Interactive Media"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 3: STANDALONE SINGLE-FILE HTML SOURCE CODE VIEWER
            ========================================================= */}
        {activeTab === 'code' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5 rounded">
                  Single-File HTML5 Source
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Arsitektur Kode Media Pembelajaran Interaktif (100% Self-Contained)
                </h3>
                <p className="text-xs text-slate-500">
                  Semua tag HTML5, CSS3 styling, logika matematika, Canvas cartesian engine, dan Web Audio synthesizer berada dalam 1 file murni tanpa library eksternal.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Seluruh Kode'}</span>
                </button>

                <button
                  onClick={handleDownloadMPI}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh File .html</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg text-slate-200 font-mono text-xs overflow-auto max-h-[680px]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <span>Nama File: public/spldv-mpi.html (Single-File Standalone)</span>
                <span>Standar: Pure HTML5 + CSS3 + Vanilla ES6 JS</span>
              </div>
              <pre className="pt-3 whitespace-pre-wrap leading-relaxed">
{`<!--
========================================================================================
LINEARQUEST: DUAL-VARIABLE INTERACTIVE LAB (SPLDV EXPLORER)
Grade X Mathematics - System of Linear Equations in Two Variables (SLETV / SPLDV)
Designed under TPACK Framework & Deep Learning Cycle (Kemendikdasmen Standard)
========================================================================================

HOW TO RUN THIS FILE:
1. Double-click this file or right-click and select "Open With" -> Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.
2. No internet connection or external libraries required. Everything is 100% self-contained (Pure HTML5, CSS3, Vanilla ES6 JavaScript, HTML5 Canvas, Web Audio API).
3. Works smoothly on Laptops, Desktops, Chromebooks, Tablets, and Smartphones.
========================================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LinearQuest: Systems of Linear Equations in Two Variables (SPLDV) Interactive Lab</title>
  <!-- Pure Internal CSS Styling with Mayer's Principles -->
  <style>
    /* Responsive layout, visual signaling, high contrast color coding for variables x and y */
    ...
  </style>
</head>
<body>
  <!-- Header with Score Tracker & Audio Synthesizer Toggle -->
  <!-- Non-linear Navigation Bar (6 Modular Learning Screens) -->
  <!-- Screen 1: Mission Brief & Explicit ABCD Objectives -->
  <!-- Screen 2: Interactive Cartesian Coordinate Canvas & Sliders -->
  <!-- Screen 3: Branching What-If Case Study (Nusantara Eco-Festival Canteen) -->
  <!-- Screen 4: Interactive Algebraic Model Builder & Balance Scale -->
  <!-- Screen 5: Adaptive Diagnostic Quiz with Instant Rationale Feedback -->
  <!-- Screen 6: Metacognitive Reflection Journal & Exportable Learning Report -->
  <!-- Vanilla ES6 Script: Graphing Canvas Math Engine, Web Audio Synthesizer, State -->
</body>
</html>`}
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            EduTPACK Matematika Kelas X (SPLDV) • Standar Kurikulum Kemendikdasmen & Ruang Murid
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Deep Learning: Berkesadaran • Bermakna • Menggembirakan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
