export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const prod = {
    url: {
     API_URL: 'http://192.168.99.100:8000'
    }
   };

export const dev = {
    url: {
     API_URL: 'http://localhost:8000'
    }
   };
