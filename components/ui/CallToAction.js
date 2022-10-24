import classes from "./CallToAction.module.css";
import Button from "./Button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Let's Do This!</h2>
      <p className={classes.text}>
        Give your child the very best English education.
      </p>
      <Link href="/#book">
        <Button>Book a FREE Class!</Button>
      </Link>
    </div>
  );
}
