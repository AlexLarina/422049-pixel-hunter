const URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = 422049;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

class Backend {
  downloadData() {
    return fetch(`${URL}/questions`).
    then(checkStatus).
    then(toJSON);
  }

  downloadResults(name) {
    return fetch(`${URL}/stats/:${APP_ID}-:${name}`).
    then(checkStatus).
    then(toJSON);
  }

  uploadResults(data, name) {
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
