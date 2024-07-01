/**
 * 이전 사용하던 스타일 값 입니다. 해당 스타일은 약식으로 제작된 스타일이기 때문에 바뀔 수 있습니다.
 */

export const styles = {
  // Global Styles
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },

  // Root Container
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gap: '1vw',
    width: '100vw',
    minHeight: '100vh',
    height: 'auto',
    margin: '2vw auto',
    gridAutoRows: 'minmax(150px, auto)',

    children: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      padding: '1vw',
    },

    highlight: {
      backgroundColor: '#ff0000',
      border: '1px solid #800000'
    }
  },
  
  mediaQueries: {
    'max-width: 600px': {
      root: {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridAutoRows: '120px',

        children: {
          minHeight: '120px',
        },
      },
    },

    'min-width: 601px and max-width: 900px': {
      root: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(150px, auto)',

        children: {
          minHeight: '150px',
        },
      },
    },
  },
};