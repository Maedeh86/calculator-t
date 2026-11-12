import {fireEvent, render, screen} from '@testing-library/react'
import BackButton from '../../components/BackButton'

test('BackSpace button calls when click and its render correctly',()=> {
    const mockClick = jest.fn();
    render(<BackButton onBackspace={mockClick}/>)
    const ButtonElement = screen.getByRole('button', {
        name: /BackSpace/i
    })
    expect (ButtonElement).toBeInTheDocument();
    fireEvent.click(ButtonElement)
    expect(mockClick).toHaveBeenCalledTimes(1)
})

