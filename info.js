document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('infoModal');
  const titleEl = document.getElementById('infoModalTitle');
  const bodyEl = document.getElementById('infoModalBody');
  const closeBtn = document.getElementById('infoModalClose');

  function openModal(type) {
    if (!modal || !titleEl || !bodyEl) return;
    if (type === 'career') {
      titleEl.textContent = 'Careers at ET Services';
      bodyEl.innerHTML = `
        <p>We're hiring for roles in recruitment, HR, and legal support. Typical openings:</p>
        <ul>
          <li>Recruitment Specialist</li>
          <li>HR Coordinator</li>
          <li>Legal Assistant / Paralegal</li>
        </ul>
        <p>To apply, send your CV to <strong>hr@t.org</strong> with the role in the subject line.</p>
      `;
    } else {
      titleEl.textContent = 'Our Services';
      bodyEl.innerHTML = `
        <p>We provide end-to-end business services including:</p>
        <ul>
          <li>Recruitment & staffing</li>
          <li>Legal documentation & compliance support</li>
          <li>Onboarding and HR advisory</li>
        </ul>
        <p>Contact us at <strong>info@et.org</strong> for a quote or consultation.</p>
      `;
    }
    modal.style.display = 'flex';
  }

  function closeModal() {
    if (modal) modal.style.display = 'none';
  }

  const careerBtn = document.getElementById('careerBtn');
  const serviceBtn = document.getElementById('serviceBtn');

  if (careerBtn) careerBtn.addEventListener('click', function () { openModal('career'); });
  if (serviceBtn) serviceBtn.addEventListener('click', function () { openModal('service'); });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close when clicking outside the modal content
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
});
