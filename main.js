async function hotelsData(url) {
  const sessionHotels = sessionStorage.getItem('hotels');
  let hotels;

  if (!sessionHotels) {
    hotels = await fetch(url)
      .then((response) => response.json())
      .then(hotels => hotels);
    sessionStorage.setItem('hotels', JSON.stringify(hotels));
  } else {
    hotels = JSON.parse(sessionHotels);
  }
  return hotels;
}

const dataLoves = async () => {
  const dataMain = await hotelsData('https://fe-student-api.herokuapp.com/api/hotels/popular');

  const wrapper = document.querySelector('body');

  const sectionLoves = document.createElement('section');
  sectionLoves.classList.add('loves');
  wrapper.prepend(sectionLoves);

  const lovesH2 = document.createElement('h2');
  const lovesNode = document.createTextNode('Homes guests loves');
  lovesH2.prepend(lovesNode);
  sectionLoves.prepend(lovesH2);
  lovesH2.classList.add('loves');
  const lovesSlider = document.createElement('div');
  lovesSlider.classList.add('loves__items');
  lovesH2.after(lovesSlider);

  dataMain.slice(0, 4).forEach((item) => {
    const div = document.createElement('div');
    lovesSlider.append(div);

    const a = document.createElement('a');
    a.setAttribute('src', '#');
    div.prepend(a);

    const img = document.createElement('img');
    img.setAttribute('src', `${item.imageUrl}`);
    img.setAttribute('alt', `${item.name}`);
    a.append(img);

    const pHostel = document.createElement('p');
    pHostel.innerHTML = `${item.name}`;
    a.append(pHostel);

    const pCityCountry = document.createElement('p');
    pCityCountry.innerHTML = `${item.city}, ${item.country}`;
    pHostel.after(pCityCountry);
  });
};
dataLoves();
