import React from 'react';

const Overview = () => {
    return (
        <div style={{
            padding: '10px',
            paddingTop: '0px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <ul style={{listStyleType: 'none', padding: 0, marginTop: '20px'}}>
                <li style={{
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    backgroundColor: '#f9f9f9'
                }}>
                    <h3 style={{margin: '0 0 10px 0'}}>Мониторинг</h3>
                    <p style={{margin: 0}}>
                        Раздел предназначен для наблюдения за состоянием сервера. Здесь можно
                        в реальном времени отслеживать загруженность процессора, использование памяти,
                        сетевой трафик и другие показатели с помощью Netdata.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Overview;