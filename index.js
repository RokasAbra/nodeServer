import { server } from "./lib/server.js";

const app = {};

app.init = () => {
    // 1.
  // sukurti pradinius folder'ius
  // sukurti pradinius fail'us
    // 2.
  // prisijungti prie DB
  // paleisti (musu) serveri
  server.init();
    // 3.
  // pasikartojantys procesai:
    // - istrinti senus/nenaudojamus failus
    // - su'zip'inti sena informacija
    // - atnaujinti API informacija
};
app.init(); // paleidziama funkcija kuri islogina 'serveris pasileidzia' i console
export { app };
