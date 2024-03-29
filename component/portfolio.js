// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

function Portfolio() {
  const [galleries, setGalleries] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "gallery")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setGalleries(list);
      },
      (error) => {
        console.log(error);
      }
    );

    const unsubscribeCategory = onSnapshot(
      query(collection(db, "galleryCategory")),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCategories(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsubscribe();
      unsubscribeCategory();
    };
  }, []);
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "galleryCategory")),
  //     (snapShot) => {
  //       let list = [];
  //       snapShot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setCategories(list);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  // const portfolio = [
  //   {
  //     title: "Software Landing Page Design",
  //     category: ["all", "web_design", "branding"],
  //     imageSrc: "/images/projects/pic4.jpg",
  //     img: (
  //       <Image
  //         src="/images/projects/pic1.jpg"
  //         layout="responsive"
  //         width={370}
  //         height={370}
  //       />
  //     ),
  //     author: "Jhone Doe",
  //   },
  //   {
  //     title: "Software Landing Page Design",
  //     category: ["all", "web_development", "branding"],
  //     imageSrc: "/images/projects/pic4.jpg",
  //     img: (
  //       <Image
  //         src="/images/projects/pic2.jpg"
  //         layout="responsive"
  //         width={370}
  //         height={370}
  //       />
  //     ),
  //     author: "Jhone Doe",
  //   },
  //   {
  //     title: "Software Landing Page Design",
  //     category: ["all", "web_design", "seo"],
  //     imageSrc: "/images/projects/pic4.jpg",
  //     img: (
  //       <Image
  //         src="/images/projects/pic3.jpg"
  //         layout="responsive"
  //         width={370}
  //         height={370}
  //       />
  //     ),
  //     author: "Jhone Doe",
  //   },
  //   {
  //     title: "Software Landing Page Design",
  //     category: ["all", "web_design", "branding"],
  //     imageSrc: "/images/projects/pic4.jpg",
  //     img: (
  //       <Image
  //         src="/images/projects/pic4.jpg"
  //         layout="responsive"
  //         width={370}
  //         height={370}
  //       />
  //     ),
  //     author: "Jhone Doe",
  //   },
  //   {
  //     title: "Software Landing Page Design",
  //     category: ["all", "mobile_app", "seo"],
  //     imageSrc: "/images/projects/pic4.jpg",
  //     img: (
  //       <Image
  //         src="/images/projects/pic5.jpg"
  //         layout="responsive"
  //         width={370}
  //         height={370}
  //       />
  //     ),
  //     author: "Jhone Doe",
  //   },
  //   {
  //     title: "Software Landing Page Design",
  //     category: ["all", "branding", "seo"],
  //     imageSrc: "/images/projects/pic4.jpg",
  //     img: (
  //       <Image
  //         src="/images/projects/pic6.jpg"
  //         layout="responsive"
  //         width={370}
  //         height={370}
  //       />
  //     ),
  //     author: "Jhone Doe",
  //   },
  // ];
  const portfolio = galleries.map((item, i) => {
    return {
      ...item,
      img: (
        <Image
          src={item.imageSrc}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
    };
  });
  // console.log(portfolio);

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [galleries, filter]);
  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
        <ul className="filters">
          {categories.map((item, i) => {
            return (
              <li
                key={i}
                className={`btn ${item.name === filter ? "active" : ""}`}
              >
                <a active={"all"} onClick={() => setFilter(item.name)}>
                  {item.name}
                </a>
              </li>
            );
          })}

          {/* <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a active={"web_design"} onClick={() => setFilter("web_design")}>
              Web Design
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Web Development
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a active={"branding"} onClick={() => setFilter("branding")}>
              Branding
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a active={"mobile_app"} onClick={() => setFilter("mobile_app")}>
              Mobile App
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={"seo"} onClick={() => setFilter("seo")}>
              SEO
            </a>
          </li> */}
        </ul>
      </div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="clearfix">
            <ul id="masonry" className="row" data-column-width="3">
              {projects.map((item, i) =>
                item.filtered === true ? (
                  <li
                    key={i}
                    className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay={`0.${i}s`}
                  >
                    <div className="dlab-box style-1 m-b30">
                      <div className="dlab-media">
                        <a href=""> {item.img}</a>
                      </div>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio;
