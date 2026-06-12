let totalSeats=50;
function bookSeat(seat){
    if(seat<=totalSeats){
        totalSeats-=seat;
        console.log("Booking Successful");
        console.log("Available Seats :",totalSeats);
    }
    else{
        console.log("Seats Not Available");
    }
}
bookSeat(5);
bookSeat(10);