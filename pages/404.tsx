// pages/404.tsx
import Background from '../components/animations/background';

export default function Custom404() {
  return (
    <>
      <Background />
      <div style={{ textAlign: 'center', padding: '5rem 2rem', color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem' }}>404 - Página no encontrada</h1>
        <p style={{ marginTop: '1rem' }}>
          Lo sentimos, la página que buscas no existe.
        </p>
      </div>
    </>
  );
}
