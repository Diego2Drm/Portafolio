import { createContext, useState } from "react";

export const CertificatesContext = createContext();

export const CertificatesProvider = ({ children }) => {

  const imgCertificates = [
    {
      id: "0",
      url: "https://i.ibb.co/1qPRTSZ/frontend-developer.jpg"
    },
    {
      id: "1",
      url: "https://i.ibb.co/X495yzB/curso-definitivo-html-css.jpg"
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
  ]

  const [imgUrl, setImgUrl] = useState(imgCertificates);

  const [certificateImg, setCertificateImg] = useState("");

  return (
    <CertificatesContext.Provider value={{
      imgUrl, setImgUrl, certificateImg,
      setCertificateImg
    }}>
      {children}
    </CertificatesContext.Provider>
  )
}