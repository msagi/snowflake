import React from "react";
import { trackIds, tracks, categoryColorScale } from "../constants";

class TrackSelector extends React.Component {
  render() {
    const { milestoneByTrack, focusedTrackId, setFocusedTrackIdFn } = this.props; // Pegando props corretamente

    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map((trackId) => (
              <td
                key={trackId}
                className="track-selector-label"
                onClick={() => setFocusedTrackIdFn(trackId)}
              >
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map((trackId) => (
              <td
                key={trackId}
                className="track-selector-value"
                style={{
                  border: `4px solid ${
                    trackId === focusedTrackId ? "#000" : categoryColorScale(tracks[trackId].category)
                  }`,
                  background: categoryColorScale(tracks[trackId].category),
                }}
                onClick={() => setFocusedTrackIdFn(trackId)}
              >
                {milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TrackSelector;