// How to create new svg icon?

// Example:
// export const ExampleIcon = (props) => {
//   return <svg {...props}></svg>;
// };

// Usage in components:
// import { ExampleIcon } from '../assets/icons';
// const ExampleComponent = () => {
//   return <ExampleIcon width={'20'} height={'20'}/>
// }

export const LogoIcon = (props) => {
  return (
    <svg
      width="121"
      height="27"
      viewBox="0 0 121 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.89953 4.58812V10.1C1.89953 11.0041 1.89953 12.0197 0 12.0197V13.5089V13.529V14.9809C1.89953 14.9809 1.89953 15.9959 1.89953 16.9006V22.4119C1.89953 26.6894 4.2729 27 8.30857 27V23.6732C6.40905 23.6732 5.69739 23.397 5.69739 22.3298V16.8725C5.69739 15.6124 5.78501 14.296 4.67104 13.4997C5.78501 12.7046 5.69739 11.3882 5.69739 10.1269V4.67079C5.69739 3.60471 6.40964 3.32742 8.30857 3.32742V7.89382e-07C4.2729 -0.000572509 1.89953 0.31001 1.89953 4.58812ZM12.5791 4.40958C11.5414 5.27531 11.0229 6.51879 11.0229 8.13887V9.59418H8.85513V12.6351H11.0229V23.6554H15.7332V12.6351H18.6514V9.59418H15.7332V8.55623C15.7332 8.02807 15.8906 7.62104 16.2053 7.33514C16.52 7.04924 16.97 6.90687 17.5535 6.90687C17.8402 6.90687 19.3046 6.91146 19.3046 6.91146V3.38254C19.3046 3.38254 16.6899 3.35441 16.3162 3.35441C15.1789 3.35441 13.6168 3.54271 12.5791 4.40958ZM21.3764 6.89883H26.0874V3.38254H21.3764V6.89883ZM21.3764 23.6559H26.0874V9.59418H21.3764V23.6559ZM37.7039 9.33412C36.8146 9.33412 36.0082 9.53161 35.2858 9.92543C34.5634 10.3193 33.9567 10.8681 33.4655 11.569L33.285 9.59418H28.8797V23.6554H33.5627V13.5456C33.8035 13.2856 34.0932 13.0806 34.4311 12.9348C34.7691 12.789 35.1559 12.7138 35.5916 12.7138C36.2865 12.7138 36.8122 12.8808 37.1686 13.2138C37.5251 13.5479 37.7039 14.1163 37.7039 14.9229V23.6565H42.4005V14.9361C42.4005 12.9865 41.9857 11.5656 41.1572 10.6729C40.3282 9.78019 39.1767 9.33412 37.7039 9.33412ZM56.605 16.7227C55.7205 16.0515 54.3604 15.5458 52.5264 15.2082C51.3594 15.0015 50.5828 14.7662 50.1989 14.5061C49.8145 14.2472 49.622 13.9297 49.622 13.5577C49.622 13.1673 49.7889 12.8487 50.122 12.5967C50.4552 12.3452 50.8677 12.2189 51.3588 12.2189C52.0257 12.2189 52.5097 12.3624 52.8107 12.6483C53.1117 12.9342 53.2625 13.3545 53.2625 13.9085H57.8203L57.8483 13.831C57.9043 12.5037 57.3393 11.425 56.1532 10.5885C54.9671 9.75206 53.3733 9.33355 51.3725 9.33355C49.473 9.33355 47.968 9.76526 46.8558 10.6275C45.7442 11.4898 45.1887 12.5393 45.1887 13.7776C45.1887 14.947 45.6334 15.8707 46.5226 16.5458C47.4119 17.2221 48.7321 17.7198 50.4832 18.0408C51.5948 18.2572 52.3613 18.5018 52.7827 18.7744C53.2047 19.0477 53.4151 19.3583 53.4151 19.7027C53.4151 20.1276 53.2529 20.456 52.9287 20.6839C52.6045 20.9135 52.1277 21.03 51.4977 21.03C50.7383 21.03 50.1518 20.8814 49.74 20.5874C49.3275 20.2935 49.1124 19.8124 49.0939 19.1453H44.8419L44.8144 19.2228C44.759 20.4192 45.3258 21.5025 46.5167 22.4722C47.7069 23.4429 49.3257 23.9275 51.3731 23.9275C53.3465 23.9275 54.9325 23.5181 56.1323 22.6989C57.3327 21.8803 57.9323 20.8394 57.9323 19.5736C57.9323 18.3445 57.4895 17.3938 56.605 16.7227ZM73.3717 17.7428H73.2883L70.8154 9.59533H67.8549L65.4095 17.8088H65.326L63.6726 9.59533H59.3372L62.8805 23.6565H66.8417L69.3003 16.1974H69.3837L71.8298 23.6565H75.8041L79.3338 9.59533H74.9983L73.3717 17.7428ZM87.308 9.33404C85.0753 9.32551 83.3581 9.99949 82.1589 11.3555C80.9579 12.7109 80.3583 14.459 80.3583 16.5986V17.0929C80.3583 19.0506 81.0187 20.6798 82.3377 21.9796C83.6579 23.2799 85.4257 23.9292 87.6399 23.9292C88.835 23.9292 89.9537 23.7799 90.9962 23.4808C92.038 23.1823 92.8885 22.808 93.5453 22.3573L92.4344 19.6798C91.619 20.0013 90.9449 20.2257 90.4121 20.3561C89.8786 20.487 89.1676 20.5518 88.2783 20.5518C87.398 20.5518 86.6947 20.3199 86.1666 19.8566C85.6379 19.3916 85.3238 18.8009 85.2213 18.0821L85.2499 18.0034H93.8368V15.7019C93.8368 13.7443 93.2575 12.1937 92.1 11.0495C90.9437 9.90591 89.3452 9.33404 87.308 9.33404ZM89.2534 15.261H85.2094L85.1676 15.1967C85.2421 14.4424 85.4484 13.8401 85.7869 13.3895C86.1243 12.94 86.6321 12.7144 87.3086 12.7144C87.9755 12.7144 88.4654 12.905 88.7819 13.2862C89.0966 13.6673 89.2546 14.2133 89.2546 14.9235L89.2534 15.261ZM103.069 9.33404C100.837 9.32551 99.1206 9.99949 97.9202 11.3555C96.721 12.7109 96.1202 14.459 96.1202 16.5986V17.0929C96.1202 19.0506 96.7806 20.6798 98.1008 21.9796C99.4215 23.2799 101.188 23.9292 103.402 23.9292C104.597 23.9292 105.716 23.7799 106.759 23.4808C107.801 23.1823 108.651 22.808 109.308 22.3573L108.197 19.6798C107.381 20.0013 106.708 20.2257 106.174 20.3561C105.64 20.487 104.931 20.5518 104.041 20.5518C103.161 20.5518 102.458 20.3199 101.929 19.8566C101.4 19.3916 101.086 18.8009 100.984 18.0821L101.012 18.0034H109.599V15.7019C109.599 13.7443 109.02 12.1937 107.862 11.0495C106.704 9.90591 105.108 9.33404 103.069 9.33404ZM105.014 15.261H100.971L100.929 15.1967C101.004 14.4424 101.21 13.8401 101.548 13.3895C101.885 12.94 102.393 12.7144 103.069 12.7144C103.736 12.7144 104.227 12.905 104.543 13.2862C104.859 13.6673 105.016 14.2133 105.016 14.9235V15.2616H105.014V15.261ZM119.249 20.0087C118.665 20.0087 118.215 19.8664 117.901 19.5805C117.586 19.2946 117.428 18.8864 117.428 18.3582V12.6598H119.872V9.61772H117.428V3.36015H112.718V9.61772H110.549V12.6598H112.718V18.7756C112.718 20.3957 113.236 21.6392 114.273 22.506C115.31 23.3735 116.872 23.5612 118.011 23.5612C118.385 23.5612 121 23.5331 121 23.5331V20.0041C121 20.0041 119.537 20.0087 119.249 20.0087Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const NavIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="31"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PhoneIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.76 13.9203C16.4636 12.8869 15.148 12.261 13.8675 13.2928L13.1029 13.9164C12.5435 14.3691 11.5034 16.4842 7.48203 12.1728C3.46146 7.86675 5.85404 7.19631 6.41429 6.74752L7.18306 6.12312C8.45681 5.08896 7.97612 3.78709 7.05744 2.44698L6.50306 1.63526C5.58019 0.298264 4.57526 -0.579797 3.29816 0.452802L2.60811 1.01476C2.04367 1.39799 0.465926 2.64366 0.0832146 5.01013C-0.377379 7.84958 1.07559 11.1011 4.40442 14.6688C7.72907 18.238 10.9842 20.0308 14.0677 19.9996C16.6303 19.9738 18.1779 18.6923 18.6619 18.2263L19.3545 17.6636C20.6282 16.6317 19.8368 15.5812 18.5396 14.5455L17.76 13.9203Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FacebookIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const InstagramIcon = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.3335 2.16094C15.5397 2.16094 15.9194 2.175 17.1804 2.23125C18.3522 2.28281 18.9851 2.47969 19.4069 2.64375C19.9647 2.85938 20.3679 3.12188 20.7851 3.53906C21.2069 3.96094 21.4647 4.35938 21.6804 4.91719C21.8444 5.33906 22.0413 5.97656 22.0929 7.14375C22.1491 8.40937 22.1632 8.78906 22.1632 11.9906C22.1632 15.1969 22.1491 15.5766 22.0929 16.8375C22.0413 18.0094 21.8444 18.6422 21.6804 19.0641C21.4647 19.6219 21.2022 20.025 20.7851 20.4422C20.3632 20.8641 19.9647 21.1219 19.4069 21.3375C18.9851 21.5016 18.3476 21.6984 17.1804 21.75C15.9147 21.8062 15.5351 21.8203 12.3335 21.8203C9.12725 21.8203 8.74756 21.8062 7.48662 21.75C6.31475 21.6984 5.68193 21.5016 5.26006 21.3375C4.70225 21.1219 4.29912 20.8594 3.88193 20.4422C3.46006 20.0203 3.20225 19.6219 2.98662 19.0641C2.82256 18.6422 2.62568 18.0047 2.57412 16.8375C2.51787 15.5719 2.50381 15.1922 2.50381 11.9906C2.50381 8.78438 2.51787 8.40469 2.57412 7.14375C2.62568 5.97187 2.82256 5.33906 2.98662 4.91719C3.20225 4.35938 3.46475 3.95625 3.88193 3.53906C4.30381 3.11719 4.70225 2.85938 5.26006 2.64375C5.68193 2.47969 6.31943 2.28281 7.48662 2.23125C8.74756 2.175 9.12725 2.16094 12.3335 2.16094ZM12.3335 0C9.07568 0 8.66787 0.0140625 7.38818 0.0703125C6.11318 0.126563 5.23662 0.332812 4.47725 0.628125C3.68506 0.9375 3.01475 1.34531 2.34912 2.01562C1.67881 2.68125 1.271 3.35156 0.961621 4.13906C0.666309 4.90313 0.460059 5.775 0.403809 7.05C0.347559 8.33437 0.333496 8.74219 0.333496 12C0.333496 15.2578 0.347559 15.6656 0.403809 16.9453C0.460059 18.2203 0.666309 19.0969 0.961621 19.8563C1.271 20.6484 1.67881 21.3188 2.34912 21.9844C3.01475 22.65 3.68506 23.0625 4.47256 23.3672C5.23662 23.6625 6.1085 23.8687 7.3835 23.925C8.66318 23.9812 9.071 23.9953 12.3288 23.9953C15.5866 23.9953 15.9944 23.9812 17.2741 23.925C18.5491 23.8687 19.4257 23.6625 20.1851 23.3672C20.9726 23.0625 21.6429 22.65 22.3085 21.9844C22.9741 21.3188 23.3866 20.6484 23.6913 19.8609C23.9866 19.0969 24.1929 18.225 24.2491 16.95C24.3054 15.6703 24.3194 15.2625 24.3194 12.0047C24.3194 8.74688 24.3054 8.33906 24.2491 7.05938C24.1929 5.78438 23.9866 4.90781 23.6913 4.14844C23.396 3.35156 22.9882 2.68125 22.3179 2.01562C21.6522 1.35 20.9819 0.9375 20.1944 0.632812C19.4304 0.3375 18.5585 0.13125 17.2835 0.075C15.9991 0.0140625 15.5913 0 12.3335 0Z"
        fill="currentColor"
      />
      <path
        d="M12.3335 5.83594C8.93037 5.83594 6.16943 8.59688 6.16943 12C6.16943 15.4031 8.93037 18.1641 12.3335 18.1641C15.7366 18.1641 18.4976 15.4031 18.4976 12C18.4976 8.59688 15.7366 5.83594 12.3335 5.83594ZM12.3335 15.9984C10.1257 15.9984 8.33506 14.2078 8.33506 12C8.33506 9.79219 10.1257 8.00156 12.3335 8.00156C14.5413 8.00156 16.3319 9.79219 16.3319 12C16.3319 14.2078 14.5413 15.9984 12.3335 15.9984Z"
        fill="currentColor"
      />
      <path
        d="M20.1804 5.5919C20.1804 6.38877 19.5335 7.03096 18.7413 7.03096C17.9444 7.03096 17.3022 6.38408 17.3022 5.5919C17.3022 4.79502 17.9491 4.15283 18.7413 4.15283C19.5335 4.15283 20.1804 4.79971 20.1804 5.5919Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LinkedinIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const TwitterIcon = (props) => {
  return (
    <svg
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.21666 19.7502C17.271 19.7502 22.2248 12.2469 22.2248 5.74211C22.2248 5.53117 22.2201 5.31554 22.2107 5.1046C23.1744 4.40771 24.006 3.5445 24.6665 2.55554C23.769 2.95484 22.8161 3.21563 21.8404 3.32898C22.8678 2.71315 23.637 1.74572 24.0056 0.606011C23.0391 1.1788 21.9821 1.58286 20.8799 1.80085C20.1373 1.01181 19.1555 0.48936 18.0862 0.314295C17.0169 0.13923 15.9197 0.321295 14.9642 0.832341C14.0088 1.34339 13.2483 2.15495 12.8004 3.14156C12.3524 4.12816 12.2419 5.23486 12.486 6.29054C10.529 6.19233 8.61444 5.68395 6.86649 4.79834C5.11853 3.91274 3.5762 2.66968 2.33947 1.14976C1.7109 2.23349 1.51856 3.51589 1.80153 4.73634C2.08451 5.95678 2.82157 7.02369 3.86291 7.72023C3.08113 7.69541 2.31648 7.48492 1.63213 7.10617V7.1671C1.63143 8.30439 2.0246 9.40683 2.74481 10.287C3.46503 11.1672 4.46783 11.7708 5.58275 11.9952C4.85856 12.1934 4.09849 12.2222 3.36135 12.0796C3.67596 13.0577 4.28808 13.9131 5.11227 14.5266C5.93647 15.14 6.93162 15.4808 7.95885 15.5015C6.21493 16.8714 4.06068 17.6144 1.84307 17.6109C1.44979 17.6103 1.0569 17.5861 0.666504 17.5387C2.91936 18.984 5.54004 19.7516 8.21666 19.7502Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DiagServiceIcon = (props) => {
  return (
    <svg
      width='44'
      height='49'
      viewBox='0 0 44 49'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.252823 27.0168C0.468002 26.7485 0.789085 26.5918 1.12594 26.5918H5.40814C6.46489 23.7426 7.8416 20.9509 9.40644 19.8971C14.8198 16.2566 29.1783 16.2566 34.5916 19.8971C36.1575 20.952 37.5286 23.7472 38.591 26.5918H42.8732C43.2134 26.5918 43.5334 26.7485 43.7463 27.0168C43.9604 27.284 44.046 27.6375 43.9761 27.9773L43.3419 31.1191C43.2337 31.6546 42.7718 32.037 42.2389 32.037H40.9704C42.195 33.4812 42.7887 35.2997 42.7966 37.1193C42.8045 39.3674 41.9697 41.399 40.4431 42.8363C40.4262 42.8513 40.4093 42.8616 40.3936 42.8766V47.2726C40.3936 48.225 39.6365 49.0001 38.7037 49.0001H34.7538C33.821 49.0001 33.0639 48.225 33.0639 47.2726V45.5059H10.9364V47.2726C10.9364 48.225 10.1793 49.0001 9.24647 49.0001H5.29661C4.36604 49.0001 3.60671 48.225 3.60671 47.2726V42.963C1.98666 41.4462 1.21269 39.3594 1.20255 37.276C1.19579 35.3941 1.81654 33.5088 3.11326 32.0347H1.76022C1.22508 32.0347 0.763172 31.6523 0.657272 31.1156L0.0218735 27.975C-0.0434723 27.6375 0.0387688 27.2863 0.252823 27.0168ZM32.7361 22.7821C28.4212 19.8787 15.5791 19.8787 11.2665 22.7821C10.4283 23.3441 9.35012 25.6163 8.36209 28.3988H35.6382C34.6524 25.6175 33.5743 23.3464 32.7361 22.7821ZM37.79 37.5524C37.79 35.6751 36.3006 34.1549 34.4654 34.1549C32.6279 34.1549 31.1408 35.6751 31.1408 37.5524C31.1408 39.4296 32.6279 40.951 34.4654 40.951C36.3006 40.951 37.79 39.4296 37.79 37.5524ZM9.49094 40.951C11.3262 40.951 12.8155 39.4296 12.8155 37.5524C12.8155 35.6751 11.3262 34.1549 9.49094 34.1549C7.65345 34.1549 6.16634 35.6751 6.16634 37.5524C6.16634 39.4296 7.65571 40.951 9.49094 40.951Z'
        fill='currentColor'
      />
      <mask
        id='mask0_482_1528'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='6'
        y='0'
        width='25'
        height='28'
      >
        <path
          d='M26.5548 14.4818C26.5055 15.0402 26.198 15.5656 25.6835 15.8602C25.2563 16.1048 24.8161 16.2847 24.3664 16.4064C24.6198 17.2806 25.0853 18.5457 25.914 19.9007C26.7012 21.1883 26.7105 22.7423 25.9388 24.1645C24.8019 26.2606 22.2915 27.6691 19.691 27.6691C17.9051 27.6691 16.3173 26.8283 15.2205 25.3014C13.653 23.1184 13.3056 19.8968 14.2919 16.6853C15.2062 13.7082 13.9834 12.12 13.1744 11.4373C12.5149 12.0871 11.6203 12.4878 10.6316 12.4878C8.60565 12.4878 6.96218 10.8082 6.96218 8.73616C6.96218 6.66411 8.60565 4.98501 10.6316 4.98501C12.6585 4.98501 14.301 6.66459 14.301 8.73616C14.301 9.0279 14.2655 9.31025 14.204 9.58283C15.7317 10.7252 17.4954 13.2966 16.2611 17.3169C15.4828 19.852 15.7216 22.4327 16.8852 24.0525C17.3785 24.74 18.2664 25.5593 19.6916 25.5593C21.5355 25.5593 23.3624 24.5648 24.134 23.1416C24.4186 22.6166 24.6543 21.8214 24.1635 21.0185C23.0674 19.2249 22.5188 17.5512 22.2587 16.5282C21.6495 16.4344 21.0547 16.2335 20.4825 15.9212C19.9725 15.6428 19.6596 15.1389 19.5907 14.5943C17.1663 12.3538 16.0469 8.31686 15.9825 8.0806C15.8518 7.59595 16.0752 7.0984 16.4917 6.87154C16.1569 3.84091 17.2541 2.31345 17.9162 1.69128C17.8657 1.40011 17.9797 1.08865 18.2299 0.921722L19.4465 0.108913C19.7642 -0.103252 20.1637 0.00382639 20.3379 0.349531L20.9176 1.49477C21.0922 1.84057 20.9383 2.20932 20.5735 2.31933L19.1981 2.7338C18.8494 2.83889 18.4316 2.66855 18.2341 2.35613C17.686 2.94644 16.8967 4.26069 17.1686 6.76778C17.5424 6.84052 17.8628 7.11889 17.9713 7.51913C18.3018 8.7317 19.2563 11.2363 20.6735 12.7382C21.1246 12.56 21.6432 12.5688 22.1032 12.8192C22.4028 12.9828 22.6957 13.0652 22.9964 13.0716H23.0584C23.3753 13.0647 23.6847 12.9734 24.0015 12.7922C24.4502 12.5349 24.9612 12.5123 25.4118 12.6748C26.7973 11.1668 27.7315 8.7152 28.0565 7.51932C28.1653 7.12012 28.4869 6.84109 28.8594 6.76844C29.1318 4.26135 28.3428 2.9471 27.7939 2.3568C27.5963 2.66912 27.179 2.83955 26.8302 2.73437L25.4548 2.3199C25.0906 2.20989 24.9357 1.84056 25.1108 1.49533L25.69 0.350005C25.8646 0.00420578 26.2641 -0.102778 26.5814 0.109387L27.7992 0.922765C28.0492 1.08969 28.1629 1.40106 28.1127 1.69232C28.7737 2.31459 29.8719 3.84138 29.5369 6.87249C29.9537 7.09945 30.1763 7.5969 30.0462 8.08212C29.9829 8.31344 28.8972 12.2217 26.5548 14.4818ZM10.6316 7.27083C9.8409 7.27083 9.1986 7.92648 9.1986 8.73635C9.1986 9.54565 9.8409 10.2018 10.6316 10.2018C11.4233 10.2018 12.0652 9.54565 12.0652 8.73635C12.0652 7.92639 11.4238 7.27083 10.6316 7.27083Z'
          fill='currentColor'
        />
      </mask>
      <g mask='url(#mask0_482_1528)'>
        <path
          d='M51.5149 -2.65552H18.486L15.0996 6.21235L18.486 19.5379H51.5149V-2.65552Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

export const EngineServiceIcon = (props) => {
  return (
    <svg
      width='42'
      height='42'
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M32.9766 7.13672C31.6023 7.13672 30.4234 6.2872 29.9356 5.08594H27.0703V2.625H29.9356C30.4234 1.42373 31.6023 0.574219 32.9766 0.574219C34.7858 0.574219 36.2578 2.04619 36.2578 3.85547C36.2578 5.66475 34.7858 7.13672 32.9766 7.13672Z'
        fill='currentColor'
      />
      <path
        d='M38.7188 14.1094C38.1794 14.1094 37.6706 13.9778 37.2212 13.7462L34.1745 16.2852C33.9533 16.4694 33.6746 16.5703 33.3867 16.5703H27.0703V14.1094H32.9412L35.6126 11.8832C35.4997 11.5519 35.4375 11.1973 35.4375 10.8281C35.4375 9.01884 36.9095 7.54688 38.7188 7.54688C40.528 7.54688 42 9.01884 42 10.8281C42 12.6374 40.528 14.1094 38.7188 14.1094Z'
        fill='currentColor'
      />
      <path
        d='M38.7188 24.3633C37.3445 24.3633 36.1656 23.5138 35.6778 22.3125H27.0703V19.8516H35.6778C36.1656 18.6503 37.3445 17.8008 38.7188 17.8008C40.528 17.8008 42 19.2727 42 21.082C42 22.8913 40.528 24.3633 38.7188 24.3633Z'
        fill='currentColor'
      />
      <path
        d='M34.1745 25.879L37.2212 28.4179C37.6706 28.1863 38.1794 28.0547 38.7188 28.0547C40.528 28.0547 42 29.5267 42 31.3359C42 33.1452 40.528 34.6172 38.7188 34.6172C36.9095 34.6172 35.4375 33.1452 35.4375 31.3359C35.4375 30.9668 35.4997 30.6122 35.6126 30.2809L32.9412 28.0547H27.0703V25.5938H33.3867C33.6746 25.5938 33.9533 25.6946 34.1745 25.879Z'
        fill='currentColor'
      />
      <path
        d='M32.9766 35.0273C34.7858 35.0273 36.2578 36.4993 36.2578 38.3086C36.2578 40.1179 34.7858 41.5898 32.9766 41.5898C31.6023 41.5898 30.4234 40.7403 29.9356 39.5391H27.0703V37.0781H29.9356C30.4234 35.8769 31.6023 35.0273 32.9766 35.0273Z'
        fill='currentColor'
      />
      <path
        d='M12.3047 21.082C12.3047 16.3327 16.1686 12.4688 20.918 12.4688C22.2383 12.4688 23.4899 12.7678 24.6094 13.301V28.8631C23.4899 29.3963 22.2383 29.6953 20.918 29.6953C16.1686 29.6953 12.3047 25.8314 12.3047 21.082Z'
        fill='currentColor'
      />
      <path
        d='M23.3789 42H18.457C17.7775 42 17.2266 41.4491 17.2266 40.7695V39.1679C14.9176 38.6975 12.708 37.7821 10.7399 36.4806L9.60701 37.6134C9.12647 38.0939 8.34742 38.0939 7.86688 37.6134L4.38662 34.1331C3.90608 33.6527 3.90608 32.8735 4.38662 32.393L5.51939 31.2601C4.21788 29.292 3.3025 27.0824 2.83213 24.7734H1.23047C0.550922 24.7734 0 24.2225 0 23.543V18.6211C0 17.9415 0.550922 17.3906 1.23047 17.3906H2.83213C3.3025 15.0817 4.21788 12.8721 5.51939 10.9038L4.38654 9.77099C4.15579 9.54023 4.02618 9.22728 4.02618 8.90096C4.02618 8.57464 4.15579 8.26178 4.38654 8.03102L7.86688 4.55069C8.34742 4.07014 9.12647 4.07014 9.60701 4.55069L10.7399 5.68345C12.708 4.38195 14.9176 3.46664 17.2266 2.99619V1.39453C17.2266 0.714985 17.7775 0.164062 18.457 0.164062H23.3789C24.0585 0.164062 24.6094 0.714985 24.6094 1.39453V10.6413C23.4542 10.2316 22.2118 10.0078 20.918 10.0078C14.8116 10.0078 9.84375 14.9757 9.84375 21.082C9.84375 27.1884 14.8116 32.1562 20.918 32.1562C22.2118 32.1562 23.4542 31.9325 24.6094 31.5228V40.7695C24.6094 41.4491 24.0585 42 23.3789 42Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const WheelServiceIcon = (props) => {
  return (
    <svg
      width='46'
      height='46'
      viewBox='0 0 46 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22.9999 7.66675C14.5452 7.66675 7.6665 14.5455 7.6665 23.0001C7.6665 31.4548 14.5452 38.3335 22.9999 38.3335C31.4545 38.3335 38.3332 31.4548 38.3332 23.0001C38.3332 14.5455 31.4545 7.66675 22.9999 7.66675ZM30.8444 13.3943C31.0166 13.2025 31.2599 13.0892 31.5182 13.0789C31.7409 13.0537 32.0274 13.1622 32.2145 13.34C34.2023 15.2221 35.5537 17.6179 36.1189 20.2683C36.2088 20.6913 36.0047 21.1218 35.621 21.3202C34.6832 21.805 33.5696 22.0399 32.5027 22.0399C31.112 22.0399 29.7943 21.6411 29.0306 20.8775C27.406 19.2538 28.0835 16.4565 30.8444 13.3943ZM15.1554 32.7556C14.9832 32.9474 14.7399 33.0616 14.4816 33.072C14.4704 33.0729 14.4573 33.0729 14.4441 33.0729C14.199 33.0729 13.9631 32.9792 13.7853 32.8108C11.7975 30.9287 10.4461 28.5329 9.88088 25.8816C9.79104 25.4586 9.99507 25.0281 10.3788 24.8297C12.5388 23.7151 15.6197 23.9228 16.9692 25.2723C18.592 26.8962 17.9144 29.6935 15.1554 32.7556ZM16.9691 20.8776C16.2054 21.6412 14.8877 22.04 13.497 22.04C12.4301 22.04 11.3183 21.805 10.3787 21.3203C9.99498 21.1219 9.79095 20.6914 9.88079 20.2684C10.4461 17.618 11.7974 15.2222 13.7852 13.3401C13.9724 13.1623 14.2476 13.0519 14.4815 13.079C14.7398 13.0894 14.9831 13.2026 15.1553 13.3944C17.9162 16.4565 18.5938 19.2538 16.9691 20.8776ZM27.084 35.7795C25.7569 36.2025 24.383 36.4168 22.9999 36.4168C21.6167 36.4168 20.2427 36.2026 18.9158 35.7795C18.4946 35.6447 18.2195 35.2404 18.2494 34.7997C18.489 31.3509 20.531 28.7501 22.9999 28.7501C25.4687 28.7501 27.5107 31.3509 27.7504 34.7996C27.7803 35.2404 27.5052 35.6447 27.084 35.7795ZM19.1665 23.0001C19.1665 20.886 20.8867 19.1667 22.9999 19.1667C25.1131 19.1667 26.8332 20.8859 26.8332 23.0001C26.8332 25.1143 25.1131 26.8335 22.9999 26.8335C20.8867 26.8335 19.1665 25.1142 19.1665 23.0001ZM27.7504 11.2764C27.5107 14.7242 25.4687 17.325 22.9999 17.325C20.531 17.325 18.489 14.7242 18.2494 11.2764C18.2195 10.8356 18.4927 10.4313 18.9139 10.2975C21.568 9.44952 24.4318 9.44952 27.0859 10.2975C27.5071 10.4313 27.7803 10.8356 27.7504 11.2764ZM36.1189 25.7291C35.5536 28.3804 34.2023 30.7763 32.2145 32.6583C32.0367 32.8268 31.8009 32.9204 31.5557 32.9204C31.5426 32.9204 31.5295 32.9204 31.5182 32.9195C31.2599 32.9092 31.0166 32.796 30.8444 32.6041C28.0836 29.542 27.406 26.7437 29.0306 25.12C30.3802 23.7695 33.4592 23.5645 35.621 24.6773C36.0047 24.8756 36.2088 25.3061 36.1189 25.7291Z'
        fill='currentColor'
      />
      <path
        d='M23 0C10.317 0 0 10.318 0 23C0 35.682 10.317 46 23 46C35.683 46 46 35.682 46 23C46 10.318 35.683 0 23 0ZM23 40.25C13.4878 40.25 5.75 32.5113 5.75 23C5.75 13.4887 13.4878 5.75 23 5.75C32.5122 5.75 40.25 13.4887 40.25 23C40.25 32.5113 32.5122 40.25 23 40.25Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const OilServiceIcon = (props) => {
  return (
    <svg
      width='34'
      height='46'
      viewBox='0 0 34 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M33.1719 18.1934C33.1719 17.8501 33.0409 17.5197 32.8056 17.2697L22.0243 5.8146C21.7696 5.54408 21.4146 5.39062 21.043 5.39062H7.56641C7.18152 5.39062 6.81495 5.55522 6.55917 5.8429L1.16854 11.9074C0.949324 12.1541 0.828125 12.4726 0.828125 12.8027V36.5664C0.828125 37.6009 1.21868 38.5459 1.86007 39.2617C1.21868 39.9775 0.828125 40.9226 0.828125 41.957C0.828125 44.1863 2.6418 46 4.87109 46H29.1289C31.3582 46 33.1719 44.1863 33.1719 41.957C33.1719 40.9226 32.7813 39.9775 32.1399 39.2617C32.7814 38.5459 33.1719 37.6009 33.1719 36.5664V18.1934ZM17 37.9137C14.7707 37.9137 12.957 36.1 12.957 33.8707C12.957 33.3157 13.1156 32.3044 14.4866 29.941C15.1791 28.7471 15.8624 27.7558 15.8911 27.7142C16.1428 27.35 16.5573 27.1325 17 27.1325C17.4428 27.1325 17.8572 27.3499 18.1089 27.7142C18.1376 27.7558 18.8209 28.7471 19.5134 29.941C20.8844 32.3045 21.043 33.3157 21.043 33.8707C21.043 36.1 19.2293 37.9137 17 37.9137ZM26.9347 22.0143C26.4135 22.5052 25.7502 22.7474 25.0869 22.7474C24.3697 22.7474 23.655 22.4631 23.1246 21.8998L16.9351 15.3234C15.9139 14.239 15.9665 12.5333 17.0496 11.5134C18.1354 10.4934 19.8423 10.5448 20.8596 11.6278L27.0491 18.2042C28.0704 19.2887 28.0177 20.9943 26.9347 22.0143Z'
        fill='currentColor'
      />
      <path
        d='M15.6523 33.8724C15.6523 34.614 16.2569 35.2186 17 35.2186C17.7427 35.2186 18.347 34.6145 18.3477 33.872C18.3362 33.4585 17.776 32.2846 17.0003 30.978C16.2239 32.286 15.6633 33.4604 15.6523 33.8724Z'
        fill='currentColor'
      />
      <path
        d='M15.6523 0H7.56641C6.82214 0 6.21875 0.603391 6.21875 1.34766V2.69531H17V1.34766C17 0.603391 16.3966 0 15.6523 0Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const BodyServiceIcon = (props) => {
  return (
    <svg
      width='55'
      height='39'
      viewBox='0 0 55 39'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M53.8345 11.8573C53.5697 11.5343 53.1746 11.3457 52.7601 11.3457H47.4905C46.19 7.91585 44.4959 4.55528 42.5702 3.28675C35.9087 -1.09558 18.2394 -1.09558 11.5778 3.28675C9.65078 4.55666 7.96357 7.92139 6.65622 11.3457H1.38661C0.967927 11.3457 0.574197 11.5343 0.312172 11.8573C0.0487611 12.1789 -0.0566033 12.6046 0.0293518 13.0135L0.80988 16.7956C0.942972 17.4402 1.51139 17.9005 2.16714 17.9005H3.7282C2.22121 19.639 1.49059 21.8281 1.48089 24.0186C1.47118 26.7248 2.49848 29.1703 4.37702 30.9005C4.39782 30.9186 4.41861 30.931 4.43802 30.9491V36.2408C4.43802 37.3874 5.36966 38.3204 6.51758 38.3204H11.3782C12.5261 38.3204 13.4578 37.3874 13.4578 36.2408V34.1141H40.6875V36.2408C40.6875 37.3874 41.6192 38.3204 42.7671 38.3204H47.6277C48.7729 38.3204 49.7073 37.3874 49.7073 36.2408V31.053C51.7009 29.2272 52.6533 26.7151 52.6658 24.2071C52.6741 21.9418 51.9102 19.6723 50.3145 17.8977H51.9795C52.6381 17.8977 53.2065 17.4375 53.3368 16.7914L54.1187 13.0108C54.1991 12.6046 54.0979 12.1817 53.8345 11.8573ZM13.8612 6.75961C19.171 3.26456 34.9743 3.26456 40.2813 6.75961C41.3128 7.43616 42.6395 10.1715 43.8554 13.521H10.2899C11.503 10.1729 12.8297 7.43893 13.8612 6.75961ZM7.64193 24.5399C7.64193 22.2801 9.47472 20.4501 11.7331 20.4501C13.9943 20.4501 15.8243 22.2801 15.8243 24.5399C15.8243 26.7996 13.9943 28.631 11.7331 28.631C9.47472 28.631 7.64193 26.7996 7.64193 24.5399ZM42.4663 28.631C40.2078 28.631 38.3751 26.7996 38.3751 24.5399C38.3751 22.2801 40.2078 20.4501 42.4663 20.4501C44.7274 20.4501 46.5574 22.2801 46.5574 24.5399C46.5574 26.7996 44.7247 28.631 42.4663 28.631Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const BatteryServiceIcon = (props) => {
  return (
    <svg
      width='44'
      height='40'
      viewBox='0 0 44 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M38.5 2.58322C38.5 1.57077 37.6792 0.75 36.6668 0.75H29.3332C28.3208 0.75 27.5 1.57077 27.5 2.58322V6.25H38.5V2.58322Z'
        fill='currentColor'
      />
      <path
        d='M16.5 2.58322C16.5 1.57077 15.6792 0.75 14.6668 0.75H7.33322C6.32077 0.75 5.5 1.57077 5.5 2.58322V6.25H16.5V2.58322Z'
        fill='currentColor'
      />
      <path
        d='M0 8.08325V35.5833C0 36.5957 0.82077 37.4168 1.83322 37.4168H5.5V39.25H9.16678V37.4168H34.8332V39.25H38.5V37.4168H42.1668C43.1792 37.4168 44 36.5957 44 35.5833V8.08325H0ZM14.6668 33.75L18.3332 22.75H12.8332L25.6668 11.75L22 22.75H27.5L14.6668 33.75Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const IncurServiceIcon = (props) => {
  return (
    <svg
      width='38'
      height='46'
      viewBox='0 0 38 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22.1472 8.08594H15.8528C13.8933 10.3195 11.4334 12.04 8.66797 13.1154V21.3604C8.66797 28.3331 12.7046 34.5863 19 37.4487C25.2954 34.5863 29.332 28.3331 29.332 21.3604V13.1163C26.5657 12.0409 24.1067 10.3204 22.1472 8.08594ZM26.2423 19.6785L17.8563 28.0637C17.593 28.3269 17.248 28.4589 16.9039 28.4589C16.5589 28.4589 16.2139 28.3268 15.9507 28.0637L11.7577 23.8716C11.2321 23.3451 11.2321 22.4916 11.7577 21.9651C12.2842 21.4395 13.1377 21.4395 13.6642 21.9651L16.9039 25.2049L24.3367 17.773C24.8623 17.2465 25.7158 17.2465 26.2423 17.773C26.7679 18.2994 26.7679 19.152 26.2423 19.6785ZM36.0622 6.28906C32.1774 6.28906 28.6393 4.15438 26.8263 0.71875C26.5935 0.276719 26.1345 0 25.6349 0H12.3649C11.8654 0 11.4063 0.276719 11.1727 0.71875C9.36066 4.15438 5.82262 6.28906 1.92969 6.28906C1.18578 6.28906 0.582031 6.89281 0.582031 7.63672V21.3604C0.582031 26.8777 2.30613 32.1461 5.56746 36.5961C8.82879 41.046 13.3327 44.2758 18.5939 45.9371C18.726 45.9793 18.8634 46 19 46C19.1366 46 19.274 45.9793 19.4061 45.9371C24.6674 44.2759 29.1712 41.0461 32.4325 36.5961C35.6939 32.146 37.418 26.8777 37.418 21.3604V7.63672C37.418 6.89281 36.8061 6.28906 36.0622 6.28906ZM32.0273 21.2993C32.0273 29.5523 27.1174 36.933 19.5184 40.1018C19.3522 40.171 19.1761 40.2051 19 40.2051C18.8239 40.2051 18.6469 40.1709 18.4816 40.1018C10.8826 36.933 5.97266 29.5522 5.97266 21.2993V12.1064C5.97266 11.5243 6.34641 11.0077 6.89984 10.8262C9.75957 9.88551 12.2788 8.15602 14.1844 5.82457C14.4404 5.51102 14.8241 5.32953 15.2284 5.32953H22.7716C23.1849 5.32953 23.6719 5.64937 23.8155 5.82457C25.7211 8.15602 28.2403 9.88551 31.1001 10.8262C31.4946 10.9555 31.7964 11.2547 31.9383 11.6276C31.9402 11.6312 31.941 11.6357 31.9428 11.6393C31.977 11.7318 32.0012 11.8288 32.0148 11.9286C32.0157 11.9384 32.0174 11.9492 32.0184 11.9591C32.0238 12.0076 32.0273 12.0561 32.0273 12.1064V21.2993Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const CustomServiceIcon = (props) => {
  return (
    <svg
      width='46'
      height='46'
      viewBox='0 0 46 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M45.8549 20.4463C45.7822 19.7998 45.0281 19.3134 44.376 19.3134C42.2685 19.3134 40.3981 18.0764 39.6137 16.1619C38.813 14.2014 39.3296 11.9154 40.8998 10.475C41.3944 10.0228 41.4547 9.26565 41.0401 8.74006C39.9611 7.37021 38.7352 6.13264 37.3964 5.06019C36.8726 4.64004 36.1029 4.69853 35.6484 5.20163C34.2775 6.71989 31.8149 7.28407 29.9119 6.49013C27.9323 5.65719 26.6828 3.65055 26.8056 1.4967C26.846 0.819725 26.351 0.231479 25.6764 0.1529C23.9582 -0.0460337 22.2249 -0.0518028 20.5018 0.139372C19.8357 0.212978 19.3412 0.787299 19.3633 1.45572C19.4379 3.58848 18.1743 5.55971 16.2138 6.36281C14.3336 7.13089 11.8882 6.57089 10.5201 5.06596C10.0679 4.57022 9.31176 4.50935 8.78439 4.92054C7.40618 6.00214 6.1527 7.2405 5.06374 8.59922C4.63941 9.12739 4.70208 9.89288 5.2008 10.3467C6.80202 11.7967 7.31825 14.1023 6.48691 16.0857C5.69316 17.9765 3.72989 19.1946 1.48254 19.1946C0.753246 19.1711 0.234228 19.6611 0.15366 20.3244C-0.0484564 22.0517 -0.0506446 23.8127 0.143912 25.5541C0.216523 26.2034 0.992961 26.6857 1.65223 26.6857C3.65549 26.6347 5.57758 27.8741 6.38505 29.837C7.18855 31.7975 6.67132 34.0824 5.09855 35.5249C4.60659 35.977 4.54373 36.7324 4.9591 37.2574C6.02717 38.6187 7.2542 39.857 8.597 40.9386C9.12417 41.3632 9.89086 41.3037 10.3478 40.8C11.724 39.2781 14.1862 38.715 16.0815 39.5105C18.0668 40.3413 19.3157 42.3477 19.1938 44.5021C19.1538 45.1791 19.6499 45.7692 20.3221 45.8459C21.2014 45.9488 22.0853 45.9997 22.9719 45.9997C23.8134 45.9997 24.6551 45.9538 25.4968 45.8601C26.1636 45.7865 26.6574 45.2115 26.6349 44.5429C26.5579 42.4112 27.8243 40.4397 29.7824 39.6382C31.6751 38.8652 34.1096 39.4309 35.4785 40.9337C35.9331 41.4284 36.6846 41.4885 37.2142 41.0789C38.59 40.0001 39.8411 38.7623 40.9348 37.4C41.3596 36.8728 41.2993 36.1064 40.7978 35.6518C39.197 34.2028 38.6779 31.8961 39.5093 29.9147C40.2907 28.0493 42.181 26.7969 44.2141 26.7969L44.4985 26.8044C45.1586 26.8579 45.7651 26.3497 45.8449 25.6763C46.048 23.9473 46.0502 22.1884 45.8549 20.4463ZM22.9996 36.2595C15.6762 36.2595 9.73987 30.3232 9.73987 23C9.73987 15.6769 15.6764 9.7405 22.9996 9.7405C30.3227 9.7405 36.2593 15.6769 36.2593 23C36.2593 25.4857 35.574 27.8106 34.3838 29.7988L28.5777 23.9925C28.998 23.0014 29.22 21.927 29.2198 20.8181C29.2198 18.6468 28.3742 16.6055 26.8386 15.0703C25.3034 13.5352 23.2622 12.6897 21.0912 12.6897C20.3667 12.6897 19.6456 12.786 18.9479 12.976C18.6423 13.0593 18.3925 13.3112 18.3111 13.6173C18.228 13.9304 18.3217 14.2513 18.5664 14.4962C18.5664 14.4962 21.4328 17.3847 22.3918 18.3436C22.4923 18.444 22.4921 18.6838 22.478 18.7701L22.469 18.8332C22.3723 19.8875 22.1859 21.1531 22.0322 21.6395C22.0115 21.66 21.992 21.6773 21.9709 21.6984C21.9488 21.7205 21.9285 21.7418 21.9072 21.7636C21.4145 21.9218 20.1294 22.1104 19.0583 22.2063L19.0585 22.2005L19.0104 22.2126C19.0018 22.2136 18.9859 22.2148 18.9648 22.2148C18.849 22.2148 18.6787 22.1824 18.524 22.0278C17.5257 21.0296 14.7717 18.2952 14.7717 18.2952C14.5246 18.049 14.2712 17.9972 14.1023 17.9972C13.7086 17.9972 13.3561 18.2817 13.2451 18.6897C12.4869 21.4953 13.2906 24.5131 15.343 26.5657C16.8786 28.1011 18.9201 28.9465 21.0914 28.9465C22.2003 28.9465 23.2747 28.7247 24.2656 28.3044L30.1347 34.1735C28.0742 35.492 25.6273 36.2595 22.9996 36.2595Z'
        fill='currentColor'
      />
    </svg>
  );
};
