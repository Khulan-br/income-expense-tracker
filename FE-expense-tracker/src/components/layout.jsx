import DashboardLogo from '@/components/icon/DashboardLogo';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Profile from '@/assets/Profile.png'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const styles = {
  ChildrenStyle: 'flex flex-col gap-6 w-[1200px] h-screen',
  ChildrenStyle2: 'flex flex-row gap-6 w-[1200px] h-screen',
};

const content = ['Dashboard', 'Records'];

export const Layout = ({children, ChildStyle}) => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    // if(!user) {
    //   router.push('/log-in')
    // }
  }, [])

  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] gap-6">
      <div className="bg-white flex justify-center w-full">
        <div className="flex justify-between items-center py-[16px] w-[1200px]">
          <div className="flex items items-center gap-6">
            <DashboardLogo />
            <div className='flex gap-2 items-center'>
              <Link href='/dashboard/main'>Dashboard</Link>
              <Link href='/dashboard/record'>Records</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button className="rounded-[20px] px-3 bg-[#0166FF]">
              + Record
            </Button>
            <Image src={Profile} width={40} height={40} quality={100} alt="Avatar" />
          </div>
        </div>
      </div>
      <div
        className={ChildStyle ? styles.ChildrenStyle2 : styles.ChildrenStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;