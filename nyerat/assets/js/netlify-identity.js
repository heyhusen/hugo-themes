import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;

netlifyIdentity.on('init', (user) => {
  if (!user) {
    netlifyIdentity.on('login', () => {
      document.location.href = '/cms/';
    });
  }
});

netlifyIdentity.init();
