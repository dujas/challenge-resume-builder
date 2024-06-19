import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "@/app/home";
import Templates from "@/app/templates/view";
import Resumes from "@/app/resumes/view";
import TemplateDetails from "@/app/templates/view/template-details";
import ResumeDetails from "@/app/resumes/view/resume-details";
import { APP_ROUTES } from "./routesConstants";

const Root = (): JSX.Element => {
  return (
    <Routes>
      <Route path={APP_ROUTES.home} element={<Home />}>
        <Route path={APP_ROUTES.templates} element={<Templates />} />
        <Route
          path={APP_ROUTES.templateDetails}
          element={<TemplateDetails />}
        />
        <Route path={APP_ROUTES.resumes} element={<Resumes />} />
        <Route path={APP_ROUTES.resumeDetails} element={<ResumeDetails />} />
      </Route>
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
