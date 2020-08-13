const getPeopleData = async () => {
  const url = 'https://tihov.com.ua/internship/people/';
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      $('.responsive').append(data.reduce((acc, val) => {
        return acc += createClientElements(val);
      }, ''))
    });
}

const createClientElements = (clientObj) => {
  return `<div class="slick-item" style="display:grid;">
    <div class="slick-name">
      <p>${clientObj.name}</p>
    </div>
    <div class="slick-photo">
      <img src="${clientObj.photo}" alt=""/>
    </div>
    <div class="slick-position">
      <p>${clientObj.position}</p>
    </div>
    <div class="slick-description">
      <p>${clientObj.description}</p>
    </div>
  </div>`;
}

const createSliderPeople = async () => {
  await getPeopleData();
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

const createSliderPartners = () => {
  $('.partners-container').slick({
    speed: 300,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

$(document).ready(() => {
  createSliderPeople();
  createSliderPartners();
});
