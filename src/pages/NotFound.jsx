import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex justify-center flex-col gap-10 items-center h-screen">
    <p className="text-5xl">Error: 404</p>
    <p className="text-5xl">PAGE NOT FOUND! </p>

    <Link to="/" className="btn btn-ghost normal-case text-5xl text-xl p-2">
      <FcHome className="inline text-7xl mr-4" />
      Go Home
    </Link>
  </div>
);

export default NotFound;
