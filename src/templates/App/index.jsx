import * as S from './styles';
import PropTypes from 'prop-types';

export const App = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

App.propTypes = {
  children: PropTypes.isRequired,
};
