export const getTemperatures = () => {
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
