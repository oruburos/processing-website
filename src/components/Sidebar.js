import React, { Fragment, useContext, useState, memo } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import SidebarTreeList from './SidebarTreeList';
import { LayoutContext } from './Layout';
import FilterBar from './FilterBar';
import { useIntl } from 'react-intl';
import { useFilteredTree } from '../hooks';

import * as css from './Sidebar.module.css';

export const Sidebar = memo(({ children, title, show, setShow = () => {} }) => {
  const { headerScrolled } = useContext(LayoutContext);

  if (show === null) {
    return <div key="placeholder" className={css.root} />;
  }

  return (
    <div
      key="root"
      className={classnames(css.root, {
        [css.show]: show,
        [css.headerScrolled]: headerScrolled
      })}>
      <div
        className={css.toggleButton}
        onClick={() => setShow(!show)}
        onKeyDown={(e) => e.keyCode === 13 && setShow(!show)}
        role={'button'}
        tabIndex={'0'}>
        {title && <span className={css.toggleLabel}>{title}</span>}
        {show ? '×' : '+'}
      </div>
      {show && (
        <Fragment>
          {title && <h2 className={css.title}>{title}</h2>}
          {children}
        </Fragment>
      )}
    </div>
  );
});

export const SidebarTree = memo(({ tree, title, show, useSerif, setShow }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = useFilteredTree(tree, searchTerm);
  const intl = useIntl();
  return (
    <Sidebar title={title} show={show} setShow={setShow}>
      <FilterBar
        placeholder={intl.formatMessage({id:"Filter"})}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={(e) => setSearchTerm('')}
        searchTerm={searchTerm}
      />
      <div className={css.listWrapper}>
        <SidebarTreeList tree={filtered} useSerif={useSerif} />
      </div>
    </Sidebar>
  );
});

export const SidebarTableOfContents = memo(
  ({ items = [], title, show, useSerif, setShow }) => {
    const { currentHeading } = useContext(LayoutContext);
    return (
      <Sidebar title={title} show={show} setShow={setShow}>
        <div className={css.listWrapper}>
          <ul>
            {items.map((item, index) => {
              const isCurrent = currentHeading === item.url.replace('#', '');

              return (
                <li
                  key={`item-${index}`}
                  className={classnames(css.tocItem, {
                    [css.active]: isCurrent
                  })}>
                  <Link to={item.url}>
                    <h4>{item.title}</h4>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Sidebar>
    );
  }
);
