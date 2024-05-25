import axios from "axios";


export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "8aa519233fc8a61963a71bebea22907e1e9fc020aa86609671af11f973c0a6332a45508968ce03e65445da4613d8759d6927afb1d976614207242931699bce614dc118e5648b2a60741dde1650b3661ea7677f49ee609da473f92559aa00871781c148928427a42e9f2e26ba9fa286d83ee4c93570dd00bd6646e56c8a72a6b4",
  },
});