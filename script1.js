  /* ── TICKER: build items then duplicate for seamless -50% loop ── */
        (function () {
            const brands = [
                { name: "C.R.I. PUMPS", sub: "Pumps & Motors" },
                { name: "ANCHOR", sub: "Cables & Wires" },
                { name: "KISAN PIPES", sub: "Plumbing" },
                { name: "SUPERFLOW", sub: "Fluid Systems" },
                { name: "MAC", sub: "Agriculture" },
                { name: "KELVINA", sub: "Industrial" },
            ];

            const makeSet = () => brands.map(b =>
                `<span class="ticker-item">` +
                `<span class="ticker-dot"></span>` +
                `<strong>${b.name}</strong> — ${b.sub}` +
                `</span>`
            ).join('');

            const track = document.getElementById('tickerTrack');
            // Paste exactly two identical sets → animation from 0 → -50% loops perfectly
            track.innerHTML = makeSet() + makeSet();
        })();

        /* ── SCROLL REVEAL ── */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
                    const idx = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = (idx * 80) + 'ms';
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        /* ── FORM SUBMIT ── */
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('.submit-btn');
            btn.textContent = '✓ Sent! We\'ll be in touch soon.';
            btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';
            btn.disabled = true;
        });

        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }