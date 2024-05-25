import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Alert from "../alert/Alert";

function Show_Product() {
       const upload_url = "http://localhost:1337";
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
      let { product, id } = useParams();
        const [alert, setAlert] = useState("");

      const [title, setTitle] = useState("")
      const [price, setPrice] = useState("");
      const [des, setDes] = useState("");
      const [old_price, setOld_price] = useState("");
      const [new_price, setNew_price] = useState("");

    const { data } = useFetch(`/${product}/${id}?populate=*`);

    useEffect(() => {
  setTitle(data?.attributes?.title || "");
  setPrice(data?.attributes?.price || "");
  setDes(data?.attributes?.des || "");
  setOld_price(data?.attributes?.old_price || "");
  setNew_price(data?.attributes?.new_price || "");

    },[data])

    const handelupdate = (e) => {
      e.preventDefault();
      const data = {
        title,
        price,
        des,
        old_price,
        new_price,
      };

      axios
        .put(
          `http://localhost:1337/api/${product}/${id}`,
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
          setAlert("Update successful!");
        })
        .catch((error) => {
          console.error(error);
          setAlert("Update failed!");
        });
    };

const handeldelete = () => {
    axios
      .delete(`http://localhost:1337/api/${product}/${id}`, {
        headers: {
          Authorization:
            "Bearer eded0c6acc58a609e5dce3d95c0af3891455ba9f1d8094f3409566cb9df50fb88caa3ae82a7e05f3965998047616be8fc70a2bf93e0169849eefd380a363d209b974e4d6cd40fea8b28a071b8a0c11b2d2d0fc657dd8bc1cc24619b60214d4d687783e260685d9e74db20b7a0645771ccd4c24323726066c2f75b12461330528",
        },
      })
      .then((response) => {
        console.log(response.data);
            console.log(response.data);
            setAlert("Delete successful!");
        })
        .catch((error) => {
                  console.error(error);
                  setAlert("Delete failed!");
      }
      );
   navigate(-1);
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
    <div style={{ background: "#EEF7FF" }} className=" md:w-full ">
      <div
        className=" back w-14 h-14 mt-5 ml-5 bg-slate-300 rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => handleClick()}
      >
        <div
          style={{ transform: "rotate(-45deg)" }}
          className="border-l-4 border-t-4 border-slate-500 w-6 h-6 "
        ></div>
      </div>
      {alert && <Alert title={alert} />}
      <div className="mt-8">
        <form
          action=""
          onSubmit={handelupdate}
          className="grid  max-sm:grid-cols-1 grid-cols-2 gap-4"
        >
          <div className="w-full  ">
            <img
              className="w-full h-full object-cover"
              src={upload_url + data?.attributes?.img?.data?.attributes?.url}
              alt=""
            />
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
              disabled={!des}
              onChange={(e) => setDes(e.target.value)}
            />
            <label htmlFor="">Old Price</label>
            <input
              type="text"
              value={old_price}
              disabled={!old_price}
              onChange={(e) => setOld_price(e.target.value)}
            />
            <label htmlFor="">New Price</label>
            <input
              type="text"
              value={new_price}
              disabled={!new_price}
              onChange={(e) => setNew_price(e.target.value)}
            />
          </div>
          <button
            onClick={handeldelete}
            type="button"
            className="m-8 bg-Secondary-tow text-white p-4 rounded-md"
          >
            Delete
          </button>
          <button
            type="submit"
            className="m-8 bg-Primary text-white p-4 rounded-md"
          >
            Update
          </button>

        </form>
      </div>
    </div>
  );
}

export default Show_Product;
