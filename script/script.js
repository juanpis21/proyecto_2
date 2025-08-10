function enviarWhatsApp() {
    const telefono = "573203270799"; // 
    const mensaje = "Hola, estoy interesado en sus servicios. ¿Podrían brindarme más información?";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`
      : `https://web.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }