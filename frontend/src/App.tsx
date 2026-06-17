import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import DepartmentsPage from '@/pages/DepartmentsPage';
import OpportunizaPage from '@/pages/OpportunizaPage';
import EventsPage from '@/pages/EventsPage';
import GalleryPage from '@/pages/GalleryPage';
import NewsPage from '@/pages/NewsPage';
import DocumentsPage from '@/pages/DocumentsPage';
import PartnersPage from '@/pages/PartnersPage';
import TransparencyPage from '@/pages/TransparencyPage';
import ContactPage from '@/pages/ContactPage';
import JoinUsPage from '@/pages/JoinUsPage';
import NotFoundPage from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="departamentos" element={<DepartmentsPage />} />
        <Route path="oportuniza" element={<OpportunizaPage />} />
        <Route path="eventos" element={<EventsPage />} />
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="noticias" element={<NewsPage />} />
        <Route path="documentos" element={<DocumentsPage />} />
        <Route path="parceiros" element={<PartnersPage />} />
        <Route path="transparencia" element={<TransparencyPage />} />
        <Route path="contactos" element={<ContactPage />} />
        <Route path="tornar-se-membro" element={<JoinUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/inicio" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
