import React, { useEffect, useRef } from 'react';

export default function Chart() {
  const container = useRef();

  const loadTradingViewScript = async (container) => {
    try {
      // Check if the script already exists to prevent adding it multiple times
      const existingScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');
      if (existingScript) return;
  
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: 'NASDAQ:AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        allow_symbol_change: true,
        calendar: false,
        support_host: 'https://www.tradingview.com'
      });
  
      // Append the script to the container
      if (container.current) {
        container.current.appendChild(script);
      }
    } catch (error) {
      console.error('Error loading TradingView script:', error);
    }
  };


useEffect(() => {
    loadTradingViewScript(container);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container.current) {
        const script = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');
        if (script) {
          container.current.removeChild(script);
        }
      }
    };
  }, []);
// Empty dependency array ensures this effect runs only once

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}
