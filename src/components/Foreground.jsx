import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {

    const ref= useRef(null);



  // const data = [
  //     desc, filesize, closeorDownload, tagdetails
  // ];



  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque ",
      filesSize: ",9mb",
      close: false,
      tag: { isOpen: true, tagTile: "Download Now", tagColor: "blue" },
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque ",
        filesSize: ",9mb",
        close: false,
        tag: { isOpen: true, tagTile: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque ",
        filesSize: ",9mb",
        close: true,
        tag: { isOpen: true, tagTile: "Upload", tagColor: "green" },
      },
     
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}
    </div>
  );
}

export default Foreground;
