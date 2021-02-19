import * as React from 'react';

/**
 *
 * @param {Object} props
 */
function Logo(props) {
  return (
    <svg
      width={47}
      height={47}
      viewBox="0 0 47 47"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.38.025C10.22.025.24 8.192.24 18.78v8.016c0 11.796 9.074 19.51 23.14 19.51 13.157 0 23.139-8.167 23.139-18.754v-8.016c0-11.797-9.074-19.51-23.14-19.51zm0 3.025c11.342 0 18.904 5.596 19.963 14.217-3.63-5.294-10.284-8.621-18.3-8.621s-14.065 4.386-14.065 10.133c0 5.293 4.688 9.528 11.04 10.133h1.361c4.235 0 7.562-1.815 8.47-4.537.605.907.907 1.966.907 3.025 0 4.083-4.688 7.108-11.04 7.108-10.738 0-18.452-6.655-18.452-15.88C3.113 9.856 11.885 3.05 23.38 3.05zm.755 17.393c2.874.15 4.84 1.512 4.84 2.873 0 1.361-2.42 2.874-5.747 2.874h-.756c-3.025-.151-4.991-1.664-4.991-2.874 0-1.361 2.42-2.873 5.747-2.873h.907zm-.907 22.988c-11.343 0-18.905-5.596-19.964-14.368 3.63 5.294 10.285 8.621 18.3 8.621 8.016 0 14.066-4.386 14.066-10.133 0-5.142-4.386-9.226-10.436-9.982-.605-.151-1.21-.151-1.815-.151-4.234 0-7.562 1.815-8.47 4.537a5.453 5.453 0 01-.907-3.025c0-4.083 4.689-7.108 11.04-7.108 10.739 0 18.452 6.655 18.452 15.88 0 8.923-8.772 15.73-20.266 15.73z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Logo;
