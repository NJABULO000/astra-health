import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import PlaceholderPage from "./pages/PlaceholderPage";
import { modules } from "./data/modules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          {modules.map((m) => (
            <Route
              key={m.path}
              path={m.path}
              element={<PlaceholderPage title={m.label} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;