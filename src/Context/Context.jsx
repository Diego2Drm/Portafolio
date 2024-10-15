import { createContext, useState } from "react";
import data from "../projects.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const imgCertificates = [
    {
      id: "0",
      url: "https://i.ibb.co/1qPRTSZ/frontend-developer.jpg",
    },
    {
      id: "1",
      url: "https://i.ibb.co/X495yzB/curso-definitivo-html-css.jpg",
    },
    {
      id: "2",
      url: "https://i.ibb.co/BHDt1Fy/curso-basico-tailwind-css.jpg",
    },
    {
      id: "3",
      url: "https://i.ibb.co/r0ZWQcX/manipulacion-arrays-js.jpg",
    },
    {
      id: "4",
      url: "https://i.ibb.co/jW32P6h/reactjs-vite-tailwindcss.jpg",
    },
    {
      id: "5",
      url: "https://i.ibb.co/LSS56J8/mobile-first.jpg",
    },
  ];

  const [imgUrl, setImgUrl] = useState(imgCertificates);
  const [certificateImg, setCertificateImg] = useState("");

  const [info, setInfo] = useState(data);
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addImg, setAddImg] = useState("");
  const [addSkills, setaddSkills] = useState([]);
  const [addLink, setAddLink] = useState("");
  const [addRepository, setAddRepository] = useState("");

  return (
    <DataContext.Provider
      value={{
        imgUrl,
        setImgUrl,
        certificateImg,
        setCertificateImg,
        info,
        setInfo,
        addTitle,
        setAddTitle,
        addDescription,
        setAddDescription,
        addImg,
        setAddImg,
        addLink,
        setAddLink,
        addRepository,
        setAddRepository,
        addSkills,
        setaddSkills,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
