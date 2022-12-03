import { FcCustomerSupport } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch, BiPurchaseTagAlt } from "react-icons/bi";
import { BiCog, BiLogOut } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {
  AiFillHeart,
  AiTwotoneFileExclamation,
  AiFillFileAdd,
  AiOutlineMedicineBox,
} from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoListCircleOutline } from "react-icons/io5";
import SidebarMenu from "./SidebarMenu";

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const userParse = user && user !== "undefined" ? JSON.parse(user) : null;
    setToken(token);
    setRole(userParse?.role);
    setUser(user);
    console.log("user rolw", userParse?.role, token, user);
  }, [token,role]);

  //  role is admin the show that route is role is pharmasist the show pahrmacist route

  const customerRoute = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: <BsCartCheck />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <AiFillFileAdd />,
    },
    {
      name: "Support",
      path: "/support",
      icon: <FcCustomerSupport />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FcBusinessman />,
    },
  ];

  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/",
      name: "adminPharmasist",
      icon: <FaUser />,
      subRoutes: [
        {
          path: "adminPharmasist",
          name: "adminPharmasist",
          icon: <FaUser />,
        },
        {
          path: "/addPharmasist",
          name: "addPharmasist",
          icon: <AiFillFileAdd />,
        },
      ],
    },
    {
      path: "/",
      name: "products",
      icon: <MdOutlineProductionQuantityLimits />,
      exact: true,
      subRoutes: [
        {
          path: "/products",
          name: "products",
          icon: <FaUser />,
        },
        {
          path: "/addproducts",
          name: "addproducts",
          icon: <AiFillFileAdd />,
        },
      ],
    },
    {
      path: "/",
      name: "supplier",
      icon: <IoListCircleOutline />,
      exact: true,
      subRoutes: [
        {
          path: "/supplier",
          name: "supplier",
          icon: <FaUser />,
        },
        {
          path: "/addsupplier",
          name: "addsupplier",
          icon: <AiFillFileAdd />,
        },
      ],
    },
    {
      path: "/",
      name: "customers",
      icon: <FcCustomerSupport />,
      exact: true,
      subRoutes: [
        {
          path: "/customers",
          name: "customers",
          icon: <FaUser />,
        },
        {
          path: "/addcustomers",
          name: "addcustomers",
          icon: <AiFillFileAdd />,
        },
      ],
    },
    {
      path: "/",
      name: "Manufactures",
      icon: <FcBusinessman />,
      exact: true,
      subRoutes: [
        {
          path: "/manufactures",
          name: "Manufactures",
          icon: <FaUser />,
        },
        {
          path: "/addmanufactures",
          name: "addManufactures",
          icon: <AiFillFileAdd />,
        },
      ],
    },
    {
      path: "/",
      name: "catagory",
      icon: <AiFillHeart />,
      exact: true,
      subRoutes: [
        {
          path: "/catagory",
          name: "catagory",
          icon: <FaUser />,
        },
        {
          path: "/addcatagory",
          name: "addcatagory",
          icon: <AiFillFileAdd />,
        },
      ],
    },

    {
      path: "/purchase",
      name: "purchase",
      icon: <BiPurchaseTagAlt />,
      exact: true,
    },
  ];

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  POS
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>

          {role == "admin" && (
            <section className="routes">
              {/* role is admin then same if role if customer the customer route */}
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          )}

          {role == "customer" && (
            <section className="routes">
              {/* role is admin then same if role if customer the customer route */}
              {customerRoute.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          )}
          {token && (
            <>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div
                  className="icon"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate("/login");
                  }}
                >
                  <BiLogOut />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/login");
                      }}
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      LogOut
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
