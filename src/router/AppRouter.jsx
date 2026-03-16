import { Routes, Route } from "react-router";
import AuthPage from "../components/page/AuthPage";
import DashboardLayout from "../components/layouts/DashboardLayout";
import UsersLayout from "../components/layouts/UsersLayout";
import SquadsLayout from "../components/layouts/SquadsLayout";
import NodesLayout from "../components/layouts/NodesLayout";
import RoutingLayout from "../components/layouts/RoutingLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/users" element={<UsersLayout />} />
      <Route path="/squads" element={<SquadsLayout />} />
      <Route path="/nodes" element={<NodesLayout />} />
      <Route path="/routing" element={<RoutingLayout />} />
    </Routes>
  );
}
