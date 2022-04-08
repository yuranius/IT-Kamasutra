import React from 'react';
import css from './Slide.module.scss';

const Slide = ({ children, color }) => {
  return (
    <div className={css.container}>
      <div className={css.content} style={{ background: color }} />
      <footer className={css.footer}>
        {children}
      </footer>
    </div>
  );
};

export default Slide;