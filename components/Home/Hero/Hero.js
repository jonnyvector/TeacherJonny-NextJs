import Button from "../../ui/Button";
import Link from "next/link";
import WistiaEmbed from "./WistiaEmbed";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-left"]}>
        <h1>Give Your Child the Very Best Future </h1>
        <p>
          Teacher Jonny provides the highest quality English education for
          children by using modern methodologies and correction techniques
          combined with top-quality teaching materials.
        </p>
        <Link href="#book">
          <Button>Book a FREE Class!</Button>
        </Link>
      </div>
      <div className={classes["hero-right"]}>
        <WistiaEmbed hashedId={"0ryiagovhx"} />
      </div>
    </div>
  );
}

export default Hero;
