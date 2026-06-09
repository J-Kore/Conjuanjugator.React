/* dock.jsx — ConJuanJugator v5  ·  Dark Neon / Spotify
   type="text/babel" · Requiere React 18 + ReactDOM en window
*/
(function () {
    const { useState } = React;

    const ITEMS = [
        { id: 'home',      label: 'Inicio',      fn: () => window.mostrarMenu(),
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> },
        { id: 'learn',     label: 'Aprender',    fn: () => window.mostrarSubMenuAprender(),
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg> },
        { id: 'play',      label: 'Jugar',       fn: () => window.mostrarSubMenuPracticar(),
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/></svg> },
        { id: 'irregular', label: 'Irregulares', fn: () => window.populateIrregularVerbsSection(),
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg> },
        { id: 'save',      label: 'Guardar',     fn: () => window.guardarProgreso(),
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg> },
        { id: 'load',      label: 'Cargar',      fn: () => window.cargarProgreso(),
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg> },
    ];

    const S = {
        nav: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '64px',
            background: 'rgba(0,0,0,0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 -8px 32px rgba(0,0,0,0.7)',
            padding: '0 4px',
        },
        btn: {
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            padding: '4px 6px',
            cursor: 'pointer',
            borderRadius: '12px',
            flex: 1,
            minWidth: 0,
            maxWidth: '70px',
            margin: 0,
            position: 'relative',
            overflow: 'hidden',
            WebkitTapHighlightColor: 'transparent',
            transition: 'background 0.18s',
        },
        btnActive: { background: 'rgba(0,229,160,0.08)' },
        pill: {
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '20px',
            height: '2px',
            borderRadius: '0 0 2px 2px',
            background: '#00E5A0',
            boxShadow: '0 0 8px rgba(0,229,160,0.8)',
        },
        label: {
            fontSize: '0.58em',
            letterSpacing: '0.01em',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '500',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            transition: 'color 0.18s',
        },
        ripple: {
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            background: 'rgba(0,229,160,0.15)',
            animation: 'dockRipple 0.35s ease-out forwards',
            pointerEvents: 'none',
        },
    };

    function Dock() {
        const [active, setActive] = useState('home');
        const [ripple, setRipple] = useState(null);

        const tap = (item) => {
            setActive(item.id);
            setRipple(item.id);
            setTimeout(() => setRipple(null), 380);
            item.fn();
        };

        return (
            <nav style={S.nav} role="navigation" aria-label="Navegación principal">
                {ITEMS.map(item => {
                    const on = active === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => tap(item)}
                            title={item.label}
                            aria-label={item.label}
                            aria-current={on ? 'page' : undefined}
                            style={{ ...S.btn, ...(on ? S.btnActive : {}) }}
                        >
                            {on && <span style={S.pill} />}
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: on ? '#00E5A0' : 'rgba(255,255,255,0.4)',
                                transform: on ? 'translateY(-2px) scale(1.18)' : 'scale(1)',
                                transition: 'transform 0.26s cubic-bezier(.34,1.56,.64,1), color 0.18s',
                            }}>
                                {item.icon}
                            </span>
                            <span style={{ ...S.label, color: on ? '#00E5A0' : 'rgba(255,255,255,0.35)', fontWeight: on ? '600' : '400' }}>
                                {item.label}
                            </span>
                            {ripple === item.id && <span style={S.ripple} />}
                        </button>
                    );
                })}
            </nav>
        );
    }

    if (!document.getElementById('_dock_kf')) {
        const s = document.createElement('style');
        s.id = '_dock_kf';
        s.textContent = `@keyframes dockRipple { from{opacity:1;transform:scale(.5)} to{opacity:0;transform:scale(1.6)} }`;
        document.head.appendChild(s);
    }

    function mount() {
        const root = document.getElementById('dock-root');
        if (root && window.ReactDOM) ReactDOM.createRoot(root).render(<Dock />);
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', mount)
        : mount();
})();