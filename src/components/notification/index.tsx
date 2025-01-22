import { Typography } from '@mui/material';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface notificationProps {
  notificationList: any;
  endIndex?: number;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Notification({
  notificationList,
  endIndex = notificationList.length,
  setState,
}: notificationProps) {
  return (
    <div className="noti_internal_list">
      <ul>
        {notificationList && notificationList.length ? (
          notificationList
            .slice([0], [endIndex])
            .map((item: any, index: number) => {
              return (
                <li
                  className={item.isSeen ? 'read' : 'unread'}
                  key={index}
                  // onClick={() => handleRedirect(item)}
                >
                  <div className="noti_media">
                    <figure className="ur_img">
                      {/* <img
                        onError={(e) => addDefaultSrc(e, profileIcon)}
                        src={item?.image || profileIcon}
                        alt="img"
                      /> */}
                    </figure>
                    <div className="nt_ls_rt">
                      <Typography variant="body2" className="semi-bold">
                        {item?.dynamicData?.displayName}
                      </Typography>
                      <Typography variant="subtitle2" className="color-label">
                        {item?.message}
                      </Typography>
                      <div className="dt">
                        {moment(item.createdAt).fromNow()}{' '}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
        ) : (
          <div className="no-record">
            <img src="" alt="" />
          </div>
        )}
      </ul>
    </div>
  );
}
