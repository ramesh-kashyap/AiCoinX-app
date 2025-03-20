import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute, PublicRoute ,ProtecRegRoute } from './Helper/helper'; // adjust the path accordingly

import Splash from './pages/splash';
import Register from './pages/auth/registerScreen';
import CreatePassword from './pages/auth/createPasswordScreen';
import SecureWallet from './pages/auth/secureWalletScreen';
import SeedPhrase from './pages/auth/seedPharseScreen';
import ConfirmSeedPhrase from './pages/auth/confirmseedPharseScreen';
import ChooseAccount from './pages/auth/chooseAccountScreen';
import Home from './pages/dashboard/homeScreen';
import Browser from './pages/dashboard/browerScreen';
import Marketplace from './pages/dashboard/marketScreen';
import Account from './pages/dashboard/profileScreen';
import SendTo from './pages/profile/wallet/send';
import Received from './pages/profile/wallet/recieved';
// import Swap from './pages/profile/wallet/swap';
import Profile from './pages/profile/Profile';
import Referral from './pages/team/Referral';



import Invest from './pages/invest/Invest';
import Depositreport from './pages/invest/Depositreport';

import Depositconfirm from './pages/invest/Depositconfirm';


import HelpCenter from './pages/support/helpCenter';

import About from './pages/support/about';
import PrivacyPolicy from './pages/support/privacy-policy';
import Language from './pages/profile/language/language';
import Currency from './pages/profile/language/currency';
import AddToken from './pages/dashboard/home/addToken';
import TopGainers from './pages/dashboard/home/topGainers';
import TopLosers from './pages/dashboard/home/topLosers';
import Notification from './pages/components/notofications';
import Tokentransaction from './pages/invest/Tokentransaction';
import AllIncome  from './pages/invest/income'
import Receiveds from './pages/invest/Receiveds';
import Swaps from './pages/invest/Swaps';
import Buysells from './pages/invest/Buysells';
import Fromswap from './pages/invest/Fromswap';
import PriceCard from './pages/components/priceCard';
import UpdateProfile from './pages/profile/security/profile';
import EnterPin from './pages/auth/enterPin';
import Login from './pages/auth/loginScreen';
import ChangePassword from './pages/profile/security/changePassword';
import NewPassword from './pages/profile/security/newPassword';
import ConfirmPassword from './pages/profile/security/confirmPin';


import Refferals from './pages/dashboard/refferals';
import PromoCode from './pages/profile/promotion/addPromoCode';

import Withdrawhistroy from './pages/Withdraw/Withdrawhistroy';

