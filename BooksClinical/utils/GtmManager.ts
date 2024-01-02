declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }

export const addGtmScript = () => {
    if(typeof window != 'undefined') {
        const gtagScript = document.createElement('script');
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-3XD3SL75N8'
        gtagScript.async = true;

        document.head.appendChild(gtagScript);

        gtagScript.onload = () => {
            const script = document.createElement('script');
            script.innerHTML = `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3XD3SL75N8');` 
            
            document.head.appendChild(script);
        }
    }
}











