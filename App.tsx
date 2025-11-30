
import React, { useState, useEffect } from 'react';
import type { Report } from './types';
import { INITIAL_REPORTS, CONTACTS } from './constants';
import { Header } from './components/Header';
import { ReportForm } from './components/ReportForm';
import { ReportFeed } from './components/ReportFeed';
import { ContactList } from './components/ContactList';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { EditReportModal } from './components/EditReportModal';

const App: React.FC = () => {
  const [reports, setReports] = useState<Report[]>(INITIAL_REPORTS);
  const [activeView, setActiveView] = useState<'reports' | 'contacts'>('reports');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const checkScrollTop = () => {
      // Muestra el botón después de desplazarse 400px
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollButton]);


  const addReport = (newReport: Omit<Report, 'id' | 'timestamp'>) => {
    const reportWithMeta: Report = {
      ...newReport,
      id: Date.now(),
      timestamp: new Date(),
      isOwn: true, // Marcar como propio del usuario
    };
    setReports(prevReports => [reportWithMeta, ...prevReports]);
    setActiveView('reports'); // Switch to reports view after submitting
  };
  
  const handleDeleteReport = (reportId: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este reporte?')) {
      setReports(prevReports => prevReports.filter(report => report.id !== reportId));
    }
  };

  const handleUpdateReport = (updatedReport: Report) => {
    setReports(prevReports => 
      prevReports.map(report => 
        report.id === updatedReport.id ? updatedReport : report
      )
    );
    setEditingReport(null); // Cerrar modal
  };

  const filteredReports = reports.filter(report =>
    report.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Header />
      
      <main className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Crear Nuevo Reporte</h2>
          <ReportForm onSubmit={addReport} />
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              <button
                onClick={() => setActiveView('reports')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors duration-200
                  ${activeView === 'reports' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              >
                Reportes en Tiempo Real
              </button>
              <button
                onClick={() => setActiveView('contacts')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors duration-200
                  ${activeView === 'contacts' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              >
                Números de Ayuda
              </button>
            </nav>
          </div>

          <div className="p-4 sm:p-6">
            {activeView === 'reports' ? (
              <>
                <div className="mb-4">
                  <label htmlFor="search" className="sr-only">Buscar reportes</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="block w-full rounded-md border-0 py-2 pl-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Buscar por palabra clave..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <ReportFeed 
                  reports={filteredReports} 
                  onEdit={setEditingReport}
                  onDelete={handleDeleteReport}
                />
              </>
            ) : (
              <ContactList contacts={CONTACTS} />
            )}
          </div>
        </div>
      </main>
      
      <footer className="text-center py-4 text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Apoyo al Peregrino. Todos los derechos reservados.</p>
      </footer>

      <ScrollToTopButton isVisible={showScrollButton} />

      {editingReport && (
        <EditReportModal
          report={editingReport}
          onSave={handleUpdateReport}
          onCancel={() => setEditingReport(null)}
        />
      )}
    </div>
  );
};

export default App;