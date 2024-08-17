import { FC, ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main> {/* Add padding to account for the fixed navbar */}
    </div>
  );
};

export default Layout;
