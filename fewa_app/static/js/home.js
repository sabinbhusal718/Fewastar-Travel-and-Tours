// Flight quote form -> WhatsApp
function sendQuote(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  openWhatsApp([
    'Flight quote request',
    'From: ' + f.get('origin'),
    'To: ' + f.get('destination'),
    'Departure: ' + (f.get('depart') || '-'),
    'Return: ' + (f.get('return') || '-'),
    'Passengers: ' + f.get('pax'),
    'My WhatsApp: ' + (f.get('whatsapp') || '-'),
    'Notes: ' + (f.get('notes') || '-')
  ]);
}

// Connect form -> WhatsApp
function sendConnect(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  openWhatsApp([
    'New enquiry from website',
    'Name: ' + f.get('name'),
    'Phone: ' + f.get('phone'),
    'Email: ' + (f.get('email') || '-'),
    'Topic: ' + f.get('topic'),
    'Message: ' + f.get('message')
  ]);
  document.getElementById('connectNote').textContent =
    'Thank you! WhatsApp has opened with your message. Press send to reach us.';
  e.target.reset();
}

// Vehicle cards: choose a vehicle and jump to the form
document.querySelectorAll('.veh-pick').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('vehicleSelect').value = btn.dataset.vehicle;
    document.querySelectorAll('.veh').forEach(c => c.classList.remove('selected'));
    btn.closest('.veh').classList.add('selected');
    document.getElementById('vehicleForm').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Vehicle form -> WhatsApp
function sendVehicle(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  openWhatsApp([
    'Vehicle booking request',
    'Name: ' + f.get('name'),
    'Phone: ' + f.get('phone'),
    'Vehicle: ' + f.get('vehicle'),
    'Trip: ' + f.get('trip'),
    'Pickup: ' + f.get('pickup'),
    'Drop: ' + f.get('drop'),
    'Date: ' + f.get('date'),
    'Time: ' + (f.get('time') || '-'),
    'Passengers: ' + f.get('pax'),
    'Notes: ' + (f.get('notes') || '-')
  ]);
  document.getElementById('vehicleNote').textContent =
    'Thank you! WhatsApp has opened with your booking. Press send to confirm.';
  e.target.reset();
  document.querySelectorAll('.veh').forEach(c => c.classList.remove('selected'));
}