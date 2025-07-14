function updateCountdown() {
      const now = new Date();
      document.getElementById("now").textContent = `Heure actuelle : ${now.toLocaleTimeString()}`;

      // Cible : aujourd'hui à 20h
      const target = new Date();
      target.setHours(20, 0, 0, 0); // 20:00:00.000

      // Si on a déjà dépassé 20h aujourd'hui, on vise demain
      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target - now;

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("countdown").textContent =
        `Temps restant jusqu'à 20h : ${hours}h ${minutes}m ${seconds}s`;

      setInterval(updateCountdown, 1000);
      updateCountdown()
