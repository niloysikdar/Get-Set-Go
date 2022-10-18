const stateInfo = [
  {
    stateName: 'Rajasthan',
    stateImage: '../images/raj.png',
    stateAcr: 'Land of Maharajas',
    //stateDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!"
  },
  {
    stateName: 'Kerala',
    stateImage: '../images/k1.jpg',
    stateAcr: "God's Own Country",
    //stateDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!"
  },
  {
    stateName: 'Uttarakhand',
    stateImage: '../images/u1.jpg',
    stateAcr: 'The Land of the Gods',
    //stateDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!"
  },
];
const swiperContainer = document.querySelector('#swiper-wrapper-1');
const searchBar = document.querySelector('#search');

const showSlider = (states) => {
  states.forEach((item) => {
    swiperContainer.innerHTML += `<div class="swiper-slide" style ="padding: 10px;">
          <div class="box" style="background:url(${item.stateImage}) no-repeat;background-size:cover;">
            <div class="content">
              <h2>${item.stateName}</h2>
              <h3>${item.stateAcr}</h3>
              <a href="./location?state=${item.stateName}" class="btns"><i class="fa fa-plane fa-2x"></i></a>
            </div>
          </div>
        </div>`;
  });
};

showSlider(stateInfo);

searchBar.addEventListener('keyup', (input_value) => {
  const inputValue = input_value.target.value.toLowerCase();
  const findStates = stateInfo.filter((item) => {
    return item.stateName.toLowerCase().includes(inputValue);
  });
  swiperContainer.innerHTML = '';
  showSlider(findStates);
});
