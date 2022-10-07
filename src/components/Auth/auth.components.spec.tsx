import { render, fireEvent } from "@testing-library/react";
import { SignupForm } from "./SignupForm";

describe("Testing signup form filling", () => {
    it("should render without crashing", (done) => {
        const component = render(
            <SignupForm
                done={async (e) => {
                    await setTimeout(() => {
                        console.log('API RESULT --', e)
                    }, 2000);
                }}
                onErrorMessage={(e) => {}}
                role_id={3}
            />,
        );
        expect(component).toBeTruthy();
        done()
    });
});
