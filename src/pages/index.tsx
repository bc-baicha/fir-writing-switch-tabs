import React, { Fragment, useEffect, useState } from 'react';
import styles from './index.less';
interface Instate {
};

const List: React.SFC<Instate> = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <div
        className={`${styles.wrap} ${isOpen ? styles.buttonRight : styles.buttonLeft}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className={`${styles.childWrap} ${isOpen ? styles.down : styles.open}`}></div>
      </div>
    </Fragment>
  )
}
export default List;