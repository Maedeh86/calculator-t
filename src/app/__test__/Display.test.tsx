import {render, screen} from '@testing-library/react'
import Display from '../../components/Display'

test ('show the input and rsult on screen', ()=> {
    render(<Display input={'3*4/6+3'} result='5'/>)
    
    const displayElement2 = screen.getByText('3*4/6+3')
    expect (displayElement2).toBeInTheDocument()

    const displayElement = screen.getByRole('heading', {
        level: 2,
    })
    expect(displayElement.textContent).toBe('5')
})