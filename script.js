// script.js


    // Wrap the fetch call in a function
    function getAQI() {
        fetch('https://dosairnowdata.org/dos/RSS/AddisAbabaCentral/AddisAbabaCentral-PM2.5.xml')
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                let descriptions = data.getElementsByTagName('description');
                if(descriptions.length > 1) {
                    let aqi = descriptions[1].childNodes[0].nodeValue;
                    document.getElementById('aqi').innerText = `AQI: ${aqi}`;
                }
            })
            .catch(err => console.error(err));
    }
    
    // Call the function immediately to display the AQI as soon as the page loads
    getAQI();
    
    // Then call the function every 3 hours
    // Note: 3 hours = 3 * 60 * 60 * 1000 = 10,800,000 milliseconds
    setInterval(getAQI, 10800000);