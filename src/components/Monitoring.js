import React from 'react';

const Monitoring = () => {
    return (
        <div style={{height: '99vh'}}>
            <iframe src="/netdata/"
                    style={{width: '100%', height: '100%', border: 'none'}}>
            </iframe>
        </div>
    );
}

export default Monitoring;