import { Routes, Route } from "react-router";
import AuthPage from "../components/page/AuthPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}
