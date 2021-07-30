import {useState} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const ConfirmableButton = ({confirmText, onClick, children}) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (clicked) {
      onClick()
    }
     setClicked(!clicked)
  }

  return (
    <div className="timer-wrapper">
      <button onClick={handleClick}>
        {clicked ? confirmText : children}
      </button>

      {clicked && (
        <CountdownCircleTimer
          isPlaying={clicked}
          duration={10}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
          size={50}
          onComplete={() => setClicked(!clicked)}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      )}
    </div>
  )

}
