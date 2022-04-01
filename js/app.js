const stateInfo=[
  {
      stateName:"Rajasthan",
      stateImage:"./images/raj.png",
      stateAcr:"Land of Maharajas",
      //stateDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!"

  },
  {
      stateName:"Kerala",
      stateImage:"./images/k1.jpg",
      stateAcr:"God's Own Country",
      //stateDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!"
  },
  {
      stateName:"Uttarakhand",
      stateImage:"./images/u1.jpg",
      stateAcr:"The Land of the Gods",
      //stateDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!"
  }
]
const swiperContainer = document.querySelector('#swiper-wrapper-1');

const showSlider = (innerSlider) => {
  const sliderContent = innerSlider
      .map((info) => {
          return `<div class="swiper-slide">
          <div class="box" style="background:url(${info.stateImage}) no-repeat;background-size:cover;">
            <div class="content">
              <h2>${info.stateName}</h2>
              <h3>${info.stateAcr}</h3>
              <form action="location.html" method="GET">
              <button type="submit" name="q" class="btns" id="btn" value="&#xe8f4;"><i class="fa fa-plane"></i></button>
              <input type="text" name="state" readonly="readonly" value="${info.stateName}" style="display:none;">
              </form>
            </div>
          </div>
        </div>
  `;
      })
      .join('');
      swiperContainer.innerHTML = sliderContent;

};
showSlider(stateInfo);
