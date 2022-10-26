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
              谢谢Jonny老师，首先，Dolly通过跟你学习这几次，感觉非常好，她说一直要跟你学到大学，她非常喜欢你，她能感觉到你的与众不同，感受到了外国老师的风采，这让她十分痴迷！
              💪💪有你真好！加油！
            </p>
          </Card>
          <Card>
            <Avatar
              src="/images/Kimi.jpg"
              sx={{ height: "100px", width: "100px" }}
              alt="young boy"
            />
            <h2>Kimi</h2>
            <p>from Shanghai</p>
            <p className={text}>
              Kimi非常喜欢上Jonny老师的课，每次的1小时课时都觉得意犹未尽。Jonny老师上课时和孩子的互动性非常强，能抓住孩子的兴趣点，启发孩子发散性思维。非常感谢Jonny
              老师💪🌹
            </p>
          </Card>
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
              我是一个10岁孩子的母亲 孩子跟着Jonny 老师学习4年多了
              孩子非常喜欢Jonny老师对上课的热情和耐心 对孩子能够及时鼓励和纠正
              也能做到课堂拓展 会让孩子去尝试一些有难度的东西 激发孩子的兴趣
            </p>
          </Card>

          <Card>
            <Avatar
              src="/images/SpaceBoy.png"
              sx={{ height: "100px", width: "100px" }}
              alt="young boy"
            />
            <h2>Kimi</h2>
            <p>from Shanghai</p>
            <p className={text}>
              大家好，我是一个五年级男孩的妈妈，来自江苏南京。跟着Jonny老师学习两年多时间了。孩子很喜欢Jonny老师的课程。老师上课幽默风趣，会耐心的带孩子整句输出，纠正发音和语法，时常鼓励孩子，上课气氛很活跃。老师的课程内容很多样化，孩子特别感兴趣的太空，天文，地理知识，还有根据孩子的兴趣爱好设置的一些课程，kimi和Jonny老师的滑板课超级赞:+1:
              :+1:孩子上课时信心很足，听老师录制的课前音频，他也很喜欢，提高了孩子的学习兴趣，也能轻松提炼到上课讨论的重点。谢谢Jonny老师，希望您给kimi带来更多精彩的课程，也希望kimi收获满满。感谢Jonny老师，加油🙏💪
            </p>
          </Card>
        </Slider>
      </div>
    );
  }
}
