document.querySelector('#calcBtn')?.addEventListener('click', () => {
  const service = document.getElementById('service').value;
  const amount = parseFloat(document.getElementById('amount').value || '0');
  const map = {
    impl: 50,
    support: 20,
    its: 10,
    cloud: 50,
    soc: 50,
    license: 10
  };
  const percent = map[service] || 0;
  const payout = Math.round(amount * percent / 100);
  document.getElementById('percent').textContent = percent ? (percent + '%') : '—';
  document.getElementById('payout').textContent = payout ? (payout.toLocaleString('ru-RU') + ' ₽') : '—';
});
