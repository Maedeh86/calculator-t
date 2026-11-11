
import Button from "../../components/Button";
import {fireEvent, render, screen} from '@testing-library/react'

test('The labal on button is correctly render',()=> {
    render(<Button label='+' onClick={()=>{}}/>)
    const button = screen.getByRole('button',{
        name: '+'
    })
    expect(button).toBeInTheDocument()
})

test('On click button event triggers', ()=> {
    const mockClick = jest.fn()
    render(<Button label='1' onClick={mockClick}/>)
    fireEvent.click(screen.getByRole('button', {
        name: '1'
    }))
      expect(mockClick).toHaveBeenCalledTimes(1);
})
