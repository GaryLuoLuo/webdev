
import {render, screen} from '@testing-library/react'
import {Section} from '../Section'

describe('Section' , () => {
  it('should render a title and subtitle' , () => {
    render(<Section title="Test Testing" subtitle="Yay a test"/>)
    expect(screen.getByText('Test Testing')).toBeInTheDocument()
    expect(screen.getByText('Yay a test')).toBeInTheDocument()
  })

  it('should render children passed in' , () => {
    render(
      <Section>
        <p>Hello World</p>
      </Section>
    )
    expect(screen.getByText("Hello World")).toBeInTheDocument()
  })
})
