document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var backdrop = document.querySelector('.nav-backdrop');

  function closeNav() {
    nav.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeNav);
  }

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Contact form (static demo — replaces submit with confirmation only)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.querySelector('.form-status');
      var mailLink = document.createElement('a');
      var name = encodeURIComponent(form.querySelector('#name').value);
      var subject = encodeURIComponent('Message from ' + form.querySelector('#name').value + ' via Math-Up site');
      var body = encodeURIComponent(form.querySelector('#message').value + '\n\n— ' + form.querySelector('#name').value + ' (' + form.querySelector('#email').value + ')');
      window.location.href = 'mailto:mathup.coo@gmail.com?subject=' + subject + '&body=' + body;
      if (status) {
        status.textContent = 'Opening your email app to send this message…';
        status.style.display = 'block';
      }
    });
  }
});
