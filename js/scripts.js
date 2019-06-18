$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var senior = $("#ticket-senior").val();
    var time = $("#ticket-time").val();
    // var release = $("#ticket-release").val();
    var newTicket = new Ticket(senior, time);
    var ticketPrice = "$15.00"
    console.log(newTicket);

  });

  $("#movie").change( function () {
      $(".movieposter").hide();
        $("#form").hide();
      if (this.value === "benji")
      $("#benji").show();
        $("#form").show();
      if (this.value === "grease")
      $("#grease").show();
        $("#form").show();
      if (this.value === "norbit")
      $("#norbit").show();
        $("#form").show();
      if (this.value === "teeth")
      $("#teeth").show();
      $("#form").show();
      if (this.value === "none")
      $("#form").hide();
  });
});

function newTicket(senior, time){
  if (newTicket === "0" && "Night")
   return ticketPrice
   console.log(ticketPrice);
}


function TicketBook() {
  this.tickets = [],
  this.ticketId = 0
}
function Ticket(senior, time) {
  this.senior = senior,
  this.time = time
};
