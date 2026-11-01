// WhatsApp number used by every form on the site
const WA_NUMBER = '9779851240378';

// Opens WhatsApp with a message built from an array of lines
function openWhatsApp(lines) {
  const text = encodeURIComponent(lines.join('\n'));
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + text, '_blank');
}

// Tab buttons: highlight the clicked tab inside its own .tabs group
document.querySelectorAll('.tabs').forEach(group => {
  group.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      group.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
    });
  });
});