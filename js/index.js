//  Data array

const unescoSights = [
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/1502',
    siteImage:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/1570',
    siteImage:
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Ramappa_Temple_%28Human_Scale%29.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/255',
    siteImage:
      'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1078858838_20200320164009.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/1338',
    siteImage:
      'https://jaipurtourism.co.in/images/places-to-visit/header/jantar-mantar-jaipur-entry-fee-timings-holidays-reviews-header.jpg',
  },

  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/250',
    siteImage:
      'https://www.adotrip.com/public/images/areas/5f0c4c7ac786b-Great%20Living%20Chola%20Temples%20Sight%20Seeing%20Tour.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/252',
    siteImage:
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/337',
    siteImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Beauty_of_Kaziranga_National_Park.jpg/426px-Beauty_of_Kaziranga_National_Park.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/1056',
    siteImage:
      'https://whc.unesco.org/uploads/thumbs/site_1056_0001-750-750-20120601152647.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/242',
    siteImage:
      'https://www.trawell.in/admin/images/upload/467348225Ajanta_Cave2_Main.jpg',
  },
  {
    reDirectionForMoreInfo: 'https://whc.unesco.org/en/list/251',
    siteImage:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Agra_03-2016_10_Agra_Fort.jpg',
  },
];

const container2 = document.querySelector('.container2');

const showSlider = () => {
  unescoSights.forEach((e) => {
    container2.innerHTML += `<a href="${e.reDirectionForMoreInfo}" target="_blank"><img
    src="${e.siteImage}" class="slider"alt="img"></a>`;
  });
};

showSlider();

const slider = document.querySelectorAll('.slider');
var counter = 0;
slider.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  slider.forEach((slider) => {
    slider.style.transform = `translateX(-${counter * 100}%)`;
  });
};
