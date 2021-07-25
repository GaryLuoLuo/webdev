import './Section.scss'

export const Section = ({title, subtitle, className = '', children}) => {

  return (<section className={`Section ${className}`}>
    <h3 className="title">{title}</h3>
    <h4 className="subtitle">{subtitle}</h4>
    {children}
  </section>)

}
