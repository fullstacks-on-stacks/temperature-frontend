export const getLocation  = () => {
  return fetch('https://app-temp-monitor.herokuapp.com', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }

  })
    .then(res => {
      if(!res.ok) throw 'unable to fetch route';
      return res.json();
    });
};

export const getTemperature = () => {
  return fetch('https://app-temp-monitor.herokuapp.com/temp/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'unable to fetch temps';
      return res.json();
    });
};
