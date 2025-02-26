import React from 'react'
import { eligibleTitles } from '../constants'

class TitleSelector extends React.Component {
  render() {
    const { milestoneByTrack, currentTitle, setTitleFn } = this.props;
    const titles = eligibleTitles(milestoneByTrack);
    
    return (
      <select value={currentTitle} onChange={e => setTitleFn(e.target.value)}>
        <style jsx>{`
          select {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 20px;
            min-width: 300px;
          }
        `}</style>
        {titles.map(title => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    );
  }
}

export default TitleSelector;
