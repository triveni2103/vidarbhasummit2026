    // Countdown to 23 March 2026, 11 AM IST
    function updateCountdown() {
      const target = new Date('2026-03-23T11:00:00+05:30').getTime();
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        document.getElementById('cd-days').textContent = '0';
        document.getElementById('cd-hours').textContent = '0';
        document.getElementById('cd-mins').textContent = '0';
        document.getElementById('cd-secs').textContent = '0';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Scroll animations
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

    function showSuccess() {
      const btn = document.querySelector('.form-submit');
      btn.textContent = 'Registering...';
      btn.disabled = true;

      setTimeout(() => {
        document.getElementById('regForm').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }, 800);
    }

    function closeModal() {
      document.getElementById('modal').classList.remove('open');
    }
    document.getElementById('modal').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
