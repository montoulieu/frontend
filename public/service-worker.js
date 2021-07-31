navigator.serviceWorker.getRegistration().then(function (registrations) {
  for (let registration of registrations) {
    console.log(registration);
    registration.unregister();
  }
});
