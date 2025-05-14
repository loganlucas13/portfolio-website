const Background = () => {
    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden transition-all"
            style={{
                backgroundColor: 'var(--bg)',
                backgroundImage:
                    'radial-gradient(var(--main) 1.8px, var(--bg) 1.8px)',
                backgroundSize: '36px 36px',
            }}
        />
    );
};

export default Background;
