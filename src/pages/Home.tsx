import { Link } from 'react-router-dom';
import {
  Scissors,
  MicOff,
  RefreshCcw,
  Settings2,
  VolumeX,
  Activity,
  Merge,
  FileAudio
} from 'lucide-react';

const tools = [
  {
    id: 'editor',
    title: 'Audio Editor',
    description: 'Cut, trim, and edit audio files directly in your browser without any quality loss.',
    icon: Scissors,
    color: 'bg-blue-500',
    hover: 'hover:border-blue-500'
  },
  {
    id: 'vocal-remover',
    title: 'Vocal Remover',
    description: 'Extract vocals or instrumentals from any song using advanced AI algorithms.',
    icon: MicOff,
    color: 'bg-purple-500',
    hover: 'hover:border-purple-500'
  },
  {
    id: 'converter',
    title: 'Audio Converter',
    description: 'Convert audio files between MP3, WAV, FLAC, M4A, OGG, and other formats.',
    icon: RefreshCcw,
    color: 'bg-green-500',
    hover: 'hover:border-green-500'
  },
  {
    id: 'pitch-shifter',
    title: 'Pitch Shifter',
    description: 'Change the pitch of an audio file without affecting its tempo or speed.',
    icon: Settings2,
    color: 'bg-orange-500',
    hover: 'hover:border-orange-500'
  },
  {
    id: 'noise-reducer',
    title: 'Noise Reducer',
    description: 'Remove background noise from voice recordings to make them sound professional.',
    icon: VolumeX,
    color: 'bg-red-500',
    hover: 'hover:border-red-500'
  },
  {
    id: 'equalizer',
    title: 'Equalizer',
    description: 'Adjust the frequencies of your audio with a professional graphic equalizer.',
    icon: Activity,
    color: 'bg-indigo-500',
    hover: 'hover:border-indigo-500'
  },
  {
    id: 'joiner',
    title: 'Audio Joiner',
    description: 'Merge multiple audio files into a single continuous track with crossfade.',
    icon: Merge,
    color: 'bg-teal-500',
    hover: 'hover:border-teal-500'
  },
  {
    id: 'recorder',
    title: 'Voice Recorder',
    description: 'Record your voice using a microphone and save it directly as an MP3 file.',
    icon: FileAudio,
    color: 'bg-pink-500',
    hover: 'hover:border-pink-500'
  }
];

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Free Online Audio Tools
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
          A powerful suite of audio processing tools you can use directly in your browser.
          No installation required, completely free, and your files never leave your device.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/tool/editor"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-sm"
          >
            Open Editor
          </Link>
          <a
            href="#tools"
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium py-3 px-8 rounded-full transition-colors shadow-sm"
          >
            Explore All Tools
          </a>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Popular Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={`/tool/${tool.id}`}
              className={`group bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm transition-all duration-200 hover:shadow-md ${tool.hover}`}
            >
              <div className={`${tool.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                <tool.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {tool.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why use our tools?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to edit and process audio files quickly and easily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-slate-500 text-sm">Processing happens directly in your browser. No uploading required.</p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="font-bold text-lg mb-2">100% Private</h3>
            <p className="text-slate-500 text-sm">Your files never leave your device. We don't store your data.</p>
          </div>
          <div className="text-center">
            <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Completely Free</h3>
            <p className="text-slate-500 text-sm">No hidden fees, no subscriptions, and no watermarks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
