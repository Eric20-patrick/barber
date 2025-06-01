import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { db } from './_lib/prisma';
import BarbershopItem from '@/components/barbershop-item';
import { quickSearchOptions } from './_constants/search';
import BookingItem from '@/components/booking-item';

const Home = async () => {
  // Chamar o Banco
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  });

  return (
    // Header
    <div>
      <Header />
      <div className="p-5">
        {/* texto */}
        <h2 className="text-xl font-bold"> Ola, Eric </h2>
        <p> Sabado, 31 de maio </p>
        {/* Busca*/}
        <div className="flex items-center gap-1 mt-6  ">
          <Input placeholder="Faça sua Busca" className="rounded-xl" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Busca Rapidas */}

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Imagem */}
        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            alt="Banner"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        {/* Agendamento*/}
        <BookingItem />
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Reacomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershops) => (
            <BarbershopItem key={barbershops.id} barbershop={barbershops} />
          ))}
        </div>
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershops) => (
            <BarbershopItem key={barbershops.id} barbershop={barbershops} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">Eric</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};
export default Home;
