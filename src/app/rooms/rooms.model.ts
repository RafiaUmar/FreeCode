export class RoomsLists{
    availableRooms: number = 10;
    bookedRooms: number = 5;
    totalRooms: number = 15;

}


export class room{
    roomNumber: number = 1;
    roomType: string = '';
    amentias: string = '';
    price: string = '2';
    photos: string = '';
    checkinTime!: Date; 
    checkoutTime!: Date ;
    
}