import { Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/custom.css'
import Header from './common/header/Header';
import DistributerPage from './pages/distributer';
import CreateUserDistributerPage from './pages/distributer/createUserDistributer/CreateUserDistributer';
import RetailerPage from './pages/retailer';
import CreateUserRetailerPage from './pages/retailer/createUserRetailer';
import SuspendedUserPage from './pages/suspendedUsers';
import NotWorkingUserPage from './pages/notWorkingUser';
import Footer from './common/footer/Footer';
import Dashboardpage from './pages/dashboard';
import AlltransportationReportsPage from './pages/alltransportationReports';
import BalanceTransferPage from './pages/balanceTransfer';
import BalanceReturnRequestPage from './pages/balanceReturnRequest';
import PaymentRequestViewPage from './pages/paymentRequestView';
import PaymentRequestPage from './pages/PaymentRequest';
import PendingDisputPage from './pages/pendingDisput';
import SolveDisputePage from './pages/solveDispute';
import DistributerIncomePage from './pages/distributerIncome';
import RetailerIncomePage from './pages/retailerIncome';
import MyIncomePage from './pages/myIncome';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
        <Route path="member-list/distributor" element={<DistributerPage />} />
        <Route path="create-user/distributor" element={<CreateUserDistributerPage />} />
        <Route path="member-list/retailer" element={<RetailerPage />} />
        <Route path="create-user/retailer" element={<CreateUserRetailerPage />} />
        <Route path="suspended-users" element={<SuspendedUserPage />} />
        <Route path="not-working-users" element={<NotWorkingUserPage />} />
        <Route path="all-transactions-report" element={< AlltransportationReportsPage />} />
        <Route path="balance-trasnfer" element={< BalanceTransferPage />} />
        <Route path="balance-return-request" element={<BalanceReturnRequestPage />} />
        <Route path="payment-request-view" element={<PaymentRequestViewPage />} />
        <Route path="payment-request" element={<PaymentRequestPage />} />
        <Route path="pending-dispute" element={<PendingDisputPage />} />
        <Route path="solve-dispute" element={<SolveDisputePage />} />
        <Route path="user-income/distributor" element={<DistributerIncomePage />} />
        <Route path="income/user-income/retailer" element={<RetailerIncomePage />} />
        {/* <Route path="income/my-income" element={<MyIncomePage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
