export const DeleteIcon = ({ onClick }: { onClick: () => void }) => (
  <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3.08789L11 11.0879M3 11.0879L11 3.08789"
      stroke="#B3B3B3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingIcon = ({ onClick }: { onClick: () => void }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.90029 7.75987L3.78029 6.23566C4.30029 5.335 5.46641 5.01522 6.37574 5.54022C7.94324 6.44522 9.2241 5.7067 9.22102 3.89204C9.22069 2.85262 10.0742 1.99437 11.1222 1.99904L13.1155 2.00667C14.0346 1.99464 14.778 2.74713 14.79 3.66629L14.7903 3.88583C14.7847 5.69549 16.0664 6.43549 17.6395 5.53083L17.8297 5.42129C18.6318 4.97213 19.6551 5.23964 20.1043 6.04167L21.1075 7.76404C21.6356 8.66937 21.3191 9.83762 20.4187 10.357C18.8456 11.2617 18.8465 12.7402 20.414 13.6452C21.3147 14.1652 21.6345 15.3313 21.1095 16.2406L20.2295 17.7648C19.7095 18.6655 18.5433 18.9853 17.634 18.4603C16.0665 17.5553 14.7856 18.2938 14.7887 20.1084C14.7841 21.1565 13.9356 22.0061 12.8875 22.0015L10.8943 21.9938C9.97513 22.0059 9.23178 21.2534 9.21975 20.3342L9.21948 20.1147C9.22506 18.305 7.94334 17.565 6.37026 18.4697L6.18 18.5792C5.37797 19.0284 4.35462 18.7609 3.90546 17.9588L2.90224 16.2365C2.37415 15.3311 2.69069 14.1629 3.59102 13.6434C5.1641 12.7388 5.16324 11.2603 3.59574 10.3553C2.68641 9.83032 2.38029 8.66053 2.90029 7.75987Z"
      fill="#DFDFDF"
      stroke="#DFDFDF"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="12" r="3" fill="white" />
  </svg>
);

export const SaveIcon = ({ onClick, isActive }: { onClick: () => void; isActive: boolean }) => (
  <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 6.18337C21 3.19711 18.8214 2 15.6848 2H8.31871C5.27845 2 3 3.11549 3 5.98421V21.9679C3 22.7558 3.90465 23.252 4.63742 22.8668L12.0302 18.9805L19.3591 22.8602C20.093 23.2477 21 22.7514 21 21.9624V6.18337Z"
      fill={isActive ? '#FE8C46' : '#DFDFDF'}
      stroke={isActive ? '#FE8C46' : '#DFDFDF'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
