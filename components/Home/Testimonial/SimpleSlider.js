import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import classes from "./SimpleSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../ui/Card";

const text = classes.text;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            appendDots: (dots) => (
              <div
                style={{
                  backgroundColor: "transparent",

                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <ul
                  style={{
                    margin: "0px",
                  }}
                >
                  {" "}
                  {dots}{" "}
                </ul>
              </div>
            ),
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const settingsWithModules = {
      ...settings,
      dotsClass: classes.button__bar,
    };
    return (
      <div className={classes.testimonial}>
        <Slider {...settingsWithModules}>
          <Card>
            <Avatar
              src="/images/Alvin.jpg"
              // className={classes.avatar}
              sx={{ height: "100px", width: "100px" }}
              alt="Young girl"
            />
            <h2>Alvin</h2>
            <p>from Taiyuan</p>
            <p className={text}>
              I am the mother of a 10 year old who has been studying with
              Teacher Jonny for over 4 years. My son likes Teacher Jonny's
              enthusiasm and patience for the class very much. He encourages
              Alvin and gives timely corrections. He also expands the lesson
              material allowing the children to try some difficult things to
              stimulate their interest!
            </p>
          </Card>
          <div>
            <Card>
              <Avatar
                src="/images/Kimi.jpg"
                sx={{ height: "100px", width: "100px" }}
                alt="young boy"
              />
              <h2>Kimi</h2>
              <p>from Shanghai</p>
              <p className={text}>
                Kimi likes to take Teacher Jonny's class very much and every
                1-hour class is full of fun things! Teacher Jonny is very
                interactive with children in class and can catch the child's
                interests and inspire the child's thinking. Many thanks to
                Teacher Jonny!
              </p>
            </Card>
          </div>
          <div>
            <Card>
              <div>
                <Avatar
                  src="/images/Dolly.jpg"
                  sx={{ height: "100px", width: "100px" }}
                  alt="young girl"
                />
              </div>
              <h2>Dolly</h2>
              <p>from Taiyuan</p>
              <p className={text}>
                Thank you, Teacher Jonny. First of all, Dolly feels very good
                studying with you after several classes. She said that she will
                always study with you. She likes you very much. She can feel the
                difference in your style from other foreign teachers, which has
                made her very obsessed! Nice to have you! Come on!
              </p>
            </Card>
          </div>
          <div>
            <Card>
              <Avatar
                src="/images/SpaceBoy.png"
                sx={{ height: "100px", width: "100px" }}
                alt="young boy"
              />
              <h2>Kimi</h2>
              <p>from Shanghai</p>
              <p className={text}>
                Kimi LOVES Teacher Jonny's class. Every 1-hour class is full of
                interesting activities. Teacher Jonny is very interactive with
                the children in class and can grab the children's interests and
                inspire creative thinking. Many thanks to Teacher Jonny!
              </p>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
