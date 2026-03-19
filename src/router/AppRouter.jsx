import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../components/page/AuthPage";
import Dashboard from "../components/page/Dashboard";
import UsersPage from "../components/page/UsersPage";
import SquadsPage from "../components/page/SquadsPage";
import NodesPage from "../components/page/NodesPage";
import RoutingPage from "../components/page/RoutingPage";
import HomePage from "../components/page/HomePage";
import AppLayout from "../components/layouts/AppLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/squads" element={<SquadsPage />} />
        <Route path="/nodes" element={<NodesPage />} />
        <Route path="/routing" element={<RoutingPage />} />
      </Route>
    </Routes>
  );
}
