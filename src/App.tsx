import "./index.css";
import AppRoutes from "@/app/routes/AppRoutes";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong :(</div>}>
      <AppRoutes />;
    </ErrorBoundary>
  );
};
export default App;
