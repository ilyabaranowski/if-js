const formEl = document.getElementById('formJS');

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fetchInfo = {
    method: 'POST',
    body: new FormData(formEl),
  };

  const resp = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchInfo)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.error(error.message));

  console.log(resp);
});
