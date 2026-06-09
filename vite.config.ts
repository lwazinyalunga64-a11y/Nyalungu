import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'subscriber-saver',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/subscribe' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const { email } = JSON.parse(body);
                if (email) {
                  // Shared directory for team persistence
                  const filePath = '/home/team/shared/subscribers.json';
                  let subscribers = [];
                  
                  try {
                    if (fs.existsSync(filePath)) {
                      const content = fs.readFileSync(filePath, 'utf-8');
                      subscribers = JSON.parse(content || '[]');
                    }
                  } catch (err) {
                    console.error('Error reading subscribers file:', err);
                  }

                  if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
                  }
                  
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                } else {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Email required' }));
                }
              } catch (e) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Internal server error' }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    host: '0.0.0.0',
  }
})
