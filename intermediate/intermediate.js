function HotelConstructor(name, rooms, booked, availableNights, wantedNights) {
       
       this.name = name;
       this.rooms = rooms;
       this.booked = booked;
       this.availableNights = availableNights;
       this.wantedNights = wantedNights;

       this.checkAvailability = function() {
               return this.rooms - this.booked;
       };
       this.checkNights = function() {
               return Boolean(this.availableNights >= this.wantedNights);
       };
}

function createHotel() {
	var availableNights = Math.floor(Math.random()*10);
	var wantedNights = document.getElementById("stay").value;
	var hiltonHotel = new HotelConstructor('Hilton', '80', '42', availableNights, wantedNights );
	var mariottHotel = new HotelConstructor('Marriott', '78', '56',availableNights, wantedNights);
	var holidayInnHotel = new HotelConstructor('Holiday Inn', '48', '32',availableNights, wantedNights);
	var output = document.getElementById('output1');
	var info = document.getElementById('info');
	info.innerHTML = 'There ate at the moment '+availableNights+' night available to be booked.';
	if (hiltonHotel.checkNights()==true) {
		output.innerHTML = '<h2> You can proceed with ur booking. </h2><br>';
	} else{
		output.innerHTML = '<h2> There are no availability for yout booking, we have at the moment '+ availableNights+' nights available </h2><br>';
	}
return false
}