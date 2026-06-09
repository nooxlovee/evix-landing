(function () {
  'use strict';

  // ============ Billing toggle (месяц / год) ============
  const buttons = document.querySelectorAll('.billing-toggle__btn');
  const setPeriod = (period) => {
    buttons.forEach((b) => b.classList.toggle('is-active', b.dataset.period === period));
    document.querySelectorAll('[data-price]').forEach((el) => {
      const val = el.getAttribute('data-price-' + period);
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-old]').forEach((el) => {
      const val = el.getAttribute('data-old-' + period);
      el.textContent = val || '';
      el.style.display = val ? '' : 'none';
    });
    document.querySelectorAll('[data-per]').forEach((el) => {
      el.textContent = period === 'yearly' ? '/мес при оплате за год' : '/мес';
    });
  };
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => setPeriod(btn.dataset.period));
  });

  // ============ FAQ accordion ============
  document.querySelectorAll('.faq-item__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach((i) => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });
})();
