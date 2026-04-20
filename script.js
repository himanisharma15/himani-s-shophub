const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.jsx', 'utf8');

const replacement = `        <div className="footer-section">
          <h3>Reach Us At</h3>
          <div className="social-icons" style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '35px', height: '35px', borderRadius: '50%', background: '#1877F2', color: 'white', textDecoration: 'none', fontWeight: 'bold'
            }}>f</a>
            <a href="https://www.instagram.com/r.ishu.27__/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', textDecoration: 'none'
            }}>📸</a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '35px', height: '35px', borderRadius: '50%', background: '#25D366', color: 'white', textDecoration: 'none', fontWeight: 'bold'
            }}>W</a>
          </div>
          <div style={{ marginTop: '15px', borderRadius: '8px', overflow: 'hidden', height: '200px', width: '100%', maxWidth: '350px'}}>
            <iframe 
              src="https://maps.google.com/maps?q=Bilaspur,+Chhattisgarh+495001&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bilaspur Location Map"
            ></iframe>
          </div>
        </div>`;

code = code.replace(/<div className="footer-section">[\s\S]*?<h3>Follow Us<\/h3>[\s\S]*?<\/div>[\s\S]*?<\/div>/, replacement);
fs.writeFileSync('src/components/Footer.jsx', code);
