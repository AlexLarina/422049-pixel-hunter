const URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = 422049;

const checkStatus = (response) => {
  return response.ok && response;
};

const toJSON = (res) => res.json();

class Backend {
  static downloadData() {
    return fetch(`${URL}/questions`).
    then(checkStatus).
    then(toJSON);
  }

  static downloadResults(name) {
    const prevRes = fetch(`${URL}/stats/:${APP_ID}-:${name}`).
    then(checkStatus).
    then(toJSON);
    return prevRes;
  }

  static uploadResults(data, name) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${URL}/stats/:${APP_ID}-:${name}`, requestSettings).
    then(checkStatus);
  }
}

export default Backend;
