import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../components/layout";

import { site_title } from "../../lib/constants";
import I18n from "../../lib/i18n";
import fetch from "../../lib/fetch";
import Timer from "../../lib/timer";

export default function Country() {
  const router = useRouter();
  const { data: country } = useSWR(
    `https://disease.sh/v3/covid-19/countries/${router.query.id}`,
    fetch,
    { refreshInterval: 60000 }
  );
  return (
    <Layout title={country ? I18n(country.country) : null}>
      <section>
        {/* */}
        <div>
          <div className="d-flex justify-content-between align-items-center py-4 px-4">
            <h5 className="mb-0">
              {site_title} / {country ? I18n(country.country) : null}
            </h5>
            {country && country ? (
              <p className="mb-0 fs-13 text-muted">
                <Timer date={country ? country.updated : ""} />
              </p>
            ) : (
              ""
            )}
          </div>
          <hr className="mt-0"></hr>
        </div>

        {/* */}
        {country ? (
          <>
            {/* */}
            <div className="container">
              <div className="row">
                {/* */}
                <div className="col-12 col-md-6 country-data border-right">
                  <div className="p-2 my-1 rounded-0">
                    <div className="d-flex align-items-center">
                      <figure className="flag-avatar mb-0">
                        <img src={country ? country.countryInfo.flag : null} />
                      </figure>
                      <div className="ml-3">
                        <div className="fs-12 fw-5 text-muted letter-spacing-1 ml-1 text-uppercase">
                          Toplam Vaka Sayısı
                        </div>
                        <div className="h2 color-1 mb-0 font-weight-bold">
                          {country.cases.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {country ? (
                      <div className="progress my-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-warning"
                          style={{
                            width:
                              ((country.active / country.cases) * 100).toFixed(
                                2
                              ) + "%",
                          }}
                        ></div>
                        <div
                          className="progress-bar bg-success"
                          style={{
                            width:
                              (
                                (country.recovered / country.cases) *
                                100
                              ).toFixed(2) + "%",
                          }}
                        ></div>
                        <div
                          className="progress-bar bg-secondary"
                          style={{
                            width:
                              ((country.deaths / country.cases) * 100).toFixed(
                                2
                              ) + "%",
                          }}
                        ></div>
                      </div>
                    ) : (
                      ""
                    )}

                    <ul className="list-group list-group-flush">
                      <li className="d-flex justify-content-between border-0 list-group-item p-0">
                        <div className="d-flex align-items-center">
                          <span className="bg-warning p-2 rounded-1 mr-2"></span>
                          <span className="fw-5 fs-14">Onaylanmış</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="fw-5 fs-14">
                            {country.active.toLocaleString()}
                          </span>
                          {country.todayCases !== 0 ? (
                            <span className="fw-5 fs-14 ml-2 px-1 bg-light-2">
                              +{country.todayCases.toLocaleString()}
                            </span>
                          ) : null}
                        </div>
                      </li>
                      <li className="d-flex justify-content-between border-0 list-group-item p-0 my-2">
                        <div className="d-flex align-items-center">
                          <span className="bg-success p-2 rounded-1 mr-2"></span>
                          <span className="fw-5 fs-14">İyileşen</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="fw-5 fs-14">
                            {country.recovered.toLocaleString()}
                          </span>
                          {country.todayRecovered !== 0 ? (
                            <span className="fw-5 fs-14 ml-2 px-1 bg-light-2">
                              +{country.todayRecovered.toLocaleString()}
                            </span>
                          ) : null}
                        </div>
                      </li>
                      <li className="d-flex justify-content-between border-0 list-group-item p-0">
                        <div className="d-flex align-items-center">
                          <span className="bg-secondary p-2 rounded-1 mr-2"></span>
                          <span className="fw-5 fs-14">Ölüm</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="fw-5 fs-14">
                            {country.deaths.toLocaleString()}
                          </span>
                          {country.todayDeaths !== 0 ? (
                            <span className="fw-5 fs-14 ml-2 px-1 bg-light-2">
                              +{country.todayDeaths.toLocaleString()}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* */}
                <div className="col-12 col-md-6">
                  <div className="p-2 my-1 mb-4 mb-lg-0 rounded-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-2 py-1">
                        <span className="fw-5 fs-14 mr-2">
                          Toplam Test Sayısı
                        </span>
                        <span className="fs-14">
                          {country.tests.toLocaleString()}
                        </span>
                      </li>
                      <li className="list-group-item px-2 py-1">
                        <span className="fw-5 fs-14 mr-2">
                          Toplam Yoğun Bakım Hasta Sayısı
                        </span>
                        <span className="fs-14">
                          {country.critical.toLocaleString()}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="col-12 pt-5 mt-5">
            <div className="d-flex justify-content-center align-items-center">
              <span
                className="spinner-grow"
                style={{ width: "2rem", height: "2rem" }}
              >
                <span className="sr-only">Loading...</span>
              </span>
            </div>
          </div>
        )}

        <style jsx>{`
        .fs-9{font-size:9px}
        .fs-12{font-size:12px}
        .fs-13{font-size:13px}
        .fs-14{font-size:14px}
        .fw-5{font-weight:500}
        .color-1{color: #364a63;}
        .color-2{color: #5e7ea9;}
        .bg-light-2{background-color: #edeeef}
        .outline-0{outline-0}
        .rounded-1{border-radius:2.5px}
        .letter-spacing-1{letter-spacing: 0.3em;}
        .flag-avatar img{height: 70px; width: 130px; object-fit: cover;}
        @media (max-width: 768px){
        .country-data{padding-bottom: 1.5rem!important;margin-bottom: 1.5rem!important;border-bottom: 1px solid #dee2e6!important;border-right: 0!important}
        }
        `}</style>
      </section>
    </Layout>
  );
}
