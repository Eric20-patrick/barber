import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <Card>
      <CardContent className="justify-between flex flex-row items-center p-5">
        <Image src="/logo.png" height={18} width={120} alt="Logo" />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
