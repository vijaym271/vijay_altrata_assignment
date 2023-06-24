import { render, screen, fireEvent } from '@testing-library/react'
import CalendarForm from '../CalendarForm';
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe("CalendarForm", () => {
    let store;
    beforeEach(() => {
        store = mockStore(["3/10/2022"]);
    });
    it("render form fields", () => {
        render(
            <Provider store={store}>
                <CalendarForm />
            </Provider>
        );
        const calendarInput = screen.getByTestId("calendarInput");
        const calendarFormSubmit = screen.getByTestId("calendarFormSubmit");
        expect(calendarInput).toBeInTheDocument();
        expect(calendarFormSubmit).toBeInTheDocument();
    })

    it('submit calendarForm', () => {
        const mockSubmit = jest.fn();
        render(<Provider store={store}>
            <CalendarForm />
        </Provider>);
        const calendarForm = screen.getByTestId("calendarForm");
        const calendarInput = screen.getByTestId("calendarInput");
        fireEvent.change(calendarInput, { target: { value: '27/01/2023' } });
        calendarForm.addEventListener('submit', mockSubmit);
        fireEvent.submit(calendarForm)
        expect(mockSubmit).toHaveBeenCalledTimes(1);
        expect(mockSubmit).toHaveBeenCalledWith(expect.any(Object));
    })
})

describe("CalendarForm Snapshot", () => {
    let store;
    beforeEach(() => {
        store = mockStore(["3/10/2022"]);
    });
    it('should match dom snapshot', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <CalendarForm />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

