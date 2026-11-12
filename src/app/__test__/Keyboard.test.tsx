import {fireEvent, render, screen} from '@testing-library/react'
import Keyboard from '../../components/Keyboard'


test ('All digit buttons renders on the screen', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button.length).toBe(11)
})

test('All operator buttons render on the screen', () => {
  render(<Keyboard onClick={()=> {}} />);
  const operatorButtons = screen.getAllByTestId('operator-button'); 
  expect(operatorButtons.length).toBe(7);
});

test ('keyboard renders',()=> {
    render(<Keyboard onClick={()=> {}} />)
    const digitb = screen.getAllByTestId('keyboard-button' )
    const opb = screen.getAllByTestId('operator-button' )
    const allButton = [...digitb, ...opb]
    expect (allButton).toBeTruthy()
} )

test('All buttons are accessable by role', ()=> {
   render(<Keyboard onClick={()=> {}}/>)
   const allButtons = screen.getAllByRole('button')
   expect (allButtons.length).toBe(18)
})

test('Clicking multiple buttons',()=> {
     const mockClick = jest.fn();
    render(<Keyboard onClick={mockClick}/>)
    const button1 = screen.getByRole('button', { name: '1' })
    const button2 = screen.getByRole('button', { name: '+' })
    const button3 = screen.getByRole('button', { name: '6' })
   
    fireEvent.click(button1)
    fireEvent.click(button2)
    fireEvent.click(button3)

    expect(mockClick).toHaveBeenCalledTimes(3)
})


test ('digit 7 buttons renders at index 0', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[0]).toHaveTextContent('7')
})

test ('digit 8 buttons renders at index ', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[1]).toHaveTextContent('8')
})

test ('digit 9 buttons renders at index ', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[2]).toHaveTextContent('9')
})

test ('digit 1 buttons renders at index 6', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[6]).toHaveTextContent('1')
})

test ('digit 3 buttons renders at index 8', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[8]).toHaveTextContent('3')
})

test ('digit 4 buttons renders at index 3', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[3]).toHaveTextContent('4')
})

test ('digit 6 buttons renders at index 5', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[5]).toHaveTextContent('6')
})

test ('digit . buttons renders at index 9', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button[9]).toHaveTextContent('.')
})