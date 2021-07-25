import {ExternalLink} from './ExternalLink'
import {Section} from './Section'
// import css style !!!
import './LearnMore.scss'

export const LearnMore = () => {

  return (<Section className="LearnMore" title="Learn More" subtitle="Not sure what to pick? We're here to help.">

    <ExternalLink url="https://www.imdb.com/what-to-watch/watch-guides/?ref_=hm_watch_wchgd">Learn More</ExternalLink>
    <ExternalLink url="https://www.imdb.com/what-to-watch/popular/?ref_=hm_watch_pop">Most Popular</ExternalLink>

  </Section>)

}
