import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import ConnectionError, {
  useDisconnectReason,
} from '../../components/ConnectionError';
import WalletConnection from '../../components/WalletConnection/WalletConnection';
import useToggle from '../../hooks/useToggle';

import FooterLogo from './FooterLogo.svg';
import MenuIcon from './Menu.svg';

const shouldHighlight = (section, location) => {
  if (section === 'Pools') {
    return (
      location.pathname === '/' ||
      location.pathname.startsWith('/create') ||
      location.pathname.startsWith('/pool') ||
      location.pathname.startsWith('/liquidity')
    );
  }

  if (section === 'Governance') {
    return location.pathname.startsWith('/governance');
  }

  if (section === 'Faucet') {
    return location.pathname.startsWith('/faucet');
  }

  return false;
};

const PageBase = ({ children }) => {
  const disconnectReason = useDisconnectReason();
  const location = useLocation();

  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  const highlightedLink =
    'text-cornflower-blue border-b border-cornflower-blue pb-2';

  return (
    <div className="flex h-screen flex-col">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center my-6 mx-4">
          <div className="w-full flex-grow md:w-max md:flex-grow-0 flex flex-row justify-between">
            <button type="button" onClick={toggleIsMenuOpen}>
              <img src={MenuIcon} alt="Menu" className="w-8 md:hidden" />
            </button>
            {/* <a href="/" className="flex-grow flex flex-row justify-center">
              <img src={logo} alt="Polynom logo" />
            </a> */}
          </div>
          <nav
            className={classNames(
              'flex flex-row flex-grow justify-start space-x-12 px-4 mt-4 md:mt-0 md:block lg:ml-0',
              { hidden: !isMenuOpen }
            )}
          >
            <Link
              className={
                shouldHighlight('Pools', location) ? highlightedLink : ''
              }
              to="/"
            >
              Соревнования
            </Link>
          </nav>
          <div className="mt-4 ml-8 md:mt-0 md:mr-0">
            <WalletConnection />
          </div>
        </div>
      </div>

      <div className="border border-black h-0 w-full" />

      <div className="flex-grow">
        {disconnectReason === '' ? (
          children
        ) : (
          <ConnectionError reason={disconnectReason} />
        )}
      </div>

      <div className="bg-black">
        <div className="flex justify-center items-center my-4">
          <img src={FooterLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBase;
