import classes from "./Fun.module.css";
import Image from "next/image";
import funBoy from '../../../public/images/FunBoyBlob.png'
import funJonny from '../../../public/images/FunJonnyBlob.png'

function Fun() {
  return (
    <div className='flex-container'>
      <Image
      width={500}
      height={500}
        alt="One-on-one class with a young boy"
        src={funBoy}
        className={classes["img-kid"]}
      ></Image>
      <p className={classes.text}>
        One-on-One classes are <span className={classes.fun}>FUN!</span>
      </p>
      
      <Image
      width={500}
      height={500}
      
        alt="Jonny teaching and smiling."
        src={funJonny}
        className={classes["img-jonny"]}
      ></Image>
      
    </div>
  );
}

export default Fun;
