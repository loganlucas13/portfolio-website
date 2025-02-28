/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                overlay: 'var(--overlay)',
                bg: 'var(--bg)',
                bw: 'var(--bw)',
                blank: 'var(--blank)',
                text: 'var(--text)',
                mtext: 'var(--mtext)',
                border: 'var(--border)',
                ring: 'var(--ring)',
                ringOffset: 'var(--ring-offset)',

                secondaryBlack: '#212121',
            },
            borderRadius: {
                base: '6px',
            },
            boxShadow: {
                shadow: 'var(--shadow)',
            },
            translate: {
                boxShadowX: '3px',
                boxShadowY: '2px',
                reverseBoxShadowX: '-3px',
                reverseBoxShadowY: '-2px',
            },
            fontWeight: {
                base: '500',
                heading: '800',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
