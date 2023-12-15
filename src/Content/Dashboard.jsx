import React, { useEffect, useState } from "react";
import PageCard from "../components/PageCard";
import axios from "axios";
import { baseUrl } from "../Api/Api";
import { Link, useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/ClipLoader";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate("");
  const token = localStorage.getItem("userToken");
  sessionStorage.setItem("userToken", token);
  Cookies.set("userToken", token);

  const handleLogout = (e) => {
    localStorage.clear();
    sessionStorage.clear();
  };
  useEffect(() => {
    if (token) {
    } else {
      navigate("/account");
    }
    axios
      .post(`${baseUrl}/user`, {
        token: localStorage.getItem("userToken"),
      })
      .then((response) => {
        setUserInfo(response.data);
      });
    axios
      .post(`${baseUrl}/pages`, {
        token: localStorage.getItem("userToken"),
      })
      .then((response) => {
        setPages(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-[63vh] flex justify-center items-center">
          <CircleLoader
            color="#36d7b7"
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <div className="max-w-[1280px] m-auto flex items-center justify-start  flex-col my-12 min-h-[86vh] xs:mx-4 lg:mx-4 xl:mx-4 sm:mx-4 md:mx-4">
            <div className="text-3xl font-bold border-b-2 my-8 px-3">
              الصفحات
            </div>
            <div className="flex justify-evenly items-center flex-wrap gap-y-4 sm:flex-col w-full">
              {pages.map((page) => (
                <PageCard
                  name={page.name}
                  image={page.img}
                  aya={page.aya_time}
                  hadith={page.hadith_time}
                  id={page.id}
                  pageId={page.page_id}
                  ayaState={page.aya_state}
                  hadithState={page.hadith_state}
                />
              ))}
            </div>
            <div className="flex justify-between items-center gap-3 md:justify-evenly lg:justify-evenly xs:flex-col sm:justify-center xl:justify-evenly 2xl:justify-evenly flex-wrap w-full flex-row-reverse xs:mx-4 lg:mx-4 xl:mx-4 sm:mx-4 md:mx-4">
              <Link
                to="https://www.facebook.com/v16.0/dialog/oauth?client_id=896032735284292&redirect_uri=https://sharre.click/dashboard&scope=pages_manage_engagement,pages_manage_posts"
                className="xs:w-3/4 sm:w-3/4 w-1/4 bg-[#384881] text-white text-center md:w-[40%] lg:w-[40%] xl:w-1/4 2xl:w-[24%] text-lg py-4 rounded-lg mt-8"
              >
                إضافة صفحة جديد
              </Link>
              <Link
                to="/ayat"
                className={
                  userInfo.role === "Admin"
                    ? "xs:w-3/4 sm:w-3/4 w-1/4 md:w-[40%] lg:w-[40%] xl:w-[20%] 2xl:w-[24%] bg-[#384881] text-white text-lg py-4 rounded-lg mt-8 text-center"
                    : "hidden"
                }
              >
                الآيات
              </Link>
              <Link
                to="/hadith"
                className={
                  userInfo.role === "Admin"
                    ? "xs:w-3/4 sm:w-3/4 w-1/4 md:w-[40%] lg:w-[40%] xl:w-[20%] 2xl:w-[24%] bg-[#384881] text-white text-lg py-4 rounded-lg mt-8 text-center"
                    : "hidden"
                }
              >
                الأحاديث
              </Link>
              <Link
                to="/"
                className="xs:w-3/4 sm:w-3/4 w-1/4 md:w-[40%] lg:w-[40%] xl:w-[20%] 2xl:w-[24%] bg-[#384881] text-white text-lg py-4 rounded-lg mt-8 text-center"
                onClick={handleLogout}
              >
                تسجيل الخروج
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
