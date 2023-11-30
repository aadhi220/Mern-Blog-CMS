import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { AuthorAuthContext } from '../../ContextApi/AuthorContext';
import { useContext } from 'react';

export default function AuthorSidebar() {
  const { isAdmin } = useContext(AuthorAuthContext);

  return (
    <>
      <Sidebar className='fixed hidden lg:block rounded-none bg-black'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to={'/dashboard/home'}>
              <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
            </Link>
            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="Blog"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
              }}
            >
              <Link to={'/dashboard/addBlog'}>
                <Sidebar.Item>Add Blog</Sidebar.Item>
              </Link>
              <Link to={'/dashboard/manageBlog'}>
                <Sidebar.Item>Manage Blogs</Sidebar.Item>
              </Link>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>

            {isAdmin && (
              <Link to={'/dashboard/category'}>
                <Sidebar.Item icon={HiInbox}>Categories</Sidebar.Item>
              </Link>
            )}
            <Link to={'/dashboard/users'}>
              <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>
            </Link>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
