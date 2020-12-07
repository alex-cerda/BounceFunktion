import './BounceFBgroup.css';
import { Image } from 'react-bootstrap';

const BounceFBgroup = (props) => {
  return (
    <div className="BounceFunktionPlaylist__container">
      <p className="BounceFunktionPlaylist__title">
        Click to go back to our roots
      </p>
      <div className="BounceFunktionPlaylist__playlist">
        <a
          href="https://www.facebook.com/groups/639548116897552"
          target="_blank"
        >
          <Image
            src="data:image/png;base64,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"
            roundedCircle
            style={{ border: '5px solid black' }}

            // onClick={}
          />
        </a>
      </div>
    </div>
  );
};

export default BounceFBgroup;
