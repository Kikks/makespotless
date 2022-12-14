import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default Redirect;
