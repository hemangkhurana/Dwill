import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import CreateLock from "./components/CreateLock";
import ModifyLock from "./components/ModifyLock";
import WalletLink from "./components/WalletLink";
import "./styles/Home.css";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/linkwallets" element={<WalletLink/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/createlock" element={<CreateLock/>} />
        <Route path="/dashboard/modifylock" element={<ModifyLock/>} />
      </Routes>
    </div>
  )
}
