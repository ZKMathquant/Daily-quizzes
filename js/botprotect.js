(function() {
    // Encrypted String Dictionary
    const _0xS = [
        '\x77\x65\x62\x64\x72\x69\x76\x65\x72', // webdriver
        '\x5f\x70\x68\x61\x6e\x74\x6f\x6d',   // _phantom
        '\x69\x6e\x70\x75\x74',                // input
        '\x61\x62\x73\x6f\x6c\x75\x74\x65',     // absolute
        '\x56\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x20\x54\x69\x6d\x65\x6f\x75\x74' // Verification Timeout
    ];

    window.BotProtect = {
        check: function() {
            // Environment Scrutiny
            const _env1 = !!(navigator[_0xS[0]] || window[_0xS[1]] || window.Cypress || window.__nightmare);
            const _env2 = (screen.width < 0x64 || screen.height < 0x64);

            // Anti-DevTools Timing Trap (Debugger Detection)
            const _st = Date.now();
            (function() { debugger; })();
            const _et = Date.now();

            // Fail if automation is found or execution was paused by a debugger (>200ms)
            if (_env1 || _env2 || (_et - _st > 0xc8)) return ![];
            return !![];
        },

        requireHuman: function() {
            let _c1 = 0x0; // Movement counter
            let _c2 = 0x0; // Interaction counter

            // Invisible Honeypot Trap
            const _hp = document.createElement(_0xS[2]);
            _hp.type = 'text';
            _hp.style.position = _0xS[3];
            _hp.style.left = '-1000vw'; // Deep off-screen
            document.body.appendChild(_hp);

            // Secret Behavioral Monitoring
            const _h1 = () => { _c1++; };
            const _h2 = () => { _c2++; };
            document.addEventListener('mousemove', _h1, {passive: !![]});
            document.addEventListener('mousedown', _h2);
            document.addEventListener('keydown', _h2);

            return new Promise((_v, _x) => {
                // Randomizing the delay (1.6s to 2.0s) to disrupt bot timing patterns
                const _lag = Math.floor(Math.random() * 400) + 1600;

                setTimeout(() => {
                    // Logic: 0x5 movements (5) AND 0x1 interaction (1) AND Honeypot empty
                    const _isH = (_c1 >= 0x5 && _c2 >= 0x1 && _hp.value.length === 0x0);

                    // Cleanup listeners to save memory
                    document.removeEventListener('mousemove', _h1);
                    document.removeEventListener('mousedown', _h2);
                    document.removeEventListener('keydown', _h2);

                    if (_isH && this.check()) {
                        _v(!![]);
                    } else {
                        _x(_0xS[4]);
                    }
                }, _lag);
            });
        },

        block: function(_err) {
            const _ui = '\x41\x63\x63\x65\x73\x73\x20\x52\x65\x73\x74\x72\x69\x63\x74\x65\x64'; // Access Restricted
            document.body.innerHTML = `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#0f172a;color:#ef4444;font-family:sans-serif;text-align:center;">
                    <div style="border:1px solid #334155;padding:3rem;border-radius:12px;background:#1e293b;box-shadow:0 10px 30px rgba(0,0,0,0.5);">
                        <h1 style="margin:0 0 1rem 0;">${_ui}</h1>
                        <p style="color:#94a3b8;margin-bottom:2rem;">${_err}</p>
                        <button onclick="location.reload()" style="padding:12px 24px;background:#3b82f6;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">Try Again</button>
                    </div>
                </div>`;
            window.stop();
            throw new Error();
        }
    };

    // Block F12, Ctrl+U, etc.
    window.addEventListener('keydown', (e) => {
        const _k = e.keyCode;
        if (_k === 123 || (e.ctrlKey && e.shiftKey && (_k === 73 || _k === 74)) || (e.ctrlKey && _k === 85)) {
            e.preventDefault();
            return ![];
        }
    });
})();
