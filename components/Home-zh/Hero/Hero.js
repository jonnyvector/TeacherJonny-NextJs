import Button from "../../ui/Button";
import Link from "next/link";
import WistiaEmbed from "./WistiaEmbed";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-left"]}>
        <h1>给你的孩子一个最好的未来 </h1>
        <p>
          Jonny老师采用现代教学方法和纠错技术，结合优质教材，为孩子们提供最优质的英语教育.
        </p>
        <Link href="#book">
          <Button>预订免费课程!</Button>
        </Link>
      </div>
      <div className={classes["hero-right"]}>
        <WistiaEmbed hashedId={"0ryiagovhx"} />
      </div>
    </div>
  );
}

export default Hero;
