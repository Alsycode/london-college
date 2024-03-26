import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [cartToggle, setCart] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [smallMobileMenu, setsmallMobileMenu] = useState(true);
  const [pricing, setPricing] = useState(true);
  const [pricingTwo, setPricingTwo] = useState(true);
  const [pricingThree, setPricingThree] = useState(true);
  const [pricingFour, setPricingFour] = useState(true);
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/london-collegeupdates?populate*=", {
          headers: {
            Authorization: "Bearer 36d91d755f6933406f808c6bf39e61dfc5f91f83192d27953c1408254968d8370a23e758ffaa7a7aeefdebb91c21a8d6b7eb8dd771d427e6ee01f7e42e831681d35e263fc04f9209e5e02b6d5473a7899c896a983904eac92709ec1bb86fc2b726314bb0cebb7cfec92e46cd284328bf1a21e17736509a74b2ced35db5ef0265"
          }
        });
        const jsonData = await res.json();
        setData(jsonData);
        console.log("Fetched data:", jsonData);
        console.log("datacheck",data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount
  console.log("datacheck",data)
  return (
    <CreateContext.Provider
      value={{
        toggle,
        setToggle,
        mobile,
        setMobile,
        smallMobileMenu,
        setsmallMobileMenu,
        cartToggle,
        setCart,
        search,
        setSearch,
        pricing,
        setPricing,
        pricingTwo,
        setPricingTwo,
        pricingThree,
        setPricingThree,
        pricingFour,
        setPricingFour,
        data // Include fetched data in the context value
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
