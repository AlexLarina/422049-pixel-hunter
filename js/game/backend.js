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
  static downloadData() {
    return fetch(`${URL}/questions`).
    then(checkStatus).
    then(toJSON);
  }

  static downloadResults(name) {
    // console.log(`С сервера приходит: `);
    const prevRes = fetch(`${URL}/stats/:${APP_ID}-:${name}`).
    then(checkStatus).
    then(toJSON);
    // console.log(prevRes);
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
