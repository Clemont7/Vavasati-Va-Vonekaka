import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        {/* Rotas antigas → página única */}
        <Route path="sobre" element={<Navigate to="/#sobre" replace />} />
        <Route path="oportuniza" element={<Navigate to="/#oportuniza" replace />} />
        <Route path="eventos" element={<Navigate to="/" replace />} />
        <Route path="contactos" element={<Navigate to="/#contactos" replace />} />
        <Route path="tornar-se-membro" element={<Navigate to="/" replace />} />
        <Route path="inicio" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
