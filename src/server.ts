import { app } from './app';

const PORT = Number(process.env.PORT) || 3004; // ✅ Convert to number
const HOST = '0.0.0.0'; // ✅ Bind to all interfaces

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log(`Local access: http://localhost:${PORT}`);
  console.log(`Network access: http://10.102.144.18:${PORT}`);
});