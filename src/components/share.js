import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,

  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,

} from 'react-share';

const Share = () => (
  <>

    <div className="row sharerow">
      <div className="share ">

        <FacebookShareButton url="https://lottokone.fi?utm_source=facebook&utm_medium=share_buttons&utm_campaign=siteshare">
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
      </div>
      <div className="share">

        <TwitterShareButton url="https://lottokone.fi?utm_source=twitter&utm_medium=share_buttons&utm_campaign=siteshare">
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
      </div>
      <div className="share">

        <TelegramShareButton url="https://lottokone.fi?utm_source=telegram&utm_medium=share_buttons&utm_campaign=siteshare">
          <TelegramIcon
            size={32}
            round
          />
        </TelegramShareButton>
      </div>
      <div className="share">

        <WhatsappShareButton url="https://lottokone.fi?utm_source=whatsapp&utm_medium=share_buttons&utm_campaign=siteshare">
          <WhatsappIcon
            size={32}
            round
          />
        </WhatsappShareButton>
      </div>
    </div>

  </>
);

export default Share;
