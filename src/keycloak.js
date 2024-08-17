import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth', // Keycloak server URL
  realm: 'sp-realm', // Replace with your realm name
  clientId: '3cwTshUi58GAhzHTdlV4BXj18yIjQLdP', // Replace with your client ID
});

export default keycloak;
