import { createContext, useState } from "react";
import data from "../projects.json";
import { dataCertificates } from "../utils/data-certificates";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [certificateImg, setCertificateImg] = useState(dataCertificates);
  const [showCertificateImg, setShowCertificateImg] = useState("");

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
        certificateImg,
        setCertificateImg,
        showCertificateImg,
        setShowCertificateImg,
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
