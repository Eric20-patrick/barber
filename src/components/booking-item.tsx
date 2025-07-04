import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const BookingItem = () => {
  return (
    <>
      <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
        Agendamento
      </h2>
      <Card className="rounded-xl">
        <CardContent className="flex justify-between p-0 ">
          {/* esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5 ">
            <Badge className=" w-fit"> Confirmado</Badge>
            <h3 className="font-semibold"> Corte De cabelo</h3>
            <div className="flex items-center ">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-sm pl-2"> barbearia</p>
            </div>
          </div>
          {/*Direita */}
          <div className="flex flex-col items-center justify-center  border-l-2 border-solid px-5 rounded-xl">
            <p className="text-sm"> Maio</p>
            <p className="text-2xl"> 01</p>
            <p className="sm"> 00:34</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingItem;
