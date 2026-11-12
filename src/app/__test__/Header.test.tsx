import {render, screen} from '@testing-library/react'
import Header from '../../components/Header'

describe('The header has a expected functionality',()=>{
    test('The header is render prop',()=> {
        render(<Header pageTitle='bushra123'/>)
        const pageTitleElement= screen.getByRole('heading', 
            {
            level: 1,
            name:'bushra123'
            })
        expect(pageTitleElement).toBeInTheDocument();
    })

})