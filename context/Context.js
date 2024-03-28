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
        const res = await fetch("http://139.59.78.49:1337/api/london-collegeupdates?populate*=", {
          headers: {
            Authorization: "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c"
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
