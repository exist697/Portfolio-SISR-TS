// Script d'optimisation des performances à injecter dans la page
export const performanceScript = `
// Optimisation du rendu
(function() {
  // Désactiver les animations CSS complexes
  document.documentElement.style.setProperty('--animate-duration', '0.15s');
  
  // Optimiser le rendu
  document.body.style.textRendering = 'optimizeSpeed';
  
  // Optimiser les transitions de page
  let isNavigating = false;
  
  // Intercepter les clics sur les liens
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/') && !link.getAttribute('href').includes('#')) {
      // Éviter les navigations multiples
      if (isNavigating) {
        e.preventDefault();
        return;
      }
      
      // Appliquer une transition minimale
      document.body.style.opacity = '0.98';
      
      // Marquer comme en cours de navigation
      isNavigating = true;
      
      // Réinitialiser après la navigation
      setTimeout(function() {
        document.body.style.opacity = '1';
        isNavigating = false;
      }, 300);
    }
  });
  
  // Optimiser le chargement des images
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img').forEach(function(img) {
      if (img.getAttribute('loading') !== 'eager') {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
  
  // Optimiser le scroll
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
`

// Fonction pour injecter le script dans la page
export function injectPerformanceScript() {
  if (typeof window !== "undefined") {
    const script = document.createElement("script")
    script.innerHTML = performanceScript
    document.head.appendChild(script)
  }
}
