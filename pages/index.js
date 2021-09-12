import Head from "next/head";
// import "../styles/Home.module.css";

export default function Home() {
  let menu = [
    {
      src: "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
      active: true,
      title: "Best seller",
      initials: "BS",
    },
    {
      title: "Watches",
      initials: "W",
    },
    {
      title: "Twenty Seven character limit",
      initials: "TS",
    },
    {
      title: "Seasons Special",
      initials: "SS",
    },
    {
      title: "Beverages",
      initials: "B",
    },
    {
      title: "Drinks",
      initials: "D",
    },
    {
      title: "Salade",
      initials: "S",
    },
  ];
  const items = [];

  menu.forEach((data, index) => {
    items.push(
      <div className="px-1 mb-1" key={index}>
        <div className="w-50px w-fix">
          {data.src ? (
            <img
              src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
              className="avatar"
            />
          ) : (
            <div className="avatar">{data.initials}</div>
          )}
        </div>
        <div className="text-center avatar-font">{data.title}</div>
      </div>
    );
  });

  const cards = [];

  for (let i = 0; i < 6; i++) {
    cards.push(
      <div className=" mt-4 card-border bg-gray-200 ">
        <h6 className="card-title ">
          Italian Roast whole bean & French press ( 4 cups ) ( Plastic Frame )
        </h6>
        <small className="d-flex text-muted ">
          <div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="uNWR8h3H_dxBbSJ54Rctea"
                x1="24"
                x2="24"
                y1="-14"
                y2="24.339"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#21ad64"></stop>{" "}
                <stop offset="1" stopColor="#088242"></stop>
              </linearGradient>{" "}
              <path
                fill="url(#uNWR8h3H_dxBbSJ54Rctea)"
                d="M7,5h34c1.105,0,2,0.895,2,2v34c0,1.105-0.895,2-2,2H7c-1.105,0-2-0.895-2-2V7	C5,5.895,5.895,5,7,5z"
              ></path>{" "}
              <linearGradient
                id="uNWR8h3H_dxBbSJ54Rcteb"
                x1="19.998"
                x2="33.576"
                y1="1.306"
                y2="78.309"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fff"></stop>{" "}
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>{" "}
              <path
                fill="url(#uNWR8h3H_dxBbSJ54Rcteb)"
                d="M7,40V8c0-0.552,0.448-1,1-1h32c0.552,0,1,0.448,1,1v32c0,0.552-0.448,1-1,1H8	C7.448,41,7,40.552,7,40z"
              ></path>{" "}
              <linearGradient
                id="uNWR8h3H_dxBbSJ54Rctec"
                x1="24"
                x2="24"
                y1="-14"
                y2="24.339"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#21ad64"></stop>{" "}
                <stop offset="1" stopColor="#088242"></stop>
              </linearGradient>{" "}
              <circle
                cx="24"
                cy="24"
                r="11"
                fill="url(#uNWR8h3H_dxBbSJ54Rctec)"
              ></circle>
            </svg>
          </div>
          <small className="m-1 ">| Seasonal special</small>
        </small>
        <div className="d-flex content-center items-center">
          <div className="d-flex w-50 align-items-center justify-content-start ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-pink-600"
              >
                <path d="M 12 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 z"></path>
              </svg>
            </div>{" "}
            <div className="ml-1 text-pink-600 font-weight-bold">
              <small>Best Seller</small>
            </div>
          </div>
        </div>
        <div className="d-flex w-50 align-items-center justify-content-start">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-columns-gap"
              viewBox="0 0 16 16"
            >
              <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
            </svg>
          </div>{" "}
          <div className="ml-1 text-primary font-weight-bold">
            <small>Customizable</small>
          </div>
        </div>
        <div className="d-flex content-center items-center">
          <div className="d-flex w-50 align-items-center justify-content-start">
            <p className="card-text font-weight-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path d="M14.388,5h2.987L18,3H6.625L6,5h4c1.537,0,2.828,0.997,3.299,2.375H6.625L6,9.375h7.376C12.986,10.882,11.629,12,10,12H6 v1.536L13.375,21H16v-0.25l-7-7c0.614,0,1.343,0,1.5,0c2.6,0,4.743-1.894,5.162-4.375h1.713l0.625-2h-2.378 C15.425,6.471,14.985,5.664,14.388,5z"></path>
              </svg>
              <span className="font-size-20">2334</span>
            </p>
          </div>
          <div className="col-auto align-items-center justify-content-end ">
            <button className="btn bg-yellow-300 px-4 mt-3">
              <span className="font-weight-bold p-0 ">
                <label className="p-0 m-0 bg-yellow-300"> + Add</label>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      <Head>
        <title>Next Js Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Search Engine */}
      <div className="mt-2 mx-3">
        <div className="d-flex align-items-center justify-content-center">
          <div className="h-100 pr-2">
            <div className="bg-gray-200 p-2 h-40 d-flex align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </div>

          <div className="h-100 w-100 pl-2">
            <div className="d-flex align-items-center justify-content-center bg-gray-200 h-40 px-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  className="text-secondary"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-100 pl-2">
                <input
                  type="text"
                  className="border-0 bg-transparent w-100 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stories */}
      <div className="mt-3">
        <div className="d-flex overflow-x px-3">{items}</div>
      </div>

      {/* Toggle  */}
      <div className="d-flex align-items-center justify-content-center py-2 px-3 bg-gray-200">
        <div className="custom-control custom-switch mr-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="vegOnly"
          />
          <label className="custom-control-label" htmlFor="vegOnly">
            <small>Veg Only</small>
          </label>
        </div>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="includeEgg"
          />
          <label className="custom-control-label" htmlFor="includeEgg">
            <small>Include Egg</small>
          </label>
        </div>
        <hr />
      </div>
      {/* offer board */}
      <div className="px-4 mt-3 bg-gray-200 py-3">
        <div className="d-flex bg-white offerborder">
          <div className="w-50">
            <div className="d-flex align-items-center justify-content-center">
              <img src={"./images/offer1.jpg"} />
              <div className="font-weight-bold ml-3 offertext text-pink-600 style-font ">
                Offers
              </div>
            </div>
          </div>
          <div className="w-50">
            <div className="d-flex align-items-center justify-content-center">
              <img src={"./images/stars.jpg"} />
              <div className="font-weight-bold ml-3 offertext text-pink-600 style-font">
                Stars
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Big static Card */}
      <div className=" mt-4 mx-4 card-border bg-gray-200 ">
        <div className="p-2 ">
          <h6 className="card-title ">
            Italian Roast whole bean & French press ( 4 cups ) ( Plastic Frame )
          </h6>
          <small className="d-flex text-muted ">
            <div>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="uNWR8h3H_dxBbSJ54Rctea"
                  x1="24"
                  x2="24"
                  y1="-14"
                  y2="24.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#21ad64"></stop>{" "}
                  <stop offset="1" stopColor="#088242"></stop>
                </linearGradient>{" "}
                <path
                  fill="url(#uNWR8h3H_dxBbSJ54Rctea)"
                  d="M7,5h34c1.105,0,2,0.895,2,2v34c0,1.105-0.895,2-2,2H7c-1.105,0-2-0.895-2-2V7	C5,5.895,5.895,5,7,5z"
                ></path>{" "}
                <linearGradient
                  id="uNWR8h3H_dxBbSJ54Rcteb"
                  x1="19.998"
                  x2="33.576"
                  y1="1.306"
                  y2="78.309"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff"></stop>{" "}
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>{" "}
                <path
                  fill="url(#uNWR8h3H_dxBbSJ54Rcteb)"
                  d="M7,40V8c0-0.552,0.448-1,1-1h32c0.552,0,1,0.448,1,1v32c0,0.552-0.448,1-1,1H8	C7.448,41,7,40.552,7,40z"
                ></path>{" "}
                <linearGradient
                  id="uNWR8h3H_dxBbSJ54Rctec"
                  x1="24"
                  x2="24"
                  y1="-14"
                  y2="24.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#21ad64"></stop>{" "}
                  <stop offset="1" stopColor="#088242"></stop>
                </linearGradient>{" "}
                <circle
                  cx="24"
                  cy="24"
                  r="11"
                  fill="url(#uNWR8h3H_dxBbSJ54Rctec)"
                ></circle>
              </svg>
            </div>
            <small className="m-1 ">| Seasonal special</small>
          </small>
          <div className="d-flex content-center items-center">
            <div className="d-flex w-50 align-items-center justify-content-start ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-pink-600"
                >
                  <path d="M 12 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 z"></path>
                </svg>
              </div>{" "}
              <div className="ml-1 text-pink-600 font-weight-bold">
                <small>Best Seller</small>
              </div>
            </div>
            <div className="d-flex w-50 align-items-center justify-content-end">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-columns-gap"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                </svg>
              </div>{" "}
              <div className="ml-1 text-primary font-weight-bold">
                <small>Customizable</small>
              </div>
            </div>
          </div>
          <div className="d-flex content-center items-center">
            <div className="d-flex w-50 align-items-center justify-content-start">
              <p className="card-text font-weight-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.388,5h2.987L18,3H6.625L6,5h4c1.537,0,2.828,0.997,3.299,2.375H6.625L6,9.375h7.376C12.986,10.882,11.629,12,10,12H6 v1.536L13.375,21H16v-0.25l-7-7c0.614,0,1.343,0,1.5,0c2.6,0,4.743-1.894,5.162-4.375h1.713l0.625-2h-2.378 C15.425,6.471,14.985,5.664,14.388,5z"></path>
                </svg>
                <span className="font-size-20">2334</span>
              </p>
            </div>
            <div className="d-flex w-50 align-items-center justify-content-end ">
              <button className="btn bg-yellow-300  px-4">
                <span className="font-weight-bold p-0 ">
                  <label className="p-0 m-0 bg-yellow-300"> + Add</label>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Small Cards */}
      <div className="col-12">
        <div className="col-6">{cards}</div>
      </div>
    </div>
  );
}
