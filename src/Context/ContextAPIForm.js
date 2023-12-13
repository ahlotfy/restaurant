import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import shortid from "shortid";
const initialAccounts = localStorage.getItem("accountData")
  ? JSON.parse(localStorage.getItem("accountData"))
  : [];
const initialCurrentData = sessionStorage.getItem("currentData")
  ? JSON.parse(sessionStorage.getItem("currentData"))
  : {};
const initialActiveAccount = sessionStorage.getItem("activeAccountData")
  ? JSON.parse(sessionStorage.getItem("activeAccountData"))
  : {};
const GlobalContext = createContext();
const GlobalProviderForm = ({ children }) => {
  // ___________________________________________________
  const id = shortid.generate();
  // Start Fname
  const [fname, setFName] = useState("");
  // End Fname
  // Start Lname
  const [lname, setLName] = useState("");
  // End Lname
  // Start Email
  const [email, setEmail] = useState("");
  // End Email
  // Start Password
  const [password, setPassword] = useState("");
  // End Password
  // Start Conf Password
  const [confirmPassword, setConfirmPassword] = useState("");
  // End Conf Password
  // Start Phone
  const [phone, setPhone] = useState("");
  // End Phone
  // Start Governorate
  const [governorate, setGovernorate] = useState("");
  // End Governorate
  // Start Region
  const [region, setRegion] = useState("");
  // End Region
  // Start Street
  const [street, setStreet] = useState("");
  // End Street
  // Start HouseNumber
  const [houseNumber, setHouseNumber] = useState("");
  // End HouseNumber
  // Start Role
  const [role, setRole] = useState("");
  // End Role
  // Start Cardit
  const [cardNum, setCard] = useState("");
  // End Cardit
  //Start CardHolder
  const [cardHolder, setCardHolder] = useState("");
  //End CardHolder
  //Start Month
  const [month, setMonth] = useState("");
  //End Month
  //Start Year
  const [year, setYear] = useState("");
  //End Year
  //Start CVC
  const [CVC, setCVC] = useState("");
  //End Month
  const [accounts, setAccounts] = useState(initialAccounts);
  const [currentData, setCurrentData] = useState(initialCurrentData);
  const [activeAccount, setActiveAccount] = useState(initialActiveAccount);
  const [upFname, setUpFName] = useState(
    activeAccount.fname ? activeAccount.fname : ""
  );
  const [upLname, setUpLName] = useState(
    activeAccount.lname ? activeAccount.lname : ""
  );
  const [upPassword, setUpPassword] = useState("");
  const [upPhone, setUpPhone] = useState(
    activeAccount.phone ? activeAccount.phone : ""
  );
  const [upGovernorate, setUpGovernorate] = useState(
    activeAccount.governorate ? activeAccount.governorate : ""
  );
  const [upRegion, setUpRegion] = useState(
    activeAccount.region ? activeAccount.region : ""
  );
  const [upStreet, setUpStreet] = useState(
    activeAccount.street ? activeAccount.street : ""
  );
  const [upHouseNumber, setUpHouseNumber] = useState(
    activeAccount.houseNumber ? activeAccount.houseNumber : ""
  );
  const [upRole, setUpRole] = useState(
    activeAccount.role ? activeAccount.role : ""
  );
  // _____________________________________________________
  const [upCarditNumber, setUpCarditNumber] = useState(
    activeAccount.cardNum ? activeAccount.cardNum : ""
  );
  const [upCardHolder, setUpCardHolder] = useState(
    activeAccount.cardHolder ? activeAccount.cardHolder : ""
  );
  const [upMonth, setUpMonth] = useState(
    activeAccount.month ? activeAccount.month : ""
  );
  const [upYear, setUpYear] = useState(
    activeAccount.year ? activeAccount.year : ""
  );
  const [upCVC, setUpCVC] = useState(
    activeAccount.CVC ? activeAccount.CVC : ""
  );
  // ___________________________________________________
  const stepsDone = () => {
    setCurrentData({
      fname,
      lname,
      email,
      password,
      phone,
      governorate,
      region,
      street,
      houseNumber,
      role,
    });
  };
  const submitForm = () => {
    setAccounts([
      {
        id,
        fname,
        lname,
        email,
        password,
        phone,
        governorate,
        region,
        street,
        houseNumber,
        role,
        cardNum,
        cardHolder,
        month,
        year,
        CVC,
      },
      ...accounts,
    ]);
  };
  const loginAccount = (acc) => {
    setActiveAccount({
      ...acc,
    });
  };
  const updateAccount = (acc) => {
    let handleAccount = {
      ...acc,
      id: id,
      fname: upFname,
      lname: upLname,
      password: upPassword,
      phone: upPhone,
      governorate: upGovernorate,
      region: upRegion,
      street: upStreet,
      houseNumber: upHouseNumber,
      role: upRole,
      cardNum: upCarditNumber,
      cardHolder: upCardHolder,
      month: upMonth,
      year: upYear,
      CVC: upCVC,
    };
    setAccounts(
      [handleAccount, ...accounts].filter((oldAcc) => oldAcc.id !== acc.id)
    );
  };
  useEffect(() => {
    localStorage.setItem("accountData", JSON.stringify(accounts));
    sessionStorage.setItem("currentData", JSON.stringify(currentData));
    sessionStorage.setItem("activeAccountData", JSON.stringify(activeAccount));
  }, [accounts, activeAccount, currentData]);
  const deleteSessionStorage = () => {
    setCurrentData({});
  };
  return (
    <GlobalContext.Provider
      value={{
        setActiveAccount,
        updateAccount,
        accounts,
        setAccounts,
        activeAccount,
        submitForm,
        currentData,
        stepsDone,
        deleteSessionStorage,
        loginAccount,
        // ------------Create Account--------------------
        fname,
        setFName,
        lname,
        setLName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        phone,
        setPhone,
        governorate,
        setGovernorate,
        region,
        setRegion,
        street,
        setStreet,
        houseNumber,
        setHouseNumber,
        role,
        setRole,
        cardNum,
        setCard,
        cardHolder,
        setCardHolder,
        month,
        setMonth,
        year,
        setYear,
        CVC,
        setCVC,
        // ------------Update Account--------------------
        upFname,
        setUpFName,
        upLname,
        setUpLName,
        upPassword,
        setUpPassword,
        upPhone,
        setUpPhone,
        upGovernorate,
        setUpGovernorate,
        upRegion,
        setUpRegion,
        upStreet,
        setUpStreet,
        upHouseNumber,
        setUpHouseNumber,
        upRole,
        setUpRole,
        upCarditNumber,
        setUpCarditNumber,
        upCardHolder,
        setUpCardHolder,
        upMonth,
        setUpMonth,
        upYear,
        setUpYear,
        upCVC,
        setUpCVC,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProviderForm;
export const useContextForm = () => {
  return useContext(GlobalContext);
};
