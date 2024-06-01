import React from "react";
import Card from "./ui/Card";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function News() {
  return (
    <>
      <section
        id="news"
        className="flex flex-col items-center text-center justify-center"
      >
        <div className="flex flex-col items-center title">
          <h1>Recent News</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        </div>
        <div className="flex flex-wrap gap-3 mt-5 justify-center cards-container">
          <Card
            img={news1}
            className={"flex h-48"}
            imageSize={"medium"}
            cardWidth={"medium-with"}
          >
            <div className="text-left">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laudantium? Aliquid dolores nam totam, earum exercitationem
                tempora voluptatem? Quisquam optio sapiente laudantium unde
              </span>
            </div>
            <a
              href="#"
              className="float-left relative top-3 flex items-center gap-2"
            >
              Read More
              <FaArrowRightLong />
            </a>
          </Card>
          <Card
            img={news2}
            className={"flex h-48"}
            imageSize={"medium"}
            cardWidth={"medium-with"}
          >
            <div className="text-left">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laudantium? Aliquid dolores nam totam, earum exercitationem
                tempora voluptatem? Quisquam optio sapiente laudantium unde
              </span>
            </div>
            <a
              href="#"
              className="float-left relative top-3 flex items-center gap-2"
            >
              Read More
              <FaArrowRightLong />
            </a>
          </Card>
          <Card
            img={news3}
            className={"flex h-48"}
            imageSize={"medium"}
            cardWidth={"medium-with"}
          >
            <div className="text-left">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laudantium? Aliquid dolores nam totam, earum exercitationem
                tempora voluptatem? Quisquam optio sapiente laudantium unde
              </span>
            </div>
            <a
              href="#"
              className="float-left relative top-3 flex items-center gap-2"
            >
              Read More
              <FaArrowRightLong />
            </a>
          </Card>
          <Card
            img={news4}
            className={"flex h-48"}
            imageSize={"medium"}
            cardWidth={"medium-with"}
          >
            <div className="text-left">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laudantium? Aliquid dolores nam totam, earum exercitationem
                tempora voluptatem? Quisquam optio sapiente laudantium unde
              </span>
            </div>
            <a
              href="#"
              className="float-left relative top-3 flex items-center gap-2"
            >
              Read More
              <FaArrowRightLong />
            </a>
          </Card>
        </div>
      </section>
    </>
  );
}

export default News;
