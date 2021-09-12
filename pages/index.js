import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Next Js Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Search Engine */}
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="w-100 d-flex items-center content-center ">
          <div className="text-secondary p-2 rounded-lg">
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
          <div className="text-secondary ml-3 p-2 d-flex w-auto">
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
            <div className="w-100">
              <input type="text" className={styles.headerInput} />
            </div>
          </div>
        </div>
      </nav>
      {/* Stories */}
      <div className="d-flex px-4">
        <div className={styles.avatarcircle}>
          <span className={styles.initials}>JD</span>
        </div>
        <div className={styles.avatarcircle}>
          <span className={styles.initials}>JD</span>
        </div>
        <div className={styles.avatarcircle}>
          <span className={styles.initials}>JD</span>
        </div>
        <div className={styles.avatarcircle}>
          <span className={styles.initials}>JD</span>
        </div>
      </div>

      {/* Toggle  */}
      <div className="d-flex pt-4 px-4">
        <div className="custom-control custom-switch mr-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="vegOnly"
          />
          <label className="custom-control-label" htmlFor="vegOnly">
            Veg Only
          </label>
        </div>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="includeEgg"
          />
          <label className="custom-control-label" htmlFor="includeEgg">
            Include Egg
          </label>
        </div>
        <hr />
      </div>
      {/* offer board */}
      <div className="px-4 mt-3">
        <div className={styles.offerborder}>
          <div className="row ml-3 mt-3">
            <div className="col-sm-6">
              <div className="row auto">
                <img src={"./images/offer1.jpg"} />
                <h5 className="mt-2 auto font-weight-bold text-danger">
                  Offers
                </h5>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row auto">
                <img src={"./images/stars.jpg"} />
                <h5 className="mt-2  auto font-weight-bold text-danger">
                  Stars
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards Big */}
      <div className="card mt-4 mx-4">
        <div className="card-body">
          <h6 className="card-title">
            Italian Roast whole bean & French press ( 4 cups ) ( Plastic Frame )
          </h6>
          <small className="d-flex text-muted">
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
            Seasonal special
          </small>
          <div className="d-flex content-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-danger"
              >
                <path d="M 12 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 z"></path>
              </svg>
            </div>{" "}
            <div className="text-xs ml-1 text-danger font-weight-bold">
              Best Seller
            </div>
          </div>
          <p className="card-text font-weight-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M14.388,5h2.987L18,3H6.625L6,5h4c1.537,0,2.828,0.997,3.299,2.375H6.625L6,9.375h7.376C12.986,10.882,11.629,12,10,12H6 v1.536L13.375,21H16v-0.25l-7-7c0.614,0,1.343,0,1.5,0c2.6,0,4.743-1.894,5.162-4.375h1.713l0.625-2h-2.378 C15.425,6.471,14.985,5.664,14.388,5z"></path>
            </svg>
            2334
          </p>

          <button className="btn btn-warning">
            <span className="font-weight-bold p-0 mx-5">+ Add Now</span>
          </button>
        </div>
      </div>
      {/* Small Cards */}
      <div className="row">
      
      <div className="col-sm-6">
        <div className="card mt-4 ml-4">
          <div className="card-body">
            <h6 className="card-title">
              Italian Roast whole bean & French press ( 4 cups ) ( Plastic Frame
              )
            </h6>
            <small className="d-flex text-muted">
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
              Seasonal special
            </small>
            <div className="d-flex content-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-danger"
                >
                  <path d="M 12 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 z"></path>
                </svg>
              </div>{" "}
              <div className="text-xs ml-1 text-danger font-weight-bold">
                Best Seller
              </div>
            </div>
            <p className="card-text font-weight-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path d="M14.388,5h2.987L18,3H6.625L6,5h4c1.537,0,2.828,0.997,3.299,2.375H6.625L6,9.375h7.376C12.986,10.882,11.629,12,10,12H6 v1.536L13.375,21H16v-0.25l-7-7c0.614,0,1.343,0,1.5,0c2.6,0,4.743-1.894,5.162-4.375h1.713l0.625-2h-2.378 C15.425,6.471,14.985,5.664,14.388,5z"></path>
              </svg>
              2334
            </p>

            <button className="btn btn-warning">
              <span className="font-weight-bold p-0 mx-5">+ Add Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card mt-4 mr-4">
          <div className="card-body">
            <h6 className="card-title">
              Italian Roast whole bean & French press ( 4 cups ) ( Plastic Frame
              )
            </h6>
            <small className="d-flex text-muted">
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
              Seasonal special
            </small>
            <div className="d-flex content-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-danger"
                >
                  <path d="M 12 2 A 10 10 0 0 0 2 12 A 10 10 0 0 0 12 22 A 10 10 0 0 0 22 12 A 10 10 0 0 0 12 2 z"></path>
                </svg>
              </div>{" "}
              <div className="text-xs ml-1 text-danger font-weight-bold">
                Best Seller
              </div>
            </div>
            <p className="card-text font-weight-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path d="M14.388,5h2.987L18,3H6.625L6,5h4c1.537,0,2.828,0.997,3.299,2.375H6.625L6,9.375h7.376C12.986,10.882,11.629,12,10,12H6 v1.536L13.375,21H16v-0.25l-7-7c0.614,0,1.343,0,1.5,0c2.6,0,4.743-1.894,5.162-4.375h1.713l0.625-2h-2.378 C15.425,6.471,14.985,5.664,14.388,5z"></path>
              </svg>
              2334
            </p>

            <button className="btn btn-warning">
              <span className="font-weight-bold p-0 mx-5">+ Add Now</span>
            </button>
          </div>
        </div>
      </div>
      </div>


      </div>
  );
}
