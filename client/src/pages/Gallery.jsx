import "./gallery.css";
import {motion} from "framer-motion"


const Gallery = () => {
  return (
    <main
    className="m-0 p-0 h-fit pb-48 bg-black">
      <div className="ml-32 text-[3em] text-white mb-4 font-sans font-bold">
        Gallery
      </div>
      <p className="text-white ml-32 mb-4">Relive the action and capture the spirit of Varchas through<br/> unforgettable moments frozen in time!</p>
      <div className="slider mt-10" style={{
        "--width": "500px",
        "--height": "400px",
        "--quantity": "10"
      }}>
        <div className="list">
            <motion.img  whileHover={{scale: 1.1}} src="/gallery/G1.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 1 }}/>
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G2.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 2 }}/>
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G3.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 3 }} />
            {/* <img  src="/gallery/G4.JPG" alt="" className="h-[18rem] w-96" /> */}
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G5.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 4 }} />
            {/* <img  src="/gallery/G6.JPG" alt="" className="h-[18rem] w-96" /> */}
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G7.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 5 }}/>
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G8.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 6 }} />
            <motion.img whileHover={{scale: 1.1}} src="/gallery/G9.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 7 }} />
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G10.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 8 }}/>
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G11.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 9 }}/>
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G12.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 10 }}/>
            {/* <img  src="/gallery/G13.JPG" alt="" className="h-[18rem] w-96" /> */}
            {/* <img  src="/gallery/G14.JPG" alt="" className="h-[18rem] w-96" /> */}
            {/* <img  src="/gallery/G15.JPG" alt="" className="h-[18rem] w-96" /> */}
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G16.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 11 }}/>
            <motion.img whileHover={{scale: 1.1}}  src="/gallery/G17.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 12 }}/>
            {/* <img  src="/gallery/G18.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24"  /> */}
            {/* <img  src="/gallery/G19.JPG" alt="" className="h-[18rem] w-96" /> */}
            {/* <img  src="/gallery/G20.JPG" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24" /> */}
          </div>
      </div>
    </main>
  );
};
export default Gallery;