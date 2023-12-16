import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

import { motion } from "framer-motion";


function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden' >
        <FaRegFileLines/>
        <p className='text-sm leading-tight mt-5 font-semibold' >{data.desc}</p>
        <motion.div className='footer absolute bottom-0  w-full  left-0 ' > 
            <div className='flex items-center justify-between  px-8 mb-5'>
                <h5>{data.filesSize}</h5>
                    <span  className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center' > 
                        {data.close ? <IoIosClose /> : <FiDownload size=".7em" color='#fff' /> }
                        
                    </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex item-center justify-center`}>
                      <h3 className='text-sm font-semibold' >{data.tag.tagTile}</h3>
                </div>
                ) 
            }

                
        </motion.div>

    </motion.div>
  )
}

export default Card