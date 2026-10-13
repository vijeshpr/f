import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Upload, Settings } from 'lucide-react';

export default function Tool() {
  const { id } = useParams<{ id: string }>();

  // Format ID for display (e.g., 'vocal-remover' -> 'Vocal Remover')
  const title = id
    ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Tool';

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-4 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to all tools
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-500 mt-2">Upload an audio file to get started with the {title.toLowerCase()}.</p>
      </div>

      {/* Main Workspace Area (Placeholder) */}
      <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center transition-colors hover:border-indigo-400 hover:bg-slate-50">
        <div className="mx-auto w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
          <Upload size={32} />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Upload Audio File</h3>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto">
          Drag and drop your audio file here, or click to browse. Supports MP3, WAV, M4A, FLAC, and more.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm inline-flex items-center">
          <Upload size={18} className="mr-2" />
          Choose File
        </button>
      </div>

      {/* Tool Options (Placeholder) */}
      <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <div className="flex items-center mb-6 border-b border-slate-100 pb-4">
          <Settings size={20} className="text-slate-400 mr-2" />
          <h2 className="text-xl font-semibold text-slate-800">Tool Options</h2>
        </div>

        <div className="text-slate-500 text-center py-8">
          <p>Settings for the {title.toLowerCase()} will appear here after you upload a file.</p>
        </div>
      </div>
    </div>
  );
}
