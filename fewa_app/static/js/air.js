// Trip type tabs: set the hidden value and show or hide the right fields
document.querySelectorAll('.air-form .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const trip = tab.dataset.trip;
    document.getElementById('tripType').value = trip;
    document.getElementById('returnWrap').hidden = (trip === 'One way' || trip === 'Multi-city');
    document.getElementById('routeWrap').hidden = (trip !== 'Multi-city');
  });
});

// Flight enquiry -> WhatsApp (uses openWhatsApp from script.js)
function sendAir(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const lines = [
    'Flight enquiry',
    'Trip: ' + f.get('trip'),
    'From: ' + f.get('origin'),
    'To: ' + f.get('destination'),
    'Departure: ' + f.get('depart'),
    'Return: ' + (f.get('return') || '-')
  ];
  if (f.get('trip') === 'Multi-city') {
    lines.push('Route: ' + (f.get('route') || '-'));
  }
  lines.push(
    'Adults: ' + f.get('adults') + ', Children: ' + f.get('children') + ', Infants: ' + f.get('infants'),
    'Cabin: ' + f.get('cabin'),
    'Name: ' + f.get('name'),
    'WhatsApp: ' + f.get('phone'),
    'Notes: ' + (f.get('notes') || '-')
  );
  openWhatsApp(lines);
  document.getElementById('airNote').textContent =
    'Thank you! WhatsApp has opened with your enquiry. Press send to reach us.';
}