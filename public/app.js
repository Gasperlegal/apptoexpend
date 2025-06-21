(function() {
  if (typeof firebaseConfig === 'undefined') {
    console.error('Firebase configuration not found.');
    return;
  }
  const app = firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized:', app.name);
})();
