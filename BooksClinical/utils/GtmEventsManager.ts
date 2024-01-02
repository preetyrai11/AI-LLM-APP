

export enum ButtonName {
    LOGIN = 'login',
    SIGN_UP = 'signup',
    WHATSAPP = 'whatsapp',
    GETTING_STARTED = 'gettingstarted',
    UPGRADE_BUTTON = 'upgrade'
}

export const trackLoginButtonClick = () => {
    window.gtag('event', ButtonName.LOGIN,{
        'event_category': 'User Authentication',
        'event_label': 'Login Button'   
    });
}

export const trackSignupButtonClick = () => {
    window.gtag('event', ButtonName.SIGN_UP,{  
        'event_category': 'User Authentication',
        'event_label': 'Signup Button'       
    })
}

export const trackUpgradeButtonClick = () => {
    window.gtag('event', ButtonName.UPGRADE_BUTTON, {
        'event_category': 'Upgrade Button Interaction',
        'event_label': 'Upgrade Button' 
    })
}

export const trackWhatsappButtonClick = () => {
    window.gtag('event', ButtonName.WHATSAPP,{  
        'event_category': 'Social Interaction',
        'event_label': 'WhatsApp Button'       
    })
}

// TODO Remove after validating the event in Google Analytics 
export const trackGettingStartedButtonClick = () => {
    window.gtag('event', ButtonName.GETTING_STARTED,{  
        'event_category': 'User Authentication',
        'event_label': 'Getting Started Button'       
    })
}


export const trackHomePageScrollEvent = (scrollDepth: number) => {
    console.log("Inside trackHomePageScrollEvent");
    window.gtag('event', `${scrollDepth}% Scroll`, {
        'event_category': 'Scroll Depth', 
        'event_label': 'Home Page'
    });
}


export const trackSearchStartTime = (searchStartTime: number, searchEndTime: number) => {
    let responseTime = searchEndTime - searchStartTime
    window.gtag('name', 'Chat Search Response Time',{
        'value': responseTime,
        'event_category': 'Chat Interaction'    
    })
}


export const trackPayNowClickEvent = () => {
    window.gtag('event', 'payment',{
        'event_category': 'Conversion',
        'event_label': 'Payment Button Click'
    });
}










