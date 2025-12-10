/**
 * Script de inicialización que se ejecuta ANTES de la hidratación de React.
 *
 * Funciones:
 * - Detecta preferencia de movimiento reducido (localStorage + sistema)
 * - Aplica `data-reduce-motion` al HTML para CSS y providers
 * - Deshabilita scroll restoration del browser para evitar bugs con GSAP/Lenis
 * - Resetea scroll a 0 en cada carga
 *
 * Este script DEBE ser inline (no puede ser un módulo externo) porque
 * necesita ejecutarse antes de cualquier JS de React para evitar FOUC
 * y problemas de hidratación.
 */
const script = String.raw`
(function() {
  try {
    var pref = localStorage.getItem('motion-preference');
    var systemReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var shouldReduce = pref === 'reduce' || (pref !== 'allow' && systemReduce);
    
    if (shouldReduce) {
      document.documentElement.setAttribute('data-reduce-motion', 'true');
    }
    
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  } catch (e) {}
})();
`;

export function MotionInitScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
