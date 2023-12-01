import { Sidebar, SidebarLogo } from 'flowbite-react';
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
import { globalUseContext } from '../../ContextApi/GlobalContext';

export default function AuthorSidebar() {
  const { isAdmin } = useContext(AuthorAuthContext);
  const {showSidebar,setShowSidebar} = useContext(globalUseContext)

  return (
    <>
      <Sidebar  className={showSidebar ? "fixed left-0 rounded-none z-50 transition-all" :`fixed left-[-100%] lg:left-0 rounded-none transition-all !bg-black`}>
        <div className=''>
          <SidebarLogo className='w-full flex justify-end items-center'><button onClick={()=>setShowSidebar(!showSidebar)}><i className="fa-regular fa-circle-xmark opacity-70 block md:hidden"></i></button> </SidebarLogo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to={'/dashboard/home'}>
                <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
              </Link>
              <Sidebar.Collapse className='' icon={HiShoppingBag} label="Blog">
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
        </div>
      </Sidebar>
    </>
  );
}
