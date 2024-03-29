import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function App() {
  const [activePage, setActivePage] = useState(0);
  // mobile size swiper
  const [isMobile, setIsMobile] = useState(false);

  const scrollToPolitics = () => {
    const politicsSection = document.getElementById("politics");
    politicsSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
  };
  window.addEventListener("resize", handleResize);

  const changePage = (pageIndex) => {
    setActivePage(pageIndex);
  };

  return (
    <>
      <div className="header row">
        <div className="col-md-6">
          <div className="logoBar d-flex align-items-center">
            <a href="#" className="logo">
              <img src="/images/miaoLogo.svg" alt="Miao logo " />
            </a>
            <ul className="d-flex social">
              <li>
                <a href="#">
                  <img src="/images/line.svg" alt="Line" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/youtube.svg" alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-r0">
          <ul className="navbar">
            <li>
              <a href="#politics">喵政見</a>
            </li>
            <li>
              <a href="#recent">喵近況</a>
            </li>
            <li>
              <a href="#policy">喵政策</a>
            </li>
            <li>
              <a href="#donate">抖內喵</a>
            </li>
            <li>
              <a href="#contact">聯繫喵</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row banner">
        <div className="col-md-6">
          <div className="candidatePhoto">
            <img
              src="/images/Man trying to work from home.png"
              alt="Miao li han"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="mainContent">
            <h3 className="mb-2">喵立翰（Miao Li-Han）</h3>
            <h1 className="mb-2">台灣的明天, 喵先鋪路</h1>
            <h5>護航台灣的幸福經濟, 從照顧每一隻貓咪開始!</h5>
            <div className="mainBtn d-flex gap-5">
              <button
                className="btn primaryColor-bg toPolitics"
                onClick={() => scrollToPolitics()}
              >
                我的政見
              </button>
              <button className="btn toProfile">
                候選人簡介
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="politics"
        className="politics d-flex flex-column align-items-center justify-content-center"
      >
        <div
          className="politicsContent d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 className="sectionTitle ">喵政見</h2>
          <h2 className="mb-3">
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。
          </h2>
          <div className="line"></div>
          <p className="mt-4 mb-5">
            民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
          <button className="btn toPolicy primaryColor-bg">點我看政策</button>
        </div>
      </div>
      <div className="container">
        <div id="recent" className="recent">
          <h2 className="sectionTitle ">喵近況</h2>
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper1">
                <img src="/images/Rectangle 30.png" alt="" />
                <span>2023 / 12 / 26</span>
                <h4>參與台北寵物論壇，爭取貓咪友善環境</h4>
                <p>
                  炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                  VIP 休憩空間。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper1">
                <img src="/images/Rectangle 29.png" alt="" />
                <span>2023 / 12 / 24</span>
                <h4>掃街模式開啟！帶著你的貓耳，來和我一起走！</h4>
                <p>
                  街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper1">
                <img src="/images/Rectangle 31.png" alt="" />
                <span>2023 / 12 / 20</span>
                <h4>收容所模特兒大比拼！</h4>
                <p>
                  今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-center m-5">
            <button className="btn btn-outline-secondary btn-link recentSeeMore">
              看更多
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="policy" className="policy">
        <h2 className="sectionTitle ">喵政策</h2>
        <div className="app-container">
          <div className="left-section">
            {activePage === 0 && (
              <img
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                src="/images/Rectangle 3.png"
                alt="Page 1"
              />
            )}
            {activePage === 1 && (
              <img
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                src="/images/Rectangle 46.png"
                alt="Page 2"
              />
            )}
            {activePage === 2 && (
              <img
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                src="/images/Rectangle 47.png"
                alt="Page 3"
              />
            )}
          </div>
          <div className="right-section">
            <div className="progress-bar">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`progress-item ${
                    activePage === index ? "active" : ""
                  }`}
                  onClick={() => changePage(index)}
                />
              ))}
            </div>
            <div className="content">
              {activePage === 0 && (
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <h6>政策一</h6>
                  <h3>為毛孩子謀福利！推動寵物醫療保障方案</h3>
                  <ul>
                    <li>
                      設立寵物醫療基金：每年撥款新台幣 10
                      億元，專款專用於支援家庭寵物的醫療費用
                    </li>
                    <li>
                      提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000
                      元的醫療補助，減輕飼主的經濟壓力
                    </li>
                    <li>
                      合作動物醫院：目前已有和超過 200
                      家動物醫院進行初步的合作討論
                    </li>
                  </ul>
                </div>
              )}
              {activePage === 1 && (
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <h6>政策二</h6>
                  <h3>打造休閒天堂！推廣寵物休閒與娛樂場所</h3>
                  <ul>
                    <li>
                      建立寵物公園：每年撥款新台幣 5
                      億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少
                      10 座寵物公園
                    </li>
                    <li>
                      推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過
                      500 家商家加入此計畫
                    </li>
                    <li>
                      舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少
                      5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等{" "}
                    </li>
                  </ul>
                </div>
              )}
              {activePage === 2 && (
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <h6>政策三</h6>
                  <h3>推廣寵物飼養教育，讓愛更加專業</h3>
                  <ul>
                    <li>
                      建立寵物飼養教育中心：每年撥款新台幣 3
                      億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少
                      5 大城市設立教育中心。
                    </li>
                    <li>
                      推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過
                      10,000 名市民受益。
                    </li>
                    <li>
                      製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          id="donate"
          className="donate d-flex flex-column align-items-center text-center"
        >
          <h2 className="sectionTitle ">抖內喵</h2>
          <h3 className="mb-3">您的捐款，是每隻毛孩未來的大大動力！</h3>
          <h6 className="mb-3 donateTotal">
            目前小額贊助總金額<span>987,655,873</span> <span>元</span>
          </h6>
          <div className="donateBox row">
            <div className="col-md-4">
              <div className="card align-items-center text-center">
                <div className="card-body">
                  <h5 className="card-title">喵星人之友</h5>
                  <span className="card-text">已有 9957 人贊助</span>
                  <img
                    src="/images/donateFriend.png"
                    className="card-img-top"
                    alt=""
                  />
                  <p>
                    捐款新台幣{" "}
                    <span style={{ color: "#ff812f", fontSize: "36px" }}>
                      600
                    </span>{" "}
                    元
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card align-items-center text-center">
                <div className="card-body">
                  <h5 className="card-title">喵星大使</h5>
                  <span className="card-text">已有 2000 人贊助</span>
                  <img
                    src="/images/donateAmbassador.png"
                    className="card-img-top"
                    alt=""
                  />
                  <p>
                    捐款新台幣{" "}
                    <span style={{ color: "#ff812f", fontSize: "36px" }}>
                      6000
                    </span>{" "}
                    元
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card align-items-center text-center">
                <div className="card-body">
                  <h5 className="card-title">喵星傳奇</h5>
                  <span className="card-text">已有 999 人贊助</span>
                  <img
                    src="/images/donateLegend.png"
                    className="card-img-top"
                    alt=""
                  />
                  <p>
                    捐款新台幣{" "}
                    <span style={{ color: "#ff812f", fontSize: "36px" }}>
                      60000
                    </span>{" "}
                    元
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-md-8">
                <div className="customPrice d-flex justify-content-center align-items-center">
                  <p>我想捐新台幣</p>
                  <input type="number" placeholder="請輸入自訂金額" />
                  <p>元</p>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-row-reverse align-items-center justify-content-start">
                <div className="donateToPage">
                  <button className="btn toDonate primaryColor-bg ">
                    捐款去
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <div className="row">
          <div className="col-md-6">
            <img src="/images/Rectangle 45.png" alt="contact cat" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="contactRight d-flex flex-column align-items-center justify-content-center text-center">
              <h2 className="sectionTitle ">聯繫喵</h2>
              <h3 className="mb-2">您的聲音，我們的行動！</h3>
              <p className="mb-5">
                親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。
                分享您的想法，一同為我們的未來打造更美好！
              </p>
              <form
                action="#"
                id="contactForm"
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <input type="text" placeholder="姓名" className="w-100 mb-4" />
                <input type="tel" placeholder="手機" className="w-100 mb-4" />
                <input type="email" placeholder="信箱" className="w-100 mb-4" />
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="我想說..."
                  className="w-100 mb-4"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary toPolicy primaryColor-bg"
                >
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-flex align-items-center justify-content-center">
        <div className="footerContain">
          <div className="topFooter d-flex align-items-center ">
            <img src="/images/Miao.png" alt="Miao logo" />
            <h3>為喵星人，護台灣！ </h3>
          </div>
          <div className="line"></div>
          <div className="bottomFooter">
            <ul className="d-flex social justify-content-center mb-4">
              <li>
                <a href="#">
                  <img src="/images/line.svg" alt="Line" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/youtube.svg" alt="Youtube" />
                </a>
              </li>
            </ul>
            <ul className="footerInfo d-flex flex-column align-items-center justify-content-center mt-4  mb-5">
              <li>
                <a href="#">(02) 888-5678</a>
              </li>
              <li>
                <a href="#">meowoffice@linmeow.tw</a>
              </li>
              <li>
                <a href="#">喵星區，毛茸茸大道88號，喵喵大樓3樓</a>
              </li>
            </ul>
            <span className="d-block text-center mt-5">
              © 2023 喵立翰版權所有
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
