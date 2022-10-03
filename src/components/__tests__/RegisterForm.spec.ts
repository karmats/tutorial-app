import { fireEvent } from "@testing-library/vue";
import RegisterForm from "../RegisterForm.vue";
import { renderWithVuetify } from "./test.utils";

describe("RegisterForm", () => {
  it("renders properly", () => {
    const { getByLabelText } = renderWithVuetify(RegisterForm);

    expect(getByLabelText("First name")).toBeInTheDocument();
    expect(getByLabelText("Last name")).toBeInTheDocument();
    expect(getByLabelText("E-mail")).toBeInTheDocument();
  });

  it("requires first name, last name, and e-mail", async () => {
    const touchInput = (input: HTMLElement) =>
      fireEvent.update(input, " ").then(() => fireEvent.update(input, ""));

    const { getByLabelText, findAllByText } = renderWithVuetify(RegisterForm);
    const firstNameInput = getByLabelText("First name");
    const lastNameInput = getByLabelText("Last name");
    const emailInput = getByLabelText("E-mail");

    touchInput(firstNameInput);
    expect(await findAllByText("Name is required")).toHaveLength(1);
    await touchInput(lastNameInput);
    expect(await findAllByText("Name is required")).toHaveLength(2);
    touchInput(emailInput);
    expect(await findAllByText("E-mail is required")).toHaveLength(1);
  });

  it("validates email", async () => {
    const { getByLabelText, findByText } = renderWithVuetify(RegisterForm);

    fireEvent.update(getByLabelText("E-mail"), "not-an-email");

    expect(await findByText("E-mail must be valid")).toBeInTheDocument();
  });

  it("validates name", async () => {
    const { getByLabelText, findByText } = renderWithVuetify(RegisterForm);
    const longName = "Thisisalooooongname";

    fireEvent.update(getByLabelText("First name"), longName);
    expect(
      await findByText("Name must be less than 10 characters")
    ).toBeInTheDocument();
  });

  it("submits the form", async () => {
    const { getByLabelText, queryByText, emitted } =
      renderWithVuetify(RegisterForm);
    const user = {
      firstName: "Test",
      lastName: "Testsson",
      email: "test@test.com",
    };
    // Submit button disabled by default
    // TODO Not elegant with the .parentElement
    const submitButton = queryByText("Submit")?.parentElement;
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeInstanceOf(HTMLButtonElement);
    expect(submitButton).toBeDisabled();

    // Update form with valid values
    await fireEvent.update(getByLabelText("First name"), user.firstName);
    await fireEvent.update(getByLabelText("Last name"), user.lastName);
    await fireEvent.update(getByLabelText("E-mail"), user.email);
    await fireEvent.blur(getByLabelText("E-mail"));

    expect(submitButton).toBeEnabled();
    fireEvent.click(submitButton!);
    expect(emitted().formSubmitted).toHaveLength(1);
    expect(emitted().formSubmitted[0]).toEqual([user]);
  });
});
