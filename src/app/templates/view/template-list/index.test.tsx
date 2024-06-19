import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TemplateList from ".";

describe("template list", () => {
  it("should render template list", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <TemplateList />
      </MemoryRouter>,
    );

    await waitFor(() =>
      expect(getByTestId("template_list")).toBeInTheDocument(),
    );
  });
});
