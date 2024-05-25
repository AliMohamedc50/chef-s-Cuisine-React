import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "eded0c6acc58a609e5dce3d95c0af3891455ba9f1d8094f3409566cb9df50fb88caa3ae82a7e05f3965998047616be8fc70a2bf93e0169849eefd380a363d209b974e4d6cd40fea8b28a071b8a0c11b2d2d0fc657dd8bc1cc24619b60214d4d687783e260685d9e74db20b7a0645771ccd4c24323726066c2f75b12461330528",
  },
});