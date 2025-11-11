// Calculator logic without "Внедрение" option.
(function(){
  const fmt = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';

  const dir = document.getElementById('dir');
  const qty = document.getElementById('qty');
  const out = document.getElementById('out');
  const periodEl = document.getElementById('period');

  if (dir && qty && out) {
    const calc = () => {
      try {
        const cfg = JSON.parse(dir.value);
        const q = Math.max(1, parseInt(qty.value || 1, 10));
        const base = cfg.avg || 0;
        const sum = Math.round(base * (cfg.pct/100) * q);
        out.textContent = sum > 0 ? fmt(sum) : '—';
        if (periodEl) periodEl.textContent = (cfg.mode === 'monthly') ? '/ месяц' : '(разово)';
      } catch(e){ out.textContent = '—'; if (periodEl) periodEl.textContent = ''; }
    };
    dir.addEventListener('change', calc);
    qty.addEventListener('input', calc);
    calc();
  }
})();