import Defi from './pages/dashboard/defiScreen';
import DetailPage from './pages/components/detail';
import SetPin from './pages/auth/setPin';
import Team from './pages/team/Referral';
import Withdraw from './pages/Withdraw/withdraw';
import Otp from './pages/invest/otpScreen';
import Signup from './pages/components/test';
import VerifyEmail from './pages/auth/verifyEmail';
import { SignIn } from 'phosphor-react';
import Signin from './pages/components/test';
import Forget from './pages/auth/forgetPass';
import ForgetOtp from './pages/auth/forgetOtp';
import ConformPass from './pages/auth/confirmPass';
function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<PublicRoute><Splash /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route 
          path="/enter-pin" 
          element={
            <ProtectedRoute>
              <EnterPin />
            </ProtectedRoute>
          } 
        />
        <Route path="/verify-email" element={<PublicRoute><VerifyEmail /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/create-password" element={<ProtectedRoute><CreatePassword /></ProtectedRoute>} />
        <Route path="/secure-wallet" element={<ProtectedRoute><SecureWallet /></ProtectedRoute>} />
        <Route path="/seed-phrase" element={<ProtectedRoute><SeedPhrase /></ProtectedRoute>} />
        <Route path="/confirm-seed-phrase" element={<ProtectedRoute><ConfirmSeedPhrase /></ProtectedRoute>} />
        <Route path="/choose-account" element={<ProtectedRoute><ChooseAccount /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/browser" element={<ProtectedRoute><Browser /></ProtectedRoute>} />
        <Route path="/market" element={<ProtectedRoute><Marketplace /></ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/sent-to" element={<ProtectedRoute><SendTo /></ProtectedRoute>} />
        <Route path="/received" element={<ProtectedRoute><Received /></ProtectedRoute>} />
        <Route path="/set-pin" element={<PublicRoute><SetPin /></PublicRoute>} />
        {/* {/ <Route path="/swap" element={<Swap />} /> /} */}
  
        <Route path="/price-card" element={<ProtectedRoute><PriceCard/></ProtectedRoute>} />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/UpdateProfile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />

        <Route path="/withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
        <Route path="/withdraw/otp" element={<ProtectedRoute><Otp /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/privacy-policy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
        <Route path="/help-center" element={<ProtectedRoute><HelpCenter /></ProtectedRoute>} />

        <Route path="/language" element={<ProtectedRoute><Language /></ProtectedRoute>} />
        <Route path="/currency" element={<ProtectedRoute><Currency /></ProtectedRoute>} />
        <Route path="/add-token" element={<ProtectedRoute><AddToken /></ProtectedRoute>} />
        <Route path="/top-gainers" element={<ProtectedRoute><TopGainers /></ProtectedRoute>} />
        <Route path="/top-losers" element={<ProtectedRoute><TopLosers /></ProtectedRoute>} />
        <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
        <Route path="/token-transaction" element={<ProtectedRoute><Tokentransaction /></ProtectedRoute>} />
        <Route path="/invest/received" element={<ProtectedRoute><Receiveds/></ProtectedRoute>} />
        <Route path="/invest/swaps" element={<ProtectedRoute><Swaps/></ProtectedRoute>} />
        <Route path="/invest/buysells" element={<ProtectedRoute><Buysells/></ProtectedRoute>} />
        <Route path="/invest/swap-from" element={<ProtectedRoute><Fromswap/></ProtectedRoute>} />
        <Route path="/security/change-password" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>} />
        <Route path="/security/new-password" element={<ProtectedRoute><NewPassword/></ProtectedRoute>} />
        <Route path="/security/confirm-password" element={<ProtectedRoute><ConfirmPassword/></ProtectedRoute>} />

        <Route path="/security/refferals-user" element={<ProtectedRoute><Refferals/></ProtectedRoute>} />
        <Route path="/promotion/promocode" element={<ProtectedRoute><PromoCode/></ProtectedRoute>} />
        <Route path="/team-list" element={<ProtectedRoute><Team /></ProtectedRoute>} />
        <Route path="/test2" element={<Signin />} />
        

        <Route path="/all/transaction" element={<ProtectedRoute><Depositreport /></ProtectedRoute>}/>
        <Route path="/all/income" element={<ProtectedRoute><AllIncome/></ProtectedRoute>}/>
        <Route path="/forgot" element={<PublicRoute><Forget/></PublicRoute>}/>
        <Route path="/forgetOtp" element={<PublicRoute><ForgetOtp/></PublicRoute>}/>
        <Route path="/confirmPass" element={<PublicRoute><ConformPass/></PublicRoute>}/>
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />

<Route 
          path="/withdrawhistroy" 
          element={
            <ProtectedRoute>
              <Withdrawhistroy />
            </ProtectedRoute>
          } 
        />
           <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/referral" 
          element={
            <ProtectedRoute>
              <Referral/>
            </ProtectedRoute>
          } 
        />
            <Route 
          path="/market" 
          element={
            <ProtectedRoute>
              <Marketplace />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/privacy-policy" 
          element={
            <ProtectedRoute>
              <PrivacyPolicy />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/language" 
          element={
            <ProtectedRoute>
              <Language />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/currency" 
          element={
            <ProtectedRoute>
              <Currency />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/add-token" 
          element={
            <ProtectedRoute>
              <AddToken />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/top-gainers" 
          element={
            <ProtectedRoute>
              <TopGainers />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/top-losers" 
          element={
            <ProtectedRoute>
              <TopLosers />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/notification" 
          element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/token-transaction" 
          element={
            <ProtectedRoute>
              <Tokentransaction />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/invest/received" 
          element={
            <ProtectedRoute>
              <Receiveds />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/invest/swaps" 
          element={
            <ProtectedRoute>
              <Swaps />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/invest/buysells" 
          element={
            <ProtectedRoute>
              <Buysells />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/invest/swap-from" 
          element={
            <ProtectedRoute>
              <Fromswap />
            </ProtectedRoute>
          } 
        />
      
        <Route 
          path="/security/change-password" 
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/security/refferals-user" 
          element={
            <ProtectedRoute>
              <Refferals />
            </ProtectedRoute>
          } 
        />
          <Route path="/invest" element={
        <ProtectedRoute><Invest/></ProtectedRoute>} />
        <Route path="/invest/depositconfirm" element={ <ProtectedRoute><Depositconfirm/></ProtectedRoute>} />
         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    
  
      
      

      
    </Routes>
  </Router>
  );
}

export default App;
