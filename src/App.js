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
import PanCardReportPages from './pages/panCardReport';
import PendingTransactionReport from './components/reportMaster/pendingTransactionReport/PendingTransactionReport';
import OperatorWiseSalePage from './pages/operatorWiseSale';
import LedgerReportPage from './pages/LedgerReport';

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
        <Route path="all-transactions-report" element={< AlltransportationReportsPage/>} />
        <Route path="pancard-report" element={< PanCardReportPages/>} />
        <Route path="pending-transaction-report" element={< PendingTransactionReport/>} />
        <Route path="operator-wise-sale" element={<OperatorWiseSalePage />} />
        <Route path="ledger-report" element={<LedgerReportPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
