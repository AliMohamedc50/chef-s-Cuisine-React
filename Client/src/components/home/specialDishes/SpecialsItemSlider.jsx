import Carousel from "react-bootstrap/Carousel";
import useFetch from "../../../../hooks/useFetch";

function SpecialsItemSlider() {



  const { data } = useFetch(`/our-specials?populate=*`);
     const upload_url = "http://localhost:1337";
     console.log(upload_url + data[0]?.attributes?.img?.data?.attributes.url);
  return (
    <div>
      <Carousel>
        {data.map((item) => (
          <Carousel.Item key={item.id} interval={3000}>
            <div className="ourSpecials__item ">
              <div className="flying-photo">
                <img
                  className="img-fluid"
                  src={
                    upload_url +
                    item?.attributes?.img?.data?.attributes.url
                  }
                  alt=""
                />
              </div>
              <h2 className="pt-5">{item.attributes.title}</h2>
              <h3>${item.attributes.price}</h3>
              <img src="./src/assets/3star.png" alt="" />
              <p>{item.attributes.des}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SpecialsItemSlider;
