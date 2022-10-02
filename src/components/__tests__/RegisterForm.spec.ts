import { fireEvent } from "@testing-library/vue";
import RegisterForm from "../RegisterForm.vue";
import { renderWithVuetify } from "./test.utils";

describe("RegisterForm", () => {
  it("renders properly", () => {
    const { queryByLabelText } = renderWithVuetify(RegisterForm);

    expect(queryByLabelText("First name")).not.toBeNull();
    expect(queryByLabelText("Last name")).not.toBeNull();
    expect(queryByLabelText("E-mail")).not.toBeNull();
  });

  it("validates email", async () => {
    const { getByLabelText, findByText, debug } =
      renderWithVuetify(RegisterForm);

    fireEvent.update(getByLabelText("E-mail"), "not-an-email");

    expect(await findByText("E-mail must be valid")).not.toBeNull();
  });
});
