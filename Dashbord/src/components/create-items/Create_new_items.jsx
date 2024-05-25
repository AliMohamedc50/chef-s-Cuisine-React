import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Alert from '../alert/Alert';

function Create_new_items() {
        let { product } = useParams();
                const [alert, setAlert] = useState("");

const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [des, setDes] = useState("");
  const [image, setImage]= useState(null)

      const [old_price, setOld_price] = useState("");
      const [new_price, setNew_price] = useState("");


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };
  // console.log(image);


const handelpost = (e) => {
  e.preventDefault()
const data = {
  title,
  price,
  des,
image,
old_price,
new_price,
};
// console.log(Boolean(data.title));
if(data.title !== "" || data.price !== "") { 
  axios
    .post(
        `http://localhost:1337/api/${product}`,
        { data },
        {
            headers: {
                Authorization:
                  "Bearer eded0c6acc58a609e5dce3d95c0af3891455ba9f1d8094f3409566cb9df50fb88caa3ae82a7e05f3965998047616be8fc70a2bf93e0169849eefd380a363d209b974e4d6cd40fea8b28a071b8a0c11b2d2d0fc657dd8bc1cc24619b60214d4d687783e260685d9e74db20b7a0645771ccd4c24323726066c2f75b12461330528",
              },
    }
  )
  .then((response) => {
      console.log(response.data);
      setAlert("Create successful!");
    })
    .catch((error) => {
    console.error(error);
    setAlert("Create failed!");
  });
}
}

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alert]);


  return (
    <div style={{ background: "#EEF7FF" }} className="md:w-full text-slate-800">
      {alert && <Alert title={alert} />}
      <form
        action=""
        onSubmit={handelpost}
        className="grid  max-sm:grid-cols-1 grid-cols-2 gap-4"
      >
        <div className="w-full">
          <img src={image} className="w-full h-full" alt="" />
          <input onChange={handleImageChange} type="file" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="">des</label>
          <input
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
          <label htmlFor="">Old Price</label>
          <input
            type="text"
            value={old_price}
            onChange={(e) => setOld_price(e.target.value)}
          />
          <label htmlFor="">New Price</label>
          <input
            type="text"
            value={new_price}
            onChange={(e) => setNew_price(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-Secondary hover:bg-Secondary-tow font-semibold bg-green w-72 mt-10 ml-5 p-2 rounded-md"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Create_new_items
