// Simple contact form handler (demo only, does not actually send emails)
document.getElementById('contact-form').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = 'Thank you for reaching out!';
  this.reset();
};